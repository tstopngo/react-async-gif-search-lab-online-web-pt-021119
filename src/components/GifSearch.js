import React, {Component} from 'react'

export default class GifSearch extends Component{

  state = {
    query: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.gifSearch(this.state.query)
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Enter Search Term </label><br/>
            <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
            <button>Find Gifs</button>
        </form>
      </div>
    )
  }
}
