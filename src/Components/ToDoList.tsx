import { useRecoilState, useRecoilValue } from "recoil";
import {
  Categories,
  categorySelector,
  categoryState,
  toDoSelector,
} from "../atoms";
import React from "react";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import AddCategory from "./AddCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const combineCategory = useRecoilValue(categorySelector);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <h1>To Do</h1>
      <hr />
      <AddCategory />
      <hr />
      <div style={{ display: "flex", gap: 10 }}>
        <select value={category} onInput={onInput}>
          {combineCategory.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
          {/* <option value={Categories.TODO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option> */}
        </select>
        <CreateToDo />
      </div>
      <hr />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
