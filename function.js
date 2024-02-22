function getValue(id) {
    const targetElement = document.getElementById(id).innerText;
    return parseInt(targetElement);
}

const totalSeats = document.getElementsByClassName('seat');

for (const seat of totalSeats) {
    seat.addEventListener("click", function (event) {
        const seatName = event.target.innerText;

        const seatPrice = 550;

        const append = document.getElementById("append-child");


        // seat count backword
        const seatLeft = getValue("seat-lefts");
        document.getElementById("seat-lefts").innerText = seatLeft - 1;

        // seat count forward
        const selectedSeat = getValue("select-total-seat");
        // document.getElementById("select-total-seat").innerText = selectedSeat +1 ;
        if(selectedSeat <= 4){
            document.getElementById("select-total-seat").innerText = selectedSeat +1 ;
        }

        // not more than 4 seat selected
        const atleastSelectedSeat = getValue("select-total-seat");
        if (atleastSelectedSeat > 4) {
            alert("You can select only 4 seat");
            return;
        }

        // not more than one seat select at a time
        event.target.setAttribute("disabled", false);
        event.target.style.backgroundColor = "green";


















        const create = document.createElement('create');

        // 
        create.classList.add('flex');
        create.classList.add('gap-20');


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

        updateTotal();

    })
}

function totalCost(value) {
    const totalExpense = getValue("total-price");

    const total = totalExpense + parseInt(value);
    document.getElementById("total-price").innerText = total;
}


function updateTotal(price) {
    const totalCost = getValue("total-price");
    if (price == undefined) {
        document.getElementById("update-total").innerText = totalCost;
    }
    else {
        const coupon = document.getElementById("coupon").value;

        if (coupon == "NEW15") {
            const discount = totalCost * 0.15;
            document.getElementById("update-total").innerText = totalCost - discount;
        }
        else if (coupon == "Couple 20") {
            const discount = totalCost * 0.2;
            document.getElementById("update-total").innerText = totalCost - discount;
        }
        else {
            alert("Wrong Coupon Code.")
        }
    }
}