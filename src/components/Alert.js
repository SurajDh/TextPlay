import React from 'react';

function Alert(props){
    const capitalize=(word)=>{
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+word.slice(1);
    }
    return (
      <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible show" role="alert`}>    
    <strong>{capitalize(props.alert.type)}: {props.alert.msg}</strong>
  </div>}
</div>
    );
}

export default Alert;