import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { GET_USER } from "../App";

const CREATE_USER = gql`
    mutation($name: String!){
        createUser(name: $name) {
            id
            name
        }
    }
`;

export function NewUserForm() {
    const [name, setName] = useState('');
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER)

    async function handleCreateUser(event: FormEvent) { //recebe evento do formevent que é de dentro do react 
        event.preventDefault(); //nao atualizar pagina quando der submit no formulario (que é o comportamento padrao dos formularios no html)
    

        if (!name) {
            return;
        }

        await createUser({
            variables: {
                name,
            },
            refetchQueries: [GET_USER]
        })

        console.log(data);
    }


    return (
        <form onSubmit={handleCreateUser}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Enviar</button>
            
        </form>
    );
}