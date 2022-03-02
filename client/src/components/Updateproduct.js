import axios from "axios";
import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';


const UpdateProduct = () => {
    const [image,setImage] = useState(null)
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("")

    const navigate = useNavigate();
    const { id } = useParams();

    const loadProducts = async()=>{
        const {data} = await axios.get(`http://localhost/api/${id}/`);
        console.log(data);
        setImage(data.image)
        setName(data.name)
        setPrice(data.price)
        setDescription(data.description)
        setCategory(data.category)
    }

    useEffect(()=>{
    loadProducts()
    },[] )

    const UpdateProductInfo = async()=>{
        let formfield = new FormData()

        formfield.append('name',name,)
        formfield.append('price',price,)
        formfield.append('description',description,)
        formfield.append('category',category,)
         if (image!=null){
             formfield.append('image',image)
         }

         await axios({
             method: 'PUT',
             url: `http://localhost:8000/api/${id}/`,
             data:formfield
         }).then((response)=>{
             console.log(response.data);
             navigate('/')
         })
    }


    return(

    <div className="update">
        
                   <div>
                        <input style={{margin:'10px'}}
                        type="file"
                        className="form-control form-control lg"
                        name="image"
                        onChange={(e)=>setImage(e.target.files[0])}/>
                    
                    
                        <input style={{margin:'10px'}}
                        type="text"
                        className="form-control form-control lg"
                        placeholder="Enter your Name"
                        name="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                    

                    
                       <input style={{margin:'10px'}}
                        type="text"
                        className="form-control form-control lg"
                        placeholder="Enter Product Price"
                        name="price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}/>
                    

                      
                        <textarea style={{margin:'10px'}}
                        type="text"
                        className="form-control form-control lg"
                        placeholder="Enter Description"
                        name="description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}/>
                   

                 
                        <input style={{margin:'10px'}}
                        type="text"
                        className="form-control form-control lg"
                        placeholder="Enter Category of product"
                        name="category"
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}/>
                  
                        <button className="btn btn-success" style={{margin:'10px'}} onClick={UpdateProductInfo}>Update Product</button>

                    </div>  

    </div>

    
    
    
    
    );
};
export default UpdateProduct;

