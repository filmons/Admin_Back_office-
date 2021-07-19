import React, { setState, Component } from 'react'
import axios from 'axios';
import './Get.css'

class Get extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
        };
      }
      getData = async () => {
        const response = await axios.get('http://localhost:8000/V1/cours');
        this.setState({
          data: response.data.corss,
        });
        console.log(this.state.data);
      };
      componentDidMount() {
        this.getData();
      }
      render() {
        return (
          <div className="container_calss">
            <div className="class-card">
              {this.state.data.map((cours, index) => {
                return (
                  <div className="item" key={index}>
                        <p>{cours.titre}</p>
                        <p>{cours.description_one}</p>
                        <p>{cours.description_two}</p>
                        <p>{cours.description_three}</p>
                      {/* <img src={image} alt={cours.name} /> */}
                   
                  </div>
                );
              })}
            </div>
          </div>
       
        );
      }
}

export default Get
