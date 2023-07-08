import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';

function NewUser(props){
    return(
        <div className={props.newUserBorder}>
            <div><label className={'h2'}>کاربر جدید</label></div>
            <form>
               <div className={'mt-2'}>
                    <label>نام</label>
                    <div className={'position-relative'}>
                        <small className={'inputSmall pe-5 text-danger position-absolute'}>{props.smallUser}</small>
                        <input className={props.inputUserClass} type={"text"} placeholder={'نام'} value={props.newNameValue} onChange={props.newNameHandler}/>

                    </div>
                </div>
                <div className={'mt-2'}>
                    <label>سن</label>
                    <div className={'position-relative'}>
                        <small className={'inputSmall pe-5 text-danger position-absolute'}>{props.smallAge}</small>
                        <input className={props.inputAgeClass} type={"number"} placeholder={'سن'} value={props.newAgeValue} onChange={props.newAgeHandler}/>
                    </div>

                </div>
                <div className={'mt-2'}>
                    <label>تلفن</label>
                    <div className={'position-relative'}>
                        <small className={'inputSmall pe-5 text-danger position-absolute'}>{props.smallPhone}</small>
                        <input className={props.inputPhoneClass} type={"number"} placeholder={'تلفن'} value={props.newPhoneValue} onChange={props.newPhoneHandler}/>
                    </div>
                </div>
                <div className={'mt-2'}>
                    <label>تاریخ تولد</label>
                    <div className={'position-relative'}>
                        <small className={'inputSmall pe-5 text-danger position-absolute'}>{props.smallBirthday}</small>
                        <input className={props.inputBirthdayClass} type={"date"} placeholder={'تاریخ تولد'} value={props.newBirthdayValue} onChange={props.newBirthdayHandler}/>
                    </div>
                </div>

                <button className={'btn btn-primary mt-2'} type={"submit"} onClick={props.submit}>اد کردن</button>
            </form>




        </div>
    )
}
export default React.memo(NewUser);

// <input type={"text"} placeholder={'نام'} value={props.newNameValue} onChange={props.newNameHandler}/>
// <input type={"number"} placeholder={'سن'} value={props.newAgeValue} onChange={props.newAgeHandler}/>
// <input type={"number"} placeholder={'تلفن'} value={props.newPhoneValue} onChange={props.newPhoneHandler}/>
// <input type={"date"} placeholder={'تاریخ تولد'} value={props.newBirthdayValue} onChange={props.newBirthdayHandler}/>
//
// <Button btnClass={'blue'} clicked={props.newUser}>اضافه کردن</Button>
