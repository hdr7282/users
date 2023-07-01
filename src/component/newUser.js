import React from "react";
import Button from "./button";
import 'bootstrap/dist/css/bootstrap.min.css';

function NewUser(props){
    return(
        <div className={'newUser m-auto mt-5 text-center p-4'}>
            <div><label className={'h2'}>کاربر جدید</label></div>
            <input className={props.use} type={"text"} placeholder={'نام'} value={props.newNameValue} onChange={props.newNameHandler}/>
            <small></small>
            <input type={"number"} placeholder={'سن'} value={props.newAgeValue} onChange={props.newAgeHandler}/>
            <input type={"number"} placeholder={'تلفن'} value={props.newPhoneValue} onChange={props.newPhoneHandler}/>
            <input type={"date"} placeholder={'تاریخ تولد'} value={props.newBirthdayValue} onChange={props.newBirthdayHandler}/>

            <Button btnClass={'blue'} clicked={props.newUser}>اضافه کردن</Button>
        </div>
    )
}
export default React.memo(NewUser);