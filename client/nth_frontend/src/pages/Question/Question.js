import { useEffect ,useState} from "react";
import "./Question.css";
import { useParams,useNavigate } from "react-router-dom";
import ContactModal from "./Modals/ContactModal";
import ProfileModal from "./Modals/ProfileModal";
import HintModal from "./Modals/HintModal";
const Question = (props) => {
    // const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [id,setId] =useState(-1);
    let ans=useParams().ans;
    let navigate = useNavigate();
    const openModal=(e)=>{
      console.log(e);
      setId(e);
    }
    const closeModal=()=>{
      setId(-1);
    }
    const redirectAns = () => {
      if (ans !== "put_your_ans_here") {
        navigate("/question/put_your_ans_here");
      }
    };
    const fetchData = async () => {
        // console.log(localStorage.getItem("auth-token"));
        await fetch(`http://localhost:8000/userquestion/${ans}`,{ 
          method: "GET",
          headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` },
        })
          .then(response => {
            return response.json()
          })
          .then(res => {
            console.log(res);
            // setData(...data,...res);
            let temp={...res};
            
            fetch(`http://localhost:8000/auth/users/me/`,{ 
              method: "GET",
              headers: { "content-type": "application/json", "Authorization":`Token 89ddf2a201f432dce078e7f3a7d4085f8ac013f3` },
              })
              .then(response => {
                return response.json()
              })
              .then(res => {
                console.log(res);
                temp={...temp,...res}
                console.log(temp);
                setData(temp);
              })
              .catch((err)=>console.log(err));
            
          })
          .catch((err)=>console.log(err));
        
      }
    useEffect(() => {
        fetchData();
        redirectAns();
      }, []);
  return (
    <div class="bootstrap-iso">
      <div id="cover">
        {/* {console.log(data)} */}
        {console.log(id)}
        <a href="/leaderboard">
        <i class="fas fa-trophy fa-2x side-icons"></i>
        </a>
        <button onClick={()=>openModal(1)}><i  class="fas fa-address-card fa-2x side-icons"></i></button>
        <button onClick={()=>openModal(2)}><i class="fas fa-user-alt fa-2x side-icons"></i></button>
        <button onClick={()=>openModal(3)}><i class="fal fa-lightbulb-on fa-2x side-icons"></i></button>
        { 
          id===1?<ContactModal show={id===1?true:false} onHide={() => closeModal()} />
          :id===2?<ProfileModal show={id===2?true:false} onHide={()=>closeModal()} data={{username:data.username,phone:data.phone,current_level:data.current_level}} />
          :id===3?<HintModal show={id===3?true:false} onHide={() => closeModal()} data={{hints:data.hints,paidHintTaken:data.paidHintTaken,keys:data.keys,paidHint:data.paidHint}} />
          :<></>
        }
        <h1>Level:{data?.level}</h1>
        <img src={data?.img1}></img>
        <img src={data?.img2}></img>
        <img src="https://imgur.com/eog5eFZ.gif"></img>
        <img src="https://imgur.com/nUJVBmO.jpg"></img>
        
      </div>
    </div>
  );
};

export default Question;