import { createContext } from 'react';

const NominationContext = createContext({
    addNominations: () => {},
    removeNominations: () => {},
});

export default NominationContext;