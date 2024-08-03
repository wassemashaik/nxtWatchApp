import { styled } from "styled-components";

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-bottom: 0;
  color: ${(props) => (props.$mode === 'light' ? 'black' : 'white')};
  background-color: ${(props) => (props.$mode === 'light' ? 'white' : 'rgb(27, 26, 26)' )};
`
export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1110px;
  padding-top: 25px;
  padding-bottom: 25px;
`
export const WebsiteLogo = styled.img`
  width: 165px;
  
`
export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  flex: 1;
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 0;
`
export const NavLink = styled.li`
  font-family: 'Roboto';
  text-decoration: none;
  margin: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #475569;
`
export const LogoutBtn = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 10px;
  margin: 10px;
  color: white;
  background-color: #0967d2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
export const ProfileImg = styled.img`
  height: 30px;
  width: 30px;
  padding: 10px;
  margin: 10px;
`
export const IconSize = styled.a`
  height: 50px;
  width: 50px;
`