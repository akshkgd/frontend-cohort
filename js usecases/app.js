// when to use js 
// when libraries are ok

// movie booking system like book my show
// we can have the total number of seats avaialable
// which seat is booked and which seat is remaining
// on which seat who is the user


const seats = Array.from({ length: 40 }, (_, index) => ({ seatNumber: index + 1 }));
let seatsContainer = document.querySelector('.seats');

function bookSeat(seatNumber){
    seatNumber = parseInt(seatNumber);
    let modal = document.querySelector('#modal');
    modal.classList.remove('hidden');
    let bookingBtn = document.querySelector('.book-btn');
    bookingBtn.addEventListener('click', ()=>{
        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email')
        seats[seatNumber - 1] = {
            seatNumber : seatNumber,
            name: nameInput.value,
            email: emailInput.value,
            status: true,
        }
        nameInput.value = '';
        emailInput.value = '';
        modal.classList.add('hidden');
        renderSeats()
    })
}




renderSeats=()=>{
    seatsContainer.innerHTML = ""
    seats.map((seat)=>{
        let button = document.createElement('button');
        button.classList.add('seat');
        button.innerText = seat.seatNumber;
        if(seat.status === true){
            button.classList.add('seat-booked');
            // button.setAttribute('disabled', true);
        }
        else{
            button.addEventListener('click', (e)=>{
            let seatNumber = e.target.innerText;
            bookSeat(seatNumber)
        })
        }
        
        seatsContainer.appendChild(button);
    })
}
renderSeats()




// assignments
// if a seat is booked add a cancel button to cancel that seat booking
// same user should not be able to book the slot twice
// if all the seats are booked it should show housefull
// render a list of all the users with there seat names
// create the same thing using local storage // for data persistance