import { getAuthToken } from "./LoginDetails";

//Common Headers
export const headers = {
  'accept': 'application/json',
  "Content-Type": "application/json",
}

//AuthHeaders
const token = getAuthToken()
export const authHeaders = {
  'accept': 'application/json',
  'Authorization': 'Bearer '+token
};

//Base Url
export const Baseurl = "https://payment-be.maangtechnologies.com/";

//all Auth Urls
export const create_user = Baseurl + "auth/create/user"
export const get_token = Baseurl + "auth/token"

//Paymet Urls

export const user_details = Baseurl + "logined_user"
export const creat_order = Baseurl + "create_order"
export const transactions_url = Baseurl + "wallet_hisotry"
