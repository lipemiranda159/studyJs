function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {

        }, 2000);

        if (idade >= 18) {
            resolve("Maior de 18")
        } else reject("Menor de 18");
    });
}

checaIdade(15)
    .then(response => console.log(response))
    .catch(err => console.warn(err));

var inputElement = document.querySelector('input');
var divElement = document.getElementById('app');
var ulElement = document.createElement('ul');


function addUser() {
    ulElement.innerHTML = '';
    var loadingText = document.createTextNode('Carregando');
    divElement.appendChild(loadingText);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', ' https://api.github.com/users/' + inputElement.value + '/repos');
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                divElement.removeChild(loadingText);
                var results = JSON.parse(xhr.responseText);

                for (const result of results) {
                    var liElement = document.createElement('li');
                    var liElementText = document.createTextNode(result.name);
                    liElement.appendChild(liElementText);
                    ulElement.appendChild(liElement);
                    divElement.appendChild(ulElement);

                }
            }
        }
    }

}