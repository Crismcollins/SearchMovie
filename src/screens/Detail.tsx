import {
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import BackButtonHeader from '../components/navigation/backButtonHeader';

const Detail = () => {
    const navigation = useNavigation();
    const goToDetail = () => navigation.navigate("Search" as never);

    return (
        <>
        <BackButtonHeader screen="Search"/>
            <Text>Detail</Text>
        </>
    )
}

export default Detail;