document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("pizza-form");
    const successImageSrc = "success.jpeg"; 

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const size = document.getElementById("size").value;
        const crust = document.getElementById("crust").value;
        const toppings = [];
        document.querySelectorAll('input[name="topping"]:checked').forEach(function(topping) {
            toppings.push(topping.value);
        });
        const extraCheese = document.getElementById("extra-cheese").checked;
        const pepperoni = document.getElementById("pepperoni").checked;

        const pizza = new Pizza(size, crust, toppings, extraCheese, pepperoni);

        displayOrder(pizza, "Student ID: 200594023, Name: Rushikesh Venukadasula", "Order placed successfully!");
    });

    class Pizza {
        constructor(size, crust, toppings, extraCheese, pepperoni) {
            this.size = size;
            this.crust = crust;
            this.toppings = toppings;
            this.extraCheese = extraCheese;
            this.pepperoni = pepperoni;
        }
    }

    function displayOrder(pizza, studentInfo, successMessage) {
        const pizzaDescription = document.getElementById("pizza-description");
        pizzaDescription.innerHTML = `
            <h2>Your Pizza:</h2>
            <p><strong>Size:</strong> ${pizza.size}</p>
            <p><strong>Crust:</strong> ${pizza.crust}</p>
            <p><strong>Toppings:</strong> ${pizza.toppings.join(', ')}</p>
            <p><strong>Extra Cheese:</strong> ${pizza.extraCheese ? 'Yes' : 'No'}</p>
            <p><strong>Pepperoni:</strong> ${pizza.pepperoni ? 'Yes' : 'No'}</p>
            <p>${studentInfo}</p>
            <p>${successMessage}</p>
        `;
        const successImage = document.createElement("img");
        successImage.src = successImageSrc;
        successImage.alt = "Success";
        pizzaDescription.appendChild(successImage);
    }
});
