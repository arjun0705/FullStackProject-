import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [image,setImage] = useState(null)
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("")

    const navigate = useNavigate();

    const AddProductInfo = async()=>{
        let formfield = new FormData()

        formfield.append('name',name,)
        formfield.append('price',price,)
        formfield.append('description',description,)
        formfield.append('category',category,)
         if (image!=null){
             formfield.append('image',image)
         }

         await axios({
             method:'post',
             url:'http://localhost:8000/api/',
             data:formfield
         }).then((response)=>{
             console.log(response.data);
             navigate('/')
         }
         )
    }



    return(
        <div className="addcontainer">
            {/* <h1>Add Products</h1> */}
            <div>
                <div className="form-group">
                <div className="form-control">
                        <input 
                        type="file"
                        className="form-control form-control lg"
                        name="image"
                        onChange={(e)=>setImage(e.target.files[0])}/>
                    </div>
                    <div className="form-control">
                        <input 
                        type="text"
                        className="form-control form-control lg"
                        placeholder="Enter product Name"
                        name="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    <div className="form-control">
                    <input 
                        type="text"
                        className="form-control form-control lg"
                        placeholder="Enter Product Price"
                        name="price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}/>
                    </div>

                     <div className="form-control">   
                        <textarea 
                        type="text"
                        className="form-control form-control lg"
                        placeholder="Enter Description"
                        name="description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}/>
                    </div>

                    <div className="form-control">
                        <input 
                        type="text"
                        className="form-control form-control lg"
                        placeholder="Enter Category of product"
                        name="category"
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}/>
                    </div> 

                    <button className="addbtn" style={{margin:'10px'}} onClick={AddProductInfo}>AddProduct</button>
                </div>

            </div>
        </div>

    );
};
export default AddProduct;