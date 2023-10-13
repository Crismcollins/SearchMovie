import Modal from "react-native-modal";
import { ModalProps } from '../../../interfaces/modal/modalProps';

const ModalApp: React.FC<ModalProps> = (props) => {
    const { isOpen, component, setIsOpen } = props;

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Modal
            isVisible= {isOpen}
            swipeDirection={['down']}
            onSwipeComplete={toggleModal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}
        >
        {component}
        </Modal>
    )
};

export default ModalApp;