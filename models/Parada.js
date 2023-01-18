import {Schema, model, models} from "mongoose";

const paradaSchema = new Schema({
	codLinea: {
		type: Number,
        unique: true,
		required: [true, "Código de línea obligatorio."]
	},
    nombreLinea: {
        type: String,
        required: [true, "Nombre de línea obligatorio."]
    },
    sentido: {
        type: Number,
        min: 1,
        max: 2,
        required: [true, "Sentido obligatorio."]
    },
    orden: {
        type: Number
    },
    codParada: {
        type: Number,
        unique: true
    },
    nombreParada: {
        type: String,
        required: [true, "Nombre de parada obligatorio."]
    },
    direccion: {
        type: String
    },
    lat: {
        type: Number,
        required: [true, "Latitud obligatoria."]
    },
    lon: {
        type: Number,
        required: [true, "Longitud obligatoria."]
    }
}, {collection: "Parada"});

export default models.Parada || model("Parada", paradaSchema);