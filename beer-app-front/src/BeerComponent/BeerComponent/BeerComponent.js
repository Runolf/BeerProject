import React, {Component} from 'react';

export default class BeerComponent extends Component{

    
          state = {
            beers:[],
            isLoaded: false
          }
    


      componentDidMount(){
        fetch('https://localhost:44369/api/beer')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            beers: json
          })
        });
      }

      render(){

        var {isLoaded, beers} = this.state;
        if(!isLoaded){
          return <div> <p>Is not loaded yet</p> </div>
        }
        else{
          return (
            <div className="App">
               <ul>
                 {beers.map(beer => ( 
                   <li key={beer.id}>
                     {beer.Name}
                   </li>
                 ))}
               </ul>
            </div>
          );
        }
      };
}