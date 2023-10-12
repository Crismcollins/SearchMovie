export interface PaginationData {
    page: number;
    totalResults: string;
    updatePage: (newPage: number) => void;
}

export interface ButtonPagination {
    method: () => void;
    disabled: boolean;
    iconName: string;
}