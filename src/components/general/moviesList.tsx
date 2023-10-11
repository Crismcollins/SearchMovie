import {
    FlatList,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

import MovieCard from './movieCard';
import { styles } from '../../styles/moviesListStyles';
import MovieData from '../../interfaces/MovieData';

const MoviesList = (props: {data: MovieData[]}) => {
    return(
        <FlatList 
        data={ props.data } 
        numColumns={2}
        renderItem={({ item }) => <MovieCard data={item}/> }
        contentContainerStyle= {styles.container}
      />
    )
}

export default MoviesList;