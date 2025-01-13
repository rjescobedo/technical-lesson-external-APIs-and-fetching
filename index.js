// Define the function to display astronauts

// Function to display astronauts data
function displayAstronauts(data) {
    const astronautList = document.getElementById('astronaut-list');

    data.people.forEach((person) => {
        const listItem = document.createElement('li');
        listItem.textContent = person.name;
        astronautList.append(listItem);
        
    });
}
// Hint: Create a function called displayAstronauts(data)
// Hint: Select the <ul> element with the id "astronaut-list"
// Hint: Loop through the data.people array and create <li> elements for each astronaut's name
// Hint: Append the <li> elements to the <ul> element

// Fetch data from the external API

// Hint: Use fetch() to make an HTTP request to "http://api.open-notify.org/astros.json"
fetch('http://api.open-notify.org/astros.json')
// Hint: Use .then() to process the response and convert it to JSON
    .then(response => response.json())
    // Hint: Call the displayAstronauts() function with the fetched data
    .then(data => {
        console.log(data);
        displayAstronauts(data);
    })
    .catch(error => console.error('Error: ', error))
// Hint: Use .catch() to handle any errors that occur during the fetch process
