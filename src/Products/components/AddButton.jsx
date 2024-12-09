const AddButton = ({ onClick }) => {
  return (
    <div className="section">
      <div className="is-pulled-right">
        <button onClick={onClick} className="button is-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddButton;
