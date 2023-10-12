import { ActivityIndicator } from 'react-native';
import { styles } from '../../styles/loading/loadingStyles';

const Loading = () => {
    return(
        <ActivityIndicator size="large" style={styles.container}/>
    )
}

export default Loading;