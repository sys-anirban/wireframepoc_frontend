import actions from '../components/constants/actionTypes';

const defaultState = {
  page: 'dashboard',
};

export const componentHandler = (state = defaultState, action) => {
  switch (action.type) {
    case actions.CHANGE_COMPONENT_TO_RENDER:
      return { ...state, page: action.payload.page };
    default:
      return state;
  }
};
