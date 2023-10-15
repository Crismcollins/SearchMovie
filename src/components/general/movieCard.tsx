import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { styles } from '../../styles/movieCardStyles';
import MovieData from '../../interfaces/data/MovieData';
import { useNavigation } from '@react-navigation/native';
import NotFoundImage from './notFoundImage';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreensStackParamList } from '../../types/types';

type detailScreenProp = StackNavigationProp<ScreensStackParamList, "Detail">;

const MovieCard: React.FC<MovieData> = ({
    Title, 
    Year, 
    imdbID, 
    Type, 
    Poster
 }) => {
    const navigation = useNavigation<detailScreenProp>();

    const handleToDetail = () => 
        navigation.navigate("Detail", {imdbID: imdbID} );
    
    return (
        <TouchableOpacity onPress={handleToDetail}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {Poster === "N/A" ?
                        <NotFoundImage />
                        : <Image
                            source={{ uri: Poster }}
                            style={styles.image}
                            resizeMode='cover'
                            resizeMethod='resize'
                        />
                    }
                </View>
                <Text style={styles.title}>{Title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MovieCard;