import { Text, View, Image, ScrollView } from 'react-native';
import BackButtonHeader from '../components/navigation/backButtonHeader';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScreensStackParamList } from '../types/types';
import { useEffect, useMemo, useState } from 'react';
import { GenerateURLByID } from '../services/utils/configURLs';
import useFetch from '../hooks/apiRequest/useFetch';
import { styles } from '../styles/screens/detailStyles';
import MovieDetailData from '../interfaces/data/MovieDetailData';
import FavoriteButton from '../components/utils/favoriteButton';
import { convertStringToList } from '../utils/globalUtils';
import ChipFilterList from '../components/searchAdvanced/chipFilterList';
import DataTitle from '../components/utils/dataTitle';
import Description from '../components/general/description';
import DataIcon from '../components/utils/dataIcon';
import { Icon } from 'react-native-elements';
import Loading from '../components/loading/loading';
import NotFoundImage from '../components/general/notFoundImage';
import ShareMovieButton from '../components/utils/shareMovieButton';
import ModalApp from '../components/general/modal/modalApp';
import SendEmailModal from '../components/sendEmail/sendEmailModal';

const Detail = () => {

    const route = useRoute<RouteProp<ScreensStackParamList, "Detail">>();
    const { imdbID } = route.params;
    const [movieData, setMovieData] = useState<MovieDetailData>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isFav, setIsFav] = useState<boolean>(false);

    const url = useMemo(() => {

        return GenerateURLByID(imdbID);
    }, [imdbID]);

    const { data, isLoading, error } = useFetch<MovieDetailData>(url);

    const convertGenresStringToList = () => {
        if (movieData?.Genre)
            return convertStringToList(movieData.Genre)

        return []
    }

    const showDuration = () => movieData?.Runtime ? movieData.Runtime : "Unknown";

    const showLanguage = () => movieData?.Language ? movieData.Language.replaceAll(",", "") : "Unknown";

    const showRated = () => movieData?.Rated ? movieData.Rated : "Unknown";

    const showDescription = () => movieData?.Plot ? movieData.Plot : "Unknown";

    const showRating = () => movieData && movieData.Ratings
        && movieData.Ratings.length ? movieData.Ratings[0].Value : "Unknown";

    const showRelease = () => movieData?.Released ? movieData.Released : "Unknown";

    const showType = () => movieData?.Type ? movieData.Type : "Unknown";

    const showTotalSeasons = () => movieData?.totalSeasons ? movieData.totalSeasons : "Unknown";

    const handleModal = () => setIsModalOpen(!isModalOpen);

    const a =  async () => true

    useEffect(() => {
        if (data)
            setMovieData(data)
    }, [data]);

    return (
        <View style={{ flex: 1 }}>
            {isLoading ? <Loading /> :

                <ScrollView bounces={false}>
                    <ModalApp
                        isOpen={isModalOpen}
                        component={
                            <SendEmailModal movieId={imdbID} handleIsModalOpen={setIsModalOpen}/>
                        } setIsOpen={setIsModalOpen} />

                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            {movieData?.Poster === "N/A" ?
                                <NotFoundImage /> :
                                <Image
                                    source={{ uri: movieData?.Poster }}
                                    style={styles.image}
                                    resizeMode='stretch'
                                    resizeMethod='resize'
                                />
                            }
                            <View style={styles.backButtonContainer}>
                                <BackButtonHeader screen="Search" backgroundColor='#fff' />
                            </View>
                        </View>

                        <View style={styles.dataContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{movieData?.Title}</Text>
                                <FavoriteButton size={32} isButton={true} movieId={imdbID}/>
                            </View>

                            <View style={styles.genreContainer}>
                                <ChipFilterList filters={convertGenresStringToList()} />
                            </View>

                            <View style={styles.cardDataContainer}>
                                <DataIcon
                                    icon={<FavoriteButton size={22} isButton={false} />}
                                    data={showRating()}
                                />

                                <DataIcon
                                    icon={<Icon name="schedule"
                                        type="material"
                                        size={22} />}
                                    data={showDuration()}
                                />

                                <DataIcon
                                    icon={<Icon name="category"
                                        type="material"
                                        size={22} />}
                                    data={showType()}
                                />

                                <DataIcon
                                    icon={<Icon name="language"
                                        type="material"
                                        size={22} />}
                                    data={showLanguage()}
                                />

                            </View>

                            <View style={styles.cardDataContainer}>
                                <DataTitle title='Release' data={showRelease()} />

                                <DataTitle title='Seasons' data={showTotalSeasons()} />
                                <DataTitle title='Rating' data={showRated()} />
                            </View>

                            <View style={styles.descriptionContainer}>
                                <Description description={showDescription()} />
                            </View>

                            <ShareMovieButton text='Share movie by email' onClick={handleModal} />
                        </View>

                    </View>
                </ScrollView>
            }
        </View>
    )
}

export default Detail;