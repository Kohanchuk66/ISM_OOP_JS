
class Hamburger {
    firstMayo = true;
    firstSauce = true;
    constructor(size, stuff, ...otherArg) {
        if(!size || !size.sizePrice){
            alert('HamburgerException: no size given');
        }
        else
        {
            if(!stuff || !stuff.stuffPrice){
                alert('HamburgerException: no stuff given');
            }
            else{
                if(otherArg.length != 0 ){
                    alert(`HamburgerException: invalid size`);
                    return;
                }
                this.price = size.sizePrice + stuff.stuffPrice;
                this.calories = size.sizeCalories + stuff.stuffCalories;
                this.haveTopping = false;
            }
        }
    }
    static SIZE_SMALL = Object.freeze({
        sizePrice : 50,
        sizeCalories: 20
    });
    static SIZE_BIG = Object.freeze({
        sizePrice : 100,
        sizeCalories: 40
    });
    static STUFFING_CHEESE = Object.freeze({
        stuffPrice : 10,
        stuffCalories: 20
    });
    static STUFFING_SALAD = Object.freeze({
        stuffPrice : 20,
        stuffCalories: 5
    });
    static STUFFING_POTATO = Object.freeze({
        stuffPrice : 15,
        stuffCalories: 10
    });
    static TOPPING_SAUCE = Object.freeze({
        toppingPrice : 20,
        toppingCalories: 0,
        toppingName: 'sauce'
    });
    static TOPPING_MAYO = Object.freeze({
        toppingPrice : 20,
        toppingCalories: 5,
        toppingName: 'mayo'
    });

    calculateCalories(){
        return this.calories;
    }
    calculatePrice(){
        return this.price;
    }
    addTopping(topping, ...otherArg){
        if(!topping || !topping.toppingPrice){
            alert('HamburgerException: no topping given');
        }
        else {
            if(otherArg.length != 0 ){
                alert(`HamburgerException: invalid size`);
                return;
            }
            if(!this.firstMayo){
                alert(`HamburgerException: duplicate topping 'TOPPING_MAYO'`);
                return;
            }
            if(!this.firstSauce){
                alert(`HamburgerException: duplicate topping 'TOPPING_SAUCE'`);
                return;
            }
            switch (topping.toppingName) {
                case "mayo":
                    this.firstMayo = false;
                    break;
                case "sauce":
                    this.firstSauce = false;
                    break;
            }
            this.price+=topping.toppingPrice;
            this.calories+=topping.toppingCalories;
        }

    }
}
let hamb = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamb.calculateCalories());
hamb.addTopping(Hamburger.TOPPING_MAYO);
hamb.addTopping(Hamburger.TOPPING_MAYO);
console.log(hamb.calculateCalories());