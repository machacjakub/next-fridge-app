const pad = (num: number) => {
    return num < 10 ? "0" + num : num;
}

export const readableDate = (date: Date): string => {
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${date.getDate()}`
}

export const toDate = (str: string) => {
    return new Date(str);
}