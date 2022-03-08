import React, { useState } from "react";
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@mui/material/Button';
import AnalogClock from 'analog-clock-react';
import Checkbox from '@mui/material/Checkbox';

const App = () =>{
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([])

  let options = {
    width: "300px",
    border: true,
    borderColor: "green",
    baseColor: "grey",
    centerColor: "#2e2e2e",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "red",
      minute: "#ffffff",
      hour: "#ffffff"
    }
};

  const HandleAdd = () =>{
    if(item!==""){
    const newList = [...itemList, item].sort();
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

  return(
    <>
      <h1 className="main-heading">ToDo List</h1>
      <div className="main-div">
        <div className="left-div">
          <input value={item} onChange={(e)=>setItem(e.target.value)} placeholder="Add an item"/>
            <ul className="listItems">
            {itemList.map((item) => {
            return <div className="alignment"><Checkbox className="check-box"/> <li id={item} key={item}>{item}</li></div>;
            })}
            </ul>

          <Button className="add-btn" variant="contained" color="success" onClick={HandleAdd}>
            <AddIcon/>
          </Button>
          <Button variant="outlined" color="error" onClick={HandleRemove}>
            <DeleteIcon/>
          </Button>
        </div>
        <div className="right-div">
          <AnalogClock {...options} />
        </div>
      </div>
    </>
  );
}

export default App;