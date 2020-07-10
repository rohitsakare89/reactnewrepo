import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import sdata from './sdata';
import * as serviceWorker from './serviceWorker';







ReactDOM.render(
  <>
<h1 className="heading_style">List Of top 12 NetFlix series in 2020</h1>

 {sdata.map((val) => {
return (
  <Card 
  imgsrc={val.imgsrc}
  sname={val.tittle}
  tittle={val.sname}
  link={val.link}
  ></Card>
);
})}
 
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
