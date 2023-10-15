import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/shareMovieButton/shareMovieButtonStyles";
import { ShareMovieButtonProps } from "../../interfaces/sendEmail/ShareMovieButtonProps";

const ShareMovieButton: React.FC<ShareMovieButtonProps> = ({
    text,
    onClick
}) => {

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onClick}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ShareMovieButton;