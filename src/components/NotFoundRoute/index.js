import { useNavigate } from 'react-router-dom';
import {NotFoundContainer, NotFoundImg} from './styledComponents';

const NotFound = ({mode}) => {
  const navigate = useNavigate()

  const gobackHome = ()=> {
    navigate('/')
  }
  return(
    <NotFoundContainer $mode={mode}>
      <NotFoundImg
        src={mode==='light'?
            "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          : "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"}
        alt="not-found"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>Try Again!</p>
      <button type="button" className='btn btn-primary' onClick={gobackHome}>Home</button>
    </NotFoundContainer>
  )
}
  
  export default NotFound
  