import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/AdminView.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const AdminView = () => {
    let [data,setData] = useState([]);
    let [force, setforce] = useState(true);
    useEffect(()=>{
        axios.get('http://localhost:2525/Product')
    .then((res)=>{
        console.log(res);
        setData(res.data)
    })
    .catch((rej)=>{
        console.log(rej);
    })
    },[force])

    let removeDish = (id, dish)=>{
        axios.delete(`http://localhost:2525/Product/${id}`)
        .then((res)=>{
            console.log(id);
            alert(dish +" had been removed successfully")
            setforce(!force)
        })
        .catch((rej)=>{
            alert("Error occured while deleting item")
        })
    }

    let navigate = useNavigate()
    function editProduct(id){
        navigate(`/adminhomepage/editproduct/${id}`)
    }

    return (
        <div className="adminviewpage"> 
        {data.map((x)=>{
                return (
                    <div className="displayproduct">
                        <img src={x.thumbnailurl} alt="" />
                        <div className="restaurant">
                            <b id="restaurantid">{x.restaurant} ||</b>
                            <b id="rating">{x.rating} <StarRateIcon id="star"/></b>
                        </div>
                        <div className="dishclass">
                        <b>{x.dish}</b>
                        </div>
                        <div className="discount">
                            <strike><span>MRP: ₹{x.price}.00</span></strike>
                        </div>
                       <div className="iconclass">
                       <b>₹{x.price * 0.75}.00</b>
                        <div>
                        <b onClick={()=>{editProduct(x.id)}}><EditIcon/></b>
                        <b onClick={()=>{removeDish(x.id, x.dish)}}><DeleteIcon/></b>
                        </div>
                       </div>
                    </div>
                )
            })
        }
        
</div>
    
     );
}
 
export default AdminView;