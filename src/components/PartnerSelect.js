import React, {useEffect, useState} from "react";
import PartnerOption from "./PartnerOption";

function PartnerSelect({handleChange, formData}) {

    const [partners, setPartners] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/partners")
          .then((r) => r.json())
          .then((data) => setPartners(data));
      }, []);

    const partnerOptions = partners.map((partner) => {
        return <PartnerOption key={partner.id} partnerId={partner.id} partnerName={partner.name}/>
    })

    return(
        <select name="partner" onChange={handleChange} value={formData.partner}>
            {partnerOptions}
        </select>
       
    )
}

export default PartnerSelect