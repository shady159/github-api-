const input = document.querySelector ("input");
const btn = document.querySelector(".btn-search");
const user =document.querySelector (".githubUser");
const login=document.querySelector (".githubUsername");
const joined=document.querySelector (".githubJoinedDate");
const repo =document.querySelector (".repoTotal");
const follower =document.querySelector (".followerTotal");
const following =document.querySelector (".followingTotal");
const locations =document.querySelector (".locations");
const twitter =document.querySelector (".twitters");
const website =document.querySelector (".websites");
const company =document.querySelector (".companies");
const gitBio =document.querySelector (".bio");

let img = document.createElement("img");
let block = document.querySelector(".image-container");

btn.addEventListener("click" , function () { 
    const url = `https://api.github.com/users/${input.value}`;
    async function getUrl () { 
        const response = await fetch(url);
        const data = await response.json();
        const dateData =data.created_at.slice(0, data.created_at.length - 10);
        
  
        img.src = data.avatar_url;
        block.appendChild(img);
        block.style.border = "none";
    
        user.innerHTML = data.name;
        login.innerHTML = `@${data.login}`;
        joined.innerHTML = `Joined ${dateData}`;
        repo.innerHTML = data.public_repos;
        follower.innerHTML = data.followers;
        following.innerHTML = data.following;
        locations.innerHTML =
          data.location === "" || data.location === null
            ? "No Location"
            : data.location;
        twitter.innerHTML =
          data.twitter_username === "" || data.twitter_username === null
            ? "No Twitter"
            : data.twitter_username;
        website.innerHTML =
          data.blog === "" || data.blog === null ? "No Website" : data.blog;
        company.innerHTML =
          data.company === "" || data.company === null
            ? "No Company"
            : data.company;
        gitBio.innerHTML =
          data.bio === "" || data.bio === null
            ? "This profile has no bio..."
            : data.bio;
      }
      getUrl();
      input.value = "";
    });