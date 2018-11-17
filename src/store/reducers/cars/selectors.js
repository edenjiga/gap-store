export default function(globalState) {
  const state = globalState.cars;

  const getAll = () => {
    return state;
  };

  return {
    getAll
  };
}
