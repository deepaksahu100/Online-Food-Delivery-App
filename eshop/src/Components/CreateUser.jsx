import { useState } from "react";
import '../Styles/AdminSignUp.css'

const CreateUser = () => {

    let [name, setname] = useState("");
    let [email,setemail] = useState("");
    let [phone,setphone] = useState("");
    let [password,setpassword] = useState("");
    let [profile, setprofile] = useState("");
    return ( 
        <div className="ascont1">
        <div className="subcont1">
            <h3>Create Your Account</h3>
        <form className="signupform">
            <label>
                Your Name: &nbsp;&nbsp;<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter your name"></input>
            </label> <br /><br />
            <label>
                User Email: &nbsp;&nbsp; <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter your email"></input>
            </label> <br /><br />
            <label>
                User Phone: &nbsp;<input type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}} pattern="[0-9]{10}" placeholder="Enter Phone number"></input>
            </label> <br /><br />
            <label>
                Password: &nbsp;&nbsp;&nbsp; <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter your Password"></input>
            </label> <br /><br />
            <label>
                Profile: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" value={profile} onChange={(e)=>{setprofile(e.target.value)}} placeholder="Enter your url"></input>
            </label> <br /><br /><br />
            <button>Sign Up</button>
            
        </form>
        </div>
        
    </div>
     );
}
 
export default CreateUser;