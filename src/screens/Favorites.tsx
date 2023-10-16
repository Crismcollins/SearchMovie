import { View } from 'react-native';
import { styles } from "../styles/favorites/favoritesStyles";
import { filterKeysByTag } from '../services/asyncStorage/asyncStorage';
import { useEffect, useState } from 'react';
import { removeTagAsyncStorage } from '../utils/globalUtils';
import { ASYNCSTORAGE_FAV } from '@env';
import { useMultiFetch } from '../hooks/apiRequest/useMultiFetch';
import { convertMovieIdToApiUrl } from '../services/utils/configURLs';
import MoviesList from '../components/general/moviesList';
import MovieData from '../interfaces/data/MovieData';
import Loading from '../components/loading/loading';
import SearchError from '../components/error/searchError';

const Favorites = () => {
    const [urls, setUrls] = useState<string[]>([]);

    const { data, loading, error } = useMultiFetch(urls);
    const [moviesData, setMoviesData] = useState<MovieData[]>([]);

    function removeTagsFav(data: string[]) {
        return data.map((movieId) => removeTagAsyncStorage(movieId, ASYNCSTORAGE_FAV));
    }

    const handleLoadFavorites = async () => {
        const favsMovies = await filterKeysByTag(ASYNCSTORAGE_FAV);
        if (favsMovies) {
            const moviesID = removeTagsFav([...favsMovies]);
            const moviesFavoriteUrl = convertMovieIdToApiUrl(moviesID);
            setUrls(moviesFavoriteUrl);
        }
    }

    const handleDataMovies = (moviedata: any[]) => moviedata.map((moviedata) => moviedata.data);

    useEffect(() => {
        const loadFavoriteMovies = async () => {
            await handleLoadFavorites();
            const dataMovies = handleDataMovies(data);
            setMoviesData(dataMovies);
        }

        loadFavoriteMovies();
    }, [data])

    return (
        <View style={{ flex: 1 }}>
            {urls.length <= 0 ?
                <SearchError title="No favorite movies yet." showFace={true} /> :
            loading ? <Loading />
            : <MoviesList data={moviesData} />
            }
        </View>
    )
}

export default Favorites;