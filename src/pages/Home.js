import React, { Component } from 'react'
import home from './home.css';


 class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
    

    render() {
        return (
          
               <section>
      <div className="form_calss">
         
        <h2>welcome Admin CRUD of corse</h2>
        <label htmlFor="text"><b>Enter the tiatle</b></label>
        <input type="text" placeholder="Enter the tiatle" name="titre" required />
        <label htmlFor="text"><b>Enter your therde description:</b></label>
        <input type="text" placeholder="description 1" name="description" required />
        <label htmlFor="text"><b>Enter your therde description:</b></label>
        <input type="text" placeholder="description 2" name="description" required />
        <label htmlFor="text"><b>Enter your therde description:</b></label>
        <input type="text" placeholder="description " name="description" required />
        
        <button className="sub_but"> submite</button>
        
            </div>
            </section>
        )
    }
}

export default Home
