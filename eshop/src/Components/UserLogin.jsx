import { useState } from "react";
import '../Styles/AdminLogin.css';
import { Link } from "react-router-dom";

const UserLogin = () => {

    let [uname,setuname] = useState("");
    console.log(uname);
    let [pass, setpass] = useState("");

    function login(){
        if(uname == "admin"  ){
            alert("Successful")

        }else{
            alert("Login not done yet")
        }
    }

    return ( 
        <div className="Adminlogin">
            
        <div className="admincontainer1">
            <div>
                <h3 id="loginheading">User Login</h3>
            </div>
        <div >
        <label>
            Username: <br /> <input type="text" value={uname} onChange={(e)=>{setuname(e.target.value)} } placeholder="Enter your username" />
        </label> 
        </div>
        <div className="passwordcontainer">
        <label>
            Password: <br /> <input type="password" value={pass} onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter your password"/>
        </label></div> 
        <div>
        <button className="loginbutton" onClick={login}>Login</button>
        <p>Dont have an account? <Link id="createbutton" to="/createuser">Create new</Link></p>
        </div>
        </div>
        
    </div>
     );
}
 
export default UserLogin;