/*

Desarrollar la siguiente tabla de datos.

Parte 1:
Utilizar el nombre_columnas para renderizar las columnas de arriba de la tabla. Deberian escribirse en HTML de la siguiente manera:
<div id='nombre_columnas'>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
</div>
Luego aplicar los estilos para que esten en la misma fila. (usar de referencia el figma)

Parte 2:
Utilizar registros para renderizar los datos de la tabla. Deberian escribirse en HTML de la siguiente manera:
<div id='registros'>
    <div class='registro-fila'>
        <div>
            <input type="checkbox" checked (puede no estar este valor, depende de si tiene o no selected)>
        </div>
        <div>
            {registro.Title}
        </div>
        <div>
            {registro.Name}
        </div>
        <div>
            {registro.Description}
        </div>
        <div>
            {registro.Date}
        </div>
        <div>
            {registro.Origin}
        </div>
        <div>
            {registro.Status}
        </div>
        <div>
            {registro['Process ID']}
        </div>
    </div>
</div>

Link de figma de referencia:[text](https://www.figma.com/design/bWhe7ecD77qANPk03gAK60/Tables-(Community)?node-id=1-2&node-type=canvas&t=YLnxfeuWOdQGfDvv-0) */



const nombres_columnas = [
    'Selected',
    'Title',
    'Name',
    'Description',
    'Date',
    'Origin',
    'Status',
    'Process_ID',
    
    
]

const registros = [
    {
        'Title': 'Primer ejemplo',
        'Name': 'Primer ejemplo',
        'Description': 'Primer ejemplo',
        'Date': 'Primer ejemplo',
        'Origin': 'Primer ejemplo',
        'Status': 'inactive',
        'Process_ID': 'Primer ejemplo',
        'selected': false,
    },
    {
        'Title': 'Segundo ejemplo',
        'Name': 'Segundo ejemplo',
        'Description': 'Segundo ejemplo',
        'Date': 'Segundo ejemplo',
        'Origin': 'Segundo ejemplo',
        'Status': 'active',
        'Process_ID': 'Segundo ejemplo',
        'selected': false,
    },
    {
        'Title': 'Tercer ejemplo',
        'Name': 'Tercer ejemplo',
        'Description': 'Tercer ejemplo',
        'Date': 'Tercer ejemplo',
        'Origin': 'Tercer ejemplo',
        'Status': 'active',
        'Process_ID': 'Tercer ejemplo',
        'selected': true,
    },
    {
        'Title': 'Cuarto Ejemplo',
        'Name': 'Cuarto Ejemplo',
        'Description': 'Cuarto Ejemplo',
        'Date': 'Cuarto Ejemplo',
        'Origin': 'Cuarto Ejemplo',
        'Status': 'active',
        'Process_ID': 'Cuarto Ejemplo',
        'selected': true,
    },
    {
        'Title': 'Quinto Ejemplo',
        'Name': 'Quinto Ejemplo',
        'Description': 'Quinto Ejemplo',
        'Date': 'Quinto Ejemplo',
        'Origin': 'Quinto Ejemplo',
        'Status': 'active',
        'Process_ID': 'Quinto Ejemplo',
        'selected': false,
    }
]




const nombre_columnass = document.getElementById('nombre_columnas')

let columnasHTML = '<input type="checkbox" > '
for(let i = 1; i < nombres_columnas.length; i++){
    columnasHTML +=
    `
    <div class="contenedor-btn">
    <button class="btn-columnas">${nombres_columnas[i]} <i><i class="bi bi-arrow-down"></i></i></button>
    </div>`
}


nombre_columnass.innerHTML = columnasHTML

const registroHTML = document.getElementById('registros')

let crearRegistro = ''
for (let record of registros){
    let statusOnOFF = record.Status === 'active'
    let selec = record.selected === true
    crearRegistro +=
    `
    <div class='registro-fila'>
        
        <div>
            ${selec ? '<input type="checkbox" checked >' : '<input type="checkbox" >'} 
        </div>
        <div>
            ${record.Title}
        </div>
        <div>
            ${record.Name}
        </div>
        <div>
            ${record.Description}
        </div>
        <div>
            ${record.Date}
        </div>
        <div>
            ${record.Origin}
        </div>
        <div class="status">
            ${
            statusOnOFF ? '<span class=activo> Active</span>' : '<span class=Inactive>Inactive</span>'
        }
        </div>
        <div>
            ${record.Process_ID}
        </div>
        <div>
        <i class="bi bi-three-dots-vertical"></i>
        </div>
    </div>
    
    `
    
}


registroHTML.innerHTML = crearRegistro

/* ${selec ? '<input type="checkbox" checked >' : '<input type="checkbox" >'} EL checked sirve para marcarlo por defecto, si la condicion es true, se marva por defecto, y si no no se marca */