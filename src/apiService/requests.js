import axios from "axios";

export async function post(newPost) {
   const response = await axios.post('http://localhost:5000/posts', newPost);
   return response.data;
}
export async function get() {
    const response = await axios.get('http://localhost:5000/posts')
    return response.data;
}
export async function put(id) {
    const response = await axios.put(`http://localhost:5000/posts/${id}`)
    return response.data;
}
export async function del(id) {
    const response = await axios.delete(`http://localhost:5000/posts/${id}`)
    return response.data;
}
export async function getId(id) {
    const response = await axios.get(`http://localhost:5000/posts/${id}`)
    return response.data;
}