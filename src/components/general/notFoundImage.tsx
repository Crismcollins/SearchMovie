import {
    Text,
    View,
} from 'react-native';
import { styles } from '../../styles/movieCardStyles';

const NotFoundImage = () => (
    <View style={styles.imgNotFound}>
      <Text style={styles.imgNotFoundText}>Image not found</Text>
    </View>
);

export default NotFoundImage;