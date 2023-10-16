import { View } from 'react-native';
import MoviesList from '../components/general/moviesList';
import { ASYNCSTORAGE_SHARED } from '@env';
import { removeTagAsyncStorage } from '../utils/globalUtils';
import { filterKeysByTag } from '../services/asyncStorage/asyncStorage';
import { useEffect, useState } from 'react';
import { convertMovieIdToApiUrl } from '../services/utils/configURLs';
import { useMultiFetch } from '../hooks/apiRequest/useMultiFetch';
import MovieData from '../interfaces/data/MovieData';
import SearchError from '../components/error/searchError';
import Loading from '../components/loading/loading';

const Shared = () => {
    const [urls, setUrls] = useState<string[]>(convertMovieIdToApiUrl([]));

    const { data, loading, error } = useMultiFetch(urls);
    const [moviesData, setMoviesData] = useState<MovieData[]>([]);

    function removeTagsShared(data: string[]) {
        return data.map((movieId) => removeTagAsyncStorage(movieId, ASYNCSTORAGE_SHARED));
    }

    async function getSharedMovies() {
        const moviesShared = await filterKeysByTag(ASYNCSTORAGE_SHARED);

        if (moviesShared) {
            const sharedMoviesID = removeTagsShared([...moviesShared]);
            const moviesSharedUrl = convertMovieIdToApiUrl(sharedMoviesID);
            setUrls(moviesSharedUrl);
        }
    }

    const handleDataMovies = (moviedata: any[]) => moviedata.map((moviedata) => moviedata.data);

    useEffect(() => {
        const loadSharedMovies = async () => {
            await getSharedMovies();
            const movieDataArray = handleDataMovies(data);
            setMoviesData(movieDataArray);
        }

        loadSharedMovies();
    }, [data]);

    return (
        <View style={{ flex: 1 }}>
            {urls.length <= 0 ?
                <SearchError title="No shared movies yet." showFace={true} /> :
            loading ? <Loading />
            : <MoviesList data={moviesData} />
            }
        </View>
    )
}

export default Shared;