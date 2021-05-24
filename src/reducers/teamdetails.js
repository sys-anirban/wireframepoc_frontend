import actions from '../components/constants/actionTypes';

const defaultState = {
  isLoadingTeamdetails: false,
  teammembers: [],
};
export const teamdetails = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_TEAM_DETAILS:
      return {
        ...state,
        isLoadingTeamdetails: true,
      };
    case actions.RECEIVE_TEAM_DETAILS:
      return {
        ...state,
        isLoadingTeamdetails: false,
        teammembers: [...action.payload.teamdetails.teammembers],
      };
    case actions.FAILED_TO_FETCH_TEAM_DETAILS:
      return {
        ...state,
        isLoadingTeamdetails: false,
      };
    default:
      return state;
  }
};
