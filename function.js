function getValue(id){
    const targetElement = document.getElementById(id).innerText;
    return parseInt(targetElement);
}

const totalSeats =document.getElementsByClassName('seat');

for (const seat of totalSeats){
    seat.addEventListener("click",function(event){
        const seatName = event.target.innerText;

        const seatPrice = 550;
        // console.log(typeof seatPrice);

        const append = document.getElementById("append-child");

        const create = document.createElement('create');
        
        // 
        create.classList.add('flex');
        create.classList.add('gap-20');
        // create.classList.add('relative');
        // create.classList.add(' justify-evenly');
        //

        const text1 = document.createElement('t');
        const text2 = document.createElement('t');
        const text3 = document.createElement('t');

        text1.innerText = seatName;
        text2.innerText = 'Economy';
        text3.innerText = '550';

        create.appendChild(text1);
        create.appendChild(text2);
        create.appendChild(text3);

        append.appendChild(create);
        totalCost(seatPrice);

    })

    function totalCost(value) {
        const totalExpense= getValue("total-price");

        const total = totalExpense + parseInt(value);
        document.getElementById("total-price").innerText = total;
      }
}