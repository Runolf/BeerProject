import React, {Component} from 'react';

export default class TodoApp extends Component {
    constructor() {
      super();
      this.state = {
        beers:[],
        isLoaded: false,
        currentPage: 1,
        beersPerPage: 3
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
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
    

    render() {
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

        const styleBarNav = {

        }

      const { beers, currentPage, beersPerPage } = this.state;

      // Logic for displaying current beers
      const indexOfLastTodo = currentPage * beersPerPage;
      const indexOfFirstTodo = indexOfLastTodo - beersPerPage;
      const currentbeers = beers.slice(indexOfFirstTodo, indexOfLastTodo);

      const renderbeers = currentbeers.map((beer, index) => {

        return  <div className="col mb-4" key={index}>

                    <div className="card shadow p-3 mb-5 bg-white rounded" style={style2}>
                      
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
                </div>;
      });


      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(beers.length / beersPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li 
            className="page-item page-link"
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });

      return (
        <div>
          <div className="row row-cols-1 row-cols-md-3" style={style}>
            {renderbeers}
          </div>


          <ul id="page-numbers" style={styleBarNav} className="pagination justify-content-center fixed-bottom">
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  }