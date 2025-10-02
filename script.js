const startLoader = elemento => {
            elemento.innerHTML = `<div class="loading-spinner"></div>`;
        }

const stopLoader = (elemento, value) => {
    elemento.textContent = value;
}

// model
class PacoteBuscador {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }

    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}

// TODO 

const GithubAPI  = new PacoteBuscador("https://api.github.com/");

const form = document.querySelector("#repos-form");
const username = document.querySelector("#github-username");
const button = document.querySelector("#get-repos");
const list = document.querySelector("#repos-list");

form.addEventListener("submit", event => {
    event.preventDefault();

    startLoader(button);
    GithubAPI.get(`users/${username.value}/repos`)
    .then(data => {
        list.innerHTML = "";
        data.forEach(repo => {
                list.insertAdjacentHTML("beforeend", `<li>
                <a href="${repo.html_url}" target="_blank">
                    <h2>${repo.full_name}</h2>
                    <p>${repo.description}</p>
                </a>
            </li>`);
        });
    })
    .finally(() => {
        stopLoader(button, "Get repos");
    });
});