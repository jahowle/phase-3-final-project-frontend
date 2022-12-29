import React, {useEffect, useState} from "react";
import LocationOption from "./LocationOption";

function LocationSelect({handleChange, formData}) {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/locations")
          .then((r) => r.json())
          .then((data) => setLocations(data));
      }, []);

    const locationOptions = locations.map((location) => {
        return <LocationOption key={location.id} locationId={location.id} locationName={location.name}/>
    })

    return(
        <select name="location" onChange={handleChange} value={formData.location}>
            <option value="">--Please choose a Location-</option>
            {locationOptions}
        </select>
       
    )
}

export default LocationSelect