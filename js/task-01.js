const ul = document.querySelector("#categories");
const listItemsCount = ul.querySelectorAll("li.item").length;
console.log("Number of categories: " + listItemsCount);

const categoryList = document.querySelectorAll(".item");

categoryList.forEach((item) => {
  const categoryName = item.querySelector("h2");
  const elementCount = item.querySelectorAll("ul li").length;
  console.log("Category: " + categoryName.textContent);
  console.log("Elements: " + elementCount);
});
