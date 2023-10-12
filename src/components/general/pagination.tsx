import { Text, View } from 'react-native';
import { styles } from '../../styles/paginationStyles';
import { PaginationData } from '../../interfaces/pagination/PaginationData';
import { useEffect, useState } from 'react';
import PaginationButton from '../pagination/paginationButton';

const Pagination = ({ page, totalResults, updatePage }: PaginationData) => {
    const [prevButtonState, setPrevButtonState] = useState<boolean>(false);
    const [nextButtonState, setNextButtonState] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(0);

    const prevPage = () => {
        const newPage = page - 1;
        updatePage(newPage);
    }

    const nextPage = () => {
        const newPage = page + 1;
        updatePage(newPage);
    }

    const firstPage = () => {
        updatePage(1);
    }

    const lastPage = () => {
        updatePage(totalPages);
    }

    const calculateTotalPages = () => {
        return Math.ceil(Number(totalResults) / 10);
    }

    useEffect(() => {
        setTotalPages(calculateTotalPages());
    }, [totalResults]);

    useEffect(() => {
        if (page === 1)
            setPrevButtonState(true);
        else
            setPrevButtonState(false);
        
        if (page === totalPages)
            setNextButtonState(true);
        else
            setNextButtonState(false);
    }, [page,totalPages]);

    return (
        <View style={styles.container}>
            <PaginationButton method={firstPage} disabled={prevButtonState} iconName='chevrons-left' />
            <PaginationButton method={prevPage} disabled={prevButtonState} iconName='chevron-left' />
            <Text style={styles.text}>{page} of {totalPages}</Text>
            <PaginationButton method={nextPage} disabled={nextButtonState} iconName='chevron-right' />
            <PaginationButton method={lastPage} disabled={nextButtonState} iconName='chevrons-right' />
        </View>
    )
};

export default Pagination;