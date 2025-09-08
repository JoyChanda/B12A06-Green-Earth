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

// Initial Load
loadCategories();
