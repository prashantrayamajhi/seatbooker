const container = document.querySelector('.container');
let movies = document.getElementById('movies');
let bookedSeats = document.getElementById('seats'); 
const seats = document.querySelectorAll('.row-wrapper .rows')
let totalCost = document.getElementById('price');
let showingMovies = document.getElementById('movies');
let ticketPrice = showingMovies.value;

function update(){
    let selectedSeats = document.querySelectorAll('.row-wrapper .rows.selected');
    bookedSeats.innerHTML = selectedSeats.length;
    totalCost.innerHTML = +ticketPrice * +selectedSeats.length;
}

// price for different movies
showingMovies.addEventListener('change',e=>{
    ticketPrice = +e.target.value;
    update();
})

// event listener 
container.addEventListener('click',e=>{
    if(e.target.classList.contains('rows')&& !e.target.classList.contains('unavailable')){
        e.target.classList.toggle('selected');
        update();
    }
})