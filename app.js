document.getElementById('searchButton').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchField').value.trim();
    let url = 'http://localhost:8888/info2180-lab4/superheroes.php';

    if (searchQuery) {
        url += `?query=${encodeURIComponent(searchQuery)}`;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const resultDiv = document.getElementById('result');
            if (data.length === 1) {
                const superhero = data[0];
                resultDiv.innerHTML = `
                    <h3>${superhero.alias}</h3>
                    <h4>${superhero.name}</h4>
                    <p>${superhero.biography}</p>
                `;
            } else if (data.length > 1) {
                const list = data.map(hero => `<li>${hero.alias}</li>`).join('');
                resultDiv.innerHTML = `<ul>${list}</ul>`;
            } else {
                resultDiv.innerHTML = 'Superhero not found';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = 'An error occurred. Please try again.';
        });
});
