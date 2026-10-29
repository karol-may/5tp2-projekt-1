import { useState } from "react";
import type { UserType } from "../types/UserType";

function UserNewPage(){
   
    let [formData, setFormData] = useState<UserType>({        
        name: "",
        surname: "",
        email: ""
    });

    function formDataOnChangeHandler(e:any) {
            let {name, value} = e.target;
            setFormData(prev => ({...prev, [name]: value}));
    }

    return (
    <div>
        <div>
            <label className="form-label">Imię:</label>
            <input id="name" name="name" value={formData.name} onChange={formDataOnChangeHandler} className="form-control" type="text"/>
        </div>
        <div>
            <label className="form-label">Nazwisko:</label>
            <input id="surname" name="surname" value={formData.surname} onChange={formDataOnChangeHandler} className="form-control" type="text"/>
        </div>
        <div>
            <label className="form-label">Email:</label>
            <input id="email" name="email" value={formData.email} onChange={formDataOnChangeHandler} className="form-control" type="email"/>
        </div>
    </div>
    );
}

export {UserNewPage};