import { useEffect, useState } from 'react';

const usePersistedState = (initialstate, sessionstoragekey) =>{
    const [state, setState] = useState(() => {
        const persistedvalue =sessionStorage.getItem(sessionstoragekey)

        return persistedvalue ? JSON.parse(persistedvalue) : initialstate;
    });

    useEffect(() => {
        sessionStorage.setItem(sessionstoragekey, JSON.stringify(state));
        }, [state, sessionstoragekey]);

        return [state, setState];
} 

export const useSearchStr = () =>{
    return usePersistedState('', 'searchString')
}