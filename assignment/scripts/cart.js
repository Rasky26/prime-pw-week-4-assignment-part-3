console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Set a function that will add items to the basket
function addItem(item, basket) {
    // Add the item into the basket
    basket.push(item)
}

function listItems(basket) {
    // Loop over the `basket` array and console.log() the items
    for (let item of basket) {
        console.log(item)
    }
}



// Set basket to an empty array
let basket = []

//------Note from development:
//      First test.
//
// Test that the basket is empty
console.log('basket should be empty:', basket)
//------

//------Note from development:
//      Second test.
//
// Test that an item can be added into the basket, therefore
// ensuring the function works as intended
addItem('beans', basket)
addItem('more beans', basket)
console.log('Basket should contain beans & more beans:', basket)
//------

//------Note from development:
//      Third test.
//
// Test that each item can be logged out individually to the console
// Because console.log() is contained within the function, it does
// not need to be called here.
listItems(basket)