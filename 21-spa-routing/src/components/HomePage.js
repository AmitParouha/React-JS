import {useNavigate} from 'react-router-dom';
import React from 'react'
function HomePage() {

  const navigate = useNavigate();

  function navigateHandler(){
    navigate('/about');
  }
  return <>
    <div>This is a HomePage</div>
    <p>
      <button onClick={navigateHandler}>Navigate to About Page</button>
    </p>  
    </>
}

export default HomePage