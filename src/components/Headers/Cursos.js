import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


const Cursos = () => {
    const [cursos, setCursos] = useState([
        {
            name: 'Curso de Inglês Kultivi',
            pdf: 'https://cepein.femanet.com.br/ArqGeds/alunos/28628102202014427.pdf',
            link: 'https://kultivi.com/',
            image: 'https://www.flaticon.com/svg/static/icons/svg/136/136522.svg'
        },
        {
            name: 'TOEFL Made Easy 2020',
            pdf: 'https://cepein.femanet.com.br/ArqGeds/alunos/337312710202012517.pdf',
            link: 'https://www.udemy.com/course/toefl-made-easy-all-four-skills-preparation-course-2020/',
            image: 'https://www.flaticon.com/svg/static/icons/svg/136/136522.svg'
        },
        {
            name: 'Modern React with Redux',
            pdf: 'https://cepein.femanet.com.br/ArqGeds/alunos/337322710202013234.pdf',
            link: 'https://www.udemy.com/course/toefl-made-easy-all-four-skills-preparation-course-2020/',
            image: 'https://www.flaticon.com/svg/static/icons/svg/136/136522.svg'
        },
        {
            name: 'The Complete Bootstrap 5 Course',
            pdf: 'https://cepein.femanet.com.br/ArqGeds/alunos/321482082020145250.pdf',
            link: 'https://kultivi.com/',
            image: 'https://www.flaticon.com/svg/static/icons/svg/136/136522.svg'
        },
        {
            name: 'SQL with PostgreSQL',
            pdf: 'https://cepein.femanet.com.br/ArqGeds/alunos/321161982020145945.pdf',
            link: 'https://www.udemy.com/course/toefl-made-easy-all-four-skills-preparation-course-2020/',
            image: 'https://www.flaticon.com/svg/static/icons/svg/136/136522.svg'
        },
        {
            name: 'Superior English Speaking: Master Skills',
            pdf: 'https://cepein.femanet.com.br/ArqGeds/alunos/321151982020145912.pdf',
            link: 'https://www.udemy.com/course/toefl-made-easy-all-four-skills-preparation-course-2020/',
            image: 'https://www.flaticon.com/svg/static/icons/svg/136/136522.svg'
        },
    ]);

    return(
        <>
            <Row>
            {cursos.map((curso, index) => (
            <Col lg="2" xl="2">              
                <Card onClick={() => window.open(curso.pdf, '_blank')} className="card-stats mb-3 mb-xl-0" style={{height: "100%"}}>
                <CardBody  style={{borderRadius: '45px'}} >
                    <p>{curso.name}</p>
                    <img src={curso.image} alt="." height="70px"/>
                </CardBody>
                </Card>
            </Col>))}
            </Row>
        </>      
    );
}

export default Cursos;