async function loadData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
}

loadData();

//ejecutar con el comando: node fetch.js