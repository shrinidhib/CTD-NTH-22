import { Modal} from 'react-bootstrap';
import { useState } from 'react';
import BuyHintModal from './BuyHintModal';
function HintModal(props) {
  const [idm, setIdm] = useState(-1);
  const closeModalm = () => {
    setIdm(3);
    props.id=3;
  }
  
  console.log(props);
  
  const hintsArr = props.data.hints.split("<br>")
  const paidHintArr = props.data.paidHint !== undefined ? props.data.paidHint.split("<br>") : []
  
  return (
    <div>
      {
        idm === 4 ?
          <BuyHintModal show={idm === 4 ? true : false} onHide={() => closeModalm()} {...props} />
          :
          <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-90w"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Hints</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* {console.log(props)} */}
              {/* {console.log(props.data.paidHintTaken && extraHints)} */}

              {/* {console.log(localStorage.getItem("extra-hints"))} */}
              <p>Hints:{hintsArr.map((hnt,idx) => {
                return(
                  <span><br/>{hnt}</span>
                );
              })}</p>
              {props.data.paidHintTaken ? (
                <p>Extra Hints:{paidHintArr.map((hnt,idx) => {
                  return(
                    <span><br/>{hnt}</span>
                  );
                })}</p>
              ) : (
                <></>
              )}
              
              <br />
            </Modal.Body>
            <Modal.Footer>
              
              {
                props.data.paidHintTaken
              ?
              <></>
              :<p>
              <button type="button"  
                  onClick={() => setIdm(4)}
                  class="btn btn-primary "style={{color:'white'}}>
                  Buy Hints
                </button>
                -{parseInt(props.data.hintCost)}x<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDU1Ljk0IDIwMi44NnYxMDYuNTVoLTc5Ljk0MXYxMzMuMjJoMjYuNjE3djI2LjYxN2gyNi42NjR2MjYuNjE3aC0yNi42NjR2MjYuNjY0aDI2LjY2NHYyNi42NjRsLTUzLjI4MS0wLjAwMzkwNnYyNi42MTdoLTI2LjYxN2wwLjAwMzkwNy0yNjYuMzloLTc5Ljk0MXYtMTA2LjU1aDI2LjYxN3Y3OS44OTVoNTMuMzI0di01My4yM2gyNi42MTN2NTMuMjNoNTMuMjc3di03OS44OTV6bS01My4zMjQgMGgyNi42NjRsLTAuMDAzOTA2LTI2LjY2aC01My4yNzd2NTMuMzI0aDI2LjYxN3ptLTc5Ljg5NSAyNi42NjRoMjYuNjY0di01My4zMjRoLTUzLjMyNHYyNi42NjRoMjYuNjY0eiIgZmlsbD0iI2VjZWYwMCIvPgo8L3N2Zz4K' class="nes-avatar is-rounded is-medium" alt='key' ></img>
                </p>
              }
            </Modal.Footer>
          </Modal>
      }
    </div>

  );
}

export default HintModal;
