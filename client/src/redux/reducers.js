/* 
    José Daniel Benolol
    Gustavo Alberto Benolol
    Olga Beatriz Salom
    Nora Mónica Núñez
    Fernando Falcon
    Carlos Kevin Zamudio
    Raul Nahuel Bravo Perdomo
    María Natalia Trangoni
    Juan Manuel Gutierrez
    Luis Hernan Vega
    Rosa Esther Guex
*/
const silueta = ["silueta.png","siluetaF.png"]
const initialState = {
    profecionales:[ //cambiar la c por la s en todos lados, que boludo porque hay demasiados lugares para cambiar que usan esto
        {
            nombre:'nombre 1',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'nombre 2',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'nombre 3',
            profesion:'Abogado',
            imagen:silueta[1],
        },
        {
            nombre:'nombre 4',
            profesion:'Abogado',
            imagen:silueta[1],
        },
        {
            nombre:'nombre 5',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'nombre 6',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'nombre 7',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'nombre 8',
            profesion:'Contadora',
            imagen:silueta[1],
        },
        {
            nombre:'nombre 9',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'nombre 10',
            profesion:'Contador',
            imagen:silueta[0],
        },
        {
            nombre:'nombre 11',
            profesion:'Asistente',
            imagen:silueta[1],
        },
        {
            nombre:'Nombre 12',
            profesion:'Abogado',
            imagen:silueta[1],
        },
        {
            nombre:'nombre 13',
            profesion:'Abogado',
            imagen:silueta[0],
        },
        {
            nombre:'nombre 14',
            profesion:'Contador',
            imagen:silueta[1],
        },
        {
            nombre:'nombre 15',
            profesion:'Mediador',
            imagen:silueta[1],
        },
        {
            nombre:'nombre 16',
            profesion:'Mediador',
            imagen:silueta[1],
        },
        {
            nombre:'nombre 17',
            profesion:'Mediador',
            imagen:silueta[0],
        }
        
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
            text: '',
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