import axios from "axios";
import {Inputs} from "../Contact/ContactForm";

export const instance = axios.create({
  // baseURL: 'http://localhost:3003/',
  baseURL: 'https://smtp-portfolio-ek.herokuapp.com/',
  // withCredentials: true,
  // headers: {
  //   'API-KEY': '4f6e1a9b-a442-4dac-9b05-ef297eadf4f8'
  // }
})

export const portfolioAPI = {
  
  sendContacts(data: Inputs) {
    return instance.post('sendMessage', {data})
  },
  
}