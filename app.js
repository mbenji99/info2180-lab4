document.getElementById('searchButton').addEventListener('click', function() {
    fetch('http://localhost:8888/info2180-lab4/superheroes.php') 
        .then(response => response.json())
        .then(data => {
            const heroNames = data.map(superhero => superhero.alias).join('\n');
            alert('List of Superheroes:\n' + heroNames);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
