const shareData = {
    title: "Gabriel Arcad - web dev",
    text: "about me",
    url: "https://github.com/GabrielArcad",
  };
  
  const btn = document.querySelector(".shareButton");
  const resultPara = document.querySelector(".result");
  
  // Share must be triggered by "user activation"
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      resultPara.textContent = "Page shared successfully";
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
    }
  });