import { Text, View } from "react-native";
import { DescriptionInterface } from "../../interfaces/detail/descriptionInterface";
import {styles} from '../../styles/utils/description';
const Description:React.FC<DescriptionInterface> = ({
    description
}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

export default Description;