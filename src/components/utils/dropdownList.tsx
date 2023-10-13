import { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const DropdownList = () => {
    const [value, setValue] = useState<string>("");

    const changeValue = (item: string) => {
        setValue(item);
    }

    return (
        <View>
            <Dropdown
                placeholder='Select an item'
                data={data}
                search
                labelField="label" // Define el campo de etiqueta
                valueField="value" // Define el campo de valor
                onChange={item => {
                    changeValue(item.value);
                }}
            />
        </View>

    )
}

export default DropdownList;