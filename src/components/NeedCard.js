import React, {useState} from "react";

function NeedCard({description, amount, neighbor, category, funded, id, handleDelete}) {

    const [needState, setNeedState] = useState(funded)

    function updateNeedState() {
        fetch(`http://localhost:9292/needs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                funded: !needState,
            }),
            })
            .then((r) => r.json())
            .then((data) => console.log(data))

            setNeedState(!needState)
        }

    function deleteNeed() {
        fetch(`http://localhost:9292/needs/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((data) => handleDelete(data))
    }





    return(
        <div className="need-card">
            <div className="close-icon" onClick={deleteNeed}>
                <h3>X</h3>
            </div>
            <div className="card-content">
            <h3>{neighbor}</h3>
            <h4>${amount}</h4>
            <h4>{category}</h4>
            <p>{description}</p>
            <p>Funded: {needState ? 'Yes' : 'No'}</p>
            <button disabled={needState} onClick={updateNeedState}>Fund</button>
            </div>
        </div>
    )

}

export default NeedCard