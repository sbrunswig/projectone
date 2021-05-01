// variables
let searchForm = document.querySelector("#search-form");
let resultContent = document.querySelector("#result-content");





// functions
function init() {
    // get inital data
}


function handleSearchForm(event) {
    event.preventDefault();

    resultContent.textContent = '';
    let searchInput = document.querySelector("#search-input").value;
    let formatInput = document.querySelector("#format-input").value;

    if (!searchInput) {
        alert('you need a value');
        return;
    }

    //show search term to screen
    document.querySelector("#result-text").textContent = searchInput;

    //get data
    searchLibrary(searchInput, formatInput);
}


function searchLibrary(query, format) {
    let baseUrl = 'https://www.loc.gov/search/?fo=json';

    if (format) {
        baseUrl = `https://www.loc.gov/${format}/?fo=json`;
    }
    let apiUrl = 'https://www.dysiopen.com/v1/manage/posts';

    var bearer = 'Bearer ajBZU1gxTGtPY2JSYmk0cFdKb3dpQT09X1NKSFRac29ERXRqdDNQd0JCY2t0MUxEdG0vUkd2azdWaE1IOEo2dnBZZXBnU3B4aytHQkMyN05aNE1vSUhFMjNLSVJwQjNmMVV3emlOSFhmblJIUGpqbEI4YTh4TFp3a2pIUXlNYWFGUHYvUmorbFl0SFJyTXlJbmZjVHdEZ2wy';


    fetch(apiUrl, {
        mode: 'no-cors',
        method: 'GET',
        withCredentials: true,
        headers: {
     'Authorization': bearer,
     'Content-Type': 'application/json; charset=utf-8'
        }
    })
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
                // let results = data.results;
                // // loop through array of data
                // results.forEach(result => {
                //     // print result
                //     printResults(result);
                // });
            });
        });

}


function printResults(resultObj) {
    let resultCard = document.createElement('div');
    resultCard.classList.add('card', 'mb-3', 'p-3');
    let resultTitle = document.createElement('div');
    let resultDescription = document.createElement('div');


    resultTitle.textContent = resultObj.title;
    resultDescription.textContent = resultObj.description;

    resultCard.append(resultTitle);
    resultCard.append(resultDescription);

    resultContent.append(resultCard);
}






// event handlers
init();
searchForm.addEventListener('submit', handleSearchForm);