
document.querySelector("button").addEventListener("click", function(){
  let movie=""
  randomVal()
  function randomVal(){
    let choice=Math.random()
    if(movie<=.33 && choice<.33){
    movie="2baf70d1-42bb-4437-b551-e5fed5a87abe"
    }
    else if (movie<=.66 && choice<.66){
    movie="12cfb892-aac0-4c5b-94af-521852e46d6a"
    }
    else if( movie<=.99 && choice<.99) {
    movie="58611129-2dbc-4a81-a72f-77ddfc1b1b49"
    }
    console.log(choice)
  }
  fetch("https://ghibliapi.herokuapp.com/films/"+`${movie}`)//First API
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(movie)
      document.getElementsByClassName("title")[0].innerHTML =response.title
      document.getElementsByClassName("dis")[0].innerHTML =response.description
      document.getElementsByClassName("date")[0].innerHTML =response.release_date


       })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
});

// 2baf70d1-42bb-4437-b551-e5fed5a87abe Castle in the Sky
// 12cfb892-aac0-4c5b-94af-521852e46d6a Grave of the Fireflies
