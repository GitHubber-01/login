import { signOut, useSession } from "next-auth/react";
import Link from "next/Link";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link className="btn btn-primary" href="/logs">Ver logs recientes</Link>
            <div className="collapse navbar-collapse">
                {
                    session ?
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active p-2 align-middle">
                                <img src={session.user.image} width="60px" height="60px" alt="User"/>
                        </li>
                        <li className="nav-item p-2 align-middle">
                                <p>{session.user.email}</p>
                        </li>
                        <li className="nav-item p-2 align-items-center">
                            <button className="btn btn-warning" onClick={() => signOut()}>Cerrar sesión</button>
                        </li>
                    </ul> 
                    : 
                    <div className="d-flex ms-auto">
                        <p className="p-2 align-middle">No hay ninguna sesión iniciada</p>
                    </div>
                }
            </div>
        </nav>
    )
}
