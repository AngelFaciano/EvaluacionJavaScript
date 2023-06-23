export{ filterMovies } 

import { MOVIES,createLisMovies,removelist } from '../scripts/data/movies.js';
import { USERS,createListusers,removerlalista } from '../scripts/data/users.js'
import { select,navdes,form } from '../scripts/event/event.js'


const titlefilter = document.getElementById("titlefilter");
const titlemovie = document.getElementById("titlemovie");
const optionbox = document.getElementById('optionbox');


/*
La función debe poseer un filtro por fecha, por calificación y por id
de usuario. Si no se envía un userId, la función deberá devolver todas las películas que cumplan
las condiciones de los filtros de fecha y calificación para todos los usuarios existentes.
*/

// Filtro
function filterMovies( users, movies, userId, fromDate, toDate, rate ) {

  let moviesfilter =[] 
  
  if(convert(fromDate)<convert(toDate)  ){
    //busqueda sin userId
    if (userId == "") {

      moviesfilter = movies.filter(movie => movie.rate >=rate)
                          .filter(movie => 
                            convert(movie.watched)  >= convert(fromDate)  && convert(movie.watched)  <= convert(toDate) 
                            );
      
      //Limpia el html
      removelist()
      removerlalista()

      moviesfilter.forEach(movie =>{
        createLisMovies(movie.title,movie.rate,movie.image,movie.watched,movie.genre,movie.id,movie.userId)
      })
      
      //Cambio de clases del titulo
      optionbox.classList.remove('d-none')
      titlefilter.classList.remove('d-none')
      titlemovie.classList.add('d-none')

      createNewList(users,moviesfilter)

      userMovies.forEach(userMovies=>{
        createListusers(userMovies.username,userMovies.email,userMovies.fullAddress,userMovies.movie,userMovies.rate,userMovies.company,userMovies.id)
      })

    }
    //busqueda con userId
    else{

      //Limpia el html
      removelist() 
      removerlalista()

      moviesfilter = movies.filter(movie => movie.rate >=rate)
                          .filter(movie => 
                            convert(movie.watched)  >= convert(fromDate)  && convert(movie.watched)  <= convert(toDate) )
                          .filter(movie => movie.userId==userId)

      const userfilter = users.filter(user => user.id ==userId)

      moviesfilter.forEach(movie =>{
        createLisMovies(movie.title,movie.rate,movie.image,movie.watched,movie.genre,movie.id,movie.userId)
      })
      
      optionbox.classList.remove('d-none')
      titlefilter.classList.remove('d-none')
      titlemovie.classList.add('d-none') 

      createNewList(userfilter,moviesfilter)

      userMovies.forEach(userMovies=>{
        createListusers(userMovies.username,userMovies.email,userMovies.fullAddress,userMovies.movie,userMovies.rate,userMovies.company,userMovies.id)
      })  
    }

  errorSearch(moviesfilter)
  //Elimino todo los elemento para una nueva busqueda
  userMovies=[]
  }
}


/* 
En base a una lista de usuarios y una lista de películas vistas por dichos usuarios, realizar una
función que permita obtener un nuevo arreglo de objetos
*/


// El nuevo arreglo y la funcion para crearlo con todos sus elementos
let userMovies = [];

function createNewList( listUsers,listMovies ) {

  listUsers.forEach( (user) => {

    listMovies.forEach( (movie) => {

      const info = [
        {
          id: "",
          username: "",
          email: "",
          fullAddress: "",
          company: "",
          movie: "",
          rate: "",
        },
      ];

      if (movie.userId === user.id) {
        info.id = user.id;
        info.username = user.username;
        info.email = user.email;
        info.fullAddress = user.address.street + " " + "-" + " " + user.address.city;
        info.company = user.company.name;
        info.movie = movie.title;
        info.rate = movie.rate;

        //agrega el nuevo elemento a la lista
        userMovies.push(info);
        
      }
    });
  });
}

//Pagina por defecto

(()=>{
  MOVIES.forEach(movie => {
    createLisMovies(movie.title,movie.rate,movie.image,movie.watched,movie.genre,movie.id,movie.userId)
  })
})();

//Pagina sin coincidencia
function errorSearch( leakedMovies ){
  if( userMovies.length == 0 && leakedMovies.length == 0 ){

    const father=document.getElementById("father");
    const userinfobox=document.getElementById("userinfobox");
    const errobox=document.getElementById("errobox");

    father.classList.add("d-none");
    userinfobox.classList.add("d-none");
    errobox.classList.remove("d-none");

  }else{

    const father=document.getElementById("father");
    const userinfobox=document.getElementById("userinfobox");
    const errobox=document.getElementById("errobox");

    father.classList.remove("d-none");
    userinfobox.classList.remove("d-none");
    errobox.classList.add("d-none");

  }
}

//
function convert(dates){
  const f1 = dates;
  const f2 = f1.split(' ');
  return f2[0]
}


 



