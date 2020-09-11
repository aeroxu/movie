import { createContext } from 'react';

const Context = createContext({
    setNominations: () => {},
    movie: [],
    searchField: '',
    nominations: [],
});

export default Context;