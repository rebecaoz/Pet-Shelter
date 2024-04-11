import { useState } from "react";
import './likeButton.css'
const LikeButton = () =>{

    const [likes, setLikes] = useState(0);

    const addLikes = () =>{
        var nuevoLike = likes+1;
        setLikes(nuevoLike);
    }
    
    return(
        <div className="like-box">     
                <button className="css-button-retro--sky" onClick={addLikes}>Like</button>
                <p className="quantity">{likes}</p>         
            </div>
    )
}
export default LikeButton