import React from "react";

export const Alert = (props) => {
  const capitalize=(word)=>{
    if(word==='danger'){
      word='error'
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1)
  }

  return (
    <div>
      {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.massage}
      </div>}
    </div>
  );
};
