// Get teams from API
const url = "https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/teams"

const teams = fetch(url)
                .then(response => response.json())
                .then(data => console.log(data));

