import React from "react";
import Button from "./button";
import 'bootstrap/dist/css/bootstrap.min.css'

function User(props){
    return(
        <div className={'user m-auto mt-2 mb-2'}>
            <div className={'bg-info'}><label>شماره کاربری: {props.id}</label></div>
            <input type={"text"} placeholder={'نام'} value={props.name}  onChange={props.nameChange}/>
            <input type={"text"} placeholder={'سن'} value={props.age} onChange={props.ageChange}/>
            <input type={"text"} placeholder={'تلفن'} value={props.phone} onChange={props.phoneChange}/>
            <input type={"text"} placeholder={'تاریخ تولد'} value={props.birthday} onChange={props.birthdayChange}/>

            <Button btnClass={'red'} clicked={props.delete}>حذف</Button>
        </div>
    )
}
export default React.memo(User);