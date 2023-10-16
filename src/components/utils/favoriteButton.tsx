import { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { FavoriteButtonInterface } from '../../interfaces/utils/favoriteButton';
import { ASYNCSTORAGE_FAV } from '@env';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const FavoriteButton: React.FC<FavoriteButtonInterface> = ({
    size,
    isButton,
    movieId
}) => {

    const key: string = generateKey();
    const { getItem, setItem, removeItem } = useAsyncStorage(key);
    const [fav, setFav] = useState<boolean>(false);

    function generateKey() {
        return ASYNCSTORAGE_FAV + movieId;
    }

    const addToFavorites = async () => {
        setItem(ASYNCSTORAGE_FAV+key);
        setFav(true)
    }

    const removeToFavorites = async () => {
        removeItem();
        setFav(false)
    }

    const getIsFavoriteMovie = async () => {
        const item = await getItem();
        const movieIsFavorite = item !== null;
        setFav(movieIsFavorite);
    }

    const handleFavorite = async () => {
        if(!isButton) return;

        if(fav)
            removeToFavorites();
        else
            addToFavorites();
    }

    useEffect(() => {
        if (!movieId) return;
        getIsFavoriteMovie()
    }, []);

    return (
        <TouchableWithoutFeedback
            onPress={handleFavorite}
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