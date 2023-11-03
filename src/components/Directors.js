// import React from "react";
// import { directors } from "../data";

// const Directors = ({directors}) => {

//   return(
//    <div>
//     <h1>Directors page</h1>
//     {directors.map((director, index)=>(
//       <div key={index}>
//         <h2>Name: {director.name}</h2>
//         <p>Movies: </p>
//         <ul>
//           {director.movies.map((movie, movieIndex)=>(
//           <li key={movieIndex}>{movie}</li>
          
//         ))}
//         </ul>
    
//       </div>
//     ))}
//   </div>
// );
// };
// export default Directors;

import React, { useState, useEffect } from "react";
import { directors } from "../data";

function Directors() {
  const [directorsData, setDirectorsData] = useState([]);

  useEffect(() => {

    setDirectorsData(directors);
  }, []); 

  return (
    <div>
      <h1>Directors page</h1>
      {directorsData.map((director, index) => (
        <div key={index}>
          <h2>Name: {director.name}</h2>
          <p>Movies: </p>
          <ul>
            {director.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;

