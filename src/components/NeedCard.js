import React from "react";

function NeedCard({description, amount, neighbor, category, funded}) {


    return(
        <div className="need-card">
            <h3>{neighbor}</h3>
            <h4>${amount}</h4>
            <h4>{category}</h4>
            <p>{description}</p>
            <p>Funded: {funded ? 'Yes' : 'No'}</p>
        </div>
    )

}

export default NeedCard