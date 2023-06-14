import { createContext } from 'react';

export const userContext = createContext({
    name: "",
    email: "",
    password: "",
    role: ""
});

export const movieContext = createContext({
    movieId: ""
})
