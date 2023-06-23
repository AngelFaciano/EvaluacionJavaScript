export {MOVIES,createLisMovies,removelist}

const MOVIES = [
    {
      userId: 10,
      id: 1,
      title: "The Godfather",
      genre: "Thriller",
      watched: "2022-04-01 09:40:48",
      rate: 7.6,
      image: "https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1600.jpg",
    },
    {
      userId: 7,
      id: 2,
      title: "The Texas Chain Saw Massacre",
      genre: "Horror",
      watched: "2020-05-25 13:11:24",
      rate: 7.4,
      image: "https://m.media-amazon.com/images/I/91ei8JE0SDL.jpg",
    },
    {
      userId: 1,
      id: 3,
      title: "The Shining",
      genre: "Horror",
      watched: "2022-02-24 00:21:22",
      rate: 5.8,
      image:
        "https://cdn.posteritati.com/posters/000/000/061/864/the-shining-md-web.jpg",
    },
    {
      userId: 3,
      id: 4,
      title: "Toy Story",
      genre: "Animation|Children|Comedy|Fantasy",
      watched: "2022-06-17 23:21:12",
      rate: 5.9,
      image: "https://m.media-amazon.com/images/I/71aBLaC4TzL.jpg",
    },
    {
      userId: 8,
      id: 5,
      title: "Halloween: The Curse of Michael Myers",
      genre: "Horror|Thriller",
      watched: "2020-04-18 15:47:33",
      rate: 0.7,
      image: "https://m.media-amazon.com/images/I/91UHof7cKKL.jpg",
    },
    {
      userId: 5,
      id: 6,
      title: "Die Hard",
      genre: "Action|Crime|Thriller",
      watched: "2020-06-15 22:49:31",
      rate: 3.3,
      image:
        "https://cdn.shopify.com/s/files/1/1057/4964/products/Die-Hard-Vintage-Movie-Poster-Original-1-Sheet-27x41-7126.jpg",
    },
    {
      userId: 2,
      id: 7,
      title: "The Dark Knight Rises",
      genre: "Action|Adventure|Crime",
      watched: "2022-11-16 04:22:21",
      rate: 4.7,
      image: "https://m.media-amazon.com/images/I/81G+2LJQJeL.jpg",
    },
    {
      userId: 3,
      id: 8,
      title: "Fight Club",
      genre: "Action|Crime|Drama|Thriller",
      watched: "2022-10-26 07:04:17",
      rate: 4,
      image: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
    },
    {
      userId: 5,
      id: 9,
      title: "Avengers: Infinity War",
      genre: "Action|Adventure|Sci-Fi",
      watched: "2022-07-12 20:36:17",
      rate: 2.8,
      image: "https://i.ebayimg.com/images/g/kukAAOSw-YZa8mLH/s-l1600.jpg",
    },
    {
      userId: 7,
      id: 10,
      title: "The Hangover",
      genre: "Comedy",
      watched: "2020-08-13 01:17:10",
      rate: 1.4,
      image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-172442538.jpg",
    },
    {
      userId: 4,
      id: 11,
      title: "Your Name",
      genre: "Animation|Drama|Fantasy|Romance",
      watched: "2020-10-06 00:08:50",
      rate: 1,
      image:
        "https://i0.wp.com/www.septimacaja.com/wp-content/uploads/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
    },
    {
      userId: 9,
      id: 12,
      title: "How to Train Your Dragon",
      genre: "Adventure|Animation|Children|Fantasy",
      watched: "2022-01-11 23:06:04",
      rate: 9.1,
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      userId: 8,
      id: 13,
      title: "Robin Hood",
      genre: "Adventure|Animation|Children|Comedy|Musical",
      watched: "2021-08-05 18:57:45",
      rate: 5.8,
      image: "https://pics.filmaffinity.com/Robin_Hood-466796044-large.jpg",
    },
    {
      userId: 6,
      id: 14,
      title: "Whiplash",
      genre: "Drama|Musical",
      watched: "2022-04-23 00:44:02",
      rate: 0.7,
      image: "https://flxt.tmsimg.com/assets/p10488558_p_v12_ai.jpg",
    },
    {
      userId: 5,
      id: 15,
      title: "Life Is Beautiful",
      genre: "Comedy|Drama|Romance|War",
      watched: "2022-05-02 20:00:04",
      rate: 6.4,
      image: "https://flxt.tmsimg.com/assets/p22005_p_v8_aa.jpg",
    },
];

//Crea elemento para la visualizacion de la lista de peliculas
function createLisMovies(titlemovie,rate,image,watched,genre,id,userId){
  
    const containerfather = document.getElementById('elementbox')
    const conteiner = document.createElement('div');
    const title = document.createElement('h2')
    const conteinergeneral = document.createElement('div');
    const imgconteiner = document.createElement('div');
    const img = document.createElement('img');
    const conteinerinfo = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');
    const span5 = document.createElement('span');
    const br = document.createElement('br');
    const br2 = document.createElement('br');
  
    title.textContent = `${titlemovie}`
    p1.textContent = `Genero: `
    p2.textContent = "Clasificacion: "
    p3.textContent = "Visualizado: "
    p4.textContent = "idPelicula: "
    p5.textContent = "idUsuario: "
    img.src = `${image}`
    span1.textContent = `${genre.replaceAll("|"," ")}`
    span2.textContent = `${rate}`
    span3.textContent = `${watched}`
    span4.textContent = `${id}`
    span5.textContent = `${userId}`
  
  
   containerfather.appendChild(conteiner);
   conteiner.appendChild(title)
   conteiner.appendChild(conteinergeneral);
   conteinergeneral.appendChild(imgconteiner);
   imgconteiner.appendChild(img);
   conteinergeneral.appendChild(conteinerinfo);
   conteinerinfo.appendChild(p1);
   p1.appendChild(span1);
   conteinerinfo.appendChild(p2);
   p2.appendChild(span2);
   conteinerinfo.appendChild(p3);
   p3.appendChild(br);
   p3.appendChild(span3);
   conteinerinfo.appendChild(p4);
   p4.appendChild(span4);
   conteinerinfo.appendChild(p5);
   p5.appendChild(span5);
   conteiner.classList.add('conteiner');
   title.classList.add('text-center');
   conteinerinfo.classList.add('conteinerinfo');
   conteinergeneral.classList.add('conteinergeneral');
   imgconteiner.classList.add('imgconteiner');
   img.classList.add('imgmovie'); 
}

//Limpia el html de elemento de una busqueda pasada
function removelist(){
    const elementbox = document.getElementById('elementbox')
    document.getElementById('father').removeChild(elementbox)
    const elementbox2 = document.createElement('div');
    const father = document.getElementById('father')
    elementbox2.setAttribute("id", "elementbox");
    father.appendChild(elementbox2);
}