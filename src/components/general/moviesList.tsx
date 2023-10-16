import {
    FlatList,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

import MovieCard from './movieCard';
import { styles } from '../../styles/moviesListStyles';
import MovieData from '../../interfaces/data/MovieData';

const MoviesList = (props: {data: MovieData[]}) => {
  
    return(
      <View style={styles.listContainer}>
        <FlatList 
        data={ props.data } 
        numColumns={2}
        renderItem={({ item }) => <MovieCard {... item}/> }
        contentContainerStyle= {styles.container}
      />
      </View>
    )
}

export default MoviesList;