import React from 'react';
import "./card.css";

class Header extends React.Component{
render(){
    return(
        <div className ='mainHeader'>
            <div className='head'>
            <h2>
            Monster Rolodex    
            </h2>
            <div>
            <input placeholder='Search Monsters'></input>
            </div>
            </div>
            

        </div>
    )
    
}
}
export default Header;