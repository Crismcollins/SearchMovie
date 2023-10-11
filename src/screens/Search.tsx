import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Searcher from '../components/general/Searcher';
import MoviesList from '../components/general/moviesList'
import { useEffect, useState } from 'react';
import { GenerateURLBySearch } from '../services/utils/config';
import useFetch from '../hooks/apiRequest/useFetch';
import ApiResponse from '../interfaces/ApiResponse';

const blankData = { Search: [], totalResults: '', Response: '' }
const Search = () => {
  const [movieName, setMovieName] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [dataAPI, setDataAPI] = useState<ApiResponse>(blankData);
  const { data, isLoading, error } = useFetch(GenerateURLBySearch(movieName, page));

  const getMovieNameTyped = (data: string) => {
    setMovieName(data);
  }

  useEffect(() => {
    if (data) {
      if (data.Response === "False"){
        if (data.Error === "Too many results."){
          console.log("many results")
        } 
        else if (data.Error === "Incorrect IMDb ID.") {
          console.log("ID incorrect")
        }
      } else {
        setDataAPI(data);
        console.log(data)
        console.log("Search" in data)
      }
      
    }
  }, [data]);
  
  return(
    <>
      <View style={styles.background}>

      </View>
      <Searcher onChangeTextValue={ getMovieNameTyped }/>

      <MoviesList data={dataAPI.Search} />
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#9400d3",
    height: 100,
    width: "100%"
  }
});

export default Search;