// 1e121c88767010a97af0a4fd6742d1fc
// 1e121c88767010a97af0a4fd6742d1fc
var app = document.getElementById("app");
app.innerHTML = "Hello World "

fetch("https://developers.zomato.com/api/v2.1/search",  {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "user-key" : "1e121c88767010a97af0a4fd6742d1fc"
        // "Content-Type": "application/x-www-form-urlencoded",
    }
}).then(function(res) {
    // console.log(data.json())
    res.json().then(data => {
        // console.log(data);

        data.restaurants.map(e => {


            console.log(e.restaurant)
            var card = document.createElement("div");
            var img = document.createElement("img");
            var cardBody = document.createElement("div");
            var cardTitle = document.createElement("h5");
            var cardText = document.createElement("p");
            var button = document.createElement("button");

                img.src = e.restaurant.photos_url;
                cardTitle.innerHTML = e.restaurant.name;
                cardText.innerHTML = e.restaurant.cuisines;
                button.innerHTML = "Go Somewhere"

                card.className = "card";
                img.className = "card-img-top";
                cardBody.className = "card-body";
                cardTitle.className = "card-title";
                cardText.className = "card-text";
                button.className = "btn btn-primary"


                card.appendChild(img);
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(button);
                card.appendChild(cardBody);
                app.appendChild(card)
        })

    })
})