import { Octokit } from "https://esm.sh/@octokit/rest";

const octokit = new Octokit({
    auth: 'github'+'_pat_11AHZQN2I0g390IHTYCBzk'+'_wBie9FtefRgMKtNjnsJr2nbQimgLxKyT17ixemogClMQRR4LEGYdGt4h2oL'
  })

  
document.querySelector('input[type="submit"]').addEventListener("click", neue_frage)

async function neue_frage(){
  const neue_frage = document.querySelector('input[name="frage"]').value;
  console.log(neue_frage);
  if(validate_form){
    
    try{
        await octokit.request('POST /repos/Kernimeckernkern/Kartensammlung/issues', {
        owner: 'Kernimeckernkern',
        repo: 'Kartensammlung',
        title: `Add new wow Question`,
        body: neue_frage,
        assignees: [
            'SKernchen'
          ],
        labels: [
          'add-question'
        ],
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      alert("Deine Frage wurde weitergeleitet. Der Admin überprüft sie und fügt sie hinzu.");
      window.location.reload();
    }catch(error){
        if (error.response) {
            console.error(`Error! Status: ${error.response.status}. Message: ${error.response.data.message}`)
          }
          console.error(error)
          document.body.innerHTML = `<h1>Oooopsie</h1><div class="main"><p>Deine Frage kann nicht weitergeleitet werden, schicke sie (${neue_frage}) an Sophie andernweitig</p>
          <p>Error message: ${error}</p>
          <a id="for" href="../"><i class="arrow left"></i>Zurück zur Kartensammlung</a>
          </div>`;
    }
      

  }else{
    alert("Bitte halte dich ans Format und fülle es nochmal aus");
  }
  
}

function validate_form(neue_frage)
{
    if (neue_frage == "") {
        return false;
      }
    return true
}

