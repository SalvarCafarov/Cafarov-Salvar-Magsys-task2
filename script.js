const facts = document.querySelector(".facts");
console.log(facts);
for (let index = 0; index < 3; index++) {
  facts.innerHTML += `
    <div class="fact" id='fact${index + 1}' onclick='factclick(${index + 1})'>
                <div class="cardHead">
                    <div class="number">0${index + 1}</div>
                    <div class="name">Fact ${index + 1}</div>
                    <div class="tog">
                        <div class="plus plus${index + 1} ">-</div>
                        <div class="minus minus${index + 1} active">+</div>
                    </div>
                </div>
                <div class="cardInfo cardInfo${index + 1}">
                <p class="info"></p>
                <div class="img"> <img src="download.jpeg" alt=""></div>
                </div>
            </div>
    `;
}
facts.innerHTML+=`<div class="logo">
<div class="logos">
        <img src="Logo.svg" class='logo1' alt="">
        <img src="Logo_inverted.svg" class='logo2' alt="">
    </div>
</div>`
async function getFact() {
  let response = await fetch("https://catfact.ninja/fact");
  let data = await response.json();
  return data.fact;
}
async function factclick(order) {
  let factplus = document.querySelector(`.plus${order}`);
  let factminus = document.querySelector(`.minus${order}`);
  let cardInfo = document.querySelector(`.cardInfo${order}`);
  let cardInfoTitle = document.querySelector(`.cardInfo${order} .info`);
  let fact = await getFact();
  factplus.classList.toggle("active");
  factminus.classList.toggle("active");
  if (factplus.classList.contains("active")) {
    console.log("e");
    cardInfo.classList.add("cardActive");
    cardInfoTitle.innerHTML = fact;
  } else if (factminus.classList.contains("active")) {
    cardInfo.classList.remove("cardActive");
    cardInfoTitle.innerHTML = "";
  }
}
