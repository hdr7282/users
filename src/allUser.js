import React from "react";
import User from "./component/user";
import 'bootstrap/dist/css/bootstrap.min.css'

function AllUser(props){
    return(
        <div className={'allUser mt-5 text-center m-auto mb-5 d-flex flex-wrap'}>
            {
                props.userList.map((user, index)=>
                    <User
                        key={index}
                        id={user.id}
                        name={user.name}
                        age={user.age}
                        phone={user.phone}
                        birthday={user.birthday}
                        delete={(event)=>{props.delete(event, user.id)}}
                        nameChange={(event)=>{props.nameChange(event, user.id)}}
                        ageChange={(event)=>{props.ageChange(event, user.id)}}
                        phoneChange={(event)=>{props.phoneChange(event, user.id)}}
                        birthdayChange={(event)=>{props.birthdayChange(event, user.id)}}
                    />
                )
            }
        </div>
    )
}
export default React.memo(AllUser);