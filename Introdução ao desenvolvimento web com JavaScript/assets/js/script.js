function BuscarPersonagem() {
    const NomePersonagem = document.getElementById("NomePersonagem").value;
    if (NomePersonagem === "") {
        const ul = document.getElementById("personagem-list");
        ul.innerHTML = "";
        const armazenamento = document.createElement("div");
        armazenamento.innerHTML = "";
        return ;
    }

    const url = `https://rickandmortyapi.com/api/character/?name=${NomePersonagem}`;

    fetch(url)
        .then(
            function (response) {
                return response.json();
            }
        )

        .then(function (jsonBody) {
            const ul = document.getElementById("personagem-list");
            ul.innerHTML = "";

            for (const personagem of jsonBody.results.slice(0, 10)) {
                const li = document.createElement("li");
                const images = document.createElement("img");
                const armazenamento = document.createElement("div");
                const statusPersonagem = document.createElement("p");
                const especie = document.createElement("p");
                armazenamento.classList.add("armazenamento")
                images.src = personagem.image;
                li.innerHTML =  personagem.name;
                statusPersonagem.innerHTML = "Status: "+personagem.status;
                especie.innerHTML = "Especie: " + personagem.species;
                armazenamento.appendChild(li);
                armazenamento.appendChild(images);
                armazenamento.appendChild(statusPersonagem)
                armazenamento.appendChild(especie)
                ul.appendChild(armazenamento)
            }

        })
        .catch(function (error) {
            console.log(error);
        }
        )


}
