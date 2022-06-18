$('#boton').click(function () {
    $('#lista')[0].innerHTML = "";
    $.get('http://localhost:5000/amigos', function (data) {
        data.forEach(e => {
            let lista = document.createElement('li');
            lista.innerText = e.name;
            $('#lista').append(lista);
            let img = document.getElementsByTagName('img');
            if (img.length > 0) {
                img[0].remove();
            }
        });
    })
})

$('#search').click(function () {
    $('#amigo')[0].innerHTML = "";
    $.get('http://localhost:5000/amigos/' + $('#input')[0].value, function (data) {
        let amigo = document.createElement('li');
        amigo.innerText = data.name;
        $('#amigo').append(amigo);
    })
})

$('#delete').click(function () {
    $('#success')[0].innerHTML = "";
    fetch('http://localhost:5000/amigos/' + $('#inputDelete')[0].value, {
        method: 'DELETE'
    }).then(() => {
        alert('El amigo fue borrado')
    })
    // $.get('http://localhost:5000/amigos/' + $('#inputDelete')[0].value, function(data){
    //     let amigo = document.createElement('li');
    //     amigo.innerText = data.name + " borrado exitosamente";
    //     $('#success').append(amigo);
    // })
})

// //GET de all friends
// function getFriends() {
//     //1. Limpia la lista anterior si es que hay
//     let lista = document.getElementById('lista');
//     lista.innerHTML = "";

//     //2. Eliminamos loading si es que no se eliminó antes
//     let img = document.getElementsByTagName('img'); // [<img src='url'>]
//     if(img.length > 0) {
//         img[0].remove()
//     }

//     //3. Traigo los amigos del server y creo la lista
//     fetch('http://localhost:5000/amigos') //Hace una petición al servidor
//     .then(data => data.json()) //Transformamos el json recibido en un obj.
//     .then(data => { //Tengo un array con la lista de amigos
//       data.forEach(amigo => { //[{amigo1}, {amigo2}, {amigo3}, {etc}]
//         let li = document.createElement('li'); // <li></li>
//         li.textContent = amigo.name; //<li>Toni</li>
//         document.getElementById('lista').appendChild(li);
//       });
//     })
// }

// document.getElementById('boton').addEventListener('click', getFriends)


// //Busco amigo por id
// function searchFriend() {
//     let id = document.getElementById('input').value; //1
//     fetch(`http://localhost:5000/amigos/${id}`) // GET
//     .then(data => data.json())
//     .then(data => {
//         document.getElementById('amigo').textContent = data.name; //  <span>Toni<span>
//     })
//     document.getElementById('input').value = ''; //Limpia el input
// }


// document.getElementById('search').addEventListener('click', searchFriend)


// //Borra amigos por id
// function deleteFriends() {
//     let id = document.getElementById('inputDelete').value; //nro
//     fetch(`http://localhost:5000/amigos/${id}`, {  //delete
//         method: 'DELETE'
//     })
//     .then(() => {
//         alert('El amigo fue borrado')
//         getFriends()
//     })
//     document.getElementById('inputDelete').value = ''; //Limpia el input
// }

// document.getElementById('delete').addEventListener('click', deleteFriends);