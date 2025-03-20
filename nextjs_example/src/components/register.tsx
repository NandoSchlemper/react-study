"use client";

export function RegisterForm() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("clicado fds");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name="name" />
            </label>

            <label>
                Classe:
                <select>
                    <option value={"guerreiro"}>Guerreiro</option>
                    <option value={"mago"}>Mago</option>
                    <option value={"ladino"}>Ladino</option>
                </select>
            </label>
            <Submit />
        </form>
    );
}

function Submit() {
    return <button type="submit">Enviar</button>;
}
