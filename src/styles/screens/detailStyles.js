import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 8
    },
    imageContainer: {
        width:"100%",
        height: 400
    },
    image: {
        flex: 1,
        width: null,
        height: null
    },
    backButtonContainer: {
        position: "absolute",
        left: 12,
        top: 96
    },
    dataContainer: {
        paddingHorizontal: 16
    },
    titleContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 8,
    },
    title: {
        fontSize: 22,
        maxWidth: "80%"
    },
    cardDataContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center",
        
        padding:12,
        borderRadius: 12,
        marginVertical: 8,
        color: "#fff",
        borderWidth: 2
    },
    genreContainer: {
        marginBottom: 16
    },
    descriptionContainer: {
        marginVertical: 12
    },
    button: {
        backgroundColor: "green",
        borderRadius: 16,
        alignItems: "center",
        padding: 12
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
});