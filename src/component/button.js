import React from "react";

function Button(props){

    let btnClass = 'btnClass'
    switch (props.btnClass){
        case 'red':{
            btnClass = 'red';
            break;
        }
        case 'blue':{
            btnClass = 'blue';
            break;
        }
        case 'green':{
            btnClass = 'green';
            break;
        }
        case 'pink':{
            btnClass = 'pink';
            break;
        }
        default : btnClass = 'blue';
    }
    return(
        <button className={btnClass} onClick={props.clicked}>
            {props.children}
        </button>
    )
}
export default React.memo(Button);