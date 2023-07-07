import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import Card from './Component/card.js';
 


const App = () => {
  const [monster, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    // console.log('fetch called')
    fetch(' ')
          .then(jsonData => {
            return jsonData.json()
          })
          .then(data => {
            setMonsters(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
  }, [])


  // let { monster, searchTex} = this.state;
  console.log('rendering')
  let filteredMonsters = monster.filter((monster) =>
  monster.name.toLowerCase().includes(searchText.toLowerCase()));
let handleSearchText = (value) => {
  setSearchText(value);
  
};
  return (
    <Fragment>
        <div className ='mainHeader'>
            <div className='head'>
            <h2>
            Monster Rolodex
            </h2>
            <div>
            <input placeholder='Search Monsters' onChange={(e)=>{
              setSearchText(e.target.value);
              handleSearchText(e.target.value)
            }}></input>
            </div>
            </div>

        </div>
        <div className='card-list'>
        {filteredMonsters.map(monster=>(
          <Card key={monster.id} monster = {monster}/>
        ))}
      </div>
      </Fragment>
  );
}

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       monster:[],
//       searchText : "",
//     };
//   }

 
  
//   componentDidMount() {
//     console.log('Mounted')
//     monsterAPI()
//   }
//   // monsterAPI() {
//   //   fetch('https://jsonplaceholder.typicode.com/users')
//   //     .then(jsonData => {
//   //       return jsonData.json()
//   //     })
//   //     .then(data => {
//   //       this.setState({monster: data}, ()=>{
//   //         // console.log('Monsters', this.state.monster)
//   //       });
//   //     })
//   //     .catch(error => {
//   //       console.error('Error:', error);
//   //     });
//   // }
//     render() {

//       let { monster, searchText } = this.state;
//       let filteredMonsters = monster.filter((monster) =>
//       monster.name.toLowerCase().includes(searchText.toLowerCase()));
// let handleSearchText = (value) => {
//   this.setState({ searchText: value });
  
// };
  

//   return (
//     <Fragment>
//         <div className ='mainHeader'>
//             <div className='head'>
//             <h2>
//             Monster Rolodex    
//             </h2>
//             <div>
//             <input placeholder='Search Monsters' onChange={(e)=>{
//               console.log(e)
//               console.log(e.target.value)
//               this.setState({SearchText: e.target.value });
//               handleSearchText(e.target.value)
//             }}></input>
//             </div>
//             </div>
            

//         </div>
//         <div className='card-list'>
//         {filteredMonsters.map(monster=>(
//           <Card key={monster.id} monster = {monster}/>
//         ))}
//       </div>
//       </Fragment>
//   );
// }
// }
        export default App;
