// Tasa de cambio: 1 dólar = 7,000 guaraníes
const exchangeRate = 7799.33 ;

// Función para convertir guaraníes a dólares
function convertToDollars(priceInGuaranies) {
    return (priceInGuaranies / exchangeRate).toFixed(2); // Dos decimales
}

// Seleccionar todos los elementos con la clase 'price'
const priceElements = document.querySelectorAll('.price');

// Recorrer los elementos y actualizar el texto
priceElements.forEach(element => {
    // Extraer el valor en guaraníes
    const priceText = element.textContent.trim();
    const priceInGuaranies = parseFloat(priceText.replace(/[Gs. ,]/g, ''));

    // Verificar si se pudo convertir
    if (!isNaN(priceInGuaranies)) {
        // Convertir a dólares
        const priceInDollars = convertToDollars(priceInGuaranies);

        // Actualizar el elemento con el nuevo precio
        element.textContent = `$ ${priceInDollars}`;
    }
});
