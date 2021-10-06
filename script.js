const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const url = "https://api.github.com/users/"
function updateDateJoined(data) {
    let d = new Date(data.created_at)
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDate()
    document.getElementById('joined').innerHTML = `<div class="date-joined">Joined ${day} ${months[month]} ${year}</div>`
}

const Fetch = (originalName) => {
    fetch(url + originalName)
        .then((result) => result.json())
        .then((data) => {
            if (!data.login) {
                document.querySelector(".error-message").style.display = "block"
                return;
            }
            updateDateJoined(data)

            const $blog = document.getElementById('blog-text')
            const $location = document.getElementById('location-text')
            const $twitter = document.getElementById('twitter-text')
            const $company = document.getElementById('company-text')
            
            document.querySelector(".error-message").style.display = "none"
            document.getElementById('picture').innerHTML = `<img class="picture-css" src="${data.avatar_url}"/>`
            document.getElementById('name').innerHTML = `<h1 class="name-css">${data.name ? data.name : data.login}</h1>`
            document.getElementById('username').innerHTML = `<div class="username-css">@${data.login}</div>`
            document.getElementById('bio').innerHTML = `<div class="bio-css">${data.bio ? data.bio : "This profile has no bio"}</div>`
            document.getElementById('bio').style.opacity = `${data.bio ? "100%" : "50%"}`
            document.getElementById('repos').innerHTML = `<h1 class="repos-css">${data.public_repos}</h1>`
            document.getElementById('followers').innerHTML = `<h1 class="repos-css">${data.followers}</h1>`
            document.getElementById('following').innerHTML = `<h1 class="repos-css">${data.following}</h1>`
            $location.innerHTML = `<div class="location-text-css">${data.location ? data.location : "Not Available"}</div>`
            $location.style.opacity = `${data.location ? "100%" : "50%"}`
            document.querySelector('.img-location').style.opacity = `${data.location ? "100%" : "50%"}`
            $blog.innerHTML = `<a href="${data.blog}" <div class="blog-text-css">${data.blog ? data.blog : "Not Available"}</div></a>`
            $blog.style.opacity = `${data.blog ? "100%" : "50%"}`
            $blog.style.pointerEvents = `${data.blog ? "all" : "none"}`
            document.querySelector('.img-blog').style.opacity = `${data.blog ? "100%" : "50%"}`
            $twitter.innerHTML = `<a href="https://twitter.com/${data.twitter_username}" <div class="twitter-text-css">${data.twitter_username ? data.twitter_username : "Not Available"}</div></a>`
            $twitter.style.pointerEvents = `${data.twitter_username ? "all" : "none"}`
            $twitter.style.opacity = `${data.twitter_username ? "100%" : "50%"}`
            document.querySelector('.img-twitter').style.opacity = `${data.twitter_username ? "100%" : "50%"}`
            $company.innerHTML = data.company ? `<a href="https://github.com/${data.company.slice(1)}" <div class="company-text-css">${data.company}</div></a>` : `<div class="company-text-css">Not Available</div>`
            $company.style.pointerEvents = `${data.company ? "all" : "none"}`
            $company.style.opacity = `${data.company ? "100%" : "50%"}`
            document.querySelector('.img-company').style.opacity = `${data.company ? "100%" : "50%"}`
        }
    )
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
document.documentElement.setAttribute('theme', 'light');

function switchTheme() {
    let theme = document.documentElement.getAttribute('theme')
    if (theme == 'light') {
        document.documentElement.setAttribute('theme', 'dark');
        document.querySelector(".theme").innerHTML = "LIGHT"

    }
    else {
        document.documentElement.setAttribute('theme', 'light');
        document.querySelector(".theme").innerHTML = "DARK"
    }

}

toggleSwitch.addEventListener('click', switchTheme);


