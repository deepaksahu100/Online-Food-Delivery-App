import axios from 'axios';
import '../Styles/Edit.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Edit = () => {
    let [category,setcategory] = useState("")
    let [restaurant,setrestaurant] = useState("")
    let [dish, setdish] = useState("")
    let [price, setprice] = useState("")
    let [rating,setrating] = useState("")
    let [thumbnailurl,setthumbnailurl] = useState("")

    let param = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:2525/Product/${param.id}`)
    .then((response)=>{
        console.log(response);
        setdish(response.data.dish)
        setprice(response.data.price)
        setcategory(response.data.category)
        setrestaurant(response.data.restaurant)
        setthumbnailurl(response.data.thumbnailurl)
        setrating(response.data.rating)
    })
    .catch((rej)=>{
        console.log(rej);
    })
    },[])

    let data = {restaurant,dish,price,category,thumbnailurl,rating}

    let editItem = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:2525/Product/${param.id}`,data)
        .then((response)=>{
            alert("Data edited successfully");
        })
        
        .catch((errors)=>{
            alert("Error occured")
        })
    }

    return ( 
        <div className='edit'>
            <div className="edititem">
            <form onSubmit={editItem}>
                <label>
                    Category:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select required value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                        <option>Vegetarian</option>
                        <option>Non-Veg</option>
                        <option>Desserts</option>
                        <option>Starters</option>
                        <option>Beverages</option>
                    </select>
                </label> <br />
                <label>
                Restaurant: &nbsp;&nbsp;&nbsp;<input value={restaurant} onChange={(e)=>setrestaurant(e.target.value)} type="text" placeholder="Enter the restaurant name" />
            </label>  <br /> <br />
            <label>
                Dish Name: &nbsp;&nbsp;<input type="text" value={dish} onChange={(e)=>setdish(e.target.value)} placeholder="Enter the Dish name" />
            </label>  <br /> <br />
            <label>
                Price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={price} onChange={(e)=>setprice(e.target.value)} placeholder="Enter the price" />
            </label>  <br /> <br />
          
            <label> 
                Thumbnails: &nbsp;<input value={thumbnailurl} onChange={(e)=>setthumbnailurl(e.target.value)} type="text" placeholder="Write the image url" />
            </label>  <br /> <br />
            <label>
                Ratings: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={rating} onChange={(e)=>setrating(e.target.value)} placeholder="Write your Ratings" />
            </label>  <br /> <br />
            <button>Update product</button>
            </form>
            </div>
        </div>
     );
}
 
export default Edit;
<div></div>