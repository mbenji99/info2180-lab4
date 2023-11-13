document.getElementById('searchButton').addEventListener('click', function() {
    fetch('http://localhost/info2180-lab4/superheroes.php') // Update the URL to use http://localhost
        .then(response => response.json())
        .then(data => {
            let superheroesList = document.getElementById('superheroesList');
            superheroesList.innerHTML = '';

            data.forEach(superhero => {
                let listItem = document.createElement('li');
                listItem.textContent = superhero.alias;
                superheroesList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
