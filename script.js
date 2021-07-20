const quoteDisplay = document.querySelector(".quote-place");
const button = document.querySelector(".change-quote-button");


function apiRecall() {
    fetch("https://api.quotable.io/random")
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Something went wrong, try again")
            }
        })
        .then((data) => changeQuote(data))
        .catch(err => {
            console.error(err);
            quoteDisplay.innerHTML = err;
        });
}

function changeQuote(quote) {
    quoteDisplay.innerHTML = `
    <p class="quote">${quote.content}</p>
    <p class="author">~ ${quote.author}</p>
    `;
}

button.addEventListener("click", apiRecall);