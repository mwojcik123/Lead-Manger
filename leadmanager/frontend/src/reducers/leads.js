import {
  GET_LEADS,
  DELETE_LEAD,
  ADD_LEAD,
  DETAIL_LEAD,
  UPDATE_LEAD
} from "../actions/types.js";

const initialState = {
  leads: [],
  lead_detail: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };
    case DETAIL_LEAD:
      return {
        ...state,
        lead_detail: action.payload

      };
    case UPDATE_LEAD:
        return{
            ...state,
            lead_detail: {},
            leads: [...state.leads, action.payload]
        }
    default:
      return state;
  }
}
