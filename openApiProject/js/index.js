fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')

    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })

    .then(data => {
        console.log(data);
    })

    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
