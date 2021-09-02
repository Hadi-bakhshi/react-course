import { useState } from "react";
const HookObject = () => {
    const [user, setUser] = useState({firstName:"", lastName:""});
    const changeHandler = (e) =>{
        setUser({ ...user,firstName: e.target.value});
    };
    const lastNameHandler = (e) =>{
        setUser({ ...user,lastName: e.target.value });
    };
    return ( 
        <form>
            <input type="text" value={user.firstName} onChange={changeHandler} />
            <input type="text" value={user.lastName} onChange={lastNameHandler} />
            <h2> My name is {user.firstName}</h2>
            <h2> My last name is  {user.lastName}</h2>
        </form>

      
     );
}
 
export default HookObject;