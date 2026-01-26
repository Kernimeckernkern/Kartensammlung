
fetch("./spiele.json")
    .then(response => response.json())
    .then(data => {
        const keys = Object.keys(data);
        const spielTemp = document.querySelector("#game");
        
        
        let states_dictionary={ 
            "stich":document.querySelector("#stich"), 
            "lege":document.querySelector("#lege"), 
            "trink":document.querySelector("#trink")
       };
        keys.forEach(game => {
            const newGame = document.importNode(spielTemp.content, true);
            const gname = newGame.querySelector("#name"),
            glink = newGame.querySelector("#link"),
            gspruch = newGame.querySelector("#spruch"),
            gpersonen = newGame.querySelector("#personen"),
            gset = newGame.querySelector("#set");
            console.log(gpersonen, gset)
            
            gname.textContent = data[game]["name"];
            glink.href = data[game]["link"];
            gspruch.textContent = data[game]["spruch"];
            gpersonen.textContent = "\u{1F46F} " + data[game]["personen"];
            gset.textContent = "\u{1F0A1} " + data[game]["karten-set"];
            console.log(data[game]["cat"], states_dictionary[data[game]["cat"]]);
            states_dictionary[data[game]["cat"]].appendChild(newGame);
        })
        console.log(data);
    })
