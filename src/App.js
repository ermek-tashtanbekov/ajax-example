
import { useState } from 'react';
import './App.css';
import Posts from './component/Post/Posts';

function App() {
  const [message, setMessage] = useState("Hello");
  const  [selectedPost, setSelectedPost] = useState(0);
  console.log("[App.js] render" )
  return (
    <div className="App">
     {message}
     <button onClick={() =>setMessage("By")}>Toogle</button>
     <Posts setSelectedPost={setSelectedPost} message={message}/>
    </div>
  );
}

export default App;
