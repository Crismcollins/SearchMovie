export interface SearchAdvancedProps {
    isModalOpen: boolean ,
    year: string,
    type: string,
    handleEditYear: (value: string) => void,
    handleEditFilter: (value: string) => void,
    handleCloseModal: () => void,
    handleFilteredAdvanced: (value: boolean) => void,
}