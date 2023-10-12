import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { styles } from '../../styles/movieCardStyles';
import MovieData from '../../interfaces/MovieData';
import { useNavigation } from '@react-navigation/native';
import NotFoundImage from './notFoundImage';

const MovieCard = (props: { data: MovieData }) => {
    const navigation = useNavigation();
    const goToDetail = () => navigation.navigate("Detail" as never)

    return (
        <TouchableOpacity onPress={goToDetail}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {props.data.Poster === "N/A" ?
                        <NotFoundImage />
                        : <Image
                            source={{ uri: props.data.Poster }}
                            style={styles.image}
                            resizeMode='cover'
                            resizeMethod='resize'
                        />
                    }
                </View>
                <Text style={styles.title}>{props.data.Title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MovieCard;