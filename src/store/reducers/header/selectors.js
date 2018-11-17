export default function(globalState) {
  const state = globalState.header;

  const getSearchText = () => {
    return state.searchText;
  };

  return {
    getSearchText
  };
}
