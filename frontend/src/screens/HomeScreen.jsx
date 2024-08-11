import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
// import Products from "../products"
import Product from "../components/Product"
import axios from 'axios'

const HomeScreen = () => {
  const [Products, setProducts] = useState([]);
    
  useEffect(() => {
    const getProducts = async() => {
        const { data } = await axios.get('/api/products');
        console.log(data)
        setProducts(data);
    }

    getProducts();

  }, []);

  return (
    <>
        <h1>Product List</h1>
        <Row>
            {Products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} /> 
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen
