export const loadState = () => {
    try {
      const serialState = localStorage.getItem('appState');
      if (serialState === null) {
        return undefined;
      }
      const state = JSON.parse(serialState);
      return state;
    } catch (err) {
      return undefined;
    }
};

export const saveState = (state) => {
    try {
      const serialState = JSON.stringify(state);
      localStorage.setItem('appState', serialState);
    } catch(err) {
        console.log(err);
    }
};