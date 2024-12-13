import React, { createContext, useContext, useReducer } from 'react';

interface ExperimentState {
  activeExperiment: string | null;
  experiments: any[];
  filters: {
    status: string[];
    type: string[];
    date: string[];
  };
  view: 'grid' | 'list';
}

const initialState: ExperimentState = {
  activeExperiment: null,
  experiments: [],
  filters: {
    status: [],
    type: [],
    date: [],
  },
  view: 'grid',
};

type Action =
  | { type: 'SET_ACTIVE_EXPERIMENT'; payload: string }
  | { type: 'SET_EXPERIMENTS'; payload: any[] }
  | { type: 'SET_FILTERS'; payload: any }
  | { type: 'SET_VIEW'; payload: 'grid' | 'list' };

const ExperimentContext = createContext<{
  state: ExperimentState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

function experimentReducer(state: ExperimentState, action: Action): ExperimentState {
  switch (action.type) {
    case 'SET_ACTIVE_EXPERIMENT':
      return { ...state, activeExperiment: action.payload };
    case 'SET_EXPERIMENTS':
      return { ...state, experiments: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    case 'SET_VIEW':
      return { ...state, view: action.payload };
    default:
      return state;
  }
}

export function ExperimentProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(experimentReducer, initialState);

  return (
    <ExperimentContext.Provider value={{ state, dispatch }}>
      {children}
    </ExperimentContext.Provider>
  );
}

export function useExperiment() {
  const context = useContext(ExperimentContext);
  if (!context) {
    throw new Error('useExperiment must be used within an ExperimentProvider');
  }
  return context;
}