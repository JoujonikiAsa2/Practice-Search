const fetchingData = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const res = await fetch(url);
    const data = await res.json();
    const searchField = document.getElementById('input-field');
    const searchBtn = document.getElementById('search-btn')
    searchBtn.addEventListener('click', (e) => {
        data.categories.map(category => searchField.value.toLowerCase() === category.strCategory.toLowerCase() ? handleDisplay(category): "")
    })
}
const handleDisplay = (category) => {
    const showResult = document.getElementById('search-result');
    showResult.innerHTML = ''
    const div = document.createElement('div');
    div.innerHTML = `
    <img src= '${category.strCategoryThumb}'>
    <h2 class='text-lg font-bold text-center py-3'>${category.strCategory}</h2>
    <div class='flex justify-center'>
        <button class='btn'>Show More<button>
    </div>
    `
    showResult.appendChild(div)
}
fetchingData()