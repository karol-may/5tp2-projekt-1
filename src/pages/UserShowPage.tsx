import { useParams } from "react-router";
import { users } from "../data/user";

function UserShowPage(){

    let {id} = useParams();

    if (!id) {return "Brak ID użytkownika!";}

    let user = users.find((v)=> v.id === Number(id))

    if (!user) {return "Nie ma takiego typa!";}

    return (
    <div>
        {user.id} {user.name}
    </div>
    );
}

export {UserShowPage};