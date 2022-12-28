import React, {useState} from "react";

function AddNeed() {

    const [formData, setFormData] = useState({
        neighborName: "",
        amount: 0,
        category: null,
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
            <form onSubmit={handleSubmit}>
                <label>Neighbor Name
                    <input
                    type="text"
                    name="neighborName"
                    onChange={handleChange}
                    value={formData.neighborName}
                    />
                </label>

            </form>
        </div>
    )
}

export default AddNeed