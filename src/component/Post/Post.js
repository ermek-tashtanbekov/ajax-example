import { useEffect } from "react";

const Post = ({message}) =>{
    console.log("[Post.js] render");

    // Выводится только при первом выводе

    useEffect(() =>{
        console.log("[Post.js] render with useEfect");
    }, [message]);

    useEffect(() =>{
        console.log("[Post.js] render with useEfect deprding on message varible")
    }, [message]);

    useEffect(() =>{
        setTimeout(() =>{
            alert("Hello form Post")
        }, 200)
    }, [message])
    return(
        <div></div>
    )
}
export default Post