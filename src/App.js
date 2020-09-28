import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
      forecast:'',
      error:'',
      address:" "
    }
  }

  onAddressChange = (event) => {
    this.setState({address: event.target.value})
  }

  onSubmitSignIn=()=>{

    const myaddress = this.state.address

      fetch('https://hawamnapp.herokuapp.com/weather?address='+myaddress)
       .then((response)=>{
            response.json().then((data)=>{
          this.setState({ location: data.location, forecast:data.forecast , error: data.error})

          console.log(this.state.location)
         })
  
       })
  }

  render() {
    return(
    <div className='App'>
      <div className='Head'><h1 className='white shadow-1 w-33 ma4'>Weather Check ϟ☀☁ </h1></div>
      
      <br/>
              <br/>
              <input className = 'pa1 shadow-5'
              type="text"
              name="Name"  
              id="text2"
              placeholder="Location"
              onChange={this.onAddressChange}
              required
              ></input>
              <br/>
              <br/>
              <input className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue' onClick ={this.onSubmitSignIn} type="submit" value="check weather"></input>

<div className='Head'>
    <h1>{this.state.location}</h1>
    <h1 className='white'>{this.state.forecast}</h1>
    <h1>{this.state.error}</h1>
</div>
   
    </div>
    )
}

}

export default App;
