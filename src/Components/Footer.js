import React from 'react';
import Clock from 'react-digital-clock';
import Date from './Date.js'
import { FaFacebook, FaTwitter, FaGooglePlusG, FaEnvelope } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

function Footer () {

  return (

    <div className="Footer">
      <div>
        <div className='Social'>
          Contatti: 
          <span className="Icon Facebook"> <FaFacebook/> </span> 
          <span className="Icon Twitter"> <FaTwitter/> </span>
          <span className="Google-Icons">
            <span className="Icon Google-Colorized"> <FcGoogle/> </span>
            <span className="Icon Google"> <FaGooglePlusG/> </span>
          </span>
          <span className="Icon Mail"> <FaEnvelope/> </span>
        </div>
        <div className="Copyright">
          Copyright © 2020 Bookworm Shelter Ltd. 
          <br></br>
          All Rights Reserved.
        </div>
      </div>
      <div className="Info">
        <Date />
        <Clock hour12 = {false}/>
      </div>
    </div>
    
  )
}

export default Footer