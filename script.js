const Fetch = (originalName) => {
    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {

            let d = new Date(data.created_at)
            let year = d.getFullYear()
            let month = d.getMonth()
            let day = d.getDate()

            let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];


            document.getElementById('picture').innerHTML = `<img class="picture-css" src="${data.avatar_url}"/>`
            document.getElementById('joined').innerHTML = `<div class="date-joined">Joined ${day} ${months[month]} ${year}</div>`
            document.getElementById('name').innerHTML = `<h1 class="name-css">${data.name}</h1>`
            document.getElementById('username').innerHTML = `<div class="username-css">@${data.login}</div>`
            document.getElementById('bio').innerHTML = `<div class="bio-css">${data.bio}</div>`
            document.getElementById('repos').innerHTML = `<h1 class="repos-css">${data.public_repos}</h1>`
            document.getElementById('followers').innerHTML = `<h1 class="repos-css">${data.followers}</h1>`
            document.getElementById('following').innerHTML = `<h1 class="repos-css">${data.following}</h1>`
            document.getElementById('location-text').innerHTML = `<div class="location-text-css">${data.location}</div>`
            document.getElementById('blog-text').innerHTML = `<div class="blog-text-css">${data.blog}</div>`
            document.getElementById('twitter-text').innerHTML = `<a href="https://twitter.com/${data.twitter_username}"><div class="twitter-text-css">@${data.twitter_username}</div></a>`
            document.getElementById('company-text').innerHTML = `<a href="https://github.com/${data.company}"><div class="company-text-css">@${data.company}</div></a>`
        })
}   

let form = document.getElementById("form")

form.addEventListener('submit', function (e) {
    e.preventDefault()
   
    let search = document.getElementById("search").value
    let originalName = search.split(' ').join('')
    Fetch(originalName);
    
})

window.onload = function() {
    let originalName = "octocat"
    Fetch(originalName);
}

const toggleSwitch = document.querySelector('.switch-container')
document.documentElement.setAttribute('data-theme', 'light');

function switchTheme() {
    if(document.documentElement.getAttribute('data-theme') == 'light'){
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector(".search-form").style.boxShadow = "none"
        document.querySelector(".info-container").style.boxShadow = "none"
        document.querySelector(".theme").innerHTML = "LIGHT"
        document.querySelector(".theme-img").style.backgroundImage = "url('/assets/icon-sun.svg')"
        
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector(".theme").innerHTML = "DARK"
        document.querySelector(".theme-img").style.backgroundImage = "url('/assets/icon-moon.svg')"
    }
        
}

toggleSwitch.addEventListener('click', switchTheme, false);
