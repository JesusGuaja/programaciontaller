function mostrar_objeto()
{
    let cliente = {
        nombre: "Pepito",
        apellido: "Pozzo",
        dni: 45007098,
        correo:{
            outlook: "pepitoposso@outlook.com",
            gmail: "elpepo@gmail.com",
            yahoo: "pepitoyahoo@yahoo.com"
        }

    }
    /* VIEJA FORMA
    const outlook = cliente.correo.outlook;
    const gmail = cliente.correo.gmail;
    const yahoo = cliente.correo.yahoo;*/

    const { outlook, gmail, yahoo } = cliente.correo
    

    console.log(`

    Correos de pepito:
    
    outlook: ${outlook}
    gmail: ${gmail}
    yahoo: ${yahoo}

    `)
}

mostrar_objeto()

// creamos funcion flecha

const consumir_api = async () => {

    //estamos realizando mediante la funcion nativa de ajavascript denominada fecht, una solicitud HTTP a traves del metodo GET de manera de obtener las publicaciones en notacion JSON.
    const publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts');

    const publicaciones_definitivas = await publicaciones.json();


    let items_totales = []
    publicaciones_definitivas.forEach( element => {

        let item = `<li class="list-group-item">${element.title}</li>`
        items_totales.push(item)


        //console.log(`Titulo:`+element.title)
    })

    document.getElementById("lista_publicaciones").innerHTML = items_totales.join('');
}

consumir_api()