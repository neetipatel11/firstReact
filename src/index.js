//var React = require('react');
//var ReactDom = require('react-dom');
import React from "react";
import ReactDom from "react-dom";
import './index.css';
// const fname = "neeti";
// const lname = "yt";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
//const curr = new Date().toLocaleDateString();
//const  currTime = new Date().toLocaleTimeString();
// ReactDom.render(<><h1>hello world! are you okay?</h1>
// <p>list for expression</p>
// <ol type="a">
//     <li>N for {fname}</li> 
//     <li>{`y for ${fname} ${lname}`}</li>
//     <li>S</li>
//     <li contentEditable="true">All about jsx</li></ol>
//     <p>curr date is {curr} </p>
//     <p>curr time is {currTime} </p> 
//     <img src={img1} alt="random image"/>
//     <img src={img2} alt="random image"/>
//      <a href="https://www.google.com/search?q=striver+dsa+sheet&oq=&gs_lcrp=EgZjaHJvbWUqCQgCECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkyODI5ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8 " target="_blank"><img src={img3} alt="random image"/></a>
   
//     </> ,
// document.getElementById("root"));//<></>react fragment
// ReactDom.render(
//     <>
//     <h1 className="heading">My name is neeti</h1>
    
//    <div className="img_div"> <img src={img3} alt="randomimages"/>
//    <img src={img1} alt="randomimages"/>
//     <img src={img2} alt="randomimages"/>
//     </div>
//     </>,
//     document.getElementById("root")
// )
let cuuDate = new Date();
cuuDate = cuuDate.getHours();
let greeting = '';
const cssStyle = {
  
};
if(cuuDate>=1 && cuuDate<12){
    greeting = 'good morning';
    cssStyle.color = "green";
}else if(cuuDate>=12 && cuuDate<19){
    greeting ="good afternoon";
    cssStyle.color = "red";
}
else{
    greeting = "good night";
    cssStyle.color = "yellow";
}
ReactDom.render( 
 <>
<div> 
    <h1>hello sir ,<span style={cssStyle}>{greeting}</span></h1>
</div>
</>,document.getElementById("root"));