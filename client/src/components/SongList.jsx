import React from 'react'
import SongDetails from './SongDetails.jsx'

class SongList extends React.Component{


  render(){

    const songNodes = this.props.songs.map( (song) => {
      // console.log(song)
      // console.log(song.id.attributes['im:id'])
         //console.log(song.title.label)
      //   console.log(song.link[0].attributes.href)

      return (
        <SongDetails key={song.id.attributes['im:id']} url={song.link[0].attributes.href} >
         { song.title.label }
        </SongDetails>
        )

    })

    return (
      <div className='song-list'>
      { songNodes }
      </div>
      )

  }
}
export default SongList