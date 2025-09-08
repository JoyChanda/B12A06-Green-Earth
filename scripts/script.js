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
      <img src="${plant.image}" 
           alt="${plant.name}" 
           class="w-full h-40 sm:h-48 md:h-56 object-cover rounded cursor-pointer" 
           onclick="loadPlantDetail(${plant.id})" />
      <h4 class="font-bold mt-2 cursor-pointer text-sm sm:text-base md:text-lg" 
          onclick="loadPlantDetail(${plant.id})">${plant.name}</h4>
      <p class="text-xs sm:text-sm text-gray-600 line-clamp-2 my-3">${plant.description}</p>
      <div class="flex flex-wrap justify-between items-center mt-2 gap-2">
        <span class="text-green-600 text-xs sm:text-sm font-medium rounded-full px-2 bg-[#DCFCE7]">${plant.category}</span>
        <span class="font-bold text-sm sm:text-base">৳ ${plant.price}</span>
      </div>
      <button onclick="addToCart('${plant.name}', ${plant.price})" 
              class="w-full mt-3 bg-[#15803D] text-white py-2 rounded-full text-sm sm:text-base hover:bg-[#033816]">
        Add to Cart
      </button>
    `;
    plantContainer.appendChild(card);
  });
};

// Load Plant Details (Modal)
const loadPlantDetail = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/plant/${id}`
  );
  const data = await res.json();
  showModal(data.plants);
  console.log(data);
};

const showModal = (plant) => {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <h3 class="font-bold text-base sm:text-lg md:text-xl">${plant.name}</h3>
    <img src="${plant.image}" class="w-full h-60 sm:h-72 md:h-[450px] object-cover rounded mb-3" />
    <p class="text-sm sm:text-base"><strong>Category:</strong> ${plant.category}</p>
    <p class="text-sm sm:text-base"><strong>Price:</strong>৳ ${plant.price}</p>
    <p class="text-gray-600 text-sm sm:text-base mb-2"><strong>Description:</strong>${plant.description}</p>
  `;

  modal.classList.remove("hidden");
};

const closeModal = () => {
  document.getElementById("modal").classList.add("hidden");
};

// Cart Functions
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
let cart = [];

// Add to Cart
const addToCart = (name, price) => {
  // Check if item already exists
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1; // increase quantity
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  renderCart();
};

// Remove from Cart (decrease quantity or remove)
const removeFromCart = (index) => {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  renderCart();
};

// Render Cart
const renderCart = () => {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.className =
      "flex justify-between items-center bg-[#DCFCE7] p-2 rounded";
    div.innerHTML = `
      <div><span class="text-sm font-semibold">${item.name} </span> <br> <span class="text-[#8C8C8C]"> ৳${item.price} × ${item.quantity}</span></div>
      <button onclick="removeFromCart(${index})" class="text-[#8C8C8C] font-bold">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    cartList.appendChild(div);
  });

  cartTotal.innerText = total;
};

// Initial Load
loadCategories();
loadPlants();
