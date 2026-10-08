function UserPage(){

    let users = [
        {
            id: 1,
            name: "Karol",
            surname: "May",
            email: "karol@imay.pl"
        },
        {
            id: 2,
            name: "Adam",
            surname: "September",
            email: "adam@iseptember.pl"
        }
    ]

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
                            <td>xxx</td>
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