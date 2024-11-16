import React from "react";
import { useNavigate } from "react-router-dom";

const GetNotes = () => {
  const navigate = useNavigate();

  const goToAddNote = () => {
    navigate("/add-note");
  };
  return (
    <div className="notes">
      <div className="add-note note-box" onClick={goToAddNote}>
        <h3>
          <i className="fa-solid fa-plus"></i>
        </h3>
      </div>
      <div className="note-box">
        <h3>My Second Note</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          gravida, tortor nec bibendum varius, nunc elit
        </p>
      </div>
      <div className="note-box">
        <h3>My Third Note Long Title Have</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          gravida, tortor nec bibendum varius, nunc elit
        </p>
      </div>
    </div>
  );
};
export default GetNotes;
