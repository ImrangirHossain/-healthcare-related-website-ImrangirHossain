import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        fetch('./teams.json')
        .then(res => res.json())
        .then(data=> setTeams(data))
    },[])
    return (
        <div className="my-3">
             <h2 className="fw-bold text-start pt-5 text-center my-3">OUR TEAMS </h2>
             <p className="fs-5 w-50 mx-auto">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent claritatem insitamconsequat duis</p>

                {/* services */}

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-0 mx-2 ">
                {
                    teams.map(team => <Team
                        key={team.key} team={team}></Team>)
                }
                </div>
        </div>
    );
};

export default Teams;