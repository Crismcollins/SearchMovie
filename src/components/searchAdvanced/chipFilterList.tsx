import { View } from "react-native";
import { styles } from '../../styles/searchAdvanced/chipFilterListStyles';
import ChipFilter from "./chipFilter";
import { ChipFilterListInterface } from "../../interfaces/searchAdvanced/chipFilterListInterface";

const ChipFilterList: React.FC<ChipFilterListInterface> = ({
    filters,
    tags
}) => {

    return (
        <View style={styles.container}>
            {filters.map((filter, index) => {
                if (filter !== "" && filter !== "all")
                    return <ChipFilter
                        filter={filter}
                        tag={index === 0 ? tags.year : tags.type}
                    />
            })}
        </View>
    )
}

export default ChipFilterList;