import React from 'react'
import Cookies from 'universal-cookie';
import { authHeaders, user_details } from './ApiEndpoints';
import { GetApiCall } from './CommonHTTP';



export const getAuthToken = () => {
  const cookies = new Cookies();
  const tokenFromCookies = cookies.get("jwt_authorisation");
  const authToken = tokenFromCookies ? tokenFromCookies : null;
  return authToken;
};

export const getAuthName = () => {
  const token = getAuthToken()
  if (token) {
    const user : any = GetApiCall(user_details,authHeaders)
    return (user?.data?.username)
  }else{
    return null;
  }
}

export const Logout = () => {
  const cookies = new Cookies();
  cookies.remove("jwt_authorisation");
};
