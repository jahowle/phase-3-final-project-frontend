import React, {useEffect} from "react";
import NeedCard from "./NeedCard";
import { NavLink } from "react-router-dom";

function MainContent({needs}) {


    const needsToDisplay = needs.map((need) => {
        console.log(need.category)
        return <NeedCard key={need.id} id={need.id} amount={need.amount} funded={need.funded} neighbor={need.neighbor.name} category={need.category.name} description={need.description} />
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