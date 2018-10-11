import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createArticle } from "../actions";

class ArticleNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createArticle(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Article"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Manufacturer"
          name="manufacturer"
          component={this.renderField}
        />
        <Field
          label="URL"
          name="url"
          component={this.renderField}
        />
        <Field
          label="Image URL"
          name="image"
          component={this.renderField}
        />
        <Field
          label="Thumbnail URL"
          name="thumbnail_image"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a Title";
  }
  if (!values.manufacturer) {
    errors.manufacturer = "Enter some Manufacturer";
  }
  if (!values.url) {
    errors.url = "Enter some URL please";
  }
  if (!values.image) {
    errors.image = "Enter some image URL";
  }
  if (!values.thumbnail_image) {
    errors.thumbnail_image = "Enter some Thumbnail URL";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "ArticleNewForm"
})(connect(null, { createArticle })(ArticleNew));
