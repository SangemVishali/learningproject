import React from 'react';

//function Greet(){
  //  return <h1> Hello Vishali </h1> 
//};
//export const Greet=() => <h1>Functional Component</h1>
//export default Greet;
export const Greet=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>Hello {props.name} {props.fullName}</h1>
            {props.children}
        </div>
    );
}
