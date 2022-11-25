import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/Notes/NoteContext";
import NoteItem from "./NoteItem";

export const Note = (props) => {
  const context = useContext(noteContext);
  let navigate= useNavigate();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currNote) => {
    ref.current.click();
    setNote({id:currNote._id, etitle: currNote.title, edescription: currNote.description, etag: currNote.tag})
  };
  const ref = useRef(null);
  const refClose= useRef(null)
  const [note, setNote] = useState({
    id:"",
    etitle: "",
    edescription: "",
    etag: "",
  });
  
  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
    props.showAlert("updated successfully", 'success')

  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* hidden button for edit note */}
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Note
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="my-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={note.etitle}
                  id="title"
                  placeholder="title"
                  name="etitle"
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  placeholder="description"
                  value={note.edescription}
                  id="description"
                  rows="3"
                  name="edescription"
                  onChange={onChange}
                  minLength={5}
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <label htmlFor="etag" className="form-label">
                  Title
                </label>
                <input
                value={note.etag}
                  type="text"
                  className="form-control"
                  id="tag"
                  placeholder="tag"
                  name="etag"
                  onChange={onChange}
                />
              </div>
              
            </div>
            <div className="modal-footer">
              <button
              ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={ note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-5 my-5">
        {notes.length===0 && "No notes to display"}
        {notes.map((note) => {
          return (
            <NoteItem note={note} updateNote={updateNote} showAlert={props.showAlert} key={note._id} />
          );
        })}
      </div>
    </>
  );
};
