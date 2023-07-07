

export function monsterAPI(){
  console.log('Fetching data');
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(jsonData => {
            console.log('Json here')
            return jsonData.json()
          })
          .then(data => {
            this.setState({monster: data}, ()=>{
              console.log('Monsters', this.state.monster)
            });
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }

