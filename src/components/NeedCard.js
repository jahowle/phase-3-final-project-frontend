import React, {useState} from "react";

function NeedCard({description, amount, neighbor, category, funded}) {

    const [needState, setNeedState] = useState(funded)

    function updateNeedState() {
        setNeedState(!needState)
    }


    return(
        <div className="need-card">
            <h3>{neighbor}</h3>
            <h4>${amount}</h4>
            <h4>{category}</h4>
            <p>{description}</p>
            <p>Funded: {funded ? 'Yes' : 'No'}</p>
            <button disabled={needState} onClick={updateNeedState}>Fund</button>
        </div>
    )

}

export default NeedCard