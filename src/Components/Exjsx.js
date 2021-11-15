import React from 'react';
const Exjsx =() =>{
   // return(
   //     <h1>With JSX</h1>
   // );
   return React.createElement(
       'div', 
       null,
   React.createElement('h1', null, 'Without JSX'));
}
export default Exjsx;