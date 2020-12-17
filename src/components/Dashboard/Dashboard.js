import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import ForbiddenError from './ForbiddenError';
import Admin from './Admin';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
          <br />
          <br />
          <br />
          <br />
          <center>Aguarde um momento estamos analisando as suas credenciais de acesso</center>
          <br />
          <br />
        <MoonLoader
          css={override}
          size={120}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

const Dashboard = () => {
  const [status, setStatus] = useState(0);
    var api = 0;
    var api_with_token = 0;

    function sleep(delay) {
      var start = new Date().getTime();
      while (new Date().getTime() < start + delay);
  }

  useEffect(() => {
  if(JSON.parse(localStorage.getItem('token_jwt'))){
    api = JSON.parse(localStorage.getItem('token_jwt')).user._id;
    api_with_token = JSON.parse(localStorage.getItem('token_jwt')).token;
  }
  fetch(`${API}/secret/${api}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${api_with_token}`
    },
    })
    .then(res => res.json())
    .then(res => {         
        if(res.status === 403 || res.status === undefined) {   
            setStatus(403);
        }else{
            setStatus(200);
        }
    })
    }, []);

    useEffect(() => {
      sleep(4000)
    }, []);

    if(status === 0){
      return <AwesomeComponent />
    }

    if(status === 200){
        return <Admin />  
    }else{
      return <ForbiddenError />
    }
}

export default Dashboard;

    /*const [status, setStatus] = useState(0);
    var api = 0;
    var api_with_token = 0;

    useEffect(() => {
      sleep(4000)
    }, []);

    if(JSON.parse(localStorage.getItem('token_jwt'))){
      api = JSON.parse(localStorage.getItem('token_jwt')).user._id;
      api_with_token = JSON.parse(localStorage.getItem('token_jwt')).token;
    }

    fetch(`${API}/secret/${api}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${api_with_token}`
    },
    //body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {         
        if(res.status === 403 || res.status === undefined) {   
            setStatus(403);
            //.removeItem('token_jwt');
        }else{
            setStatus(200);
        }
    })
    
    alert("Oi Dashboard.js")
    //renderiza o contador/relógio
    if(status === 0){
      return <AwesomeComponent />
    }

    function sleep(delay) {
      var start = new Date().getTime();
      while (new Date().getTime() < start + delay);
  }

    if(status === 403) {  
      return <ForbiddenError />
    }else{
        return <AdminDashboard />     
    }*/

