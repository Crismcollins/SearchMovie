import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import { styles } from '../../styles/movieCardStyles';
import MovieData from '../../interfaces/MovieData';


const MovieCard = (props: { data: MovieData }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.data.Poster }}
                style={styles.image}
                resizeMode='contain'
                resizeMethod='resize'
            />
            <Text>{props.data.Title}</Text>
        </View>
    )
}

export default MovieCard;