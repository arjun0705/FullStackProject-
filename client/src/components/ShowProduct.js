import axios from "axios";
import React,{useState,useEffect} from "react";
import { Card,} from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowProduct = () => {
    const [products,setProducts] =useState([])

    const getProducts = async() =>{
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)

    }

    useEffect(()=>{
        getProducts();
    },
    [])

    return(
        <div>
        <div className="products-card-info">
            {
                products.map((products,index)=>(              
                    <div>
                    <Card className="m-2 rounded shadow-lg " style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={products.image} />
                    <Card.Body>
                     <p style={{color:'black'}}> <Card.Title>{products.name}</Card.Title>
                      <Card.Text className="product-price-info">${products.price}</Card.Text>
                      <Card.Text className="product-category-info" >{products.category}</Card.Text>
                      {/* <Button variant="primary">Show Detail</Button> */}</p>
                      <Link className="btn btn-primary" to={`preview/${products.id}`}> Show Details</Link>
                    </Card.Body>
                  </Card>
                  </div>
                )
                )
            }
        </div>
        </div>
    );
};
export default ShowProduct;
