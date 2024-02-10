// function botaoclickado(x){
//   console.log(x)
//   const url = `https://pokeapi.co/api/v2/pokemon/${x}`
//   let resultContainer = document.querySelector('div#resultContainer')
//   let sim = document.getElementById('detalhes')

//   function funcDetails(pokemon){
//     return `

//     <ol>
//       <li>Hp:${pokemon.base_stat} </li>
//       <li>Attack:${pokemon.base_stat}</li>
//       <li>Defense:${pokemon.base_stat}</li>
//       <li>Special-Attack:${pokemon.base_stat}</li>
//       <li>Special-Defense:${pokemon.base_stat}</li>
//       <li>Speed:${pokemon.base_stat}</li>
//     </ol>
//     `
//   }
    
//    fetch(url)
//   .then((response) => response.json())
//   .then((jsonBody) => jsonBody.stats)
//   .then((statsList) => {
//     for (let i = 0; i < statsList.length; i++) {
//       const element = statsList[i];
//       // console.log(funcDetails(element))
//       // let item = document.createElement('ul')
//        let item = funcDetails(element)
//       sim.innerHTML = ''
//       sim.innerHTML += item
//       // console.log(item)
//       // resultContainer.creat += funcDetails(element)
      
//     }
//   }).catch((error) => console.log(error))
// };

function botaoclickado(x) {
  console.log(x);
  const url = `https://pokeapi.co/api/v2/pokemon/${x}`;
  
  let sim = document.getElementById('detalhes');

  function funcDetails(statsList) {
      let resultHTML = '<ol>';

      for (let i = 0; i < statsList.length; i++) {
          const stat = statsList[i];
          resultHTML += `<li>${stat.stat.name}: ${stat.base_stat}</li>`;
      }

      resultHTML += '</ol>';
      return resultHTML;
  }

  fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => jsonBody.stats)
      .then((statsList) => {
          let item = funcDetails(statsList);
          sim.innerHTML = item;
      })
      .catch((error) => console.log(error));
};
