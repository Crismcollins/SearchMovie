import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import BackButtonHeader from '../components/navigation/backButtonHeader';

const Detail = () => {

    return (
        <View>
            <BackButtonHeader screen="Search" />
            <Text>Detail</Text>
        </View>
    )
}

export default Detail;