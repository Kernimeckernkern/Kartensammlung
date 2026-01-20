
fetch("./wahrheit.json")
    .then(response => response.json())
    .then(data => {
        const body = document.querySelector("#fragen tbody"),
        fragenTemp = document.querySelector("#frage");
        const fragen = data["fragen"];

        fragen.forEach(frage => {
            const nFrage = document.importNode(fragenTemp.content, true);
            const celle = nFrage.querySelector("tr");
            celle.textContent = frage;
            body.appendChild(nFrage);
        })
        console.log(data);
    })
