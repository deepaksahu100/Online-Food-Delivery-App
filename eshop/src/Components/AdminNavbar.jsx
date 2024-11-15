import { Link } from "react-router-dom";
import '../Styles/AdminNavbar.css';

const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
          <div className="logo">
            {/* <img src="https://github.com/deepsahu007/practice/blob/main/logoRushMart.png?raw=true" alt="" /> */}
            <h1>being<span>Foodie:)</span></h1>
          </div>
          <div className="options">
            <Link to='/adminhomepage/adminview'>View products</Link>
            <Link to='/adminhomepage/adminproduct'>Add Product</Link>
            
          </div>
        </div>
     );
}
 
export default AdminNavbar;

