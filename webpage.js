


async function fetchJoke() {
  let myurl = "https://official-joke-api.appspot.com/jokes";

  try {
    
    const category = document.getElementById("joke_categories").value;

   
    const response = await fetch(`${myurl}/${category}/random`);
    const joke = await response.json();

   
    document.getElementById("joke_setup").textContent = joke[0].setup;
    document.getElementById("joke_punchline").textContent = joke[0].punchline;
  } catch (error) {
    
    console.error("Error fetching the joke:", error);
    document.getElementById("joke_setup").textContent = "Something went wrong pls try again";
    document.getElementById("joke_punchline").textContent = "";
  }
}


document.addEventListener("DOMContentLoaded", fetchJoke);


document.getElementById("joke_btn").addEventListener("click", fetchJoke);




