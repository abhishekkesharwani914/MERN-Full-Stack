import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const api = axios.create({
    baseURL: baseUrl
})

export const getAll = () => {
    return api.get("/");
}


export const create = (newPerson) => {
    return api.post("/", newPerson);
}

export const update = (id, updatedPerson) => {
    return api.put(`/${id}`, updatedPerson);
}

export const deletePerson = (id) => {
    return api.delete(`/${id}`);
}   