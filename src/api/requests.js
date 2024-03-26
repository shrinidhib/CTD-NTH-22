import axios from "axios";

const host = window.location.host
const hostname = window.location.hostname
const port = host.split(':')[1]
let url = ""
// if(port === "3000") url = "https://admin.nth.credenz.in/nth/api"
// else url = `http://${hostname}/api`
url = "https://admin.nth.credenz.in/nth/api"
const backend = axios.create({
    baseURL: url
  });

const login = (data) => backend.post( `/auth/token/login/`, data,{headers: { "content-type": "application/json" }} );
const register = (data) => backend.post( `/auth/users/`, data,{headers: { "content-type": "application/json" }} );
const userquestion = (data) => backend.get( `/userquestion/${data}`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
const user = () => backend.get( `/auth/users/me/`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
const extrahint= () => backend.post( `/question/extra-hint/`,null, {headers: { "content-type": "application/json", Authorization:`Token ${localStorage.getItem("auth-token")}` }} );
const leaderboard = () => backend.get( `/leaderboard/`, {headers: { "content-type": "application/json"}} );
const time=() => backend.get( `/timer/`, {headers: { "content-type": "application/json"}} );
const Requests = {
    login,
    register,
    userquestion,
    user,
    extrahint,
    leaderboard,
    time
  };
  export default Requests;