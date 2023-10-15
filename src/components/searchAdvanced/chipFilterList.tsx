import { View } from "react-native";
import { styles } from '../../styles/searchAdvanced/chipFilterListStyles';
import ChipFilter from "./chipFilter";
import { ChipFilterListInterface } from "../../interfaces/searchAdvanced/chipFilterListInterface";

const ChipFilterList: React.FC<ChipFilterListInterface> = ({
    filters,
    tags
}) => {

    const showTags = (index:number) => {
        if (tags)
            return index === 0 ? tags.year : tags.type;
    }

    return (
        <View style={styles.container}>
            {filters.map((filter, index) => {
                if (filter !== "" && filter !== "all")
                    return <ChipFilter
                    key={index}
                        filter={filter}
                        tag={showTags(index)}
                    />
            })}
        </View>
    )
}

export default ChipFilterList;