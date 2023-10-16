import { Text, TextInput, View } from "react-native";
import { styles } from "../../styles/searchAdvanced/searchAdvancedStyles";
import ShareMovieButton from "../utils/shareMovieButton";
import { buildEmailObj, sendEmail } from "../../utils/sendEmail";
import { deeplinks } from "../../utils/deeplinks";
import { GenerateTinyURL } from "../../navigation/deeplinks/tinyurl";
import { useState } from "react";
import { SendEmailModalInterface } from "../../interfaces/sendEmail/SendEmailModal";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { ASYNCSTORAGE_SHARED } from "@env";


const SendEmailModal: React.FC<SendEmailModalInterface> = ({
    movieId,
    handleIsModalOpen
}) => {

    const [email, setEmail] = useState<string>("");
    const { setItem } = useAsyncStorage(ASYNCSTORAGE_SHARED+movieId);

    const handleShareMovie = async () => {
        const tinyURL = await GenerateTinyURL(deeplinks.detail + movieId);
        const data = buildEmailObj(email, tinyURL);
        sendEmail(data)
        handleIsModalOpen(false);
        setItem(ASYNCSTORAGE_SHARED+movieId);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Share by email</Text>

            <TextInput
                placeholder="example@gmail.com"
                style={styles.input}
                onChangeText={setEmail}
            >
            </TextInput>

            <ShareMovieButton text="Share movie" onClick={handleShareMovie}/>
        </View>
    )
}

export default SendEmailModal;