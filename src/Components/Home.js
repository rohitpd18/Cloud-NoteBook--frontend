import React from "react";
import AddNote  from "./AddNote";
import { Note } from "./Note";


export const Home = (props) => {
  return (
    <div className="container mx-5">
      <AddNote showAlert={props.showAlert}/>
      <h1 className="fs-1 my-3 fw-semibold">Your Note</h1>
      <hr />
      <Note showAlert={props.showAlert}/>
    </div>
  );
};
