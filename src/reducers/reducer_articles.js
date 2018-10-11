import _ from "lodash";
import { FETCH_ARTICLES, FETCH_ARTICLE, DELETE_ARTICLE, IS_LOADING_SHOW } from "../actions";

export default function (state = { isLoadingShow: true, article: [{}], articles: [] }, action) {
  switch (action.type) {
    case DELETE_ARTICLE:
      return _.omit(state, action.payload);
    case FETCH_ARTICLE:
      return { ...state, article: action.payload.data };
    case FETCH_ARTICLES:
      return { ...state, articles: action.payload.data }
    case IS_LOADING_SHOW:
      return { ...state, isLoadingShow: action.payload };
    default:
      return state;
  }
}
