import 'regenerator-runtime/runtime'
import axios from 'axios';
import '../index.css'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
async function getMike(name) { 
  let mikeData = {};
  try { 
    await axios.get(`https://api.github.com/users/${name}`)
          .then((item) => {
            mikeData = item.data;
            createGitCard(mikeData);
          }).catch((error) => {
            console.log(error);
          }).data;
  } catch (error) {
    alert(error);
  } 

  return mikeData;
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function createGitCard(props) {
  console.log(props);
  let cards = document.querySelector(".cards");
  let cardMain = document.createElement("div");
  cardMain.classList = "card";
  cardMain.style.borderRadius = "1rem";
  cardMain.style.padding = "1%";
  cardMain.style.width = "30%";
  cardMain.style.display = "flex";
  cardMain.style.flexFlow = "column nowrap";
  cardMain.style.alignContent = "center";

  let titleBar = document.createElement("div");
  titleBar.className = "card-info";

  let avatar = document.createElement("img");
  avatar.src = props.avatar_url;
  
  let title = document.createElement("h3");
  title.innerHTML = props.login;
  title.className = "name";
  title.style.fontSize = "3rem";

  let userName = document.createElement("p");
  userName.innerHTML = props.name;

  let location = document.createElement("p");
  location.innerHTML = props.location;

  let bottomNav = document.createElement("nav");
  bottomNav.style.display = "flex";
  bottomNav.style.flexFlow = "column nowrap";
  
  let linkMe = document.createElement("a");
  linkMe.href = props.html_url;
  linkMe.textContent = "My GitHub";

  let linkRepo = document.createElement("a");
  linkRepo.href = props.repos_url;
  linkRepo.textContent = "Code Repositories";

  let linkFollower = document.createElement("a");
  linkFollower.href = props.followers_url;
  linkFollower.textContent = "Followers";

  let bio = document.createElement("p");
  bio.innerHTML = props.bio;

  cardMain.appendChild(titleBar);
  cardMain.appendChild(bio);
  
  titleBar.appendChild(title);
  titleBar.appendChild(userName);
  titleBar.appendChild(location);
  titleBar.appendChild(avatar);
  titleBar.appendChild(bottomNav);

  bottomNav.appendChild(linkMe);
  bottomNav.appendChild(linkRepo);
  bottomNav.appendChild(linkFollower);

  cards.appendChild(cardMain);
}
getMike("Michael-Kochis");

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [    
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];
followersArray.forEach((item) => {
  getMike(item);
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
