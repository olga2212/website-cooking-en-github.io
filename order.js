
// ===================Shopping-Basket-and-Checkout-Form==================>
const temptationPriceBefore = document.querySelector(".temptation_price del");
const temptationPriceAfter = document.querySelector(".temptation_price ins");
const quantityTemptationBtn = document.querySelector("#quantityTemptation");
const orderTemptation = document.querySelector(".temptation");

const lurePriceBefore = document.querySelector(".lure_price del");
const lurePriceAfter = document.querySelector(".lure_price ins");
const quantityLureBtn = document.querySelector("#quantityLure");
const orderLure = document.querySelector(".lure");

const dreamPriceBefore = document.querySelector(".dream_price del");
const dreamPriceAfter = document.querySelector(".dream_price ins");
const quantityDreamBtn = document.querySelector("#quantityDream");
const orderDream = document.querySelector(".dream");

const pleasurePriceBefore = document.querySelector(".pleasure_price del");
const pleasurePriceAfter = document.querySelector(".pleasure_price ins");
const quantityPleasureBtn = document.querySelector("#quantityPleasure");
const orderPleasure = document.querySelector(".pleasure");

const mysteryPriceBefore = document.querySelector(".mystery_price del");
const mysteryPriceAfter = document.querySelector(".mystery_price ins");
const quantityMysteryBtn = document.querySelector("#quantityMystery");
const orderMystery = document.querySelector(".mystery");

const secretPriceBefore = document.querySelector(".secret_price del");
const secretPriceAfter = document.querySelector(".secret_price ins");
const quantitySecretBtn = document.querySelector("#quantitySecret");
const orderSecret = document.querySelector(".secret"); 

const velveteenPriceBefore = document.querySelector(".velveteen_price del");
const velveteenPriceAfter = document.querySelector(".velveteen_price ins");
const quantityVelveteenBtn = document.querySelector("#quantityVelveteen");
const orderVelveteen = document.querySelector(".velveteen");

const breadPriceBefore = document.querySelector(".bread_price del");
const breadPriceAfter = document.querySelector(".bread_price ins");
const quantityBreadBtn = document.querySelector("#quantityBread");
const orderBread = document.querySelector(".bread");

const bunsPriceBefore = document.querySelector(".buns_price del");
const bunsPriceAfter = document.querySelector(".buns_price ins");
const quantityBunsBtn = document.querySelector("#quantityBuns");
const orderBuns = document.querySelector(".buns");

const cartQuantity = document.querySelector("#cartQuantity");
const item = document.querySelector("#item");
const itemPrice = document.querySelector("#itemPrice");
const salesTax = 7.25;
const totalPrice = document.querySelector("#totalPrice");
const promoBtn = document.querySelector("#promoBtn");


