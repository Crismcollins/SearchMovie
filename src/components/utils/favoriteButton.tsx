import { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { FavoriteButtonInterface } from '../../interfaces/utils/favoriteButton';
import { saveData } from '../../services/asyncStorage/asyncStorage';

const FavoriteButton: React.FC<FavoriteButtonInterface> = ({
    isFav,
    size,
    isButton,
    movieId
}) => {

    const [fav, setFav] = useState<boolean>(isFav);

    const getIsFav = () => setFav(isFav);

    const addToFavorites = async () => {
        if (isButton && movieId) {
            await saveData("favorites", "fav-"+movieId);
            setFav(!fav)
        }
    }

    useEffect(() => {
        getIsFav();
    }, [isFav]);

    return (
        <TouchableWithoutFeedback
            onPress={addToFavorites}
        >
            <Icon
                name={fav ? "star" : "star-outline"}
                type="material"
                color={"orange"}
                size={size}
            />
        </TouchableWithoutFeedback>
    )
}

export default FavoriteButton;