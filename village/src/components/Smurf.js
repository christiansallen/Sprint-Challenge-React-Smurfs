import React from "react";

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className="buttons">
        <button className="edit" onClick={e => props.populateForm(e, props.id)}>
          Edit Smurf
        </button>
        <button className="delete" onClick={e => props.delete(e, props.id)}>
          Delete Smurf
        </button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
