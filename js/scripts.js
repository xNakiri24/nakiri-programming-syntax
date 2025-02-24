document.getElementById('registerForm').addEventListener('submit', function(event){
    event.preventDefault();

    // get all the data from register form
    const formData = new FormData(this);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    })

    console.log(data)

    fetch('../php/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        alert('Registration successful!'); // Optional: Notify the user
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    // get all the data from register form
    const formData = new FormData(this);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    })

    console.log(data)

    // fetch('process.php', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Typr': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .catch(error => {
    //     console.error('Error:', error);
    // });
});
