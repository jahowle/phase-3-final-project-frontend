import React, {useEffect, useState} from "react";
import CategoryOption from "./CategoryOption";

function CategorySelect({handleChange, formData}) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/categories")
          .then((r) => r.json())
          .then((data) => setCategories(data));
      }, []);

    const categoryOptions = categories.map((category) => {
        return <CategoryOption key={category.id} categoryId={category.id} categoryName={category.name}/>
    })

    return(
        <select name="category" onChange={handleChange} value={formData.category}>
            {categoryOptions}
        </select>
       
    )
}

export default CategorySelect