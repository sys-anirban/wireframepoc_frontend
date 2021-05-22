import actions from '../components/constants/actionTypes';

export function changeComponent(page) {
  return (dispatch) => {
    dispatch({ type: actions.CHANGE_COMPONENT_TO_RENDER, payload: { page } });
  };
}
