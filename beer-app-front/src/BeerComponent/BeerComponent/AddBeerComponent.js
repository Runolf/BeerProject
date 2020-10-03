import React, {Component} from 'react';

export default class AddBeerComponent extends Component{
    constructor(props){
        super(props);
            this.state = {
            Name: '',
            Brewery: '',
            Country: '',
            Degree: '',
            Color: '',
            Fermentation: '',
            SpecialCat: ''
        }
    }


    postData(event){
        event.preventDefault();
        let datas = this.state;
        try{
            return fetch('https://localhost:44369/api/beer',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    datas
                })
            })
            .then(res => res.json())
            .then(() => console.log(datas));
        }catch(e){
            alert("not added :'( ");
            console.log(e);
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={e => this.postData(e)}>
                   Name: <input type="text" value={this.state.Name} name="Name" onChange={(data) => {this.setState({Name:data.target.value})}}/>
                    <br />
                    Brewery: <input type="text" value={this.state.Brewery} name="Brewery" onChange={(data) => {this.setState({Brewery:data.target.value})}}/>
                    <br />
                    Country: <input type="text" value={this.state.Country} name="Country" onChange={(data) => {this.setState({Country:data.target.value})}}/>
                    <br />
                    Degree: <input type="text" value={this.state.Degree} name="Degree" onChange={(data) => {this.setState({Degree:data.target.value})}}/>
                    <br />
                    Color: <input type="text" value={this.state.Color} name="Color" onChange={(data) => {this.setState({Color:data.target.value})}}/>
                    <br />
                    Fermentation: <input type="text" value={this.state.Fermentation} name="Fermentation" onChange={(data) => {this.setState({Fermentation:data.target.value})}}/>
                    <br />
                    Special Category: <input type="text" value={this.state.SpecialCat} name="SpecialCat" onChange={(data) => {this.setState({SpecialCat:data.target.value})}}/>
                    <br />
                    <button type="submit" /*onClick={this.postData.bind(this)}*/ >Add this beer</button>
                </form>
            </div>
        );
    }
}