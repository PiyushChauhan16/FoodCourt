import React from 'react'


class User extends React.Component{
    constructor(props){
        super (props) // it is important to call this
                      // because we need to initalise parent first after then we can use "this"

        // console.log ("User Constructor");

        // console.log (props); 
        // console.log (this.state)
        // //analogous to useState
        // this.state = {
        //     count: 0,
        //     count2: 1
        // };
        // console.log (this.state);

        this.state = {
            data: undefined
        };
    }

   
    async componentDidMount (){
        // console.log ("USer Component did mount");

        let res = await fetch ("https://api.github.com/users/PiyushChauhan16");
        res = await res.json ();


        this.setState ({
            data: res
        })
  
    }

    componentDidUpdate (){
        console.log ("component Did Update");
    }

    componentWillUnmount (){
        console.log ("component will unmount");
    }

    render() {
        // console.log (this)
        // console.log ("user render")
      

      if (this.state.data !== undefined){
        const {avatar_url, name, bio} = this.state.data;

        
        return(
        <div className="user-card">

            <div><img style = {{height: "200px", width: "200px", borderRadius: "10rem"}} src={avatar_url} alt="" /></div>
            <div>{name}</div>
            <div>{bio}</div>
            {/* <div>Count: {this.state.count}</div>
            <div>Count2: {this.state.count2}</div> */}
            {/* <button
               onClick={()=>{
                  //console.log ({...this.state})
                  console.log ("btn click")
                  let updatedVal = this.state.count + 1;
                  this.setState({
                      ...this.state,
                      count: updatedVal
                  })
               }}
            >inc count by 1</button> */}
          </div>
       
      )}
      else{
        return <h3>Loading...</h3>
      }

      
    }
  }
  
  export default User