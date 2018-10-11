import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticles } from "../actions";

class ArticlesIndex extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  renderArticles() {
    return this.props.articles.map(article => {
      return (
        <li className="list-group-item" key={article.article_id}>
          <Link to={`/article/${article.article_id}`}>
            {article.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    if (this.props.articles.length === 0) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/article/new">
            + Add Article
          </Link>
        </div>
        <h3>Articles</h3>
        <ul className="list-group">
          {this.renderArticles()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles
  };
}

export default connect(mapStateToProps, { fetchArticles })(ArticlesIndex);
