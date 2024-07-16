async function getPizza() {
    try {
        const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        const data = await response.json();

        console.log(data); 
        
        // Access the correct array within the JSON response
        const pizzaArray = data.recipes;

        const result = pizzaArray.map(function(ele) {
            return ` 
                <div class='pizza'>
                    <h2>${ele.title}</h2>
                    <img src="${ele.image_url}"/>
                </div>
            `;
        }).join('');

        document.querySelector(".pizza").innerHTML = result;
    } catch (error) {
        console.error('Error fetching pizza data:', error);
    }
}

getPizza();
