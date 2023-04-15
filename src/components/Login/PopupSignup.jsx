import React from 'react'
import '../Login/PopupSignup.css'

const PopupSignup = ( props) => {
    

    return props.popup ? (
      <div className='popupCourse'>
        <div className='popup-inner'>
          <button
            className='close-course-btn' id="close-bttn"
            onClick={() => props.setPopup(!props.popup)}
          >
            close
          </button>
          {props.children}
        </div>
      </div>
    ) : (
      ""
    );
}

export default PopupSignup
