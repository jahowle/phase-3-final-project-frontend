import React, {useEffect} from "react";
import NeedCard from "./NeedCard";

function MainContent({needs}) {

    const needsToDisplay = needs.map((need) => {
        return <NeedCard key={need.id} category={need.category.name} description={need.description} amount={need.amount} neighbor={need.neighbor.name}/>
    })

    return(
        <div>
            <h1>These are the needs</h1>
            <div className="needs-list">{needsToDisplay}</div>
        </div>
    )
}

export default MainContent