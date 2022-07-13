import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom"

const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])

  const getLaunchers = async () => {
    const response = await fetch("/api/v1/launchers")
    const arrayOfLauncherObjects = await response.json()
    setLaunchers(arrayOfLauncherObjects)
  }

  useEffect(() => {
    getLaunchers()
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
      
      <ul>
        {launcherList}
      </ul>
    </div>
  )
}

export default LauncherList;
