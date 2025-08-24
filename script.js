
const jokeElement=document.querySelector('.joke-sec');
const apiURL='https://icanhazdadjoke.com/'
 const fetchData=()=>{
        fetch(apiURL, {
            headers: {
                Accept: "application/json",
            } })
            .then((res)=>{
             return res.json(); })
           .then((result)=>{
            jokeElement.textContent=result.joke
         })
        .catch((error)=>{
        jokeElement.textContent = "Failed to fetch a joke. Please try again!";
    })
}
fetchData();
document.querySelector('.fetchJoke').addEventListener("click", fetchData)
