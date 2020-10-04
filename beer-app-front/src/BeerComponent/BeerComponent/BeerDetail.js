import React, {Component} from 'react';

export default class BeerDetail extends Component{
    
    constructor(){
        super();
        this.state = {
            beer: '',
            isLoaded: false
        }
    }



    componentDidMount(){
        fetch('https://localhost:44369/api/beer/')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            beer: json
          })
        });
    }

    render(){
        return(
            <div>
                <h3>{beer.Name}</h3>
            </div>
        );
    }
}