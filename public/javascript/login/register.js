const jsonData = {
    "username":"java",
    "password":"asd"
}
const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonData)
  };
const register = () =>{
    console.log('ejecuto funcion registrar')
    
    fetch(`http://localhost:8400/api/register`,options)
    .then((response) => response.json())
    .then((data) => console.log("desde fecht",data));
}