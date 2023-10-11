import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 250,
        width: 170,
        margin: 8,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.4,
        // elevation: 5,
        
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        borderRadius: 16
    }
});