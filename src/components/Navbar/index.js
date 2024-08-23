import {Link, useNavigate} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {
    NavHeader,
    NavContent,
    WebsiteLogo,
    NavMenu,
    NavLink,
    ProfileImg,
    LogoutBtn,
} from './styledComponents'
import { useState } from 'react'
import PopupDesignFiles from '../PopupDesignFiles'

const Navbar = ({mode, toggleMode}) => {
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  const onClickLogout = (event) => {
    console.log("logout initiated")
    setShowPopup(true)
    
  }
  const handleConfirm = ()=>{
    setShowPopup(true)
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  const handleCancel = () => {
    setShowPopup(false)
  }
  const onLogoClick = () =>{
    navigate('/')
  }
  return (
    <NavHeader $mode={mode} >
      <NavContent>
        <Link to="/">
          <WebsiteLogo onClick={onLogoClick}
            src={mode==='light' ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' 
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'}
            alt="nxt watch logo"
          />
        </Link>
        <NavMenu>
          <NavLink>
            <Link>
              <ProfileImg onClick={toggleMode} 
              src={mode==='light' ? 
                "https://static-00.iconduck.com/assets.00/moon-icon-512x512-fm9crgpt.png" 
              : "https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-shining-star-icon-glowing-bright-png-image_4667883.png" 
              }alt="theme"
              />
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/">
              <ProfileImg alt="profile" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"/>
            </Link>
          </NavLink>
        </NavMenu>
        <Popup
          modal
          open={showPopup}
          onClose={handleCancel}
          className="popup-content"
        >
          {close => (
            <>
               <PopupDesignFiles onCancel={handleCancel} onConfirm={handleConfirm}/>
            </>
          )}
        </Popup>
        <LogoutBtn
          type="button"
          onClick={onClickLogout}>
          Logout
        </LogoutBtn>
      </NavContent>
      
    </NavHeader>
  )
}
export default Navbar
