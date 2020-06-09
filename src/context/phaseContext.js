import React, { createContext, useReducer } from 'react';
import phaseReducer from '../reducer/phaseReducer';

export const PhaseContext = createContext();

const PhaseContextProvider = ({children}) => {
  const initialState = {
    phase: 'Welcome',
  }

  const [state, phaseDispatch] = useReducer(phaseReducer, initialState);

  return ( 
    <PhaseContext.Provider value = {{
      phase: state.phase, 
      phaseDispatch
    }}>
      {children}
    </PhaseContext.Provider>
   );
}
 
export default PhaseContextProvider;
