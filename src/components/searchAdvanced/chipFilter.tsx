import { View } from "react-native";
import { styles } from '../../styles/searchAdvanced/chipFilterStyles';
import { Text } from "react-native-elements";
import { ChipFilterInterface } from "../../interfaces/searchAdvanced/ChipFilterInterface";

const ChipFilter:React.FC<ChipFilterInterface> = ({
    filter,
    tag
}) => {

    return(
        <View style={styles.container} testID={filter}>
            <Text style={styles.text}>{tag}: {filter}</Text>
        </View>
    )
}

export default ChipFilter;