import { CanvaStyled } from "../styles/Canvas.Styled";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WorkSpace from "../components/WorkSpace";
import Inputs from "../components/Inputs";
import Render from "../components/Render";

const Canvas = () => {
    return ( 
        <>
            <CanvaStyled>
                <div className="sidebar_section">
                    <Sidebar />
                </div>
                <div className="workspace_section">
                    <Navbar />
                    <Inputs />
                    <WorkSpace />
                </div>
                <div className="render_section">
                    <Render />
                </div>
            </CanvaStyled>
        </>
     );
}
 
export default Canvas;