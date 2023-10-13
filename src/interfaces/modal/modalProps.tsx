export interface ModalProps {
    isOpen: boolean;
    component: React.ReactNode;
    setIsOpen: (newState: React.SetStateAction<any>) => void;
}