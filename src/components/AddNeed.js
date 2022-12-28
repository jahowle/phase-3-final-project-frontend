import React, {useState} from "react";
import LocationSelect from "./LocationSelect";

function AddNeed() {

    const [formData, setFormData] = useState({
        neighborName: "",
        location: undefined,
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
        console.log(formData)
    }

    return (
        <div>
            <form id="add-need-form" onSubmit={handleSubmit}>
                <label>Neighbor Name
                    <input
                    type="text"
                    name="neighborName"
                    onChange={handleChange}
                    value={formData.neighborName}
                    />
                </label>
                <label>Location
                    <LocationSelect handleChange={handleChange} formData={formData}/>
                </label>
                <label>Amount
                    <input
                    type="number"
                    name="amount"
                    onChange={handleChange}
                    value={formData.amount}
                    min="1"
                    max="400"
                    />
                </label>
                <label>Category
                    <select name="category" onChange={handleChange} value={formData.category}>
                        <option value="groceries">Groceries</option>
                        <option value="transportation">Transportation</option>
                        <option value="groceries">Groceries</option>
                        <option value="groceries">Groceries</option>
                        <option value="groceries">Groceries</option>
                        <option value="groceries">Groceries</option>
                        <option value="groceries">Groceries</option>
                    </select>
                </label>
                <label>Description
                    <input
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
                    />
                </label>
                <button type="submit">Submit Need</button>


            </form>
        </div>
    )
}

export default AddNeed