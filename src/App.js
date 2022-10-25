import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading" style={{marginLeft:260}}>
        <br />
        <h2>Saho... it's - {date} - Now 🌝☕ </h2>
      </div>
      <div style={{display:'flex'}}>
      <div >
        <div style={{marginRight:200}}>
        <h1 style={{ color: "yellow" }}>Done</h1>
        </div>
    <div >
    {toDos.map((obj) => {
          if (obj.status) {
            return (<h1>{obj.text}</h1>)
          }
          return null
        })}
    </div>
       
      </div>

        <div style={{display:'block'}}>
          
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
       {toDo ? <i onClick={() =>{
        setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]) 
        setToDo('')
      } }
       className="fas fa-plus"></i> : '' }
      </div>
      <div className="todos">
        {toDos.map((obj) => {

          if (!obj.status && !obj.drop) {
          return (
            <div className="todo" >
              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked)
                  console.log(obj);
                  setToDos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                      
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>

              </div>
              <div className="right">
                <i onClick={() => setToDos(toDos.filter(obj2 => {
                  if (obj2.id === obj.id) {
                    obj2.drop = true
                    
                  }
                  return obj2
                }))} className="fas fa-times"></i>
              </div>
            </div>)}
        }) }


      </div>
        </div>
      

      <div style={{marginLeft:200}}>
        <h1 style={{ color: "yellow" }}>Drop</h1>

        {toDos.map((obj) => {
          if (obj.drop) {
            return (<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
        </div>

    </div>


  );
}

export default App;