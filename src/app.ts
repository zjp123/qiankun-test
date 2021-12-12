import { useState } from 'react';
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({ zjp: 'NB' });

  return {
    masterState,
    setMasterState,
  };
}
