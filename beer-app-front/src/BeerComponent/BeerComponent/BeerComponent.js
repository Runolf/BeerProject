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

        const style = {
            position: "relative",
            left: "20px",
            top: "100px"
        }

        const style2 = {
            width: "35rem",
            padding: "2px",
            marginBottom: "10px",
            color: "#D2691E",
            border: "1px solid brown"
        }

        
        if(!isLoaded){
          return <div> <p>Is not loaded yet</p> </div>
        }
        else{
          return (
            <div className="row row-cols-1 row-cols-md-3" style={style}>
                {beers.map(beer => ( 
                    <div className="col mb-4">
                        <div className="card" style={style2}>
                            <div className="card-body txt-card">
                                <h5 className="card-title">{beer.Name}</h5>
                                <p className="card-text">Brewery: {beer.Brewery}</p>
                                <p className="card-text">Country: {beer.Country}</p>
                                <p className="card-text">Degree: {beer.Degree}</p>
                                <p className="card-text">Color: {beer.Color}</p>
                                <p className="card-text">Fermentation: {beer.Fermentation}</p>
                                {beer.SpecialCat != null?
                                    <p className="card-text">Special Category: {beer.SpecialCat}</p>
                                    :
                                    <p className="card-text">Special Category: no special category</p>
                                }
                                
                            </div>    
                        </div>
                    </div>
                ))}
            </div>
          );
        }
      };
}