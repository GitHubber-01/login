import Head from "next/head";

const TablaLogs = ({titulo, cabecera, logs}) => {
    return (
        <div>
            <Head>
                <title>{titulo}</title>
            </Head>
            <h1 className="text-center">{cabecera}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FECHA DE ACCESO</th>
                        <th>CORREO</th>
                        <th>CADUCIDAD</th>
                        <th>ID DE TOKEN</th>
                    </tr>
                </thead>  
                <tbody>
                {
                    logs.map(({_id, timestamp, usuario, caducidad, token}) => (
                        <tr key={_id}>
                            <td>{_id}</td>
                            <td>{timestamp}</td>
                            <td>{usuario}</td>
                            <td>{caducidad}</td>
                            <td>{token}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default TablaLogs;