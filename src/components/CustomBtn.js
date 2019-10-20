import React from 'react';
import './CustomBtn.css';

let saySmth = function(e) {
    alert(123, e);
};
var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear(); 
var fulDate = date + ":" + month + ":" + year;
console.log(fulDate);
function CustomBtn() {
  return (
  	<div>
      <button className="custom-btn"
      onClick={ saySmth }>Submit</button>
      <p>{fulDate}</p>
    </div>
  );
}

export default CustomBtn;
