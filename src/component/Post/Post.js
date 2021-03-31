import axios from "axios";
import { useEffect, useState } from "react";

const Post = ({message}) =>{
    const [posts, setPosts] = useState([]);
    console.log("[Post.js] render");

    // Выводится только при первом выводе

    useEffect(() =>{
        console.log("[Post.js] render with useEfect");
    }, [message]);

    useEffect(() =>{
        console.log("[Post.js] render with useEfect deprding on message varible")
    }, [message]);

    // useEffect(() =>{
    //     setTimeout(() =>{
    //         alert("Hello form Post")
    //     }, 200)
    // }, [message]);

     console.log("test");
     axios.get("https://jsonplaceholder.typicode.com/posts'")
     .then((response) =>{
         setPosts(response.data)
     })
     console.log("test")



    return(
        <div>
            <article>
                <h1>tile</h1>
                <p>body</p>
            </article>
        </div>
    )
}
export default Post