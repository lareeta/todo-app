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
  return (
    <div className="container">
      <div className="head">
        <input className="input" placeholder="Type task name"></input>
        <button className="button">ADD</button>
      </div>
      <div className="tasks">
        <div className="taskItem">
          <label>
            <input type="checkbox" />
            <span>Make UI design in Figma</span>
          </label>
          <button className="buttonItem">
            <CloseIcon />
          </button>
        </div>
        <div className="taskItem">
          <label>
            <input type="checkbox" />
            <span>Implement the markup with pure HTML/CSS</span>
          </label>
          <button className="buttonItem">
            <CloseIcon />
          </button>
        </div>
        <div className="taskItem">
          <label>
            <input type="checkbox" />
            <span>Make the markup interactive using pure JavaScript</span>
          </label>
          <button className="buttonItem">
            <CloseIcon />
          </button>
        </div>
        <div className="taskItem">
          <label>
            <input type="checkbox" />
            <span>Publish the repository in GitHub</span>
          </label>
          <button className="buttonItem">
            <CloseIcon />
          </button>
        </div>
        <div className="taskItem">
          <label>
            <input type="checkbox" />
            <span>Deploy the app to Netlify</span>
          </label>
          <button className="buttonItem">
            <CloseIcon />
          </button>
        </div>
        <div className="taskItem">
          <label>
            <input type="checkbox" />
            <span>Read and write tasks from/to local storage</span>
          </label>
          <button className="buttonItem">
            <CloseIcon />
          </button>
        </div>
        <div className="taskItem">
          <label>
            <input type="checkbox" />
            <span>Rewrite the app using React.js</span>
          </label>
          <button className="buttonItem">
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
