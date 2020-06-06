import React, { useState } from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './textcont.css';

const TextContainer = ({ users }) => {
  var [count,setcount]=useState(1);
  setcount=()=>{
    count=count+1;
  }
  return(
    <div className="textContainer">
    
    <div>
      {/* <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2> */}
      {/* <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2> */}
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  
                  <div key={name} className="activeItem">
                  {count}  {name}
                  {setcount()}
                  
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
  )
  
};

export default TextContainer;