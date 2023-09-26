document.getElementById("triangle-calculate").addEventListener('click', function () {
    const triangleBase = getInputValue("triangle-base");
    const triangleHeight = getInputValue("triangle-height");

    const area = (0.5 * triangleBase * triangleHeight).toFixed(2);
    const calculationArea = document.getElementById("area-calculation");
    calculationArea.innerHTML = `<li> <span class="font-semibold mr-8">Triangle</span> ${area}  cm<sup>2</sup> <button class="bg-sky-600 text-white px-4 py-1 rounded-md ml-8">convert to m<sup>2</sup></button></li>`;
})