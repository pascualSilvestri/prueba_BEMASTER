
//Ejercicio 1
/*Crea una aplicación Node.js que consuma 
la API de GitHub y muestre los 10 repositorios 
más populares del usuario "google". */
import('node-fetch').then(fetch => {
    const username = 'google';
    const apiUrl = `https://api.github.com/users/${username}/repos?per_page=10&sort=stars`;
  
    fetch.default(apiUrl)
      .then(res => res.json())
      .then(repos => {
        console.log(`Los 10 repositorios más populares de ${username} son:`);
        repos.forEach(repo => console.log(`${repo.name}: ${repo.stargazers_count} estrellas`));
      })
      .catch(err => console.error(err));
  });


//Ejercicio 2 
/*Reemplaza los nombres de las variables con nombres 
más descriptivos que reflejen mejor su función */
function calcularSeno(valor1, valor2, valor3) {
    let suma = valor1 + valor2;
    let producto = suma * valor3;
    let seno = Math.sin(producto);
    return seno;
   }

//Ejercicio 3 
/*Escribe una función que tome un número entero como entrada y devuelva un array con 
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el 
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9]. */
  function imparesAPartideDe(numero){
        const array=[];
        for (let i = 1; i <= numero; i++) {
            if (i % 2 != 0)array.push(i);
        }
        return array;
  }
  console.log(imparesAPartideDe(20))