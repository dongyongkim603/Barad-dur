export async function getExternalData (path) {
    return await fetch(path)
    .then(response => {
        response.json();
    }).catch(err => {
        console.error(err);
    });
}