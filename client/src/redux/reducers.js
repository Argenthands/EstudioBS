const silueta = ["silueta.png","siluetaF.png"]
const initialState = {
    profecionales:[
        {
            nombre:'José Daniel Benolol',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'Gustavo Alberto Benolol',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'Olga Beatriz Salom',
            profesion:'Abogada',
            imagen:silueta[1],
        },
        {
            nombre:'Nora Mónica Núñez',
            profesion:'Abogada',
            imagen:silueta[1],
        },
        {
            nombre:'Fernando Falcon',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'Carlos Kevin Zamudio',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'Raul Nahuel Bravo Perdomo',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'María Natalia Trangoni',
            profesion:'Contadora',
            imagen:silueta[1],
        },
        {
            nombre:'Juan Manuel Gutierrez',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'Luis Hernan Vega',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'Rosa Esther Guex',
            profesion:'Asistente',
            imagen:silueta[1],
        },
        {
            nombre:'Nuevo',
            profesion:'Abogado',
            imagen:silueta[0],
        },
    ],
    servicios:[
        {
            title: 'Asesoría Contable',
            text: 'Contadores experimentados a su disposición',
            professional:'Contador',
        },
        {
            title: 'Asesoría Tributaria',
            text: 'Especialistas en impuestos a su disposición',
            professional:'Contador',
        },
        {
            title: 'Asesoría Jurídica',
            text: 'Abogados con gran trayectoría a su disposición',
            professional:'Abogado',
        },
        {
            title: 'Mediadores',
            text: 'contamos con nuestros propios mediadores a su disposición',
            professional:'Mediador',
        },
        {
            title: 'Conciliación Laboral',
            text: 'no se algun texto',
            professional:'Conciliador',
        }
    ],
    otrasCosas:{}
}

function rootReducer(state = initialState, action) {
    switch (action.type){
        case "ACTION_TEST":{
            return{
                ...state,
                test: action.payload
            }
        }
        default:{
            return state
        }
    }
}

export default rootReducer