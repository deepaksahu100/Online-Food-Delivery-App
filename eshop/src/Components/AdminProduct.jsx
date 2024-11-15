import axios from 'axios';
import '../Styles/AdminProduct.css';
import { useState } from "react";


const AdminProduct = () => {
    //========================================================\
    let [category,setcategory] = useState("vegetarian");
    console.log(category);
    let [restaurant,setrestaurant] = useState("");
    let [dish,setdish] = useState("");
    let [price,setprice] = useState("");
    let [thumbnailurl,setthumbnailurl] = useState("");
    let [rating,setrating] = useState("");

    let data = {category,restaurant,dish,price,thumbnailurl,rating};
    let addproduct = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:2525/Product',data)
        .then((res)=>{
            console.log(res);
            alert("Your Dish is added successfully")
        })
        .catch((rej)=>{
            alert("Invalid data check again for changes")
        })
       

    }
    //======================================================
    return ( 
       
          <div className='adminproduct'>
             <div className='additem'>
            <form onSubmit={addproduct}>
            <label>
                category: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select value={category} onChange={(e)=>setcategory(e.target.value)}>
                    <option>Vegetarian</option>
                    <option>Non Veg</option>
                    <option>Desserts</option>
                    <option>Starters</option>   
                    <option>Beverages</option>
                </select>
            </label><br /> <br />
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
            <button>Add product</button>
            </form>
           </div>
          </div>
       
     );
}
 
export default AdminProduct;
