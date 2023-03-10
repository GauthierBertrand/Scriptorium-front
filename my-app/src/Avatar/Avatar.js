import { useContext } from "react";
import { SheetContext } from "../SheetContext";
import { useLocation } from "react-router-dom";
import "./Avatar.scss";


import maleOrc from "../assets/images/male-orc.jpg";

const Avatar = () => {

    const {
        currentImage,
    } = useContext(SheetContext);

    let location = useLocation();

    const shouldShowAvatar = [
        "/general",
        "/generation-des-stats",
        "/stats",
        "/voies",
    ].includes(location.pathname);

    return (    
        <div>
            {shouldShowAvatar && (
                <div className="avatar">
                    <img className="avatar-image" src={currentImage} alt="sexe sélectionné" />
                </div>
            )}
        </div>
    );
}

export default Avatar;