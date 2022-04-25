console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// Set a function that checks if the basket is full.
// Full amount is set by `maxItems`
function isFull(maxItems, basket) {

    // Check if basket is less-than the `maxItem` limit
    if (basket.length < maxItems) {
        return false
    }

    // Otherwise, the basket can safely be considered full
    return true
}

// Set a function that will add items to the basket
function addItem(item, basket) {

    // STRETCH GOAL - add check if the basket has reached maxItem count
    if (!isFull(maxItems, basket)) {

        // Add the item into the basket
        basket.push(item)
        return true
    }

    // Otherwise, if the basket is full, return `false`
    return false
}

function listItems(basket) {
    // Loop over the `basket` array and console.log() the items
    //
    // Found a link to using `entries()`, so updated this section to
    // show my testing done to incorporate it.
    for (let [index, item] of Object.entries(basket)) {


        // This is my first attempt to format the console.log() text as wanted.
        console.log(`ORIGINAL ATTEMPT (see comments): ${index + 1}.) ${item}`)

        // The math of index + 1 is giving '01' and '11' for answers,
        // so testing what datatype it is
        console.log(index + 1, typeof(index), '>>>>>>')

        // So here I found this StackOverflow answer: https://stackoverflow.com/a/1133814
        // Therefore, I check that it produces the expected datatype.
        //
        // First, check that I can convert to a number without error.
        // Second, verify the datatype is now a number
        // Third, test that the +1 math now works
        // Fourth, just add some text so I can quickly reference which console.log() line this is
        console.log(Number(index), typeof(Number(index)), Number(index) + 1, '????')

        // This is now my updated console.log() using the fixes
        // referenced above.
        console.log(`UPDATED ANSWER (see comments): ${Number(index) + 1}.) ${item}`)
    }
}


// Takes in an item and, if that item exists in the basket, removes
// it. Otherwise, return `null` if that item was not found.
function removeItem(item, basket) {
    // Check if and what the index value is
    let itemIndex = basket.indexOf(item)

    if (itemIndex === -1) {
        return null
    }

    // If a match is found, remove the item using `splice()`
    let removedItem = basket.splice(itemIndex, 1)
    return removedItem
}


function empty(basket) {
    // Check that the basket has valid items
    console.log('The basket should have two items:', basket)

    // Take in a basket and reset the basket to an empty array
    // basket = []

    // The function's basket is empty, but is appears to be scoped
    // within this function
    // console.log(basket, 'This should be empty...')

    // However, I never override the global `basket` variable, so
    // all of this technically didn't matter. I need to instead return
    // an empty array and assign that array back to the global
    // `basket` variable.
    
    // --------OLD CODE-------
    // return basket

    //---------NEW CODE-------
    // return []

    //---------YET NEWER CODE------
    // Updated from a StackOverflow answer: https://stackoverflow.com/a/36956622
    // This answer keeps the original array and cleanly
    // returns the value to it's empty self.
    basket.length = 0
    return basket
}


// Set basket to an empty array
let basket = []

// Set a limit to the number of variables that can be added to the basket
const maxItems = 5

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
//-------

//------Note from development:
//      Fourth test.
//
// Test that a basket with valid items can be successfully reset
// to an empty array.
// console.log('\n     This should signal where my old code was. NOT WORKING AS INTENDED')
empty(basket)
// Log out basket to ensure it is empty
// console.log('The basket should be empty:', basket)
//
console.log('\n         Here is my updated working code:')
// -----Old code--------
// basket = empty(basket)

// -----Newest code-----
// Based on the StackOverflow answer referenced in the function.
console.log('Here is the updated method with the working `empty()` function', basket)
//-------


//------Note from development:
//      Fifth test.
//
// Check if the `isFull()` function works as intended
console.log('Zero items - isFull() should be false:', isFull(maxItems, basket), basket)
//
// Add some items
addItem('milk', basket)
addItem('eggs', basket)
addItem('cheese', basket)
addItem('bread', basket)
// Check that 4 items is still false
console.log('4 items - isFull() should be false:', isFull(maxItems, basket), basket)
//
// Add just one more item
addItem('celery', basket)
// Check that `isFull()` now flags as `true`
console.log('5 items - isFull() should be true:', isFull(maxItems, basket), basket)

// See if I get `false` for adding a new item
console.log('Adding item should give `false`:', addItem('mutton', basket))

// Remove an item and make sure you can get a `true` response
basket.pop()
console.log('Should now give `true`:', addItem('spagetti', basket))


//------Note from development:
//      Fifth test.
//
// Test that I can find the index of an existing `basket` item
console.log('Item removed from the array:', removeItem('eggs', basket))
console.log('That item (if existed) removed from basket:', basket)