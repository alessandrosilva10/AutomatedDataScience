/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
// reactstrap components
import Cursos from './Cursos';
import ProductByArrival from './ProductByArrival';
import { ToastContainer, toast } from 'react-toastify';
import NavbarPage from '../Navbars/MaterialNavbar';
import { Card, CardBody, CardTitle, Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import {Tabs, Tab} from 'react-bootstrap-tabs';
import Graduacao from './Graduacao';
import CSVReader from 'react-csv-reader'
import './Table.css';
import axios from 'axios';

//https://codepen.io/Thunderboy/pen/LxjrgB

const Header = () => {
  const [csv, setCsv] = useState([]);
  const handleForce = (data, fileInfo) => {
    setCsv({data});
  }
  
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header =>
      header
        .toLowerCase()
        .replace(/\W/g, '_')
    }

    const enviarServidor = async() => {
      await axios.post('https://jsonplaceholder.typicode.com/todos/1',
      JSON.stringify(csv), 
       { headers: { 'Content-Type': 'application/json; charset=UTF-8' }
      })
      .then(res => {
        console.log(res);
        toast.success("Aguarde um momento estamos processando as informações")
          //values = res.data;
          //console.log(values);
          //return values;
      })
    }

    return (
      //bg-gradient-info
      <>
      <div style={{marginTop: '-100px', backgroundColor: 'deepskyblue'}} className="header pb-8 pt-5 pt-md-8">
        <Container fluid>
          <Row>
          <Col className="col-sm-8 center"> 
              <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src="https://mentocta.com/wp-content/uploads/2016/08/datascience.png" height="100px"/>
              <p style={{color: 'white', fontSize: '50px', marginTop: '20px', marginBottom: '20px', textAlign: 'center'}}>Automated Data Science</p>
              <Card className="card-stats mb-3 mb-xl-0" >
              <CardBody style={{borderRadius: '45px'}} >
                
          <Tabs onSelect={(index, label) => console.log(label)}>
              <Tab label={<span><img height="25px" src="https://www.flaticon.com/svg/static/icons/svg/1087/1087815.svg"/> Enviar o CSV</span>}>
              <Card className="card-stats mb-3 mb-xl-0" >
              <CardBody style={{borderRadius: '45px'}} >
              {
                csv.data == null && <img height="250px" src="https://www.murici.al.leg.br/imagens/csv.png/image" />
              }
              <br/><br/>
              <CSVReader
                cssClass="csv-reader-input"
                label="Select CSV"
                onFileLoaded={handleForce}
                //onError={this.handleDarkSideForce}
                parserOptions={papaparseOptions}
                inputId="ObiWan"
                inputStyle={{color: 'red'}}
              />
              <br/>
              {csv.data &&
              <table id="students">
<thead>
  <tr>
    <th>Movie Title</th>
    <th>Rank</th>
    <th>Domestic Gross</th>
    <th>Worldwide Gross</th>
    <th>Product Budget</th>
  </tr>
</thead>
{csv.data.slice(0, 20).map((csvs, index) => (
<tbody key={index}>
  <tr>
    <td>{csvs.movie_title}</td>
    <td>{csvs.rank}</td>
    <td>{csvs.domestic_gross____}</td>
    <td>{csvs.worldwide_gross____}</td>
    <td>{csvs.production_budget____}</td>
  </tr>
</tbody>
))}     
</table>}
{csv.data &&
              <button style={{
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
                        marginLeft: '0px',
                        marginTop: '20px',
                        }} onClick={enviarServidor}>Processar Dados</button>

                      }

                      
              </CardBody>
              </Card>
              </Tab>
              <Tab label={<span><img height="20x" src="https://www.flaticon.com/premium-icon/icons/svg/3145/3145765.svg"/> Cursos</span>}>
                  <Card className="card-stats mb-3 mb-xl-0" >
              <CardBody style={{borderRadius: '45px'}} >
                <Cursos />
              </CardBody>
              </Card>
             </Tab>
              <Tab label={<span><img height="20px" src="https://www.flaticon.com/svg/static/icons/svg/3830/3830274.svg"/> Currículo</span>}>
              <Card className="card-stats mb-3 mb-xl-0" >
              <CardBody style={{borderRadius: '45px'}} >
                    <img height="1400px" src="https://uploaddeimagens.com.br/images/002/984/885/original/tf00002110_wac-1.png" alt="curriculo"/>
                    <div style={{paddingLeft: "100px"}}>
                  <p>Abrir .pdf online</p>
                  <img height="75px" src="https://www.flaticon.com/svg/static/icons/svg/136/136522.svg" onClick={() => window.open("https://femanetedu-my.sharepoint.com/:b:/g/personal/1711420600_fema_edu_br/ES8DGnfUdz9CoLuh0gDaorAB24kd1DI9lt25RGcxH08dSA?e=uKqVrJ", '_blank')} alt="docx"/>         
                  </div>
              </CardBody>
              </Card>
              </Tab>
              <Tab label={<span><img height="25px" src="https://cdn2.iconfinder.com/data/icons/business-271/135/50-512.png"/> Graduação</span>}>
              <Card className="card-stats mb-3 mb-xl-0" >
              <CardBody style={{borderRadius: '45px'}} >
                  <Graduacao/>
              </CardBody>
              </Card>
              </Tab>

          </Tabs>
              </CardBody>
              </Card>
          </Col>
          </Row>
          <ToastContainer />
        </Container>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br/><br/><br/><br/>
      </div>
      </>
    );
}

export default Header;
