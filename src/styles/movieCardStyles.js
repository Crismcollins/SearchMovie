import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 8,
        width: 160
    },
    image: {
        flex: 1,
        width: null,
        height: null
    },
    imageContainer: {
        height: 240,
        width: 160
    },
    title: {
        fontWeight: 'bold',
        margin: 8
    },
    imgNotFound: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
    },
    imgNotFoundText: {
        color: "white"
    }
});