import { useState } from "react";

export function NewUserForm() {
    const [name, setName] = useState('');

    function handleCreateUser() {
        
    }

    return (
        <form onSubmit={handleCreateUser}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            
        </form>
    )
}