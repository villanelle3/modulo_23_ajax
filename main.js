$(document).ready(function() {
    const username = "villanelle3"
    const endpoint = `https://api.github.com/users/${username}`;

    fetch(endpoint)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const name = json.name;
        const avatar_url = json.avatar_url;
        const login = json.login;
        const public_repos = json.public_repos;
        const followers = json.followers;
        const following = json.following;
        const html_url = json.html_url;

        $(`#name`).html(name);
        $(`#login`).html(login);
        $(`#followers`).html(followers);
        $(`#following`).html(following);
        $(`#public_repos`).html(public_repos);
        $("#avatar_url").attr("src", `${avatar_url}`);
        $("#html_url").attr("href", `${html_url}`);


    })


    .catch(function(error){ //exception
        console.log(error)
    }) 
    .finally(function(){
        console.log("Continue..")
    })
    
});