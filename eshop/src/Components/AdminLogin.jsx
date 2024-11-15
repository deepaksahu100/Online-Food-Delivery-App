import { useEffect, useState } from "react";
import '../Styles/AdminLogin.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const AdminLogin = () => {
    let [uname,setuname] = useState("");
    let [pass, setpass] = useState("");
    let [admin, setadmin] = useState([]);

    let navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:2525/Manager')
    .then((res)=>{
        console.log(res.data);
        setadmin(res.data)
    })
    .catch((rej)=>{
        console.log(rej +"invalid data");
    })
    },[])

    function login(e){
      e.preventDefault();
      let val = false;
      admin.map((x)=>{
        if(uname == x.email  && pass == x.password){
            alert("Successfully login")
            navigate('/adminhomepage');
            val = true;
        }
      })
      if(val == false){
        alert("Invalid inputs")
      }
    }


   

    return ( 
        <div className="Adminlogin">
            
            <div className="admincontainer1">
                <div>
                    <h3 id="loginheading">Admin Login</h3>
                </div>
            <div >
            <label>
                Username: <br /> <input type="text" value={uname} onChange={(e)=>{setuname(e.target.value)}} placeholder="Enter your username" />
            </label> 
            </div>
            <div className="passwordcontainer">
            <label>
                Password: <br /> <input type="password" value={pass} onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter your password" />
            </label></div> 
            <div>
            <button className="loginbutton" onClick={login}>Login</button>
            <p>Dont have an account? <Link id="createbutton" to="/adminsignup">Create new</Link></p>
            </div>
            </div>
            
        </div>
     );
}
 
export default AdminLogin; 