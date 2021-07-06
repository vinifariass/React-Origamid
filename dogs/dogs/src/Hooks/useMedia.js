import React from 'react'

const useMedia = (media) => {
const [match, setMatch  ] = React.useState(null)

  React.useEffect(() => {
    function changematch() {
      const {matches} = window.matchMedia(media)
      setMatch(matches)
    }
    changematch()
    window.addEventListener('resize', changematch)
    return () => {
      window.removeEventListener('resize', changematch)
    }
  },[media])

  return match
}

export default useMedia
