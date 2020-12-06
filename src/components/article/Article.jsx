import React, {Component} from 'react';

class Article extends Component{
    constructor(){
        super()
        this.state={
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState =>{
            return {
                counter: prevState.counter +1
            }
        })
    }

    render(){
        return(
            <div className='list-group-item'>
                <h4>{this.props.articles.title}</h4>
                <p>{this.props.articles.description}</p>
                <p>Patikimai: {this.state.counter}</p>
                <button className='btn btn-primary' onClick={this.handleClick}>Like</button>

            </div>
        )
    }

}
export default Article