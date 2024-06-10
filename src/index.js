import React from "react";
import ReactDOM from "react-dom/client"
import one from "./assets/1.jpg"
import two from "./assets/2.jpg"
import three from "./assets/3.jpg"
import four from "./assets/4.jpg"
import six from "./assets/6.jpg"
import seven from "./assets/7.jpg"
import eight from "./assets/8.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Box(props) {
  return (
      <div style={{backgroundColor:"white", padding:"5px", flexBasis:"20%"}}>
        <img style={{width:"100%", cursor:"pointer"}} alt="img" src={props.imgpic}></img>
        <p style={{textAlign:"center"}}>
          {props.name}
        </p>
      </div>
  )
}



let details = [
  {
    name: "Innocent one",
    imgpic: one
  },
  {
    name: "Saint dog",
    imgpic: two
  },
  {
    name: "Cute Dog",
    imgpic: three
  },
  {
    name: "Dash",
    imgpic: four
  },
  {
    name: "Big eyed dog",
    imgpic: two
  },
  {
    name: "Sheperd",
    imgpic: six
  },
  {
    name: "Cute dog",
    imgpic: seven
  },
  {
    name: "Active dog",
    imgpic: eight
  }
]

root.render(<div style={{display:"flex", flexWrap:"wrap", backgroundColor:"grey", justifyContent:"space-between", gap:"10px", padding:"15px"}}>
  {
    details.map(function (item) {
      return (<Box name={item.name} imgpic={item.imgpic}></Box>)
    })
  }
</div>)

