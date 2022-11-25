import React, { useContext, useState } from "react";
import noteContext from "../Context/Notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("Note added successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1 className="fs-1 my-3 fw-semibold">Add Note</h1>
      <hr />
      <form action="/" onSubmit={handleClick}>
        <div className="my-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="title"
            name="title"
            onChange={onChange}
            minLength={5}
            required
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            placeholder="description"
            id="description"
            rows="3"
            name="description"
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
          ></textarea>
        </div>
        <div className="my-3">
          <label htmlFor="tag" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            placeholder="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
