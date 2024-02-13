import React from 'react'
import User from './User'

// const About = () => {
//   return (
//     <div>
//       <h1>Our Creators</h1>
//       <User name = {"Piyush Chauhan"}/>
//     </div>
    

//   )
// }

// console.log (React)


class About extends React.Component{
  constructor (props){
    super(props);
    console.log ("About Constructor")
  }

  componentDidMount (){
    //Similar to useEffect ()
    console.log ("About Component did mount")
  }

  render(){
    console.log ("About render")
    return (
      <div>
        <h1>Our Creators</h1>
        <User name = {"Piyush Chauhan"}></User>
      </div>
    )
  }
}


export default About


/**
 * if i have a Parent class with 2 children with constructor, render and componentDidMount
 * this is the order
 * 
 * -Parent Constructor
 * -Parent Render
 *    -First Child Constructor
 *    -First Child Render
 * 
 *    -Second Child Constructor
 *    -Second Child Render
 *      
 *     DOM MANIPULATION IN BATCH
 *
 *    -First Child Did Mount
 *    -Second Child Did Mount
 * 
 * -Parent Did Mount
 * 
 * 
 * 
 * This happens because React do mounting in two phases: -
 * 1. Render Phase : - Pure and has no side effects. May be paused
 *                      aborted or restarted by react.
 * 
 * 2. Commit Phase: - Can work with DOM, run side Effects and 
 *                      schedule updated.
 * 
 * 
 * Mounting follows following things: -
 * Constructor ->  Render phase of children ->  batch the 
 * render and move to commit phase (i.e DOM manipulation) -> calls
 * componentDidMount to perform side effects. 
 * 
 * 
 * 
 * 
 */