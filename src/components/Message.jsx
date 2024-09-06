import { useContext } from "react";
import { messageContext } from "../store/MessageStroe";


function Message() {
 const [ message, dispatch ] = useContext(messageContext);
 
  return (
    <>
      <button
        type='button'
        onClick={() => {
          dispatch({
            type: "POST_MESSAGE"
          })
        }}
      >
        按我
      </button>
      <div
        className='toast-container position-fixed'
        style={{ top: '64px', right: '15px' }}
        onClick={()=>{
          dispatch({
            type: "CLEAR_MESSAGE"
          })
        }}
      >
        {message.title && (
          <div
            className='toast show'
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
          >
            <div className={`toast-header text-white bg-${message.type}`}>
              <strong className='me-auto'>{message.title}</strong>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='toast'
                aria-label='Close'
              />
            </div>
            <div className='toast-body'>{message.text}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Message;