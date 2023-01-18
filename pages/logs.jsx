import Log from "../models/Log";
import TablaLogs from "../components/Tabla";
import conectarDB from "../lib/dbConnect";
import Navbar from "../components/Navbar";

export default function Logs({logs}) {
    return (
        <div>
            <Navbar/>
            <TablaLogs
                titulo={"Logs"}
                cabecera={"Logs"}
                logs={logs}
            />
        </div>
    );
}

export async function getServerSideProps() {    
    await conectarDB();
    const res = await Log.find();
    const logs = res.map(doc => {
        const log = doc.toObject();
        log._id = `${log._id}`;
        log.timestamp = log.timestamp.toISOString();
        log.caducidad = log.caducidad.toISOString();
        return log;
    });
    return {props: {logs}};
}