import { createContext } from 'react';

const NominationContext = createContext({
    removeNominations: () => {},
    nominations: [],
});

export default NominationContext;