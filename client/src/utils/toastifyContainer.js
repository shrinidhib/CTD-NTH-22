import { ToastContainer, toast } from "react-toastify";
import './toastifyContainer.css';
export const ToastUtils = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                // hideProgressBar={false}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                draggable
                // pauseOnHover
                // theme="dark"
                style={{fontSize:'1px'}}    
                toastClassName="nes-container is-dark is-rounded"
            />
        </>
    )
}

export default toast;