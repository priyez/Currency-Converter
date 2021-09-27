import React from 'react';
import Convert from './components/convert'
import './App.css';
import line from './line2.svg';
import Flag from './united-states-of-america-flag.svg'


function Home() {
var dd = new Date();
var day= dd.getDate();
var mm = new Date();
var month= mm.getMonth()+1;

var yy = new Date();
var year= yy.getFullYear();
if(month ===1){
  month="January";
}
if(month ===2){
  month="Feburary";
}
if(month ===3){
  month="March";
}
if(month ===4){
  month="April";
}
if(month ===5){
  month="May";
}
if(month ===6){
  month="June";
}if(month ===7){
  month="July";
}
if(month ===8){
  month="August";
}
if(month ===9){
  month="September";
}
if(month ===10){
  month="October";
}
if(month ===11){
  month="November";
}
if(month ===12){
  month="December";
}
  return (
    <div className="App">
        <div className='some-page-wrapper' id="section4">
            <div className='row' margin="0px">
              <div className='column'>
                <div className='orange-column'>
                  <span className="flag"><p>Base Currency<img  src={Flag}/></p></span>
                <h1 className="logo">Curri</h1>
                  <div className="leftSection">
                   <h1>Curri Live Currency Converter</h1>
                   <span>{day} {month} {year}</span>
                 </div>
                </div>
              </div>
              <div className='column'>
                <div className='blue-column' >
     
                <Convert/>
              </div>
             </div>
            </div>
          </div> 
      
      <img src={line} className="bottomLine" />
    </div>
  );
}

export default Home;
