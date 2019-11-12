import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

  state = {
    gifList: []
  }

  componentDidMount(){
    this.submitSearch()
  }

  submitSearch = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=cBSjEPPF6CNn8sF84Ror584mVS7g8Isx&limit=3`)
      .then(resp => resp.json())
      .then(({data}) => {this.setState({ gifList: data.map(gif => ({ url: gif.images.original.url }) ) })
    })
  }

  render(){
    return(
      <div>
        <GifList gifList={this.state.gifList} />
        <GifSearch gifSearch={this.submitSearch} />
      </div>

    )
  }
}
