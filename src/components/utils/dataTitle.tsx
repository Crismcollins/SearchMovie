import { Text, View } from "react-native";
import { DataTitleInterface } from "../../interfaces/utils/dataTitle";
import {styles} from '../../styles/utils/dataTitleStyles';

const DataTitle:React.FC<DataTitleInterface> = ({
    title,
    data
}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.data}>{data}</Text>
        </View>
    )
}

export default DataTitle;