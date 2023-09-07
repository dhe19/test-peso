
import { configureStore } from '@reduxjs/toolkit';
import formState from './formState';
const store = configureStore({
    reducer: {
        form: formState,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
