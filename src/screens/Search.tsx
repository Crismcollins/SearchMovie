import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import Searcher from '../components/general/Searcher';
import MoviesList from '../components/general/moviesList';
import { useCallback, useEffect, useState } from 'react';
import { GenerateURLBySearch } from '../services/utils/config';
import { styles } from '../styles/screens/searchStyles';
import useFetch from '../hooks/apiRequest/useFetch';
import ApiResponse from '../interfaces/ApiResponse';
import SearchError from '../components/error/searchError';
import Pagination from '../components/general/pagination';
import Loading from '../components/loading/loading';

enum DataState {
  ManyResults,
  IncorrectID,
  NotFound,
  Idle,
  Success
}

const blankData = { Search: [], totalResults: '', Response: '' }

const Search = () => {
  const [movieName, setMovieName] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [dataState, setDataState] = useState<DataState>(DataState.Idle);
  const [dataAPI, setDataAPI] = useState<ApiResponse>(blankData);
  const { data, isLoading, error } = useFetch(GenerateURLBySearch(movieName, page));

  const getMovieNameTyped = (data: string) => {
    setMovieName(data);
  }

  const updatePage = useCallback((newPage:number) => {
    setPage(newPage);
  }, [setPage])

  const setErrorState = () => {
    if (data.Error === "Too many results.") {
      setDataState(DataState.ManyResults);
    }
    else if (data.Error === "Incorrect IMDb ID.") {
      setDataState(DataState.IncorrectID);
    }
    else if (data.Error === "Movie not found!") {
      setDataState(DataState.NotFound);
    }
  }

  useEffect(() => {
    setPage(1)
  }, [movieName]);

  useEffect(() => {
    if (data) {
      if (data.Response === "False") {
        setErrorState();
      } else {
        setDataAPI(data);
        setDataState(DataState.Success);
      }

    }
  }, [data]);

  return (
    <>
      <View style={styles.background}>
        <Text style={styles.title}>Search a movie</Text>
        <Searcher onChangeTextValue={getMovieNameTyped} />
      </View>

      { isLoading ? <Loading /> :
        dataState === DataState.Success ? (
          <View style={styles.dataContainer}>
            <Pagination page={page} totalResults={dataAPI.totalResults} updatePage={updatePage}/>
            <MoviesList data={dataAPI.Search} />
          </View>
        ) : dataState === DataState.NotFound ? (
          <SearchError title="Movie not found" showFace={true} />
        ) : (
          <SearchError title="Type minimum 3 characters" showFace={false} />
        )}
    </>
  )
}


export default Search;