const shareButton = document.querySelector("#share-button");
const activeStateShareContainer = document.querySelector(".active-state");
console.log(shareButton);

shareButton.addEventListener("click", function () {
  if (activeStateShareContainer.classList.contains("hidden"))
    activeStateShareContainer.classList.remove("hidden");
  else activeStateShareContainer.classList.add("hidden");
});
