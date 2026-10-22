import { useParams } from "react-router";
import { users } from "../data/user";

function UserEditPage(){

    let {id} = useParams();

    if (!id) {return "Brak ID użytkownika!";}

    let user = users.find((v)=> v.id === Number(id))

    if (!user) {return "Nie ma takiego typa!";}

    return (
    <div>
        <div>
            <label className="form-label">Id:</label>
            <input id="id" name="id" className="form-control" type="text" disabled/>
        </div>
        <div>
            <label className="form-label">Imię:</label>
            <input id="name" name="name" className="form-control" type="text"/>
        </div>
        <div>
            <label className="form-label">Nazwisko:</label>
            <input id="surname" name="surname" className="form-control" type="text"/>
        </div>
        <div>
            <label className="form-label">Email:</label>
            <input id="email" name="email" className="form-control" type="email"/>
        </div>
    </div>
    );
}

export {UserEditPage};