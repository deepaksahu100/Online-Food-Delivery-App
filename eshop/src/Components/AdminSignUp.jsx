import { useState } from "react";
import '../Styles/AdminSignUp.css'
import axios from 'axios'

const AdminSignUp = () => {
    let [name, setname] = useState("");
    let [email,setemail] = useState("");
    let [phone,setphone] = useState("");
    let [password,setpassword] = useState("");
    let [profile, setprofile] = useState("");
    //================================================

    let admins = {name,email,phone,password,profile}
    let addAdmin = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:2525/Manager',admins)
        .then((res)=>{ 
            alert("Successfully added")
        })
        .catch((rej)=>{
            alert("Invalid")
        })




        // fetch("http://localhost:6969/Manager",{
        //     method : "POST",
        //     headers : {"Content-Type" : "application/json"},
        //     body : JSON.stringify(admins)

        // })
        // .then((res)=>{
        //     console.log(res);
        //     alert("Admin created :)")
        // })
        // .catch((err)=>{
        //     alert("Sahi data dalo")
        // })
    }

//===================================================================

    return ( 
        <div className="ascont1">
            <div className="subcont1">
                <h3>Create Your Account</h3>
            <form onSubmit={addAdmin} className="signupform">
                <label>
                    Admin Name: &nbsp;&nbsp;<input required  type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter your name"></input>
                </label> <br /><br />
                <label>
                    Admin Email: &nbsp;&nbsp; <input required type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter your email"></input>
                </label> <br /><br />
                <label>
                    Admin Phone: &nbsp;<input required type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}} pattern="[0-9]{10}" placeholder="Enter Phone number"></input>
                </label> <br /><br />
                <label>
                    Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input required type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter your Password"></input>
                </label> <br /><br />
                <label>
                    Profile:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input required type="text" value={profile} onChange={(e)=>{setprofile(e.target.value)}} placeholder="Enter your url"></input>
                </label> <br /><br /><br />
                <button>Sign Up</button>
                
            </form>
            </div>
            
        </div>
     );
}
 
export default AdminSignUp;