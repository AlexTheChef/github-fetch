const Fetch = (originalName) => {
    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {

            let d = new Date(data.created_at)
            let year = d.getFullYear()
            let month = d.getMonth()
            let day = d.getDate()

            let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
            if (data.login) {
                document.querySelector(".error-message").style.display = "none"

                document.getElementById('picture').innerHTML = `<img class="picture-css" src="${data.avatar_url}"/>`
                document.getElementById('joined').innerHTML = `<div class="date-joined">Joined ${day} ${months[month]} ${year}</div>`
                if(data.name == null){
                    document.getElementById('name').innerHTML = `<h1 class="name-css">${data.login}</h1>`
                }
                else{
                    document.getElementById('name').innerHTML = `<h1 class="name-css">${data.name}</h1>`
                }
                
                document.getElementById('username').innerHTML = `<div class="username-css">@${data.login}</div>`
                if (data.bio == null) {
                    document.getElementById('bio').innerHTML = `<div class="bio-css">This profile has no bio</div>`
                    document.getElementById('bio').style.opacity = "50%"
                }
                else {
                    document.getElementById('bio').innerHTML = `<div class="bio-css">${data.bio}</div>`
                    document.getElementById('bio').style.opacity = "100%"
                }
                document.getElementById('repos').innerHTML = `<h1 class="repos-css">${data.public_repos}</h1>`
                document.getElementById('followers').innerHTML = `<h1 class="repos-css">${data.followers}</h1>`
                document.getElementById('following').innerHTML = `<h1 class="repos-css">${data.following}</h1>`

                if (data.location == null) {
                    document.getElementById('location-text').innerHTML = `<div class="location-text-css">Not Available</div>`
                    document.getElementById('location-text').style.opacity = "50%"
                    document.querySelector(".img-location").style.opacity = "50%"
                }
                else {
                    document.getElementById('location-text').innerHTML = `<div class="location-text-css">${data.location}</div>`
                    document.getElementById('location-text').style.opacity = "100%"
                    document.querySelector(".img-location").style.opacity = "100%"
                }

                if (data.blog == '') {
                    document.getElementById('blog-text').innerHTML = `<div class="blog-text-css">Not Available</div>`
                    document.getElementById('blog-text').style.opacity = "50%"
                    document.querySelector(".img-blog").style.opacity = "50%"
                }
                else {
                    document.getElementById('blog-text').innerHTML = `<a href="${data.blog}" <div class="blog-text-css">${data.blog}</div></a>`
                    document.getElementById('blog-text').style.opacity = "100%"
                    document.querySelector(".img-blog").style.opacity = "100%"
                }

                if (data.twitter_username == null) {
                    document.getElementById('twitter-text').innerHTML = `<div class="twitter-text-css">Not Available</div>`
                    document.getElementById('twitter-text').style.opacity = "50%"
                    document.querySelector(".img-twitter").style.opacity = "50%"
                }
                else {
                    document.getElementById('twitter-text').innerHTML = `<a href="https://twitter.com/${data.twitter_username}" <div class="twitter-text-css">@${data.twitter_username}</div></a>`
                    document.getElementById('twitter-text').style.opacity = "100%"
                    document.querySelector(".img-twitter").style.opacity = "100%"
                }

                if (data.company == null) {
                    document.getElementById('company-text').innerHTML = `<div class="company-text-css">Not Available</div>`
                    document.getElementById('company-text').style.opacity = "50%"
                    document.querySelector(".img-company").style.opacity = "50%"
                }
                else {
                    document.getElementById('company-text').innerHTML = `<a href="https://github.com/${data.company.slice(1)}" <div class="company-text-css">${data.company}</div></a>`
                    document.getElementById('company-text').style.opacity = "100%"
                    document.querySelector(".img-company").style.opacity = "100%"
                }
            }
            else {
                document.querySelector(".error-message").style.display = "block"
            }

        })
}

let form = document.getElementById("form")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let search = document.getElementById("search").value
    let originalName = search.split(' ').join('')
    Fetch(originalName);

})

window.onload = function () {
    let originalName = "octocat"
    Fetch(originalName);
}

const toggleSwitch = document.querySelector('.switch-container')
document.documentElement.setAttribute('data-theme', 'light');

function switchTheme() {
    if (document.documentElement.getAttribute('data-theme') == 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector(".search-form").style.boxShadow = "none"
        document.querySelector(".info-container").style.boxShadow = "none"
        document.querySelector(".theme").innerHTML = "LIGHT"
        document.querySelector(".theme-img").style.backgroundImage = "url('/assets/icon-sun.svg')"
        document.querySelector(".img-location").style.backgroundImage = "url('/assets/icon-location-dark.svg')"
        document.querySelector(".img-twitter").style.backgroundImage = "url('/assets/icon-twitter-dark.svg')"
        document.querySelector(".img-blog").style.backgroundImage = "url('/assets/icon-website-dark.svg')"
        document.querySelector(".img-company").style.backgroundImage = "url('/assets/icon-company-dark.svg')"

    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector(".search-form").style.boxShadow = "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
        document.querySelector(".info-container").style.boxShadow = "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
        document.querySelector(".theme").innerHTML = "DARK"
        document.querySelector(".theme-img").style.backgroundImage = "url('/assets/icon-moon.svg')"
        document.querySelector(".img-location").style.backgroundImage = "url('/assets/icon-location.svg')"
        document.querySelector(".img-twitter").style.backgroundImage = "url('/assets/icon-twitter.svg')"
        document.querySelector(".img-blog").style.backgroundImage = "url('/assets/icon-website.svg')"
        document.querySelector(".img-company").style.backgroundImage = "url('/assets/icon-company.svg')"
    }

}

toggleSwitch.addEventListener('click', switchTheme, false);


