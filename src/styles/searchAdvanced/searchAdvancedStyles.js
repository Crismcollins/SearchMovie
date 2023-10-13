import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        borderRadius: 18,
        padding: 8
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center"
    },
    input: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#9400d3",
        height: 36,
        padding:6
    },
    radioButtonsContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        marginVertical: 6,
        fontSize: 14,
        fontWeight:"bold"
    },
    typesContainer: {
        marginTop: 12
    },
    yearContainer: {
        marginTop: 12
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16
    },
    applyButton: {
        backgroundColor: "#9400d3",
        borderRadius: 6,
        marginRight: 12
    },
    resetButton: {
        backgroundColor: "red",
        borderRadius: 6
    },
    whiteColor: {
        color: "white"
    }
});