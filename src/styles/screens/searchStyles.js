import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
      backgroundColor: "#9400d3",
      height: 150,
      width: "100%",
      justifyContent: "center",
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      paddingHorizontal: 12
    },
    title: {
        color:"white",
        fontSize: 22,
        fontFamily: "sans-serif",
        alignSelf: "center",
        marginBottom: 12
    },
    dataContainer: {
      flex:1,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    inputTextContainer: {
      flex:1,
      marginRight: 12
    }
  });