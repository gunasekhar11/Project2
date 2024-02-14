import axios from "axios";
import { useEffect, useState } from "react";

export const GetApiCall = (url: any, headers: any = {})  =>{
  const [data , setData] = useState({})
  useEffect(()=>{
    Request()
  },[]);
  const Request = async ()=> {
    try {
      const response = await axios.get(url, { headers })
      setData(response)
    } catch (error) {
      console.error("GET Request Error:", error);
      return error;
    }
  };
  return data
}

export const PostApiCall = (url : any , data : any , headers : any = {}) =>{
  const [postdata , setPostData] = useState({})
  useEffect(()=>{
    postRequest()
  },[]);
  const postRequest = async () => {
    try {
      const response = await axios.post(url, data, { headers });
      setPostData(response);
    } catch (error) {
      console.error("POST Request Error:", error);
      throw error;
    }
  };
  return postdata
}


export const PutApiCall = (url: any, data: any, headers: any = {}) =>{
  const [putdata , setPutData] = useState({})
  useEffect(()=>{
    putRequest()
  },[]);
  const putRequest = async () => {
    try {
      const response = await axios.put(url, data, { headers });
      setPutData(response)
    } catch (error) {
      console.error("PUT Request Error:", error);
      throw error;
    }
  };
  return putdata
}

export const DeleteApiCall = (url: any, data: any, headers: any = {}) =>{
  const [deleteData , setDeleteData] = useState({})
  useEffect(()=>{
    deleteRequest()
  },[]);
  const deleteRequest = async () => {
    try {
      const response = await axios.delete(url, { headers });
      return response;
    } catch (error) {
      console.error("DELETE Request Error:", error);
      throw error;
    }
  };
  return deleteData
}




