import React from 'react';
import './App.css';
// import {Country} from './components/country.js';
import {Card} from './components/card/Card'

export class App extends React.Component{

state = {
  animals:[ {name:'cat', color:'pink'},
              {name:'dog', color:'black'},
              {name:'tiger', color:'orange'},
              {name:'fox', color:'ginger'},
              {name:'lion', color:'yellow'},]
}

render(){
    let animals = this.state.animals

   return(
      <div className='App'>
      <Card name = {animal[0].name} color = {animal[0].color}/>
      <Card name = {animal[1].name} color = {animal[1].color}/>
      <Card name = {animal[2].name} color = {animal[2].color}/>
      <Card name = {animal[3].name} color = {animal[3].color}/>
      <Card name = {animal[4].name} color = {animal[4].color}/>
      </div>
    )
  }



  

//   render(){

//     const style = {width: '80%',
//                     minHeight: '200px',
//                     margin: '0 auto',
//                     border: '2px solid black'
                  
//   }

//     return(
//       <div className='App' style = {style}>
//         <h1>Привет мир</h1>

//         <div style={{width: '200px', minHeight: '100px', border: '2px solid red', margin: '0 auto'}}>
//           <Country country = {{name: 'Россия', population: '150 000 000' }}/>
//         </div>

      
//       </div>
//     )
//   }
//