import React, {useContext} from "react";
import noteContext from "../Context/Notes/NoteContext";


const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;

  const { note,updateNote} = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">
            {note.description}
          </p>
          <i className="fa-solid fa-trash" onClick={()=>{deleteNote(note._id); props.showAlert("Note deleted successfully", 'success')}}></i>
          <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
