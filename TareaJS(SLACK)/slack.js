const usuarios = [
    {
        nombre: 'Federico Dermisache',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU2R35Y-e7a6bc16ffb4-24',
        statis: false, 
        id: 0,
    },
    {
        nombre: 'Pepe Gonzalez',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU3TAAE-5327957dcf10-24',
        statis: true, 
        id: 1,
    },
    {
        nombre: 'David Ramirez',
        avatar: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/mejores-juegos-historia-gq-3030288.jpg?tf=3840x',
        statis: true, 
        id: 2,
    },
    {
        nombre: 'Pepito Rocha',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8SBJM-45507abb443f-24',
        statis: false, 
        id: 3,
    },
    {
        nombre: 'Martin Gonzalez',
        avatar: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2016/08/186586-juegos-gratis-divertidos-jugar-tu-navegador.jpg?tf=3840x',
        statis: false,
        id: 4,
    },
    {
        nombre: 'Pedro Perez',
        avatar: 'https://www.redcenit.com/redcenit/wp-content/uploads/2017/12/juegos-de-mesa-en-familia.jpg',
        statis: false ,
        id: 5,
    }
]

const usuariosSlackHTML = document.getElementById('usuarioss')


let UsuariosCreados = ''
for(let usuario of usuarios){
    let online = usuario.statis === true
UsuariosCreados += `
<div class = contenedorUsuario>
    <img src= ${usuario.avatar} 
    <div><h2 class="nombre">${usuario.nombre}</h2></div>
    ${
        online ? '<span><i class="bi bi-check-circle-fill"></i></span>' : '<span><i class="bi bi-x-circle"></i></span>'
    }
</div>
`}



usuariosSlackHTML.innerHTML = UsuariosCreados


