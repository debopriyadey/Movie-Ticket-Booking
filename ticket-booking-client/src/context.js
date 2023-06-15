import { createContext } from 'react';

export const UserContext = createContext({
    id: "",
    name: "",
    email: "",
    role: ""
});

export const MovieContext = createContext({
    movieId: ""
})
