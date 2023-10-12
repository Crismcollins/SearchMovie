import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { styles } from '../../styles/paginationStyles';
import { ButtonPagination } from '../../interfaces/pagination/PaginationData';

const PaginationButton = ({ method, disabled, iconName }: ButtonPagination) => {
    return (
        <Button
            style={styles.button}
            type="clear"
            icon={
                <Icon
                    name={iconName}
                    type='feather'
                    color='#9400d3'
                    containerStyle={{ backgroundColor: 'transparent' }}
                    size={20}
                />
            }
            onPress={method}
            disabled={disabled}
            disabledStyle={styles.disableButton}
        />
    )
}

export default PaginationButton;