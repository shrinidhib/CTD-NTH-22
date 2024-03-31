import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import Loader from '../../components/Loader/Loader';
import LeaderboardList from './LeaderboardList';
// Uncomment this
import { useNavigate } from 'react-router-dom';
import Request from "../../api/requests";
const Leaderboard = (props) => {
  const [loaderStatus, setLoaderStatus] = useState(true);

//  uncomment this line and comment below rank line for live results
  const [rank, setRank] =  useState([])
//   const [rank] = useState(
        
//         [
//             {
//                 "username": "astronights",
//                 "email": "agshubhankar@gmail.com",
//                 "first_name": "Shubhankar",
//                 "last_name": "",
//                 "current_level": 17,
//                 "hidden_on_leaderboard": false,
//                 "id": 85,
//                 "keys": 134
//             },
//             {
//                 "username": "padfoot01",
//                 "email": "abhyankarmrunmai@gmail.com",
//                 "first_name": "Mrunmai Abhyankar",
//                 "last_name": "",
//                 "current_level": 14,
//                 "hidden_on_leaderboard": false,
//                 "id": 165,
//                 "keys": 125
//             },
//             {
//                 "username": "Athena",
//                 "email": "chaitraliginimav@gmail.com",
//                 "first_name": "Chaitrali Ginimav",
//                 "last_name": "",
//                 "current_level": 14,
//                 "hidden_on_leaderboard": false,
//                 "id": 206,
//                 "keys": 83
//             },
//             {
//                 "username": "wizzard21",
//                 "email": "sourav.kotkar21@gmail.com",
//                 "first_name": "Sourav Kotkar",
//                 "last_name": "",
//                 "current_level": 14,
//                 "hidden_on_leaderboard": false,
//                 "id": 490,
//                 "keys": 91
//             },
//             {
//                 "username": "falcon22",
//                 "email": "chandolkarshreyas001@gmail.com",
//                 "first_name": "Shreyas Chandolkar",
//                 "last_name": "",
//                 "current_level": 14,
//                 "hidden_on_leaderboard": false,
//                 "id": 104,
//                 "keys": 104
//             },
//             {
//                 "username": "yash204",
//                 "email": "yashpande2002@gmail.com",
//                 "first_name": "Yash",
//                 "last_name": "",
//                 "current_level": 14,
//                 "hidden_on_leaderboard": false,
//                 "id": 202,
//                 "keys": 90
//             },
//             {
//                 "username": "bhorsujal",
//                 "email": "bhorsujal@gmail.com",
//                 "first_name": "Sujal Bhor",
//                 "last_name": "",
//                 "current_level": 14,
//                 "hidden_on_leaderboard": false,
//                 "id": 317,
//                 "keys": 87
//             },
//             {
//                 "username": "Deadlock",
//                 "email": "karanmundhada@gmail.com",
//                 "first_name": "Karan",
//                 "last_name": "",
//                 "current_level": 14,
//                 "hidden_on_leaderboard": false,
//                 "id": 254,
//                 "keys": 113
//             },
//             {
//                 "username": "KaushalK",
//                 "email": "kaushalhnki@gmail.com",
//                 "first_name": "Kaushal Kulkarni",
//                 "last_name": "",
//                 "current_level": 14,
//                 "hidden_on_leaderboard": false,
//                 "id": 260,
//                 "keys": 24
//             },
//             {
//                 "username": "adiisa",
//                 "email": "aditisak19@gmail.com",
//                 "first_name": "aditi sakhalkar",
//                 "last_name": "",
//                 "current_level": 14,
//                 "hidden_on_leaderboard": false,
//                 "id": 337,
//                 "keys": 103
//             },
//             {
//                 "username": "HoPpS",
//                 "email": "piyushfegade0@gmail.com",
//                 "first_name": "Piyush Anil Fegade",
//                 "last_name": "",
//                 "current_level": 13,
//                 "hidden_on_leaderboard": false,
//                 "id": 351,
//                 "keys": 40
//             },
//             {
//                 "username": "nilay",
//                 "email": "nilaytayade69@gmail.com",
//                 "first_name": "Nilay Sanjay Tayade",
//                 "last_name": "",
//                 "current_level": 13,
//                 "hidden_on_leaderboard": false,
//                 "id": 249,
//                 "keys": 23
//             },
//             {
//                 "username": "Samir",
//                 "email": "samirsw04@gmail.com",
//                 "first_name": "Samir Satish Wankhede",
//                 "last_name": "",
//                 "current_level": 13,
//                 "hidden_on_leaderboard": false,
//                 "id": 311,
//                 "keys": 107
//             },
//             {
//                 "username": "SohanChepe",
//                 "email": "sohan.chepe@gmail.com",
//                 "first_name": "Sohan Chepe",
//                 "last_name": "",
//                 "current_level": 13,
//                 "hidden_on_leaderboard": false,
//                 "id": 306,
//                 "keys": 79
//             },
//             {
//                 "username": "shreenath8.b",
//                 "email": "shreenath8.b@gmail.com",
//                 "first_name": "Shreenath",
//                 "last_name": "",
//                 "current_level": 13,
//                 "hidden_on_leaderboard": false,
//                 "id": 360,
//                 "keys": 41
//             },
//             {
//                 "username": "Dechayx",
//                 "email": "prathmeshghuse4@gmail.com",
//                 "first_name": "Prathmesh",
//                 "last_name": "",
//                 "current_level": 13,
//                 "hidden_on_leaderboard": false,
//                 "id": 446,
//                 "keys": 94
//             },
//             {
//                 "username": "nids",
//                 "email": "b.shrinidhi1214@gmail.com",
//                 "first_name": "B Shrinidhi",
//                 "last_name": "",
//                 "current_level": 13,
//                 "hidden_on_leaderboard": false,
//                 "id": 241,
//                 "keys": 88
//             },
//             {
//                 "username": "Ninad",
//                 "email": "ninadshelke48@gmail.com",
//                 "first_name": "Ninad Shelke",
//                 "last_name": "",
//                 "current_level": 13,
//                 "hidden_on_leaderboard": false,
//                 "id": 488,
//                 "keys": 29
//             },
//             {
//                 "username": "divyatawade09",
//                 "email": "divyatawade09@gmail.com",
//                 "first_name": "Divya Tawade",
//                 "last_name": "",
//                 "current_level": 12,
//                 "hidden_on_leaderboard": false,
//                 "id": 98,
//                 "keys": 48
//             },
//             {
//                 "username": "SKYKET",
//                 "email": "anyapawar181@gmail.com",
//                 "first_name": "Aniket Pawar",
//                 "last_name": "",
//                 "current_level": 12,
//                 "hidden_on_leaderboard": false,
//                 "id": 325,
//                 "keys": 102
//             },
//             {
//                 "username": "Csan25",
//                 "email": "chetanchaku@gmail.com",
//                 "first_name": "Chetan Chaku",
//                 "last_name": "",
//                 "current_level": 11,
//                 "hidden_on_leaderboard": false,
//                 "id": 409,
//                 "keys": 8
//             },
//             {
//                 "username": "tanish228",
//                 "email": "tanishbc@gmail.com",
//                 "first_name": "Tanish Chaudhari",
//                 "last_name": "",
//                 "current_level": 11,
//                 "hidden_on_leaderboard": false,
//                 "id": 305,
//                 "keys": 70
//             },
//             {
//                 "username": "hiwarkarshreya",
//                 "email": "shreyahiwarkar1@gmail.com",
//                 "first_name": "Shreya Hiwarkar",
//                 "last_name": "",
//                 "current_level": 10,
//                 "hidden_on_leaderboard": false,
//                 "id": 331,
//                 "keys": 72
//             },
//             {
//                 "username": "Missyoudhoni",
//                 "email": "rajpohekar21@gmail.com",
//                 "first_name": "RAJ POHEKAR",
//                 "last_name": "",
//                 "current_level": 10,
//                 "hidden_on_leaderboard": false,
//                 "id": 475,
//                 "keys": 81
//             },
//             {
//                 "username": "Jobin",
//                 "email": "jobinjosephh2005@gmail.com",
//                 "first_name": "Jobin",
//                 "last_name": "",
//                 "current_level": 9,
//                 "hidden_on_leaderboard": false,
//                 "id": 361,
//                 "keys": 5
//             },
//             {
//                 "username": "chhote8",
//                 "email": "rockstarharsh1551@gmail.com",
//                 "first_name": "Harsh",
//                 "last_name": "",
//                 "current_level": 9,
//                 "hidden_on_leaderboard": false,
//                 "id": 101,
//                 "keys": 18
//             },
//             {
//                 "username": "dinu",
//                 "email": "hrx72391@xcoxc.com",
//                 "first_name": "Dinesh Budhad",
//                 "last_name": "",
//                 "current_level": 9,
//                 "hidden_on_leaderboard": false,
//                 "id": 439,
//                 "keys": 42
//             },
//             {
//                 "username": "arya_07",
//                 "email": "asthanekar2004@gmail.com",
//                 "first_name": "Arya",
//                 "last_name": "",
//                 "current_level": 9,
//                 "hidden_on_leaderboard": false,
//                 "id": 237,
//                 "keys": 20
//             },
//             {
//                 "username": "netal_agrawal",
//                 "email": "netalagrawal1909@gmail.com",
//                 "first_name": "Netal Agrawal",
//                 "last_name": "",
//                 "current_level": 9,
//                 "hidden_on_leaderboard": false,
//                 "id": 286,
//                 "keys": 45
//             },
//             {
//                 "username": "Jadoogar",
//                 "email": "shripad3103@gmail.com",
//                 "first_name": "Shripad",
//                 "last_name": "",
//                 "current_level": 9,
//                 "hidden_on_leaderboard": false,
//                 "id": 504,
//                 "keys": 52
//             },
//             {
//                 "username": "sid_bhaiyya",
//                 "email": "suyashmore789@gmail.com",
//                 "first_name": "main hoon don",
//                 "last_name": "",
//                 "current_level": 9,
//                 "hidden_on_leaderboard": false,
//                 "id": 509,
//                 "keys": 62
//             },
//             {
//                 "username": "PA_04",
//                 "email": "palakk.2819@gmail.com",
//                 "first_name": "PALAK PRASHANT AGRAWAL",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 353,
//                 "keys": 51
//             },
//             {
//                 "username": "nrj2810",
//                 "email": "waniraj2810@gmail.com",
//                 "first_name": "Niraj Waghchoure",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 417,
//                 "keys": 34
//             },
//             {
//                 "username": "Avengers",
//                 "email": "snehalnaik139@gmail.com",
//                 "first_name": "Naik Snehal",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 438,
//                 "keys": 24
//             },
//             {
//                 "username": "powershell",
//                 "email": "akshayasawa94@gmail.com",
//                 "first_name": "Akshay Asawa",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 450,
//                 "keys": 29
//             },
//             {
//                 "username": "HVS-HI-TECH",
//                 "email": "hvshitesh29@gmail.com",
//                 "first_name": "Hitesh",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 132,
//                 "keys": 23
//             },
//             {
//                 "username": "BHAVYAM",
//                 "email": "bhavyamsanghavi@gmail.com",
//                 "first_name": "Bhavyam Sanghavi",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 392,
//                 "keys": 26
//             },
//             {
//                 "username": "kirankk",
//                 "email": "kankariyakiran1507@gmail.com",
//                 "first_name": "Kiran Kankariya",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 312,
//                 "keys": 28
//             },
//             {
//                 "username": "dhanno19",
//                 "email": "dhanashrigawai17@gmail.com",
//                 "first_name": "Dhanashri",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 272,
//                 "keys": 32
//             },
//             {
//                 "username": "ayushmeshram",
//                 "email": "meshramayush750@gmail.com",
//                 "first_name": "Ayush Meshram",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 413,
//                 "keys": 51
//             },
//             {
//                 "username": "sahil65",
//                 "email": "sahiltiwade123@gmail.com",
//                 "first_name": "Sahil Tiwade",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 240,
//                 "keys": 42
//             },
//             {
//                 "username": "nardo",
//                 "email": "kshitijaucharmal21@gmail.com",
//                 "first_name": "Kshitij Aucharmal",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 314,
//                 "keys": 29
//             },
//             {
//                 "username": "OP@2004",
//                 "email": "omkarc4965@gmail.com",
//                 "first_name": "Omkar Kiran Chavan",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 266,
//                 "keys": 58
//             },
//             {
//                 "username": "OP@2003",
//                 "email": "omkarc@4965gmail.com",
//                 "first_name": "omkar chavan",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 498,
//                 "keys": 27
//             },
//             {
//                 "username": "shreyachevale",
//                 "email": "chevaleshreya04@gmail.com",
//                 "first_name": "Shreya Sunil Chevale",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 435,
//                 "keys": 22
//             },
//             {
//                 "username": "AnaKonda37",
//                 "email": "anushkadalvi2019@gmail.com",
//                 "first_name": "Anushka Subhash Dalvi",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 421,
//                 "keys": 26
//             },
//             {
//                 "username": "Atharv",
//                 "email": "atharvfakatkar56@gmail.com",
//                 "first_name": "Atharv Udayraj Fakatkar",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 302,
//                 "keys": 43
//             },
//             {
//                 "username": "Sahil",
//                 "email": "sahilgpatil0007@gmail.com",
//                 "first_name": "Sahil Gajanan Patil",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 313,
//                 "keys": 10
//             },
//             {
//                 "username": "Poirot",
//                 "email": "atharva2718@gmail.com",
//                 "first_name": "Atharva",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 156,
//                 "keys": 39
//             },
//             {
//                 "username": "Ankita",
//                 "email": "ankitadarade2003@gmail.com",
//                 "first_name": "Ankita Darade",
//                 "last_name": "",
//                 "current_level": 8,
//                 "hidden_on_leaderboard": false,
//                 "id": 232,
//                 "keys": 60
//             }
//         ]
//     );
  const [currentPage, setCurrentPage] = useState(1);
  const [rankPerPage] = useState(10);
    const navigate=useNavigate();

    // Uncomment for live results
    const eventStatus=async()=>{
        try{
          const res= await Request.time();
        //   console.log(res);
        //   console.log('started'); 
          if(res.data.is_started||res.data.is_ended){
            // props.loginStatus===false&&props.toast.toast.info('Login First ',{autoClose:6000})
            // setIs_event(true);
            fetchScores();
          }
                            
          else{
            props.toast.toast('Event Is Yet To Start', { autoClose: 5000 });
            navigate("/");
          }
                            
        }
        catch(err){
          console.log(err);
        //   props.toast.toast.error(err.message+', visit contact page to resolve',{ autoClose: 5000 });
        }
      }
    const fetchScores= async()=> {
            await Request.leaderboard()
            .then(res => {
                // console.log(res)
                setRank(res.data)
            })
            .catch(err => {
                props.toast.toast.error("Error Fetching Leaderboard");
                console.log(err);
            })
    }

    useEffect(() => {
        setTimeout(()=>{
            setLoaderStatus(false);
            // Uncomment for live results
            eventStatus();
        },3000)
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    // Get current rank
  const indexOfLastPost = currentPage * rankPerPage;
  const indexOfFirstPost = indexOfLastPost - rankPerPage;
  const currentrank = rank.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        loaderStatus
        ?
        <Loader/>
        :
        <LeaderboardList rankPerPage={rankPerPage} totalrank={rank.length} paginate={paginate} rank={currentrank} indexOfFirstPost={indexOfFirstPost}/>
        
    )
}

export default Leaderboard