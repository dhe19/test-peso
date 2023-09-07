import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { people } from './dummydata';


const initialState: State = {
    people,
};

const formSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<Person>) => {
            const person = action.payload;
            person.id = state.people.length + 1;
            state.people.push(person);

        },

        updatePerson: (state, action: PayloadAction<Person>) => {
            const indexPerson = state.people.findIndex(per => per.id === action.payload.id);
            state.people[indexPerson] = action.payload;

        },

        deletePerson: (state, action: PayloadAction<number>) => {
            state.people = state.people.filter(per => per.id !== action.payload);
        },
        setPerson: (state, action: PayloadAction<Person>) => {
            state.person = action.payload;
        }
    }
}

);

export const { addPerson, updatePerson, deletePerson, setPerson } = formSlice.actions;

export default formSlice.reducer;
