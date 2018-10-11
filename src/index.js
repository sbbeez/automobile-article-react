import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import ArticlesIndex from "./components/articles_index";
import ArticleNew from "./components/article_new";
import ArticleShow from "./components/article_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div style={{paddingTop:50}}>
      <h1>Auto Articles</h1>
        <Switch>
          <Route path="/article/new" component={ArticleNew} />
          <Route path="/article/:id" component={ArticleShow} />
          <Route path="/" component={ArticlesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
