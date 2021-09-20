function liked() {
    var element = document.getElementById("like");
    element.classList.toggle("liked");
}

function dateRequested() {

    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const apiKey = 'Q1IH5nxKT0uESgA7GzqaWI4n0mp38uAYdihejtF9';
    const dateSelect = document.querySelector("#datePicker");
    const todaysDate = new Date().toISOString().slice(0, 10);

    let datePicker = "&date=" + dateSelect.value + "&";

    dateSelect.max = todaysDate;
    dateSelect.min = "1995-06-16";

    function fetchData() {
        try {
            fetch(apiUrl + apiKey + datePicker)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    showData(json)
                })
        } catch (error) {
            console.log(error)
        }

        date.innerHTML = data.date;
    }
    fetchData()

    function showData(data) {
        fetch(apiUrl + apiKey + datePicker)
            .then((data) => data.json())
            .then((spaceInfo) => generateHtml(spaceInfo))

        const generateHtml = (data) => {

            const html = `
    
        <div class="card">
        <img class= "srcImg" src=${data.hdurl} style="width:100%">
        <div class= "container">
        <div class= "earth_date">${data.title} - ${data.date}</div>
        <div class= "information">${data.explanation}</div>
        </div>
        </div>
        `
            const spacePhotoDiv = document.querySelector('.spacePhoto')
            spacePhotoDiv.innerHTML = html

        }
        const dateSelect = document.querySelector("#datePicker");
        dateSelect.addEventListener('change', (e) => {
            e.preventDefault();
            dateRequested();
        })
    }
}

dateRequested().onload;

