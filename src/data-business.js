import axios from "axios";

function getActors() {
    return axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
            
            return response.data.results;
        })
}

function getActor(id) {
    return axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            console.log(response)
            return response.data;
        })
}

// function getQuote(user) {
//     return axios
//         .get(`https://breakingbadapi.com/api/quote/random?author=` + user)
//         .then(response => {
//             // console.log(response.data)
//             return response.data[0];   
//         })
// }

export { getActors, getActor };