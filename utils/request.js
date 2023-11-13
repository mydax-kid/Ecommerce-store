import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
  },
});


// const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/products?populate=*&[filters][type][eql=${type}`, {
//     headers: {
//       Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN
//     }
// }