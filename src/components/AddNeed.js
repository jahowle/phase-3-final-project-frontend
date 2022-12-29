import React, {useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import CategorySelect from "./CategorySelect";
import LocationSelect from "./LocationSelect";
import PartnerSelect from "./PartnerSelect";

function AddNeed({updateNeeds}) {

    const history = useHistory();

    const [formData, setFormData] = useState({
        neighborName: "",
        bio: "",
        location: undefined,
        partner: undefined,
        amount: 0,
        category: undefined,
        description: "",
    })


    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:9292/neighbors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.neighborName,
                bio: formData.bio,
                location_id: formData.location,
                partner_id: formData.partner,
            })
        })
        .then((r) => r.json())
        .then((data) => handleNeedSubmit(data))

    }

    function handleNeedSubmit(data) {

        fetch("http://localhost:9292/needs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: formData.amount,
            neighbor_id: data.id,
            category_id: formData.category,
            description: formData.description,
            funded: false
        }),
    })
    .then((r) => r.json())
    .then((data) => console.log(data))

    history.push("/");

    }


    

    return (
        <div>
            <h1>Add a Need</h1>
            <form id="add-need-form" onSubmit={handleSubmit}>
                <label className="input">Neighbor Name
                    <input
                    type="text"
                    name="neighborName"
                    onChange={handleChange}
                    value={formData.neighborName}
                    />
                </label>

                <label className="input">Neighbor Bio
                    <textarea rows="4" cols="50" name="bio" onChange={handleChange} value={formData.bio}/>
                </label>

                <label className="input">Location
                    <LocationSelect handleChange={handleChange} formData={formData}/>
                </label>

                <label className="input">Partner
                    <PartnerSelect handleChange={handleChange} formData={formData}/>
                </label>
                <label className="input">Amount
                    <input
                    type="number"
                    name="amount"
                    onChange={handleChange}
                    value={formData.amount}
                    min="1"
                    max="400"
                    />
                </label>

                <label className="input">Category
                    <CategorySelect handleChange={handleChange} formData={formData}/>
                </label>
                
                <label className="input">Description
                    <input
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
                    />
                </label>
                <button id="submit-button" type="submit">Submit Need</button>


            </form>
            <button>
                <NavLink to="/" exact>
               Go Home
                </NavLink></button>
        </div>
    )
}

export default AddNeed