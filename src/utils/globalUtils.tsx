export const replaceBlankSpaces = (string:string) =>  string.replace(" ", "+");

export const convertStringToList = (data:string) => data.split(",");

export const removeTagAsyncStorage = (string:string, tag:string) => string.replace(tag,"");