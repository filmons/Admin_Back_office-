import React, {setState, Component} from 'react'
import axios from 'axios'
import '../class/EditClass.css'

class EditClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      titre: '' ,
      description_one: '',
      description_two: '',
      description_three:'',
  };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleClick = () => {
  const options = {
    titre: this.state.titre,
    description_one: this.state.description_one,
    description_two: this.state.description_two,
    description_three: this.state.description_three,
    
  };
  console.log(options);
  axios.post("htt://localhost:8000/V1/cours", options , {
    headers: { "content-type": "application/json" },

  })
  .then((data) => {
    console.log(data);
    this.props.history.push("/add");
  })
  .catch((error) => console.log(error));
console.log(options);
}
render() {
    return (
      
<section>
  <div className="form_calss">
     
    <h2>welcome Admin CRUD of corse</h2>
    <label htmlFor="text"><b>Enter the tiatle</b></label>
    <input 
    type="text"
    placeholder="Enter the tiatle" 
    name="titre" 
    required  onChange={this.handleChange}/>

    <label htmlFor="text"><b>Enter your therde description:</b></label>
    <input 
    type="text" 
    placeholder="description one" 
    name="description_one" 
    required onChange={this.handleChange}/>

    <label htmlFor="text"><b>Enter your therde description:</b></label>
    <input 
    type="text" 
    placeholder="description two" 
    name="description_two" 
    required  onChange={this.handleChange}/>

    <label htmlFor="text"><b>Enter your therde description:</b></label>
    <input 
    type="text" 
    placeholder="description three" 
    name="description_three" 
    required  onChange={this.handleChange}/>
    
    <button  
    onClick={this.handleClick}
    className="sub_but"> submite</button>
     <button  
    
    className="del_but"> Delete</button>
    
        </div>
        </section>
    )
}
}

export default EditClass
