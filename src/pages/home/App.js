import React, {useState, useEffect} from "react";
import AllUser from "../../component/allUser";
import NewUser from "../../component/newUser";
import {Button, Modal} from "react-bootstrap";
function App(props) {

    const [allUser, setAllUser] = useState([
        {id: 1, name: 'علی', age: '23', phone: '091111111', birthday: '22/10/1360'},
        {id: 2, name: 'مهدی', age: '24', phone: '092222222', birthday: '08/3/1362'},
        {id: 3, name: 'رضا', age: '25', phone: '093333333', birthday: '28/11/1366'},
        {id: 4, name: 'آرمان', age: '26', phone: '094444444', birthday: '19/05/1361'},
    ])
    const [newNameValue, setNewNameValue] = useState('');
    const [newAgeValue, setNewAgeValue] = useState('');
    const [newPhoneValue, setNewPhoneValue] = useState('');
    const [newBirthdayValue, setNewBirthdayValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [arrayHolder, setArrayHolder] = useState([]);
    const [inputUserClass, setInputUserClass] = useState('');
    const [inputAgeClass, setInputAgeClass] = useState('');
    const [inputPhoneClass, setInputPhoneClass] = useState('');
    const [inputBirthdayClass, setInputBirthdayClass] = useState('');
    const [smallUser, setSmallUser] = useState('');
    const [smallAge, setSmallAge] = useState('');
    const [smallPhone, setSmallPhone] = useState('');
    const [smallBirthday, setSmallBirthday] = useState('');
    const [newUserBorder, setNewUserBorder] = useState('newUser m-auto mt-5 text-center p-4');

    useEffect(() => {
        setArrayHolder(allUser)
    }, []);

    const searchChange = (event) => {
        const array = arrayHolder.filter((user) => {
            const allData = user.name.toUpperCase();
            const userData = event.target.value.toUpperCase();
            return allData.indexOf(userData) > -1;
        })
        setAllUser(array);
        setSearchValue(event.target.value);
    }

    const newNameHandler = (event) => {
        setNewNameValue(event.target.value);
    }
    const newAgeHandler = (event) => {
        setNewAgeValue(event.target.value);
    }
    const newPhoneHandler = (event) => {
        setNewPhoneValue(event.target.value);
    }
    const newBirthdayHandler = (event) => {
        setNewBirthdayValue(event.target.value);
    }


    const nameChange = (event, id) => {
        const userIndex = allUser.findIndex((user) => {
            return user.id === id
        })
        const user = {...allUser[userIndex]};
        user.name = event.target.value;
        const allData = [...allUser];
        allData[userIndex] = user;
        setAllUser(allData);
    }
    const ageChange = (event, id) => {
        const userIndex = allUser.findIndex((index) => {
            return index.id === id;
        })
        const user = {...allUser[userIndex]};
        user.age = event.target.value;
        const allData = [...allUser];
        allData[userIndex] = user;
        setAllUser(allData);
    }
    const phoneChange = (event, id) => {
        const userIndex = allUser.findIndex((item) => {
            return item.id === id;
        })
        const user = {...allUser[userIndex]};
        user.phone = event.target.value;
        const allData = [...allUser]
        allData[userIndex] = user;
        setAllUser(allData);
    }
    const birthdayChange = (event, id) => {
        const userIndex = allUser.findIndex((item) => {
            return item.id === id;
        })
        const user = {...allUser[userIndex]};
        user.birthday = event.target.value;
        const allData = [...allUser];
        allData[userIndex] = user;
        setAllUser(allData);
    }

    const userDelete = (event, id) => {
        const userIndex = allUser.findIndex((index) => {
            return index.id === id;
        })
        // eslint-disable-next-line no-restricted-globals
        const add = confirm('آیا اطمینان دارید؟')
        if (add){
            const allData = [...allUser];
            allData.splice(userIndex, 1);
            setAllUser(allData);
        }
    }

    const userSubmit = (e)=>{
        e.preventDefault();
        check();
    }

    const check =()=>{

        const newNameValueT = newNameValue.trim()
        const newAgeValueT = newAgeValue.trim()
        const newPhoneValueT = newPhoneValue.trim()
        const newBirthdayValueT = newBirthdayValue.trim()

        if ((newNameValueT !== '') && (newAgeValueT !== '') && (newPhoneValueT !== '') && (newBirthdayValueT !== '')){
            setSuccess();
            emptyInput();
        }else if (newNameValueT === ''){
            setInputUserClass('inputError')
            setSmallUser('نام نباید خالی باشد');
            setNewUserBorder('inputError newUser m-auto mt-5 text-center p-4');
        }else {
            setInputUserClass('inputSuccess')
            setSmallUser('')
        }

        if (newAgeValueT === ''){
            setInputAgeClass('inputError')
            setSmallAge('سن نباید خالی باشد')
            setNewUserBorder('inputError newUser m-auto mt-5 text-center p-4');
        }else {
            setInputAgeClass('inputSuccess')
            setSmallAge('')
        }

        if (newPhoneValueT === ''){
            setInputPhoneClass('inputError')
            setSmallPhone('تلفن نباید خالی باشد')
            setNewUserBorder('inputError newUser m-auto mt-5 text-center p-4');
        }else {
            setInputPhoneClass('inputSuccess')
            setSmallPhone('')
        }
        if (newBirthdayValueT === ''){
            setInputBirthdayClass('inputError')
            setSmallBirthday('تاریخ تولد نباید خالی باشد')
            setNewUserBorder('inputError newUser m-auto mt-5 text-center p-4');
        }else {
            setInputBirthdayClass('inputSuccess')
            setSmallBirthday('')
        }

    }

    const emptyInput = ()=>{
        setInputUserClass('');

        setSmallUser('');
        setSmallAge('');
        setSmallPhone('');
        setSmallBirthday('');

        setNewNameValue('');
        setNewAgeValue('');
        setNewPhoneValue('');
        setNewBirthdayValue('');
    }





    const setSuccess = ()=>{
        // eslint-disable-next-line no-restricted-globals
        const add = confirm('آیا اطمینان دارید؟')
        if (add){
            const allData = [...allUser];
            allData.push({
                id: allUser.length+1,
                name: newNameValue,
                age: newAgeValue,
                phone: newPhoneValue,
                birthday: newBirthdayValue
            })
            setAllUser(allData);
            setNewUserBorder('inputSuccess newUser m-auto mt-5 text-center p-4');
        }
    }
    // function StaticExample() {
    //     return (
    //         <div
    //             className="modal show"
    //             style={{ display: 'block', position: 'initial' }}
    //         >
    //             <Modal.Dialog>
    //                 <Modal.Header closeButton>
    //                     <Modal.Title>Modal title</Modal.Title>
    //                 </Modal.Header>
    //
    //                 <Modal.Body>
    //                     <p>Modal body text goes here.</p>
    //                 </Modal.Body>
    //
    //                 <Modal.Footer>
    //                     <Button variant="secondary">Close</Button>
    //                     <Button variant="primary">Save changes</Button>
    //                 </Modal.Footer>
    //             </Modal.Dialog>
    //             <div>hi</div>
    //         </div>
    //     );
    // }



        return (
            <div>

                <NewUser
                    newNameValue={newNameValue}
                    newAgeValue={newAgeValue}
                    newPhoneValue={newPhoneValue}
                    newBirthdayValue={newBirthdayValue}

                    newNameHandler={newNameHandler}
                    newAgeHandler={newAgeHandler}
                    newPhoneHandler={newPhoneHandler}
                    newBirthdayHandler={newBirthdayHandler}

                    newUser={setSuccess}
                    submit={userSubmit}
                    inputUserClass={inputUserClass}
                    inputAgeClass={inputAgeClass}
                    inputPhoneClass={inputPhoneClass}
                    inputBirthdayClass={inputBirthdayClass}
                    smallUser={smallUser}
                    smallAge={smallAge}
                    smallPhone={smallPhone}
                    smallBirthday={smallBirthday}

                    newUserBorder={newUserBorder}
                />
                <label className={'userList d-block text-center mt-5 mb-5 h2'}>لیست کاربران</label>
                <input required className={'searchBar m-auto d-block w-50 ps-3 pe-3'} type={"text"}
                       placeholder={'search...'} value={searchValue} onChange={searchChange}/>

                <AllUser
                    userList={allUser}
                    delete={userDelete}
                    nameChange={nameChange}
                    ageChange={ageChange}
                    phoneChange={phoneChange}
                    birthdayChange={birthdayChange}
                />
            </div>
        )
}
export default React.memo(App);