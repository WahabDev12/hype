import { Nav } from "../styles/Render.Styled";
import { Button } from "../styles/Render.Styled";
import { PreviewStyled } from '../styles/Preview';

const RenderComp = () => {

    const username = JSON.parse(localStorage.getItem("username"))

    return (  
        <>
            <Nav>
                    <div>
                        <span>My Hyper: </span > 
                        <a className="linktree" rel="noreferrer"  
                            target="_blank" href={`http://localhost:3000/me/${username}`}>
                          {`https://hype.me/${username}`} 
                        </a>
                    </div>
                    <div>   
                        <Button>Share</Button>
                    </div>
            </Nav>
            
            <PreviewStyled>
                <div className="phone-case">
                    <iframe title="preview"  src={`http://localhost:3000/me/${username}`} />
                </div>
            </PreviewStyled>
            
        </>
    );
}
 
export default RenderComp;