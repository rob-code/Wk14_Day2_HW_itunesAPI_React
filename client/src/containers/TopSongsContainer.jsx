import React from 'react'
import Title from '../components/Title.jsx'
import SongList from '../components/SongList.jsx'

class TopSongsContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
  const request = new XMLHttpRequest();
  request.open("GET", url);

  request.onload = () => {
    if(request.status ===200){
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log(data);
      this.setState({songs: data['feed']['entry']});
    }
  }
  request.send()
}


render(){

return(

  <div className='container'>
  <Title/>
 <SongList songs={this.state.songs}/>
  </div>

  )

}











}







export default TopSongsContainer