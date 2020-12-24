import React, { Component } from "react";
import PropTypes from "prop-types";
import "./commentItem.css";

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  };
  handleClick = () => {
    console.log(555, this.props);
    const { comment, deleteComment, index } = this.props;
    // 提示
    if (window.confirm(`确定删除${comment.username}的评论吗？`)) {
      deleteComment(index);
    }
  };
  render() {
    const { comment } = this.props;
    console.log();
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.handleClick}>
            删除
          </a>
        </div>
        <p className="user">
          <span>{comment.username}</span>
          <span>说：</span>
        </p>
        <p className="centence">{comment.content}</p>
      </li>
    );
  }
}
