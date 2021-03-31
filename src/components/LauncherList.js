import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])

  const fetchLaunchers = async () => {
    try {
      const response = await fetch("/api/v1/launchers")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }

      const launcherData = await response.json()
      setLaunchers(launcherData)

    } catch(err) {
      //throw error
    }
  }
  useEffect(() => {
    fetchLaunchers()
  }, [])

  const launcherList = launchers.map((launcher) => {
    return(
      <li key={launcher.id}>
        <Link to={`/launchers/${launcher.id}`}>
          {launcher.name}
        </Link>
      </li>
    )
  })

  return(
    <div>
      <h1>LAUNCHERS</h1>
      <ul>
        {launcherList}
      </ul>
    </div>
  )
}

export default LauncherList;
