//const { log } = require("console");

    function affichertest() {
        document.querySelector('#search').addEventListener('click', function () {
            const departure = document.querySelector('#departure').value;
            const arrival = document.querySelector('#arrival').value;
            const date = document.querySelector('#date').value;
            //const price = document.querySelector('#price').value;
            //console.log(depart, arrivee, date);
        
            fetch(`http://localhost:3000/trips/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ departure, arrival, date }), //quoi ecrire dedans ???????????
            }).then(response => response.json())
                .then(data => {
                    console.log(data)
                for (let i = 0; i < data.length; i++) {
                    console.log('coucou')
                    console.log(data.trips[0].departure);
                    if (data) {
                        
                       
                        document.querySelector('#results-logo').remove()
                        document.querySelector('.green').remove()
                        document.querySelector('#test').remove()
                        
                        document.querySelector('#results').innerHTML += `
                        <div id="results">
                          
                          <span class="found"> ${data.trips[i].departure} > ${data.trips[i].arrival} le ${data.trips[i].date} € </span>
                          <button class="book">book</button>
                        </div>
                        `;
                        document.querySelector('.input').value = '';

                    } else {
                        document.querySelector('#results-logo').remove()
                        document.querySelector('.green').remove()
                        document.querySelector('#test').remove()
                        document.querySelector('#results').innerHTML += `
                        <div id="results">
                          
                          
                            <img id="results-notfound" src="images/notfound.png">
                            <span id="teste"> Pas de trajet trouvé </span>
                            
                        </div>
                        `;
                        document.querySelector('.input').value = '';
                        
                    }}
                    
                });
            });
        };
        affichertest();