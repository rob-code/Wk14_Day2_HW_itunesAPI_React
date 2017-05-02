import React from 'react'

const SongDetails = (props) =>{
  
  return (
    <div className='song-wrapper'>
    <a href={props.itunesURL}><img className='image' src={props.imageSRC}/></a>
    <div className="sub-head">
    <div className='chart'>{props.chartPosition}</div>
      <div className='name'>{props.children}</div>

      </div>
    </div>

    )


}







// class SongDetails extends React.Component{

// render(){


// return (
// <div className='song-wrapper'>
// <a href={this.props.itunesURL}><img className='image' src={this.props.imageSRC}/></a>
// <div className="sub-head">
// <div className='chart'>{this.props.chartPosition}</div>
//   <div className='name'>{this.props.children}</div>

//   </div>
// </div>

//   )
// }


// }


export default SongDetails