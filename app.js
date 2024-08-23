/*1. Ejecución del Ejercicio:
  - Crea un archivo llamado `app.js` donde irá tu código.

2. Creación del Servidor:
  - Configura un servidor Express.    ok
  - Crea rutas para la página principal (/) y diferentes especialidades como marketing (/marketing), developers (/developers), etc...    ok
  - Implementa el manejo de errores 404 para rutas no definidas.   ok
  - Las rutas serán las mismas de las `specialty` (abajo hay un objeto con datos que usarás para crear lo qiue pide el ejercicio)  ok

3. Filtrado de Usuarios por Especialidad:
  - Crea una función para filtrar usuarios por su especialidad.  ok

4. Generación de Páginas HTML:
  - Utiliza literal string para construir páginas HTML directamente en el código..  ok
  - Crea una página para cada especialidad que muestre el título de la página, el número de personas y los detalles de cada usuario.

5. Prueba de la Aplicación:
  - Abre tu navegador y visita las diferentes rutas, por ejemplo:
http://localhost:3000/marketing
http://localhost:3000/developers

  - Intenta acceder a una ruta no definida para verificar el manejo de errores 404.
  - En la ruta "/" puedes crear una navegación que vaya a cada una de las páginas y en cada página puedes repetir esa navegación o solo un volver a home "/".*/



const express = require('express');
const app = express()

const PORT = 3000;

const filteredByDevelopers = (developers) => {
    return usersData.filter(user => user.specialty === developers)
}

const filteredByMarketing = (marketing) => {
    return usersData.filter(user => user.specialty === marketing)
}

const filteredByVentas = (ventas) => {
    return usersData.filter(user => user.specialty === ventas)
}

const filteredByQas = (qas) => {
    return usersData.filter(user => user.specialty.toLowerCase() === qas.toLowerCase())
}


app.get('/', (req,res)=>{
    const template = `
    <header>
        <nav>
            <a href="/developers">Developers</a>
            <a href="/marketing">Marketing</a>
            <a href="/ventas">Ventas</a>
            <a href="/QAs">QAs</a>
        </nav>
    </header>
    <h1>Meet Our Staff</h1>
    <h2>Check Out Our Departments</h2>
    `
    res.send(template)
})
app.get('/marketing',(req,res)=>{
    const path = req.url.split('/').join('');
    //console.log(path);
    
    const marketingData = filteredByMarketing(path)
    const title = `<h1>${path}</h1>`
    const subtitle = `<h2>Number of people: ${marketingData.length}</h2>`
    const user = marketingData.map(userInfo=>{
        const {id,name,age,specialty} = userInfo 
        return `
        <div>
            <p>${id}</p>
            <p>${name}</p>
            <p>${age}</p>
            <p>${specialty}</p>
        </div>
        `
    }).join('')
        res.send(`${title} ${subtitle} ${user}`)
   
})

app.get('/developers',(req,res)=>{
    const path = req.url.split('/').join('');
    const developersData = filteredByDevelopers(path)
    const title = `<h1>${path}</h1>`
    const subtitle = `<h2>Number of people: ${developersData.length}</h2>`
    const user = developersData.map(userInfo=>{
        const {id,name,age,specialty} = userInfo 
        return `
        <div>
            <p>${id}</p>
            <p>${name}</p>
            <p>${age}</p>
            <p>${specialty}</p>
        </div>
        `
    }).join('')
        res.send(`${title} ${subtitle} ${user}`)
})
app.get('/QAs',(req,res)=>{
    const path = req.url.split('/').join('');
    console.log(path);
    
    const qasData = filteredByQas(path)
    const title = `<h1>${path}</h1>`
    const subtitle = `<h2>Number of people: ${qasData.length}</h2>`
    const user = qasData.map(userInfo=>{
        const {id,name,age,specialty} = userInfo 
        return `
        <div>
            <p>${id}</p>
            <p>${name}</p>
            <p>${age}</p>
            <p>${specialty}</p>
        </div>
        `
    }).join('')
        res.send(`${title} ${subtitle} ${user}`)
})

app.get('/ventas',(req,res)=>{
    const path = req.url.split('/').join('')
    const ventasData = filteredByVentas(path)
    const title = `<h1>${path}</h1>`
    const subtitle = `<h2>Number of people: ${ventasData.length}</h2>`
    const user = ventasData.map(userInfo=>{
        const {id,name,age,specialty} = userInfo 
        return `
        <div>
            <p>${id}</p>
            <p>${name}</p>
            <p>${age}</p>
            <p>${specialty}</p>
        </div>
        `
    }).join('')
        res.send(`${title} ${subtitle} ${user}`)
})
app.use((req,res)=>{
    res.status(404).send('<h1>Page not found</h1><a href="/">Home</a>')
})


app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})













  const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];
  