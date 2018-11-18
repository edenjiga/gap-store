export default function(globalState) {
  const state = globalState.selectedCars;

  const getState = () => {
    return state;
  };

  return {
    getState
  };
}
