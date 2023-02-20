import axios from "axios"
const baseUrl = "/api/tasks"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newTask => {
    const request = axios.post(baseUrl, newTask)
    return request.then(response => response.data)
}

const update = updatedTask => {
    const request = axios.put(`${baseUrl}/${updatedTask.id}`, updatedTask)
    return request.then(response => response.data)
}

const deleteTask = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    deleteTask: deleteTask
}