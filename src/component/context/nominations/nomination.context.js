import { createContext } from 'react';

const NominationContext = createContext({
    nominations: [],
    addNominations: () => {},
    removeNominations: () => {},
});

export default NominationContext;