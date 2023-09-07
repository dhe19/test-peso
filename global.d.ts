
interface Person {
    id: number;
    firstName: string;
    lastName: string;
    curp: string;
    weight: number;
    height: number;
    gender: string;
    zone: string;
}


interface Action {
    type: 'ADD_PERSON';
    payload: Person;
}

interface State {
    people: Person[];
    person?: Person;
}

interface FilterProps {
    onChange(f: string): void;
    value: string;
}




