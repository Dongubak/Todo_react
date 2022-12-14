import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div
        className={cn("checkbox", { checked: checked })}
        onClick={() => onToggle(todo.id)}
      >
        {checked ? (
          <MdCheckBox></MdCheckBox>
        ) : (
          <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
        )}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(todo.id)}>
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};

export default TodoListItem;
