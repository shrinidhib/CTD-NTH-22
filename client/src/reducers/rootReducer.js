const initState= (localStorage.getItem("auth-token")!==null)
    ?
    {
        loginStatus: true
    }
    :
    {
        loginStatus: false
    }
const rootReducer=(state=initState,action)=>{
    // console.log(action);
    if(action.type==='CHANGE_LOGIN'){
        return {
            loginStatus: true
        }
    }
    else if(action.type==='CHANGE_LOGOUT'){
        localStorage.removeItem("auth-token");
        return {
            loginStatus: false
        }
    }
    return state;
}
export default rootReducer;