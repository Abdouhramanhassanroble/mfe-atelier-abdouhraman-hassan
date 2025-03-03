require("header/Header").then((module) => { // Remplace `import`
    document.body.appendChild(module());
  });

  
const title = document.createElement("h1");
title.innerText = "Je suis le Shell MFE";
document.body.appendChild(title);