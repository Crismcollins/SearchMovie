export enum DataState {
    ManyResults,
    IncorrectID,
    NotFound,
    Idle,
    Success
  }

export function setErrorState(error:string) {
    if (error.includes("Too many results.")){
        return DataState.ManyResults;
    } else if (error.includes("Incorrect IMDb ID.")){
        return DataState.IncorrectID;
    } else {
        return DataState.NotFound;
    }
}
