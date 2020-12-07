import React, { Component } from 'react'

class Contacts extends Component{
  constructor(props){
        super();
        this.state = {
            age: props.initialAge
    }
}
    makeOlder(){
        this.setState({
            age: this.state.age +20
        }) 
        console.log(this.state.age)
    }
    render(){
        return(
        <div>
            <h3>Vardas: {this.props.vardas}</h3>
            <p>El.Pastas: {this.props.email}</p>
            <p>Amzius: {this.state.age}</p>
            <button onClick={this.makeOlder.bind(this)} className='btn btn-info'>And now the true...</button>
        </div>
    )
    }
}

export default Contacts
