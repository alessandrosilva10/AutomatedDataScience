import React, { useState, useEffect } from 'react';
import ShowImages from '../../api/apiImages';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { getProducts } from '../../api/apiProduct';
import './ProductByArrival.css';
import './StarsRating.css';
import RatingWidget from './StarsRating';

const ProductBySell = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then((data,error) => {
            if(error) {
            setError(true);
            }else{
            setProductsBySell(data);
            }
        });
    };

    useEffect(() => {
        loadProductsBySell();
    }, []);

    return(
        <>
            <h1 id="produtos_cadastrados" style={{color: 'white', paddingBottom: '23px',paddingTop: '5px'}}>Produtos mais vendidos</h1>
            <Row>
            {productsBySell.map((product, index) => (
            <Col lg="2" xl="2">              
                 <Card onClick={() => window.location.replace("/admin/search="+product._id)} className="card-stats mb-3 mb-xl-0" style={{height: "77%"}}>
                <CardBody  style={{borderRadius: '45px'}} >
                    <ShowImages id="product-img" className="product-img" item={product._id} url="product"/><br />
                    <div id="descricao" style={{display: 'inline-block;',float: 'center'}}>
                        <span ><strong>{product.name}</strong></span><br/>
                        <span><strong>Preço:</strong> R${product.price}</span> <br/>
                        <RatingWidget />
                        {/*<span><strong>Disponível:</strong> {product.quantity} unidades</span>*/}
                        <br/><br/><br/><br/>
                    </div>{/*
                    <div style={{float: "center"}}>
                        <button
                        style={{
                        cursor: "pointer",
                        bottom: "28px",
                        height: "35px",
                        background: "dodgerblue",
                        color: "white",
                        borderRadius: "4px",
                        borderColor: "dodgerblue",
                        border: "1px solid dodgerblue",
                        fontWeight: "700",
                        fontSize: ".8em",
                        marginLeft: '40px',
                        marginTop: '20px',
                        }}
                        onClick={() => alert("Produto " + product.name + " adicionado ao carrinho!")}><i class="far fa-money-bill-alt"></i> Comprar</button>
    
                        <button 
                        style={{
                        cursor: "pointer",
                        bottom: "28px",
                        height: "35px",
                        background: "dodgerblue",
                        color: "white",
                        borderRadius: "4px",
                        borderColor: "dodgerblue",
                        border: "1px solid dodgerblue",
                        fontWeight: "700",
                        fontSize: ".8em",
                        marginLeft: '60px',
                        marginTop: '20px',
                        }}
                        onClick={() => alert("Produto " + product.name + " adicionado ao carrinho!")}><i class="far fa-eye"></i> Detalhes</button>
                    </div>*/}
                </CardBody>
                </Card>
            </Col>))}
            </Row>
        </>      
    );
}

export default ProductBySell;