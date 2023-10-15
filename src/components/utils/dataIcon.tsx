import { Text, View } from "react-native";
import { DataIconInterface } from "../../interfaces/utils/dataIcon";
import {styles} from '../../styles/utils/dataTitleStyles';

const DataIcon:React.FC<DataIconInterface> = ({
    icon,
    data
}) => {

    return(
        <View style={styles.container}>
            {icon}
            <Text style={styles.data}>{data}</Text>
        </View>
    )
}

export default DataIcon;