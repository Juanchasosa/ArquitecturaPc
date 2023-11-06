export function traerDatos(URL) {

    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // o response.text() si esperas texto en lugar de JSON
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
    // Manejar errores de red o de la solicitud
        console.error('There has been a problem with your fetch operation:', error);
    });

}


