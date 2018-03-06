fetch('https://swapi.co/api/films/')
   .then(function (response) {
       return response.json();
   })
   .then(function (data) {
       //console.log('Request successful', data);
       const results = data.results;
       //starship($results);
       
       let output = ``;

       results.forEach((element, index)=>{

       let name = element.title;
       console.log(name);
       let model = element.episode_id;
       console.log(model);
       let characters = element.characters;
       console.log(characters);

        output +=    
        `<div class="card" style="width: 30rem;">
        <div class="card-block">
        <h4 class="card-title">Película: ${name}</h4>
        <p id="modelShips">Episodio: ${model}</p> 
        Personajes: <a href="indice">${characters} </a>
        </div>
        </div>`

        $("#principal").html(output);


       } )

   })



   // .catch(function (error) {
   //     console.log('Request failed', error)
   // });



