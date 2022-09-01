import './App.css';
import axios from 'axios';
import Question from './pages/Question/Question';
function App() {
  return (
    <div>
      <h>
        HIEE
        {/* {axios.get('http://localhost:8000/auth/users/me/')
        .then((res) => console.log(res))} */}
        <Question/>
      </h>
    </div>
  );
}

export default App;
