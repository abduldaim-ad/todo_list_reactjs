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

  const HandleRemove = () =>{
    if(item!==""){
      setItemList((itemList)=>{
        return itemList.filter((arrElem, index)=>{
          return arrElem!==item;
        })
      })
      return(
        <>
          {setItem("")}
        </>
      )
    }
  }

  const HandleSort = () =>{
    console.log(itemList.sort());
    alert(itemList.sort());
    //const sortedList = itemList.sort();
    // if(item!==""){
    //   setItemList(sortedList);
    // }
    // return (
    //   <>
    //   {sortedList}
    //   {setItem("")}
    //   </>
    // );
  }

  return(
    <>
      <h1>ToDo List</h1>
      <input value={item} onChange={(e)=>setItem(e.target.value)} placeholder="Add an item"/>
      <ul>
      {itemList.map((item) => {
      return <li id={item} key={item}>{item}</li>;
      })}
      </ul>
      <button onClick={HandleAdd}>Add</button>
      <button onClick={HandleRemove}>Remove</button>
      <button onClick={HandleSort}>Sort</button>
    </>
  );
}

export default App;