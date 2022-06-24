import React from 'react';
import css from '../launch.css'


const Launch = (props) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = props;

    return (
        <div className="LaunchDiv">
            <div>MISSION NAME: {mission_name}</div>
            <div>YEAR: {launch_year}</div>
            <img src={mission_patch_small} alt={'mission_name'}/>
        </div>
    );
};

export default Launch;