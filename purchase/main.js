(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['purchase-module'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    }else {
        root.myModuleMain = factory();
    }
}(this, function () {
    let rootElement = document.getElementsByTagName("purchase")[0]
    let productId = rootElement.getAttribute("data-product-id");

    let purchase = function() {
        alert("You have purchased product " + productId);
    }

    rootElement.innerHTML = `
        <div class="container p-6 border bg-light">
            <p class="m-3">${productId}.00€</p>
            <button id="purchase-button" class="btn btn-primary m-3">Comprar</button>
        </div>
    `;

    document.querySelector('#purchase-button').addEventListener("click", purchase);

	return {};
}));