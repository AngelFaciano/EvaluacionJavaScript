export{select,navdes,form}

import { MOVIES } from '../data/movies.js'
import { USERS } from '../data/users.js'
import { filterMovies } from '../movies-filter.js'

const userIdInp = document.getElementById("userid");
const fromDateInp = document.getElementById("fromdate");
const toDateInp = document.getElementById("todate");
const rateInp = document.getElementById("rate");
const userIdInp2 = document.getElementById("userid2");
const fromDateInp2 = document.getElementById("fromdate2");
const toDateInp2 = document.getElementById("todate2");
const rateInp2 = document.getElementById("rate2");

const form = document.getElementById("form");
const form2 = document.getElementById("form2");

const navdes = document.getElementById("navdes");
const searchconteiner = document.getElementById("searchconteiner");
const select = document.getElementById('selectOption');
const containerlistuser = document.getElementById('containerlistuser');
const moviesbox = document.getElementById('moviesbox');

// Despliega la barra de opciones de busqueda
navdes.addEventListener("click",()=>{
  if( searchconteiner.classList.contains( 'searchconteiner' ) ){
    searchconteiner.classList.remove('searchconteiner')
  }
  if( searchconteiner.classList.contains( 'searchconteineractive' ) ){
    searchconteiner.classList.remove('searchconteineractive')
    searchconteiner.classList.add('searchconteineroff')
    
    
  }else{
    searchconteiner.classList.add('searchconteineractive')
    if( searchconteiner.classList.contains( 'searchconteineroff' ) ){
      searchconteiner.classList.remove('searchconteineroff')
    }
    
  }

})

//envia los dato a la funcion para filtrar 
form.addEventListener( "submit" , (e) => {
  e.preventDefault();
  filterMovies(USERS,MOVIES,userIdInp.value,fromDateInp.value,toDateInp.value,rateInp.value)

  toDateInp.removeAttribute('min' )
  toDateInp2.removeAttribute( 'min')
  fromDateInp.removeAttribute('max')
  fromDateInp2.removeAttribute( 'max' )

  userIdInp.value =''
  fromDateInp.value = ''
  toDateInp.value =''
  rateInp.value =''
  userIdInp2.value =''
  fromDateInp2.value = ''
  toDateInp2.value =''
  rateInp2.value =''
});

form2.addEventListener( "submit" , (e) => {
  e.preventDefault();
  filterMovies(USERS,MOVIES,userIdInp2.value,fromDateInp2.value,toDateInp2.value,rateInp2.value)
  toDateInp.removeAttribute('min' )
  toDateInp2.removeAttribute( 'min')  
  fromDateInp2.removeAttribute('max')
  fromDateInp.removeAttribute( 'max' )

  userIdInp2.value =''
  fromDateInp2.value = ''
  toDateInp2.value =''
  rateInp2.value =''
  userIdInp.value =''
  fromDateInp.value = ''
  toDateInp.value =''
  rateInp.value =''
  
});
//cambio de clase para visualizar peliculas o usarios
select.addEventListener( 'change' ,
  function(){
    const selectedOption = this.options[select.selectedIndex];
    if( selectedOption.value === "movies" ){
      containerlistuser.classList.add("d-none");
      moviesbox.classList.remove('d-none');
    }else{
      containerlistuser.classList.remove("d-none");
      moviesbox.classList.add('d-none');
    }
});

//evitar error del input desde sea mas reciente que hasta

fromDateInp.addEventListener('change', ()=>{
  toDateInp.setAttribute('min', fromDateInp.value )
  toDateInp2.setAttribute( 'min', fromDateInp.value )
  fromDateInp2.value = fromDateInp.value
})
fromDateInp2.addEventListener('change', ()=>{
  toDateInp.setAttribute( 'min' , fromDateInp.value )
  toDateInp2.setAttribute( 'min', fromDateInp.value )
  fromDateInp.value = fromDateInp2.value
})
toDateInp.addEventListener( 'change' , ()=>{
  fromDateInp.setAttribute( 'max' , toDateInp.value )
  fromDateInp2.setAttribute( 'max', toDateInp.value )
  fromDateInp2.value = toDateInp.value
})
toDateInp2.addEventListener( 'change' , ()=>{
  fromDateInp.setAttribute( 'max' , toDateInp2.value )
  fromDateInp2.setAttribute( 'max' , toDateInp2.value )
  fromDateInp.value = toDateInp2.value
})