//www.icndb.com/api
//API
//REstFulAPI

document.getElementById('button').addEventListener('click', loadjokes);

function loadjokes() {
    let number

    number = document.getElementById('input1').value;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading.....</h3>"
    };

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let jokes = data.value;
            let output = "<ol>";

            jokes.forEach(function (item) {
                output += `<li> ${item.joke}</li>`;
            });

            output += "</ol>";
            document.getElementById('output').innerHTML = output;

        }
    }
    xhr.send();
}