import React, { useState, useEffect } from 'react';
import ShowImages from '../../api/apiImages';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { getProducts } from '../../api/apiProduct';
//import './ProductByArrival.css';
import './StarsRating.css';
import RatingWidget from './StarsRating';

const ProductByArrival = (props) => {
    const [productsByArrival, setProductsByArrival] = useState([
        {
            name: 'Loja virtual usando React.js e Node.js',
            img: 'https://i.ibb.co/6tC1b8g/COVID.png',
            github: 'https://github.com/alessandrosilva10/ecommerce_react_node'
        },
        {
            name: 'Informações sobre a COVID-19',
            img: 'https://i.ibb.co/6tC1b8g/COVID.png',
            github: 'https://github.com/alessandrosilva10/covid19'

        },
        {
            name: 'TCC - Pentest em Redes WIFi com Python',
            img: 'https://i.ibb.co/6tC1b8g/COVID.png',
            github: 'https://github.com/alessandrosilva10/ecommerce_react_node'
        },
        {
            name: 'FEMA - Cadastro de Grupos com React.js e Django',
            img: 'https://i.ibb.co/6tC1b8g/COVID.png',
            github: 'https://github.com/alessandrosilva10/frontendtux'
        },
        {
            name: 'TCC - Pentest em Redes WIFi com Python',
            img: 'https://i.ibb.co/6tC1b8g/COVID.png',
            github: 'https://github.com/alessandrosilva10/'
        },
        {
            name: 'Web Interface for Squid Proxy Server',
            img: 'https://i.ibb.co/6tC1b8g/COVID.png',
            github: 'https://github.com/alessandrosilva10/interface_proxysquid'
        },
    ]);
    const [error, setError] = useState(false);

    return(
        <><br/>
            <center><h1 id="produtos_cadastrados" style={{color: 'white', paddingBottom: '0px'}}>Últimos Projetos Desenvolvidos</h1></center>
            <Row>
            {productsByArrival.map((product, index) => (
            <Col className="col-sm-3">              
                <Card className="card-stats mb-3 mb-xl-0" style={{height: "97%"}}>
                <CardBody style={{borderRadius: '45px'}} >
                    <div id="descricao" style={{display: 'inline-block;',float: 'center'}}>
                        <span ><strong><center>{product.name}</center></strong></span><br/><br/><br/>
                        <ShowImages id="product-img" className="product-img" id="images" img={product.img} github={product.github}/><br />
                        <RatingWidget />
                        <br/><br/><br/><br/>
                    </div>   
                </CardBody>
                </Card>
            </Col>))}
            </Row>
        </>      
    );
}

export default ProductByArrival;