function calculateItems() {
    // ================Temptation-Card-Calculating===========================>>>
    // ----------------Changing-Label-price-on-the-Temptation-Card----------->
    quantityTemptationBtn.addEventListener("input", () => {
        let amountTemptation = document.querySelector("#quantityTemptation").value;
        let beforeDiscountTemptation = amountTemptation * 48;
        let afterDiscountTemptation = amountTemptation * 37;
        temptationPriceBefore.textContent = beforeDiscountTemptation + " $";
        temptationPriceAfter.textContent = afterDiscountTemptation + " $";
    });
    // -------------Calculating-Temptation-Price-in-the-Shopping-Basket---------->
    orderTemptation.addEventListener("click", () => {
        i = 0;
        let amountTemptation = document.querySelector("#quantityTemptation").value;
        let subTotalTemptation = amountTemptation * 37;
        cartQuantity.textContent = amountTemptation;
        item.textContent = "Temptation";
        itemPrice.textContent = "$ " + subTotalTemptation;
        totalPrice.value = ((subTotalTemptation * 7.25 / 100) + subTotalTemptation).toFixed(2);
    });
    // =====================================================================<<<

    // ================Lure-Card-Calculating===========================>>>
    // ----------------Changing-Label-price-on-the-Lure-Card----------->
    quantityLureBtn.addEventListener("input", () => {
        let amountLure = document.querySelector("#quantityLure").value;
        let beforeDiscountLure = amountLure * 47;
        let afterDiscountLure = amountLure * 32;
        lurePriceBefore.textContent = beforeDiscountLure + " $";
        lurePriceAfter.textContent = afterDiscountLure + " $";
    });
    // -------------Calculating-Lure-Price-in-the-Shopping-Basket---------->
    orderLure.addEventListener("click", () => {
        i = 0;
        let amountLure = document.querySelector("#quantityLure").value;
        let subTotalLure = amountLure * 32;
        cartQuantity.textContent = amountLure;
        item.textContent = "Lure";
        itemPrice.textContent = "$ " + subTotalLure;
        totalPrice.value = ((subTotalLure * 7.25 / 100) + subTotalLure).toFixed(2);
    });
    // =====================================================================<<<

    // ================Dream-Card-Calculating===========================>>>
    // ----------------Changing-Label-price-on-the-Dream-Card----------->
    quantityDreamBtn.addEventListener("input", () => {
        let amountDream = document.querySelector("#quantityDream").value;
        let beforeDiscountDream = amountDream * 42;
        let afterDiscountDream = amountDream * 34;
        dreamPriceBefore.textContent = beforeDiscountDream + " $";
        dreamPriceAfter.textContent = afterDiscountDream + " $";
    });
    // -------------Calculating-Dream-Price-in-the-Shopping-Basket---------->
    orderDream.addEventListener("click", () => {
        i = 0;
        let amountDream = document.querySelector("#quantityDream").value;
        let subTotalDream = amountDream * 34;
        cartQuantity.textContent = amountDream;
        item.textContent = "Dream";
        itemPrice.textContent = "$ " + subTotalDream;
        totalPrice.value = ((subTotalDream * 7.25 / 100) + subTotalDream).toFixed(2);
    });
    // =====================================================================<<<

    // ================Pleasure-Card-Calculating===========================>>>
    // ----------------Changing-Label-price-on-the-Pleasure-Card----------->
    quantityPleasureBtn.addEventListener("input", () => {
        let amountPleasure = document.querySelector("#quantityPleasure").value;
        let beforeDiscountPleasure = amountPleasure * 21;
        let afterDiscountPleasure = amountPleasure * 18;
        pleasurePriceBefore.textContent = beforeDiscountPleasure + " $";
        pleasurePriceAfter.textContent = afterDiscountPleasure + " $";
    });
    // -------------Calculating-Pleasure-Price-in-the-Shopping-Basket---------->
    orderPleasure.addEventListener("click", () => {
        i = 0;
        let amountPleasure = document.querySelector("#quantityPleasure").value;
        let subTotalPleasure = amountPleasure * 18;
        cartQuantity.textContent = amountPleasure;
        item.textContent = "Pleasure";
        itemPrice.textContent = "$ " + subTotalPleasure;
        totalPrice.value = ((subTotalPleasure * 7.25 / 100) + subTotalPleasure).toFixed(2);
    });
    // =====================================================================<<<

    // ================Mystery-Card-Calculating===========================>>>
    // ----------------Changing-Label-price-on-the-Mystery-Card----------->
    quantityMysteryBtn.addEventListener("input", () => {
        let amountMystery = document.querySelector("#quantityMystery").value;
        let beforeDiscountMystery = amountMystery * 59;
        let afterDiscountMystery = amountMystery * 48;
        mysteryPriceBefore.textContent = beforeDiscountMystery + " $";
        mysteryPriceAfter.textContent = afterDiscountMystery + " $";
    });
    // -------------Calculating-Mystery-Price-in-the-Shopping-Basket---------->
    orderMystery.addEventListener("click", () => {
        i = 0;
        let amountMystery = document.querySelector("#quantityMystery").value;
        let subTotalMystery = amountMystery * 48;
        cartQuantity.textContent = amountMystery;
        item.textContent = "Mystery";
        itemPrice.textContent = "$ " + subTotalMystery;
        totalPrice.value = ((subTotalMystery * 7.25 / 100) + subTotalMystery).toFixed(2);
    });
    // =====================================================================<<<

    // ================Secret-Card-Calculating===========================>>>
    // ----------------Changing-Label-price-on-the-Secret-Card----------->
    quantitySecretBtn.addEventListener("input", () => {
        let amountSecret = document.querySelector("#quantitySecret").value;
        let beforeDiscountSecret = amountSecret * 21;
        let afterDiscountSecret = amountSecret * 18;
        secretPriceBefore.textContent = beforeDiscountSecret + " $";
        secretPriceAfter.textContent = afterDiscountSecret + " $";
    });
    // -------------Calculating-Secret-Price-in-the-Shopping-Basket---------->
    orderSecret.addEventListener("click", () => {
        i = 0;
        let amountSecret = document.querySelector("#quantitySecret").value;
        let subTotalSecret = amountSecret * 18;
        cartQuantity.textContent = amountSecret;
        item.textContent = "Secret";
        itemPrice.textContent = "$ " + subTotalSecret;
        totalPrice.value = ((subTotalSecret * 7.25 / 100) + subTotalSecret).toFixed(2);
    });
    // =====================================================================<<<

    // ================Velveteen-Card-Calculating===========================>>>
    // ----------------Changing-Label-price-on-the-Velveteen-Card----------->
    quantityVelveteenBtn.addEventListener("input", () => {
        let amountVelveteen = document.querySelector("#quantityVelveteen").value;
        let beforeDiscountVelveteen = amountVelveteen * 21;
        let afterDiscountVelveteen = amountVelveteen * 18;
        velveteenPriceBefore.textContent = beforeDiscountVelveteen + " $";
        velveteenPriceAfter.textContent = afterDiscountVelveteen + " $";
    });
    // -------------Calculating-Velveteen-Price-in-the-Shopping-Basket---------->
    orderVelveteen.addEventListener("click", () => {
        i = 0;
        let amountVelveteen = document.querySelector("#quantityVelveteen").value;
        let subTotalVelveteen = amountVelveteen * 18;
        cartQuantity.textContent = amountVelveteen;
        item.textContent = "Velveteen";
        itemPrice.textContent = "$ " + subTotalVelveteen;
        totalPrice.value = ((subTotalVelveteen * 7.25 / 100) + subTotalVelveteen).toFixed(2);
    });
    // =====================================================================<<<

    // ================Bread-Card-Calculating===========================>>>
    // ----------------Changing-Label-price-on-the-Bread-Card----------->
    quantityBreadBtn.addEventListener("input", () => {
        let amountBread = document.querySelector("#quantityBread").value;
        let beforeDiscountBread = amountBread * 17;
        let afterDiscountBread = amountBread * 14;
        breadPriceBefore.textContent = beforeDiscountBread + " $";
        breadPriceAfter.textContent = afterDiscountBread + " $";
    });
    // -------------Calculating-Bread-Price-in-the-Shopping-Basket---------->
    orderBread.addEventListener("click", () => {
        i = 0;
        let amountBread = document.querySelector("#quantityBread").value;
        let subTotalBread = amountBread * 14;
        cartQuantity.textContent = amountBread;
        item.textContent = "Home-baked bread";
        itemPrice.textContent = "$ " + subTotalBread;
        totalPrice.value = ((subTotalBread * 7.25 / 100) + subTotalBread).toFixed(2);
    });

    // =================================================================<<<
    // ================Buns-Card-Calculating=============================>>>
    // ---------------Changing-Label-Price-on-the-Buns-Card-------------->
    quantityBunsBtn.addEventListener("input", () => {
        let amountBuns = document.querySelector("#quantityBuns").value;
        let beforeDiscountBuns = amountBuns * 24;
        let afterDiscountBuns = amountBuns * 21;
        bunsPriceBefore.textContent = beforeDiscountBuns + " $";
        bunsPriceAfter.textContent = afterDiscountBuns + " $";
    });

    // -------------Calculating-Buns-Price-in-the-Shopping-Basket---------->
    orderBuns.addEventListener("click", () => {
        i = 0;
        let amountBuns = document.querySelector("#quantityBuns").value;
        let subTotal = amountBuns * 21;
        cartQuantity.textContent = amountBuns;
        item.textContent = "Buns";
        itemPrice.textContent = "$ " + subTotal;
        totalPrice.value = ((subTotal * 7.25 / 100) + subTotal).toFixed(2);
    });
    // ==================================================================<<<

    // ====================Promo-code-Validation=========================>>>
    let promo = [""];
    let i = 0;
    promoBtn.addEventListener("click", (event) => {
        event.preventDefault();
        i++
        const promoInputValue = document.querySelector("#promoInput").value;
        if(promoInputValue ==="5%off" && i>=promo.length) {
            i=-100;
            let amountPromo = 5 * totalPrice.value / 100;
            totalPrice.value = (totalPrice.value - amountPromo).toFixed(2);
        }
        if(promoInputValue !="5%off" || i > promo.length) {
            openWindow();
            totalPrice.value = totalPrice.value - 0;
        }
        else {
            totalPrice.value = totalPrice.value - 0;
        }
    });

}
calculateItems();
// ===================================================================<<<

// ======================Alert-Modal-Window=================================>
const modal = document.querySelector("#myModal");
const span = document.querySelector("#close");
span.addEventListener("click", closeWindow);

function openWindow() {
    modal.style.display = "block";
}
function closeWindow() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}



