import { Octokit } from "https://esm.sh/@octokit/rest";

const octokit = new Octokit({
    auth: 'github'+'_pat_11AHZQN2I0g390IHTYCBzk'+'_wBie9FtefRgMKtNjnsJr2nbQimgLxKyT17ixemogClMQRR4LEGYdGt4h2oL'
  })

  let signup = event => {
    console.log(event.currentTarget);
};
document.querySelector('input[type="submit"]').addEventListener("click", add_game_issue)

async function add_game_issue(){
  const name = document.querySelector('input[name="name"]').value,
   link = document.querySelector('input[name="link"]').value,
   spruch = document.querySelector('textarea[name="spruch"]').value,
   cat = document.querySelector('input[name="cat"]:checked').value,
   personen = document.querySelector('input[name="personen"]').value,
   set32 = document.querySelector('input[name="32"]'),
   set52 = document.querySelector('input[name="52"]'),
   setj = document.querySelector('input[name="joker"]'),
   comment = document.querySelector('input[name="comment"]').value;

  console.log(name, link, spruch, cat, personen, set32.checked, set52.checked, setj.checked);
  if(validate_form){
    
    const karten_set = set_str(set32, set52, setj);
    const body =  `{"${name}": {"name": "${name}","link":"${link}", "spruch":"${spruch}", "personen":"${personen},"karten-set":"${karten_set}", "cat": "${cat}", "args": ["link"]}}`;
    const message = `Add ${body},\n Kommentar: ${comment}`;
    try{
        await octokit.request('POST /repos/Kernimeckernkern/Kartensammlung/issues', {
        owner: 'Kernimeckernkern',
        repo: 'Kartensammlung',
        title: `Add new Game ${name}`,
        body: message,
        assignees: [
            'SKernchen'
          ],
        labels: [
          'add-game'
        ],
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      alert("Dein Spiel wird weitergeleitet");
      window.location = "../";
    }catch(error){
        if (error.response) {
            console.error(`Error! Status: ${error.response.status}. Message: ${error.response.data.message}`)
          }
          console.error(error)
          document.body.innerHTML = `<h1>Oooopsie</h1><div class="main"><p>Dein Spiel kann nicht weitergeleitet werden, schicke das hier: </p><p style="color:blue">${message}<p>an Sophie andernweitig</p>
          <p>Error message: ${error}</p>
          <a id="for" href="../"><i class="arrow left"></i>Zurück zur Kartensammlung</a>
          </div>`;
    }
      

  }else{
    alert("Bitte halte dich ans Format und fülle es nochmal aus");
  }
  
}

function validate_form(name, link, personen)
{
    if (name == "") {
        return false;
      }
    try {
    url = new URL(link);
    } catch (_) {
    return false;  
    }
    if(/^[0-9]+[\+-]?[0-9]*$/.test(personen) == false){
        return false
    }
    return true
}

function set_str(set32, set52, setj){
    let karten_set = "";
    if(set32.checked){
        karten_set += "32";
        if(set52.checked){
            karten_set += " oder 52";
        }
    }else if(set52.checked){
        karten_set += "52";
    }
    if(setj.checked){
        karten_set += " + Joker";
    }
    console.log(karten_set);
    return karten_set
}
  
  /*fetch("https://api.github.com/Kernimeckernkern/Kartensammlung/issues", {
    method: "Get",
    
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then(response => response.json())
  .then(data => {
    console.log(data);
  });

  body: JSON.stringify({
      userId: 1,
      title: "Fix my bugs",
      body: "Description"

    })*/