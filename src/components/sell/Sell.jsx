import React, {Component} from 'react';

class Sell extends Component{
    constructor(props){
        super(props) 
        this.state = {
            message: 'Today 15% discount'
        }
    }
    clickHandler(){
        this.setState({
            message: 'Only YUO - 20% discount!!!'
        })
        console.log(this);
    }
    render(){

        return(
            <div>
                <div>{this.state.message}</div>
                <button className='btn btn-warning' onClick={this.clickHandler.bind(this)}>Check...</button>
            </div>
        )
    }

}
export default Sell