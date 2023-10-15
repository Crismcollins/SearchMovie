import { Linking } from "react-native";
import { EmailInterface } from "../interfaces/utils/emailInterface";

export const sendEmail = (emailbody:EmailInterface) => {
    const {email, message} = emailbody;
    const subject = 'Movie shared from SearchMovies';

    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    Linking.openURL(emailUrl);
}

export const buildEmailObj = (email:string, link:string) => {
    const emailObj:EmailInterface = {
        email: email,
        message: `Hey! check this movie, it's so funny! ${link}`
    }
    return emailObj;
}