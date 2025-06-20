import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { getMostRecent } from './API'

function App() {

  const [video, setVideo] = useState()

  useEffect(() => {
    getMostRecent().then((data) => {
   setVideo(data)
    })
  }, []);

  return (
    <>
    <h1>DAI TAN FILMS</h1>
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </>
  )
}

export default App
