// Load Categories
const categoryContainer = document.getElementById("category-container");
const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const data = await res.json();
  displayCategories(data.categories);
};

const displayCategories = (categories) => {
  categoryContainer.innerHTML = "";

  // Add "All Trees" button
  const allBtn = document.createElement("button");
  allBtn.innerText = "All Trees";
  allBtn.className =
    "px-3 py-1 rounded-full text-left hover:bg-green-200 active:bg-green-800";
  allBtn.onclick = () => loadPlants();
  categoryContainer.appendChild(allBtn);

  // Add categories dynamically
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.innerText = cat.category_name;
    btn.className =
      "px-3 py-1 rounded-full text-left hover:bg-green-200 active:bg-green-800";
    btn.onclick = () => loadPlantsByCategory(cat.id);
    categoryContainer.appendChild(btn);
  });
};

// Load All Plants
const plantContainer = document.getElementById("plant-container");
const loadPlants = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const data = await res.json();
  displayPlants(data.plants);
};

// Load Plants by Category
const loadPlantsByCategory = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/category/${id}`
  );
  const data = await res.json();
  displayPlants(data.plants);
};

// Display Plants (cards)
const displayPlants = (plants) => {
  plantContainer.innerHTML = ``;

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-lg shadow hover:shadow-lg";
    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="w-full h-40 object-cover rounded cursor-pointer" onclick="loadPlantDetail(${plant.id})" />
      <h4 class="font-bold mt-2 cursor-pointer" onclick="loadPlantDetail(${plant.id})">${plant.name}</h4>
      <p class="text-sm text-gray-600 line-clamp-2 my-3">${plant.description}</p>
      <div class="flex justify-between items-center mt-2">
        <span class="text-green-600 font-medium rounded-full px-2 bg-[#DCFCE7]">${plant.category}</span>
        <span class="font-bold">৳ ${plant.price}</span>
      </div>
      <button onclick="addToCart('${plant.name}', ${plant.price})" class="w-full mt-5 bg-[#15803D] text-white py-2 rounded-full hover:bg-[#033816]">Add to Cart</button>
    `;
    plantContainer.appendChild(card);
  });
};

// Cart Functions
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
let cart = [];
const addToCart = (name, price) => {
  cart.push({ name, price });
  renderCart();
};

const removeFromCart = (index) => {
  cart.splice(index, 1);
  renderCart();
};

const renderCart = () => {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-gray-100 p-2 rounded";
    div.innerHTML = `
      <span>${item.name} - ৳ ${item.price}</span>
      <button onclick="removeFromCart(${index})" class="text-red-500 font-bold"><i class="fa-solid fa-xmark"></i></button>
    `;
    cartList.appendChild(div);
  });

  cartTotal.innerText = total;
};

// Initial Load
loadCategories();
loadPlants();
