const Question = (props) => {
  

  return (
    <div>
      {fetch("http://localhost:8000/userquestion/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Token 89ddf2a201f432dce078e7f3a7d4085f8ac013f3`,
      }
    }).then((res)=>console.log(res))}
    </div>
  );
};

export default Question;