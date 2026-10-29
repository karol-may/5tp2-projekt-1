import { useParams } from "react-router";
import { users } from "../data/user";
import type { UserType } from "../types/UserType";
import { useState } from "react";

function UserEditPage(){

    let {id} = useParams();

    if (!id) {return "Brak ID użytkownika!";}

    let user : UserType | undefined = users.find((v)=> v.id === Number(id))

    if (!user) {return "Nie ma takiego typa!";}

    let [formData, setFormData] = useState<UserType>(user);

    function formDataOnChangeHandler(e:any) {
            let {name, value} = e.target;
            setFormData(prev => ({...prev, [name]: value}));
    }

    return (
    <div>
        <div>
            <label className="form-label">Id:</label>
            <input id="id" name="id" value={formData.id} onChange={formDataOnChangeHandler} className="form-control" type="text" disabled/>
        </div>
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

export {UserEditPage};