var items = localStorage.getItem('ListObject')
items = items ? JSON.parse(items) : []
showItems()


function addItem() {
    let NombreProducto = document.getElementById('NombreProducto').value
    let Costo = document.getElementById('Costo').value
    let descripcion = document.getElementById('descripcion').value

    if(NombreProducto && Costo && descripcion){
        items.push({
                        'nombreProducto' : NombreProducto,
                        'Costo' : Costo,
                        'descripcion' : descripcion
                    })
        showItems()
    }
}

function showItems() {
    document.getElementById('NombreProducto').value = ''
    document.getElementById('Costo').value = ''
    document.getElementById('NombreProducto').focus()
    document.getElementById('descripcion').value = ''

    let html = ''
    items.forEach((data, indice) => {

        html += '<div class="row border border-warning mt-2 mb-2 ms-2 me-2">'
            html += `<div class="col-3"> ${data.nombreProducto} </div>`
            html += `<div class="col-3"> ${data.Costo} </div>`
            html += `<div class="col-3"> ${data.descripcion} </div>`
            html += `<div class="col-2"> 
                        <a href="#" class="mt-2 mb-2 btn btn-danger" onclick=deleteItem(${indice})> X </a> 
                    </div>` 
        html += '</div>'
    });

    /*items.forEach(element => {
        console.log(element.nombreProducto)
    });

    for (const element of items) {
        console.log(element.nombreProducto)
    }*/


    localStorage.setItem('ListObject' , JSON.stringify(items))
    document.getElementById('items-list').innerHTML = html
}

function deleteItem(indice) {
    items.splice(indice, 1)
    showItems()
}
