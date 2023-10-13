import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/searchAdvanced/searchAdvancedStyles';
import { useEffect, useMemo, useRef, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButtonProps } from '../../interfaces/searchAdvanced/radioButtonProps';
import { radioButtonsPropsData } from '../../data/searchAdvanced';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { SearchAdvancedProps } from '../../interfaces/searchAdvanced/searchAdvancedProps';


const SearchAdvanced: React.FC<SearchAdvancedProps> = ({
    isModalOpen,
    year,
    type,
    handleEditYear,
    handleEditFilter,
    handleCloseModal,
    handleFilteredAdvanced, }) => {
    const [yearValue, setYearValue] = useState<string>("");
    const [filterValue, setFilterValue] = useState<string>("")


    useEffect(()=>{
        setFilterValue(type)
        setYearValue(year);
    }, [isModalOpen])

    const radioButtons: RadioButtonProps[] = useMemo(() => (radioButtonsPropsData), []);

    const onResetSearch = () => {
        setFilterValue("all")
        handleEditFilter("all")
        setYearValue("")
        handleEditYear("")
        handleCloseModal();
    }

    const inputValue = (text: string) => setYearValue(text);
    const inputFilter = (text: string) => setFilterValue(text);

    const searchMovies = () => {
        if(year.length > 0 || type.length > 0)
            handleFilteredAdvanced(true);
        else
            handleFilteredAdvanced(false);

        handleEditFilter(filterValue)
        handleEditYear(yearValue)
        handleCloseModal();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search advanced</Text>

            <View style={styles.yearContainer}>
                <Text style={styles.label}>Type a year</Text>
                <TextInput
                    // ref={textInputRef}
                    value={yearValue}
                    placeholder="Enter a year"
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={inputValue}
                >
                </TextInput>
            </View>


            <View style={styles.typesContainer}>
                <Text style={styles.label}>Select type</Text>
                <View style={styles.radioButtonsContainer}>
                    <RadioGroup
                        radioButtons={radioButtons}
                        onPress={inputFilter}
                        selectedId={filterValue}
                        layout='row'
                    />
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={{ flex: 1 }}>
                    <Button
                        title="Search"
                        type="clear"
                        titleStyle={styles.whiteColor}
                        style={styles.applyButton}
                        onPress={searchMovies}
                    />
                </View>
                <Button
                    style={styles.resetButton}
                    type="clear"
                    icon={<Icon
                        name='trash-2'
                        type='feather'
                        color='#fff'
                        size={23}
                    />}
                    onPress={onResetSearch}
                />
            </View>
        </View>
    )
};

export default SearchAdvanced;