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
        const style = {
            width: "25%",
            position: "relative",
            left: "37%",
            top: "50px"
        }
        return(
            <div>
                <form onSubmit={e => this.postData(e)} style={style}>
                    <div class="form-group">
                        <label for="Name">Name</label>
                        <input type="text" className="form-control" value={this.state.Name} id="Name" name="Name" onChange={(data) => {this.setState({Name:data.target.value})}}/>
                    </div>

                    <div class="form-group">
                        <label for="Brewery">Brewery</label>
                        <input type="text" className="form-control" value={this.state.Brewery} id="Brewery" name="Brewery" onChange={(data) => {this.setState({Brewery:data.target.value})}}/>
                    </div>

                    <div class="form-group">
                        <label for="Country">Country</label>
                        <input type="text" className="form-control" value={this.state.Country} id="Country" name="Country" onChange={(data) => {this.setState({Country:data.target.value})}}/>
                    </div>

                    <div class="form-group">
                        <label for="Degree">Degree</label>
                        <input type="text" className="form-control" value={this.state.Degree} id="Degree" name="Degree" onChange={(data) => {this.setState({Degree:data.target.value})}}/>
                    </div>

                    <div class="form-group">
                        <label for="Color">Color</label>
                        <input type="text" className="form-control" value={this.state.Color} id="Color" name="Color" onChange={(data) => {this.setState({Color:data.target.value})}}/>
                    </div>

                    <div class="form-group">
                        <label for="Fermentation">Fermentation</label>
                        <input type="text" className="form-control" value={this.state.Fermentation} id="Fermentation" name="Fermentation" onChange={(data) => {this.setState({Fermentation:data.target.value})}}/>
                    </div>

                    <div class="form-group">
                        <label for="SpecialCat">Special Category</label>
                        <input type="text" className="form-control" value={this.state.SpecialCat} id="SpecialCat" name="SpecialCat" onChange={(data) => {this.setState({SpecialCat:data.target.value})}}/>
                    </div>
                   
                    <button type="submit" className="btn btn-dark" /*onClick={this.postData.bind(this)}*/ >Add this beer</button>
                </form>
            </div>
        );
    }
}