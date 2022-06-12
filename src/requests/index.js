export const getBooks = (resolve, reject=()=>{}) =>{
    fetch('http://localhost:7000/api/router/books')
    .then(data=>data.json(), reject)
    .then(resolve)
}

export const getPartners = (resolve, reject=()=>{}) =>{
    fetch('http://localhost:7000/api/router/partners')
    .then(data=>data.json(), reject)
    .then(resolve);
}

export const getSkills = (resolve, reject=()=>{}) =>{
    fetch('http://localhost:7000/api/router/skills')
    .then(data=>data.json(), reject)
    .then(resolve);
}

export const getArticles = (resolve, reject=()=>{}) =>{
    fetch('http://localhost:7000/api/router/articles')
    .then(data=>data.json(), reject)
    .then(resolve);
}