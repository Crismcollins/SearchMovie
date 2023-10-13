import { Text, View } from 'react-native';
import Searcher from '../components/general/Searcher';
import MoviesList from '../components/general/moviesList';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { GenerateURLBySearch, GenerateURLBySearchAdvanced } from '../services/utils/config';
import { styles } from '../styles/screens/searchStyles';
import useFetch from '../hooks/apiRequest/useFetch';
import ApiResponse from '../interfaces/ApiResponse';
import SearchError from '../components/error/searchError';
import Pagination from '../components/general/pagination';
import Loading from '../components/loading/loading';
import ModalApp from '../components/general/modal/modalApp';
import SearchAdvanced from '../components/searchAdvanced/searchAdvanced';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { SearchAdvancedProps } from '../interfaces/searchAdvanced/searchAdvancedProps';
import ChipFilterList from '../components/searchAdvanced/chipFilterList';
import { DataState, setErrorState } from '../utils/handleErrorApi';

const blankData = { Search: [], totalResults: '', Response: '' }
const tagsFilter = {
  year: "year",
  type: "type"
}

const Search = () => {
  const [movieName, setMovieName] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [dataState, setDataState] = useState<DataState>(DataState.Idle);
  const [dataAPI, setDataAPI] = useState<ApiResponse>(blankData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSearchFiltered, setIsSearchFiltered] = useState<boolean>(false);
  const [yearFilter, setYearFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const generate = useMemo(() => {
    return isSearchFiltered ? GenerateURLBySearchAdvanced(movieName, yearFilter, typeFilter , page)
      : GenerateURLBySearch(movieName, page)
  }, [movieName, page, yearFilter, typeFilter])

  const { data, isLoading, error } = useFetch( generate );

  const getMovieNameTyped = (data: string) => {
    setMovieName(data);
  }

  const updatePage = useCallback((newPage: number) => {
    setPage(newPage);
  }, [setPage])

  const handleErrorState = () => {
    if (!data.Error)
      return;

    const errorStatus = setErrorState(data.Error);
    setDataState(errorStatus);
  }

  const handleFilteredAdvanced = (value: boolean) => {
    setIsSearchFiltered(value)
  }

  const handleEditYear = (value: string) =>{
    setYearFilter(value)
  }

  const handleEditFilter = (value: string) =>{
    setTypeFilter(value)
  }

  const handleCloseModal = () =>{
    setIsModalOpen(false)
  }

  const searchAdvancedProps = useMemo<SearchAdvancedProps>(() => {
    return {
      isModalOpen ,
      year: yearFilter,
      type: typeFilter,
      handleEditYear,
      handleEditFilter,
      handleCloseModal,
      handleFilteredAdvanced
    };
  }, [yearFilter, typeFilter]);

  useEffect(() => {
    setPage(1)
  }, [movieName]);

  useEffect(() => {
    console.log(data)
    if (data) {
      if (data.Response === "False") {
        handleErrorState();
      } else {
        setDataAPI(data);
        setDataState(DataState.Success);
      }
    }
  }, [data]);

  return (
    <>
      <View style={styles.background}>
        <ModalApp
          isOpen={isModalOpen}
          component={
            <SearchAdvanced {...searchAdvancedProps} />
          } setIsOpen={setIsModalOpen} />

        <Text style={styles.title}>Search a movie</Text>

        <View style={styles.headerContainer}>
          <View style={styles.inputTextContainer}>
            <Searcher onChangeTextValue={getMovieNameTyped} />
          </View>

          <Button
            onPress={() => setIsModalOpen(true)}
            icon={<Icon
              name='filter'
              type='feather'
              color='#fff'
              size={23}
            />}
          />
        </View>

        <ChipFilterList filters={[yearFilter, typeFilter]} tags={tagsFilter}/>

      </View>

      {isLoading ? <Loading /> :
        dataState === DataState.Success ? (
          <View style={styles.dataContainer}>
            <Pagination page={page} totalResults={dataAPI.totalResults} updatePage={updatePage} />
            <MoviesList data={dataAPI.Search} />
          </View>
        ) : dataState === DataState.NotFound ? (
          <SearchError title="Search not found" showFace={true} />
        ) : (
          <SearchError title="Type minimum 3 characters" showFace={false} />
        )}
    </>
  )
}


export default Search;