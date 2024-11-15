import {Link} from "react-router-dom"
import '../Styles/LandingPage.css'
import '../Images/logoRushMart.png'

const LandingPage = () => {
    return ( 
        <div className="Landingpage">
            <div className="lpcontainer">
                {/* <h1 id="logotext">RushMart</h1> */}
                <img className="logoimage" height="47px" width="170px" src="https://github.com/deepsahu007/practice/blob/main/logoRushMart.png?raw=true" alt="available" /> <br />
                <b style={{"color":"black"}}>Welcome to RushMart, India's no. 1 Online Shopping Platform :) </b><br />
                <i style={{"color":"black"}}>Click below to continue... </i>
            </div>
            {/* ========================== */}
            <div className="sub_lp">
            <div className="lpcontainer1">
            <Link to="/admin">
            <img id="i1" src="https://cdn-icons-png.flaticon.com/512/4919/4919646.png" alt="" />
            <h3>Admin</h3>
            </Link>
            </div>
            
            <div className="lpcontainer1">
            <Link to="/user">
                <img id="i2" src="https://icon-library.com/images/individual-icon-png/individual-icon-png-10.jpg" alt="" />
                <h3>User</h3>
            </Link>
            </div>
        </div>

        </div>
     ); 
}
 
export default LandingPage
