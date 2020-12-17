import { API } from '../config';

export const getProducts = async(sortBy) => {
    return await fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: 'GET',
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return res;
      })
      .catch((err) => {
        //next(err);
      })
}

export const getProductById = (_id) => {
  return fetch(`${API}/product/${_id}`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch((err) => {
  
    })
}