import { createActionTypes } from 'utils';
export const types = {
  TEXT_CHANGED: 'TEXT_CHANGED'
};
// ...createActionTypes('boardCertifications', 'FETCH')

export const textChanged = (searchText = '') => ({
  type: types.TEXT_CHANGED,
  payload: {
    data: searchText
  }
});
