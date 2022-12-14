import React, {useEffect} from "react";
import NeedCard from "./NeedCard";
import { NavLink } from "react-router-dom";

function MainContent({needs, handleDelete}) {


    const needsToDisplay = needs.map((need) => {
        return <NeedCard handleDelete={handleDelete} key={need.id} id={need.id} amount={need.amount} funded={need.funded} neighbor={need.neighbor.name} category={need.category.name} description={need.description} />
    })

    return(
        <div>
            <h1>NeighborShare</h1>
            <button>
                <NavLink to="/addneed" exact>
                Add Need
                </NavLink>
            </button>
            <div className="needs-list">{needsToDisplay}</div>
        </div>
    )
}

export default MainContent