import React, { useState, useEffect, useRef } from 'react';
// reactstrap components
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import { isAuthenticated } from '../../authenticate';
import { API } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Autocomplete } from "@autocomplete/material-ui";
import TextField from '@material-ui/core/TextField'
import Select from 'react-select'
import './Modal.css';

function Example(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [product,  setProduct] = useState({
    name: '',
    email: ''
  });

  const [category, setCategory] = useState('');
  const [categoryFetch,  setCategoryFetch] = useState([]);

  const listCategory = () => {
    axios.get(`${API}/categories`,{
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
      },
    })
    .then(res => {
        setCategoryFetch(res.data);
    }) 
  }

  useEffect(() => {
    listCategory();
  }, []);

  const createCategory = async() => {
    await fetch(`${API}/category/create/${isAuthenticated().user._id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${isAuthenticated().token}`
      },
      body: JSON.stringify(category)
     
    })
    .then((response) => {
      if(response.ok){
        setCategory({...category, category: ''});
        document.getElementById('category').value = ''
        toast.success(`${props.save} cadastrada com sucesso`);
      }else{
        //formValidation(name, email, password);
      }
    })
    .catch((err) => {
      console.log(err)
      
    })
  }

  return (
    <>
    <ToastContainer />
    <li className="list-group-item">
        <i onClick={() => setModalOpen(!modalOpen)} className={props.icon}/> {props.category}
    </li>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div style={{backgroundColor: 'deepskyblue'}} className=" modal-header text-center">
          <h4 className=" modal-title  w-100" id="exampleModalLabel">
            {props.title}
          </h4>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          {props.save === 'Categoria' && 
          <Form>
              <FormGroup>
                  <Label for="name">{props.label}</Label>
                  <Input onChange={e => setCategory({category: e.target.value})} type="text" name="category" id="category" placeholder={props.placeholder} />
              </FormGroup>
          </Form>}
          {props.save === 'Produto' && 
          <Form>
              <FormGroup>
                  <Label for="product">{props.product}</Label>
                  <Input onChange={e => setProduct({name: e.target.value})} type="email" name="name" id="name" placeholder={props.placeholder} />
              </FormGroup>
              <FormGroup>
                  <Label for="description">{props.description}</Label>
                  <Input onChange={e => setProduct({email: e.target.value})} type="textarea" name="description" id="description" placeholder="" />
              </FormGroup>
              <FormGroup>
                  <Label for="price">{props.price}</Label>
                  <Input onChange={e => setProduct({price: e.target.value})} type="number" min="1" step="any" name="price" id="price" placeholder="" />
              </FormGroup>
              <FormGroup>
              {/*<Select options={categoryFetch} />*/}
              <div class="selectdiv">
              <select onChange={(e) => console.log(e.target.value) }>
                {categoryFetch.map((option) => (
                  <option value={option._id}>{option.category}</option>
                ))}
              </select>
              </div>
              </FormGroup>
              <br/><br/><br/>
              <FormGroup>
                  <Label for="quantity">{props.quantity}</Label>
                  <Input onChange={e => setProduct({quantity: e.target.value})} type="number" min="1" step="any" name="quantity" id="quantity" placeholder="" />
              </FormGroup>
              <FormGroup>
                  <Label for="Imagem">{props.imagem}</Label>
                  <Input onChange={e =>  console.log(e.target.value)} type="file" accept="image/png, image/jpeg, image/jpg" name="photo" id="photo" placeholder="" />
              </FormGroup>
              <FormGroup>
              <div class="selectdiv"><Label for="quantity">Enviar?</Label>
              <select onChange={(e) => console.log(e.target.value) }>(
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
              </select>
              </div>
              </FormGroup>
          </Form>}
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color="danger"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Fechar
          </Button>
          
          {props.save === 'Categoria' && 
            <Button onClick={createCategory} outline color="success" type="button">
              Salvar {props.save}
          </Button>}
          {props.save === 'Produto' && 
          <Button outline color="success" type="button">
            Salvar {props.save}
          </Button>}

        </ModalFooter>
      </Modal>
    </>
  );
}

export default Example;