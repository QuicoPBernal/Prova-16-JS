async function fetchDogBreedData(breed) {
  try {
    showLoader();

    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();

    hideLoader();

    return data;
  } catch (error) {
    displayError("Ocorreu um erro ao buscar os dados da raça de cachorro.");
    console.error("Erro ao buscar dados da API:", error);
    return null;
  }
}

const loader = document.getElementById("loader");
const loaderImg = loader.querySelector("img");

function showLoader() {
  loader.style.display = "block";
  loaderImg.style.animation = "spin 1s linear infinite";
}

function hideLoader() {
  loader.style.display = "none";
  loaderImg.style.animation = "none";
}

function displayError(message) {
  document.getElementById("error-message").textContent = message;
}

async function displayDogBreedImage(breed) {
  const data = await fetchDogBreedData(breed);

  if (data) {
    document.getElementById("dog-image").src = data.message;
  }
}

window.onload = () => {
  setTimeout(() => {
    alert("Bem-vindo à Galeria de Raças de Cachorros!");
  }, 5000);
};


const dogImage = document.getElementById("dog-image");
dogImage.addEventListener("mouseover", () => {
  dogImage.style.transform = "scale(1.1)";
});

dogImage.addEventListener("mouseout", () => {
  dogImage.style.transform = "scale(1)";
});

const chooseBreedButton = document.getElementById("choose-breed-button");

chooseBreedButton.addEventListener("click", () => {
  const breed = prompt("Digite a raça que você deseja ver:");
  displayDogBreedImage(breed);
});
