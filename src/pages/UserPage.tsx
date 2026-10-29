import { useEffect, useState } from "react";
import { users } from "../data/user";
import type { UserType } from "../types/UserType";
import { neon } from "../lib/neon";

function UserPage(){
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        async function getData() {
            const { data, error } = await neon
                .from("users")
                .select("*")
                .order("id", { ascending: false });

            if (error) {
                console.error(error);
                return;
            }

            setUsers(data ?? []);
        }

        getData();
    }, []);
    return (
    <div>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>E-mail</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {users.map((v,i)=>{
                    return(
                        <tr key={i}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.surname}</td>
                            <td>{v.email}</td>
                            <td className="d-flex gap-1">
                                <button className="btn btn-sm btn-info"><i className="bi bi-eye-fill"></i></button>
                                <button className="btn btn-sm btn-primary"><i className="bi bi-pencil-fill"></i></button>
                                <button className="btn btn-sm btn-danger"><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                        )
                    }
                )}
               
            </tbody>
        </table>
    </div>
    );
}

export {UserPage};