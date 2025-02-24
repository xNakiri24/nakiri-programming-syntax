
document.getElementById('syntaxDetails').addEventListener('submit', function(event){
    event.preventDefault();

    // get all the data from register form
    const formData = new FormData(this);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    })

    console.log(data)

    fetch('../php/input.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        alert('Data successful!'); // Optional: Notify the user
    })
    .catch(error => {
        console.error('Error:', error);
    });
})



