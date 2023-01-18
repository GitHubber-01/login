import {getSession} from "next-auth/react"
import Navbar from "../components/Navbar";

export default function Home({session}) {
    return (
        <div>
            <Navbar/>
            <h1>¡Hola, {session.user.email}!</h1>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return !session ? {redirect: {destination: "/login", permanent: false}} : {props: {session}};
}