import React, { createContext, useReducer } from 'react';
import phaseReducer from '../reducer/phaseReducer';

export const PhaseContext = createContext();

const PhaseContextProvider = ({children}) => {
  const initialState = {
    phase: 'Welcome',
    questionLength: 5,
  }

  const [state, phaseDispatch] = useReducer(phaseReducer, initialState);

  return ( 
    <PhaseContext.Provider value = {{
      phase: state.phase, 
      length: state.questionLength,
      phaseDispatch
    }}>
      {children}
    </PhaseContext.Provider>
   );
}
 
export default PhaseContextProvider;
