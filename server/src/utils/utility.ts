export const isNumber = (value: number) => {
    const number = Number(value);
    return value && number !== NaN && typeof number === 'number';
} 