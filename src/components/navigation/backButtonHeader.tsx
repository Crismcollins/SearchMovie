import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const BackButtonHeader = (props: {
    screen:string,
    text?:string,
    color?:string,
    backgroundColor?:string }) => {

    const navigation = useNavigation();
    const goToDetail = () => navigation.navigate("TabNavigator" as never);
    const showText = props.text && props.text.length > 0 ? "flex" : "none";

    return (
        <>
            <HeaderBackButton
                label={props.text}
                tintColor={props.color}
                labelStyle={{display: showText}}
                backImage={() => (
                    <Icon
                        name="arrow-left"
                        type="feather"
                        color={props.color}
                        backgroundColor={props.backgroundColor}
                        size={24}
                    />
                )}
                onPress={goToDetail}
            />
        </>
    )
}

export default BackButtonHeader;