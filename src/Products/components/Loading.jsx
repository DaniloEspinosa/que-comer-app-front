
const Loading = () => {
  return (
    <div className="container">
      <div className="columns is-centered">
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      </div>
    </div>
  );
};

export default Loading;
