import React from "react";
import Button from "../common/Button";
import * as rk from '../../../localization/resourceKeys'
import i18n from '../../../i18n';

function SSOLogin(props) {

   const submitOnClick =()=>{
    }
  return (
    <div className='text-center btn-holder'>
      <Button
        type="submit"
        id="submit-btn"
        className= "btn-purple SSOlogin"
        onClick={submitOnClick}
        value={i18n.t(rk.BUTTON.LOGINSSO)}
      ></Button>
    </div>
  );
}

export default SSOLogin;
