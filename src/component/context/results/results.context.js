import { createContext } from 'react';

const ResultsContext = createContext({
    addNominations: () => {},
    movie: [],
    searchField: '',
    nominations: [],
});

export default ResultsContext;