import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";


const ProductAll = () => {
    let [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();


    const getProducts = async () => {
        try {
            let url = `http://localhost:5000/products`;
            let response = await fetch(url);
            let data = await response.json();
            setProductList(data);
            console.log(data);
        } catch (err) {
            console.log(err)
        }


    }
    useEffect(() => {
        getProducts();

    }, [])
    return (

        < div >
            <Container>

                <Row>
                    {productList.map((item) => (
                        <Col lg={3} key={item.id}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>


            </Container>




        </div >
    )
}

export default ProductAll