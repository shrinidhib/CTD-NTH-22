import axios from "axios";

const backend = axios.create({
    baseURL: `http://localhost/api`
  });

const login = (data) => backend.post( `/auth/token/login/`, data,{headers: { "content-type": "application/json" }} );
const register = (data) => backend.post( `/auth/users/`, data,{headers: { "content-type": "application/json" }} );
const userquestion = (data) => backend.get( `/userquestion/${data}`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
const user = () => backend.get( `/auth/users/me/`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
const extrahint= () => backend.post( `/question/extra-hint/`,null, {headers: { "content-type": "application/json", Authorization:`Token ${localStorage.getItem("auth-token")}` }} );
const leaderboard = () => backend.get( `/leaderboard/`, {headers: { "content-type": "application/json"}} );

const Requests = {
    login,
    register,
    userquestion,
    user,
    extrahint,
    leaderboard
  };
  export default Requests;