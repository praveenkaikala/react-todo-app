import * as React from 'react';
import './checkbox.scss';
import DeleteIcon from '@mui/icons-material/Delete';

export const Checkbox = ({
 key,onClick, checked, onDelete, label, onKeyUp,
}) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={(e)=>onKeyUp(e,key)}
    >
     
      <input tabIndex="-1" type="checkbox" checked={checked} onChange={()=>onClick(key)} />
      <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
    </div>
    {/* <button type="button" className="checkbox-delete" onClick={()=>onDelete(key)}>
      x
    </button> */}
   <DeleteIcon className="deleteicon" sx={{ '&:hover': {color: 'red',cursor:"pointer" }}} onClick={()=>onDelete(key)}/>
  </div>
);
