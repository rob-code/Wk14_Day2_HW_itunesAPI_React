import React from 'react'
import SongDetails from './SongDetails.jsx'

class SongList extends React.Component{


  render(){

    const songNodes = this.props.songs.map( (song, index) => {
      // console.log(song)
      // console.log(song.id.attributes['im:id'])
         //console.log(song.title.label)
      //   console.log(song.link[0].attributes.href)
      //console.log(song['im:image'][2].label)

      const chartPosition = index + 1


      return (
        <SongDetails key={song.id.attributes['im:id']} itunesURL={song.link[0].attributes.href} imageSRC={song['im:image'][2].label} chartPosition={chartPosition}>
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