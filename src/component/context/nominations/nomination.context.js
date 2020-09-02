import { createContext } from 'react';

const NominationContext = createContext({
    nominations: [],
    addNominations: () => {},
});

export default NominationContext;