import SpeechBubble from "../assets/images/speech-bubble.png";
import { SidebarStyled } from "../styles/Sidebar.Styled";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux"

const Sidebar = () => {


    const profilePicture = JSON.parse(localStorage.getItem("profilePicture"))

    const dispatch = useDispatch()

    const userLogout = () =>{
        dispatch(logout())
    }
    return ( 
        <>
        <SidebarStyled>
            <Link to="#">
                <div className="logo">
                    <img alt="logo" src="https://img.icons8.com/color/32/000000/linktree.png"/>
                </div>
            </Link>
            <div className="icons_wrapper">
                <div className="icons">
                    <span>
                        <img className="icon" src={SpeechBubble} alt="user_profile" />
                    </span>

                    <span>
                        <Link onClick={userLogout}  to="#">
                            <img alt="logout" className="icon" src="https://img.icons8.com/ios/20/undefined/exit.png"/>
                        </Link>
                        
                    </span>
                </div>
              
                    <span className="user_profile">
                        <img className="profile" src={profilePicture} alt="profile" />
                    </span>
                </div>
        </SidebarStyled>
        </>
     );
}
 
export default Sidebar;