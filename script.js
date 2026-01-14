
fetch("./spiele.json")
    .then(response => response.json())
    .then(data => {
        const keys = Object.keys(data);
        const tbody = document.querySelector("#main32"),
        spielTemp = document.querySelector("#game");
        keys.forEach(game => {
            const newGame = document.importNode(spielTemp.content, true);
            const gname = newGame.querySelector("#name"),
            glink = newGame.querySelector("#link"),
            gspruch = newGame.querySelector("#spruch");
            
            gname.textContent = data[game]["name"];
            glink.href = data[game]["link"];
            gspruch.textContent = data[game]["spruch"];
            tbody.appendChild(newGame);
        })
        console.log(data);
    })