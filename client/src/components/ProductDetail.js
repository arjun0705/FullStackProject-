import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

 const ProductDetail=()=> {

        const [products, setproducts] = useState("")

        const { id } = useParams();
        const navigate = useNavigate();

        const getsingleproduct = async () =>{
            const {data} = await axios.get(`http://localhost:8000/api/${id}/`)
            console.log(data)
            setproducts(data)
        }

        useEffect(() => {
            getsingleproduct();
        },[])

        const deleteProduct = async(id)=>{
            await axios.delete(`http://localhost:8000/api/${id}/`)
            navigate(`/`)
        }


  return (
    <div  className="preview">
        <div>
            <img className='image' src={products.image} alt="" height = "250" width="350"/>
            <ul className='lists'> 
            <li>Name: {products.name}</li>
            <li>Price: {products.price}</li>
            <li>Description: {products.description}</li>
            <li>Category: {products.category}</li>
            </ul>
           

            <Link className='update-btn' style={{color:'white', textDecoration:'none',margin:'50px'}} to={`/update/${products.id}`}> Update</Link>
           <button className='delete-btn'  onClick={()=>deleteProduct(products.id)}> Delete </button>



        </div>
    </div>
  );
};

export default ProductDetail