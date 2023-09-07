import { Weights, Category } from "../constants/constants";

// Filtra personas por zona
export const FilterByZone = (zone: string, people: Person[]): Person[] => people.filter(person => person.zone === zone);

// Filtra personas por categoría
export const FilterByCategory = (category: number, people: Person[]): Person[] => people.filter((person) => getCategory(getCurrentAge(person.curp)) === category);

// Filtra personas por género
export const filterByGender = (people: Person[], gender: string): Person[] => getGender(gender, people);

// Filtra personas por peso
export const filterByWeight = (people: Person[], weight: number): Person[] => people.filter(person => getWeight(getIMC(person.weight, person.height)) === weight);

// Calcula el Índice de Masa Corporal (IMC)
export const getIMC = (weight: number, height: number): number => {
    return weight / (height ** 2);
}

// Obtiene la medida según género y altura
export const getMeasure = (gender: string, height: number) => {
    const cm = height * 100;
    const compareHeight = 152.4;
    return gender === "hombre" ?
        50 + 0.555 * (cm - compareHeight) :
        45.5 + 0.535 * (cm - compareHeight);
}


// Obtiene la edad actual
export const getCurrentAge = (curp: string): number => {
    const birthday = getBirthDate(curp);
    const currentDate = new Date();
    return currentDate.getFullYear() - birthday.getFullYear();
}


// Obtiene la fecha de nacimiento formateada
export const getFormatDate = (curp: string): string => {
    const date = getBirthDate(curp);
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
}

// Obtiene la categoría según la edad
export const getCategory = (age: number): number => {
    switch (true) {
        case age <= Category.CHILD:
            return Category.CHILD;

        case age <= Category.YOUNG:
            return Category.YOUNG;

        case age <= Category.ADULT:
            return Category.ADULT;

        default:
            return Category.OLD;
    }
}

// Obtiene el rango de peso según el IMC
export const getWeight = (imc: number): number => {
    switch (true) {
        case imc <= Weights.UNDERWEIGHT:
            return Weights.UNDERWEIGHT;

        case imc <= Weights.NORMAL:
            return Weights.NORMAL;

        case imc <= Weights.OVERWEIGHT:
            return Weights.OVERWEIGHT;

        default:
            return Weights.OBESITY;
    }
}

// Obtiene la fecha de nacimiento desde la CURP
const getBirthDate = (curp: string): Date => {
    const curpDate = curp.match(/\d+/)?.[0] ?? '950802';
    const regex = /^[210]/;
    let formatDate = curpDate.match(/.{1,2}/g)?.join('-') as string;

    if (regex.test(formatDate))
        formatDate = "20" + formatDate;
    return new Date(formatDate);
}

// Filtra personas por género
const getGender = (gen: string, people: Person[]) => people.filter(person => person.gender === gen);

