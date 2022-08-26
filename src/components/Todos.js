import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

class Todos extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodos());
  }

  render() {
    const { loading, items, error } = this.props;
    if (loading) return <span>loading...</span>;
    if (error) return <span>error!</span>;

    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { todos } = state;
  return {
    loading: todos.loading,
    items: todos.data,
    error: todos.error
  };
};

export default connect(mapStateToProps)(Todos);
