import { useState } from "react"

export default function LikeButton() {

    let [isliked, setIsLiked] = useState(false);
    let [clicks, setCLicks] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isliked)
        setCLicks(clicks + 1)
    }

    let likeStyle = {
        color: "red",
    }
    return (
        <div>
            <p>Like Clicks = {clicks}</p>
            <p onClick={toggleLike}>
                {
                    isliked ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>
                }

            </p>
        </div>
    )
}