import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ArticlesReducer from "./reducer_articles";

const rootReducer = combineReducers({
  articles: ArticlesReducer,
  form: formReducer
});

export default rootReducer;
