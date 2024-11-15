import AdminNavbar from "./AdminNavbar";
import '../Styles/AdminHomePage.css';
import { Routes, Route } from "react-router-dom";
import AdminView from "./AdminView";
import AdminProduct from "./AdminProduct";
import Edit from "./Edit";

const AdminHomePage = () => {
    return ( 
        <div className="adminhomepage">
            <AdminNavbar/>


            <Routes>
                <Route path='/adminview' element={<AdminView/>}/>
                <Route path='/adminproduct' element={<AdminProduct/>}/>
                <Route path='/editproduct/:id' element={<Edit/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminHomePage;