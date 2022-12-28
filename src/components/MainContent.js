import React, {useEffect} from "react";
import NeedCard from "./NeedCard";
import { NavLink } from "react-router-dom";

function MainContent({needs}) {

    const needsToDisplay = needs.map((need) => {
        return <NeedCard id={need.id} key={need.id} category={need.category.name} description={need.description} amount={need.amount} neighbor={need.neighbor.name} funded={need.funded}/>
    })

    return(
        <div>
            <h1>These are the needs</h1>
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