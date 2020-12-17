import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


const Graduacao = () => {
    return(
        <>
            <Row>
            <Col xl="6">     
                <Card className="card-stats mx-auto" style={{height: "100%"}}>
                <CardBody  style={{borderRadius: '45px'}} >
                    <img src="http://www.fema.edu.br/images/logo.png" alt="." height="70px"/><br/><br/>
                    <span><strong>Universidade:</strong> Fundação Educacional do Munícipio de Assis</span><br/>
                    <span><strong>Curso:</strong> Ciência da Computação</span><br/>
                    <span><strong>Início:</strong> 2017</span><br/>
                    <span><strong>Término:</strong> 2020</span><br/>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </>      
    );
}

export default Graduacao;