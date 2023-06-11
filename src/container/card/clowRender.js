const path = require("path");
const fs = require("fs");

let width = 92;
let height = 199;

// Read the image folder
const readImageFolder = (imageFiles, sourceFolder) => {
  try {
    const files = fs.readdirSync(sourceFolder);
    const imageFilesInFolder = files.filter((file) => {
      const fileExtension = path.extname(file).toLowerCase();
      return [".png", ".jpg", ".jpeg", ".gif"].includes(fileExtension);
    });
    
    imageFiles.push(...imageFilesInFolder);
    
    // You can perform additional processing or return the imageFiles array
    return imageFiles;
  } catch (error) {
    console.error("Error reading image folder:", error);
    return imageFiles;
  }
};

// Shuffle
const selectRandomElements = (array, numElements) => {
  // const shuffledArray = array.sort(() => 0.5 - Math.random());
  // return shuffledArray.slice(0, numElements);
  
  if (numElements >= array.length) {
    return array;
  }
  
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  
  return shuffledArray.slice(0, numElements);
};

// Render the cards
const render = (randomCards) => {
  const [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10] = randomCards;
  
  let container = document.getElementById("card-container");
  let row = document.createElement("div");
  row.className = "row align-items-center";
  
  let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10;
  let cardSection1, cardSection2, cardSection3, cardSection4, cardSection5, cardSection6;
  let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;

  img1 = document.createElement("img");
  img1.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card1);
  img1.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img1.className = "img-fluid mx-auto d-block clow-card";
  img1.width = width;
  img1.height = height;
  img1.id = card1;
  img1.addEventListener("click", () => reveal(img1));
  
  
  img2 = document.createElement("img");
  img2.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card2);
  img2.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img2.className = "img-fluid mx-auto d-block clow-card";
  img2.width = width;
  img2.height = height;
  img2.id = card2;
  img2.addEventListener("click", () => reveal(img2));
  
  img3 = document.createElement("img");
  img3.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card3);
  img3.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img3.className = "img-fluid mx-auto d-block clow-card mt-2";
  img3.width = width;
  img3.height = height;
  img3.id = card3;
  img3.addEventListener("click", () => reveal(img3));
  
  img4 = document.createElement("img");
  img4.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card4);
  img4.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img4.className = "img-fluid mx-auto d-block clow-card";
  img4.width = width;
  img4.height = height;
  img4.id = card4;
  img4.addEventListener("click", () => reveal(img4));
  
  img5 = document.createElement("img");
  img5.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card5);
  img5.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img5.className = "img-fluid mx-auto d-block clow-card mt-2";
  img5.width = width;
  img5.height = height;
  img5.id = card5;
  img5.addEventListener("click", () => reveal(img5));
  
  img6 = document.createElement("img");
  img6.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card6);
  img6.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img6.className = "img-fluid mx-auto d-block clow-card mt-2";
  img6.width = width;
  img6.height = height;
  img6.id = card6;
  img6.addEventListener("click", () => reveal(img6));
  
  img7 = document.createElement("img");
  img7.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card7);
  img7.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img7.className = "img-fluid mx-auto d-block clow-card";
  img7.width = width;
  img7.height = height;
  img7.id = card7;
  img7.addEventListener("click", () => reveal(img7));
  
  img8 = document.createElement("img");
  img8.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card8);
  img8.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img8.className = "img-fluid mx-auto d-block clow-card mt-2";
  img8.width = width;
  img8.height = height;
  img8.id = card8;
  img8.addEventListener("click", () => reveal(img8));
  
  img9 = document.createElement("img");
  img9.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card9);
  img9.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img9.className = "img-fluid mx-auto d-block clow-card";
  img9.width = width;
  img9.height = height;
  img9.id = card9;
  img9.addEventListener("click", () => reveal(img9));
  
  img10 = document.createElement("img");
  img10.setAttribute("data-image", "../../public/images/ClowCard/convert/" + card10);
  img10.src = "../../public/images/ClowCard/clow_card_rear_face.png";
  img10.className = "img-fluid mx-auto d-block clow-card";
  img10.width = width;
  img10.height = height;
  img10.id = card10;
  img10.addEventListener("click", () => reveal(img10));


  
  a1 = document.createElement("a");
  a1.setAttribute("data-bs-toggle", "modal");
  a1.setAttribute("data-bs-target", `#modal0`);
  a1.appendChild(img1);

  a2 = document.createElement("a");
  a2.setAttribute("data-bs-toggle", "modal");
  a2.setAttribute("data-bs-target", `#modal1`);
  a2.appendChild(img2);

  a3 = document.createElement("a");
  a3.setAttribute("data-bs-toggle", "modal");
  a3.setAttribute("data-bs-target", `#modal2`);
  a3.appendChild(img3);

  a4 = document.createElement("a");
  a4.setAttribute("data-bs-toggle", "modal");
  a4.setAttribute("data-bs-target", `#modal3`);
  a4.appendChild(img4);

  a5 = document.createElement("a");
  a5.setAttribute("data-bs-toggle", "modal");
  a5.setAttribute("data-bs-target", `#modal4`);
  a5.appendChild(img5);

  a6 = document.createElement("a");
  a6.setAttribute("data-bs-toggle", "modal");
  a6.setAttribute("data-bs-target", `#modal5`);
  a6.appendChild(img6);

  a7 = document.createElement("a");
  a7.setAttribute("data-bs-toggle", "modal");
  a7.setAttribute("data-bs-target", `#modal6`);
  a7.appendChild(img7);

  a8 = document.createElement("a");
  a8.setAttribute("data-bs-toggle", "modal");
  a8.setAttribute("data-bs-target", `#modal7`);
  a8.appendChild(img8);

  a9 = document.createElement("a");
  a9.setAttribute("data-bs-toggle", "modal");
  a9.setAttribute("data-bs-target", `#modal8`);
  a9.appendChild(img9);

  a10 = document.createElement("a");
  a10.setAttribute("data-bs-toggle", "modal");
  a10.setAttribute("data-bs-target", `#modal9`);
  a10.appendChild(img10);

  
  
  cardSection1 = document.createElement("div");
  cardSection1.className = "col-1 offset-md-2 text-center";
  cardSection1.id = "card-section-1";
  cardSection1.appendChild(a1);
  
  cardSection2 = document.createElement("div");
  cardSection2.className = "col-1";
  cardSection2.id = "card-section-2";
  cardSection2.appendChild(a2);
  cardSection2.appendChild(a3);
  
  cardSection3 = document.createElement("div");
  cardSection3.className = "col-1";
  cardSection3.id = "card-section-3";
  cardSection3.appendChild(a4);
  cardSection3.appendChild(a5);
  cardSection3.appendChild(a6);
  
  cardSection4 = document.createElement("div");
  cardSection4.className = "col-1";
  cardSection4.id = "card-section-4";
  cardSection4.appendChild(a7);
  cardSection4.appendChild(a8);
  
  cardSection5 = document.createElement("div");
  cardSection5.className = "col-1";
  cardSection5.id = "card-section-5";
  cardSection5.appendChild(a9);
  
  cardSection6 = document.createElement("div");
  cardSection6.className = "col-2 d-flex align-items-end justify-content-center";
  cardSection6.id = "card-section-6";
  cardSection6.appendChild(a10);
  
  row.appendChild(cardSection1);
  row.appendChild(cardSection2);
  row.appendChild(cardSection3);
  row.appendChild(cardSection4);
  row.appendChild(cardSection5);
  row.appendChild(cardSection6);
  
  container.appendChild(row);

  console.log(randomCards);

  for (let i = 0; i < 10; i++) {
    let modalDialog = document.createElement("div");
    let modalDocument = document.createElement("div");
    let modalContent = document.createElement("div");
    let modalBody = document.createElement("div");
    let modalRow = document.createElement("div");
    let col4 = document.createElement("div");
    let col8 = document.createElement("div");

    let cardImg = document.createElement("img");
    let cardDetail = document.createElement("p")

    modalDialog.className = "modal fade";
    modalDialog.id = `modal${i}`;
    modalDialog.tabIndex = -1;
    modalDialog.role = "dialog"

    modalDocument.className = "modal-dialog modal-lg";
    modalDocument.role = "document";

    modalContent.className = "modal-content";

    modalBody.className = "modal-body";

    modalRow.className = "row"

    col4.className = "col-4 text-center";
    col8.className = "col-8"

    cardImg.src = "../../public/images/ClowCard/convert/" + randomCards[i];
    cardImg.className = "img-fluid";
    cardImg.width = 239;
    cardImg.height = 528;

    cardDetail.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae atque expedita accusantium nesciunt error facilis sunt odio ab, nemo quibusdam quod velit nulla voluptate quas hic. Vitae, placeat hic!";

    modalDialog.appendChild(modalDocument);
    modalDocument.appendChild(modalContent);
    modalContent.appendChild(modalBody);
    modalBody.appendChild(modalRow);
    modalRow.appendChild(col4);
    modalRow.appendChild(col8);
    col4.appendChild(cardImg);
    col8.appendChild(cardDetail);

    container.appendChild(modalDialog);
  }

};


const reveal = (img) => {
  let src = img.getAttribute('data-image');
  img.src = src;
}


// ../../public/images/ClowCard/convert/
const clowCardFolder = "src/public/images/ClowCard/convert";

const arr = [];
const cards = readImageFolder(arr, clowCardFolder);
const randomCards = selectRandomElements(cards, 10);

render(randomCards);
