import React, { Fragment } from 'react';
import "./card.css";


const Card = (props) => {
    console.log(props.monster)




return(
        <Fragment>
        <div className ='container'>
        <div className ='monster'>
           <div>
                <img className='imgStyle' src={`https://robohash.org/${props.monster.id}set=set2&size=180x180`} alt='monsterImg'/>
           </div>
            <div className='cardStyle'>
                <h3>
                {props.monster.name}
                </h3>
                <p>{props.monster.email}</p>
                <p>{props.monster.website}</p>
            </div>
        </div>
        </div>
        </Fragment>
    )   
    
    }
    // class Card extends React.Component{
        //     constructor(props){
        //         super(props);
        //         this.monster = {props}
        //     }

// render(){
    // return(
    //     <Fragment>
    //     <div className ='container'>
    //     <div className ='monster'>
    //        <div>
    //             <img className='imgStyle' src={`https://robohash.org/${this.props.monster.id}set=set2&size=180x180`} alt='monsterImg'/>
    //        </div>
    //         <div className='cardStyle'>
    //             <h3>
    //             {this.props.monster.name}
    //             </h3>
    //             <p>{this.props.monster.email}</p>
    //             <p>{this.props.monster.website}</p>
    //         </div>
    //     </div>
    //     </div>
    //     </Fragment>
    // )   
    
    // }

export default Card;