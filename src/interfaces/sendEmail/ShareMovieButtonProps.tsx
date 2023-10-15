type ClickHandler = (...args: any[]) => void;

export interface ShareMovieButtonProps {
    text: string,
    onClick: ClickHandler
}