import React from 'react'

const SongDetails = (props) =>{
  
  console.log

  return (
    <div className='song-wrapper'>
      <h4>{props.children}</h4>
      <p>{props.url}</p>

    </div>

    )


}







// class SongDetails extends React.Component{

// render(){
//   console.log('songdetails')  
//   console.log(props.song)

// if(!props.song){
//   return null
// }

// return (
//   <div className='song-wrapper'>

//     <h4>{props.song}</h4>

//   </div>

//   )
// }


// }


export default SongDetails