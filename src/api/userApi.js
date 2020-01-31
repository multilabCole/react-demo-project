import {handleResponse, handleError} from './apiUtils';
const baseUrl = process.env.API_URL + "/users"

export function loginUser() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

// setup for registration 

export function createUser(user) {
    console.log("what is the user in the userAPI", user, baseUrl)
    return fetch(baseUrl, {
        method: "POST",
        headers: { "content-type": "application/json"},
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError);
}