import axios from 'axios';

//https://github.com/axios/axios

// const baseUrl = "https://apch-service-crud.herokuapp.com/api";
const baseUrl = "http://localhost:8991/api";

export async function getAllOrders (page, pageSize){
  try{
    const response = await axios ({
      url:`${baseUrl}/order/find-all-order`,
      method: 'GET',
      params: {"page": page, "pageSize": pageSize} 
    })
    return (response.status===200)?response.data.result:[];;
  } catch (e) {
    console.log(e)
  }
}

export async function createOrders (Order){
  try{
    const response = await axios ({
      url:`${baseUrl}/order/create-order`,
      method: 'POST',
      data: Order
    })

    return (response.status===200)?response.data.result:null;
  } catch (e) {
    console.log(e)
  }
}

export async function getProducts (page, pageSize){
  try{
    const response = await axios ({
      url:`${baseUrl}/product/find-all-product`,
      method: 'GET',
      params: {"page": page, "pageSize": pageSize} 
    })
    // console.log("RESPONSE",response.data.result);
    return (response.status===200)?response.data.result:[];
  } catch (e) {
    console.log(e);
  }
}

export async function getCategoryProducts (){
  try{
    const response = await axios ({
      url:`${baseUrl}/category/find-all`,
      method: 'GET'
    })
    // console.log("RESPONSE",response.data.result);
    return (response.status===200)?response.data.result:[];
  } catch (e) {
    console.log(e);
  }
}

export async function createProduct (Product){
  try{
    console.log(Product);
    const response = await axios ({
      url:`${baseUrl}/product/create-product`,
      method: 'POST',
      data: Product
    })

    return (response.status===200)?response.data.result:null;
  } catch (e) {
    console.log(e)
  }
}

//////////////////////////////////////

