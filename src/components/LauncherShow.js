import React, { useState, useEffect } from 'react';


const LauncherShow = (props) => {

    const [launcher, setLauncher] = useState({})


    // const getLauncher = async () => {

    //     const response = await fetch(`/api/v1/launchers/${props.match.params.id}`)
    //     const launcherData = await response.json()
    //     setLauncher(launcherData)
        
    // }
    // useEffect(() => {
    //     getLauncher()
    // }, [])


    return (
        <div>
            Launcher Show Page
            <h1>{launcher.name}</h1>
            <p>{launcher.bio}</p>
            
        </div>
    )
}

export default LauncherShow;
