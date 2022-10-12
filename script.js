const APIURL = "https://api.github.com/users/";



const username = document.getElementById("username");

const container = document.querySelector(".container");
const form = document.getElementById("form");


// getUser();


async function getUser(user){
   const name = await fetch(APIURL + user);
    const respData = await name.json();
    
    // console.log(respData);
    addProfiles(respData,user);
   
   
}

async function getAllRepos(user){
    const name = await fetch(APIURL + user + "/repos");
    const reposData = await name.json();
     
     console.log(reposData);
     addRepos(reposData);
    
    
}
//  getAllRepos()


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user = username.value;

    if(user){
        getUser(user);
        getAllRepos(user);

        username.value = "";
    }


})


function addProfiles(respData,user){

// if(user === respData.)
    const main = document.createElement("div");
    main.classList.add("main-container");
    main.innerHTML = `
            <div class = "image">
                <div class="image-container">
                        <img src="${respData.avatar_url}" alt="picture">
                </div>
            <div/>
   

            <div class="information">
                <div class = "username">
                    <h1 class="name">${user}</h1>
                    <p class="nick"> @${respData.name}</p>
                </div>
                
                <p class="bio">${respData.bio} </p>
                <div class="follow-div">
                    <div class="followers">
                        <p >followers ${respData.followers}</p>

                    </div>
                    <div class="following">
                        <p>following ${respData.following}</p>
                        
                    </div>
                    <div class="repositories">
                        <p> ${respData.public_repos} public-Repos</p>
                        
                    </div>
                </div>

                    
                <span class="repo-div">
    
                </span> 
                
                
            </div>
    `

   container.appendChild(main);
}


function addRepos(reposData){
    const myRepos = document.querySelector(".repo-div")
 
    reposData.forEach((repo) => {

        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");

        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;

        myRepos.appendChild(repoEl);
    });

}


