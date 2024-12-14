
const jokeElement=document.querySelector('.joke-sec');
const apiURL='https://icanhazdadjoke.com/'
 const fetchData=()=>{
        fetch(apiURL, {
            headers: {
                Accept: "application/json",
            } })
            .then((res)=>{
             console.log(res)
             return res.json(); })
           .then((result)=>{
            console.log(result);
            jokeElement.textContent=result.joke
         })
        .catch((error)=>{
        console.log("error is here", error)
        jokeElement.textContent = "Failed to fetch a joke. Please try again!";
    })
}
fetchData();
document.querySelector('.fetchJoke').addEventListener("click", fetchData)
