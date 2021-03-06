import { useState } from 'react';
function VisibilityControl(props) {

  
  return (
    <div className="container">
        <div className="form-check">
            <input 
                type="checkbox"
                className="form[check-input"
                checked={props.isChecked}
                onChange={e=> props.callback(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                Show {props.description}
            </label>
        </div>
    </div>
    
  );
}

export default VisibilityControl;
