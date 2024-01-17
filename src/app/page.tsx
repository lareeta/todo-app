"use client";

import { useState } from "react";

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState([
    "Make UI design in Figma",
    "Implement the markup with pure HTML/CSS",
    "Make the markup interactive using pure JavaScript",
    "Publish the repository in GitHub",
    "Deploy the app to Netlify",
    "Read and write tasks from/to local storage",
    "Rewrite the app using React.js",
  ]);

  const [name, setName] = useState("");

  function handleChange(event: any) {
    setName(event.target.value);
  }

  function handleAdd() {
    if (name == "") {
      return;
    }

    if (tasks.includes(name)) {
      return;
    }

    const newList = tasks.concat(name);
    setName("");
    setTasks(newList);
  }

  const deleteByValue = (value: string) => {
    setTasks((oldValues) => {
      return oldValues.filter((task) => task !== value);
    });
  };

  return (
    <div className="container">
      <div className="head">
        <input
          className="input"
          placeholder="Type task name"
          value={name}
          onChange={handleChange}
        ></input>
        <button className="button" onClick={handleAdd}>
          ADD
        </button>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <div className="taskItem" key={task}>
            <label>
              <input type="checkbox" />
              <span>{task}</span>
            </label>
            <button className="buttonItem" onClick={() => deleteByValue(task)}>
              <CloseIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
