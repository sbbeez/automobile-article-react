import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticle, deleteArticle, isLoadingShowAction } from "../actions";

class ArticleShow extends Component {

  // const { divStyle, thumbnailStyle, headStyle } = styles;

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.isLoadingShowAction(true);
    this.props.fetchArticle(id);
    this.props.isLoadingShowAction(false);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteArticle(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { article } = this.props;
    if (!article) {
      const { id } = this.props.match.params;
      this.props.fetchArticle(id);
      return <div>Loading...</div>;
    }

    return (
      this.props.isLoadingShow ? <div>Loading...</div> :
        <div>
          <br />
          <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}
          >
            Delete Post
        </button>
          <Link to="/">Back To Index</Link>
          <br /> <br />
          <div style={{ flexDirection: 'row', justifyItems: '' }}>
            <img src={article.thumbnail_image} style={{ flex: 1, height: 100, width: 100 }} />
            <h3 style={{ flex: 2 }}>{article.title}</h3>
          </div>
          <h6>Manufacturer: {article.manufacturer}</h6>
          <br />
          <img src={article.image} style={{ flex: 1 }} />
          <br />
          <h6> <a href={article.url} target="_blank">Click </a> for More about it </h6>
        </div>
    );
  }
}
function mapStateToProps(state) {
  const { article, isLoadingShow } = state.articles
  return { article: article[0], isLoadingShow };
}

export default connect(mapStateToProps, { fetchArticle, deleteArticle, isLoadingShowAction })(ArticleShow);
