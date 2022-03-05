import React, { useState } from "react";

const App = () =>{
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([])

  const HandleAdd = () =>{
    if(item!==""){
    const newList = [...itemList, item];
    setItemList(newList)
    return (
      <>
      {newList}
      {setItem("")}
      </>
    );
    }
  }

  return(
    <>
      <h1>ToDo List</h1>
      <input value={item} onChange={(e)=>setItem(e.target.value)} placeholder="Add an item"/>
      <ul>
      {itemList. map((item) => {
      return <li key={item}>{item}</li>;
      })}
      </ul>
      <button onClick={HandleAdd}>Add</button>
    </>
  );
}

export default App;