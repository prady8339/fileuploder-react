import React,{useState} from 'react';
function App(){
const [fileData,setfileData] = useState();

const fileChangeHandler = (e)=>{
setfileData(e.target.files[0]);
}

const onSubmitHandler = (e)=>{
    e.preventDefault();
    // handle file data from the state before sending
    const data = new FormData();

    data.append('image',fileData);

    fetch("http://localhost:5050/single",{
        method:"POST",
        body:data
    })
    .then((result)=>{
        console.log("file send successfully");
    })
    .catch((err)=>{
        console.log(err.message);
    })
}

return (
    <div className='App'>
    <h1>react file uploading</h1>
    <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">submit FILE to backend</button>
    </form>
    </div>
);
}

export default App;