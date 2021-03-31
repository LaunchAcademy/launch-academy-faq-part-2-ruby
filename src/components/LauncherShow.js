import React, { useState, useEffect } from 'react'

const LauncherShow = props => {
  const [getLauncher, setLauncher] = useState({})
//need state to get launcher
//need to grab the id 
//need to create fetch with ID
const launcherId = props.match.params.id

const fetchSingleLauncher = async () => {
  try {
    const response = await fetch(`/api/v1/launcher/${launcherId}`)
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const singleLauncherData = await response.json()
    setLauncher(singleLauncherData)

  } catch(err) {
    //throw error
  }
}

  useEffect(() => {
    fetchSingleLauncher()
  }, [])

  
  return (
    <div>
      <h1>Launcher Show page!</h1>
      <h2>{getLauncher.name}</h2>
      <p>{getLauncher.bio}</p>
    </div>
  )

}

export default LauncherShow