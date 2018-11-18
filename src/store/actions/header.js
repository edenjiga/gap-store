export const types = {
  TEXT_CHANGED: 'TEXT_CHANGED'
};

export const textChanged = (searchText = '') => ({
  type: types.TEXT_CHANGED,
  payload: {
    data: searchText
  }
});
