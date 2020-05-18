/*var xhr = new XMLHttpRequest();
var url = 'https://api.github.com/users/fabiovige';

xhr.open('GET', url);
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}
*/

/*
var minhaPromise = function() {

    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        var url = 'https://api.github.com/users/fabiovige';

        xhr.open('GET', url);
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }

    });

}

minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error)
    });

    */

var url = 'https://api.github.com/users/fabiovige';
axios.get(url)
.then(function(response){
    console.log(response.data.avatar_url);
})
.catch(function(error){
    console.warn(error)
});