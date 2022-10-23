import './ErrorPage.css'
import { Link} from "react-router-dom";

const ErrorPage =()=>{
    return(
        <div class="error-page">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <h5>
        <Link to='/'>Yes</Link> &nbsp; &nbsp;
        <Link to='/question/'>No</Link>
        </h5>
        </div>
    )
}
export default ErrorPage;