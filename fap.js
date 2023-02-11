const fap = document.querySelector("#fap");
fap.innerHTML = "";

const newDivContent = "obsah noveho divu";

const newDiv = `
<div>${newDivContent}</div>
`;

console.log(`newDiv: ${newDiv}`);

fap.innerHTML += newDiv;

const listItemsClass = "itemsList";
const itemsArray = ["Element 1", "Element 2", "Element 3"];
const itemsTemplatesArray = itemsArray.map(
  (item) => `<li class="${listItemsClass}" data-list-item>${item}</li>`
);

console.log(`itemsArray: ${itemsArray}`);
console.log(`itemsTemplatesArray: ${itemsTemplatesArray}`);

const itemsList = `<ul data-list>${itemsTemplatesArray.join("")}</ul>`;

console.log(`itemsList: ${itemsList}`);

fap.innerHTML += itemsList;

const createdList = document.querySelector("[data-list]");
const createdListItems = document.querySelectorAll("[data-list-item]");

console.log(`createdList: ${createdList}`);
console.log(`createdListItems: ${createdListItems}`);

const createPicture = (imageSrc, imageAlt) => `
<picture>
    <srcset/>
    <img src="${imageSrc}" alt="${imageAlt}"/>
</picture>`;

const nejakeImageVeSlozce = [
  "/src/images/image1.jpg",
  "/src/images/image2.jpg",
  "/src/images/image3.jpg",
];

const prvniObrazek = createPicture(nejakeImageVeSlozce[0], "nejaky alt");

console.log(prvniObrazek);
