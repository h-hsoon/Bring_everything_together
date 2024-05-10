let btnAdd = document.querySelector('#Add');
let tbody = document.querySelector('tbody');

let nameInput = document.querySelector('#ClubName');
let leagueInput = document.querySelector('#ClubLeague');
let handleInput = document.querySelector('#ClubHandle');

btnAdd.addEventListener('click' , ()=>{
  let name = nameInput.value;
  let league = leagueInput.value;
  let handle = handleInput.value;

  let template = ` <tr>
                    <td>${name}</td>
                    <td>${league}</td>
                    <td><a href="#" class="link-primary link-offset-2 link-underline link-underline-opacity-0">${handle}</a></td>
                  </tr>`;

  tbody.innerHTML += template;
});
