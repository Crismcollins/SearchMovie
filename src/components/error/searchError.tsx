import {
    Text,
    View,
} from 'react-native';

import { styles } from '../../styles/errorViewStyles';
import { Icon } from 'react-native-elements'

const SearchError = (props: { title: string, showFace: boolean }) => {

    return (
        <View style={styles.container}>
            {props.showFace && (
                <Icon
                name='frown'
                type='feather'
                color='#000000'
                size={64}
                style={{marginVertical: 16}}
            />
            )}
            <Text style={styles.message}>{props.title}</Text>
        </View>
    )
}

export default SearchError;