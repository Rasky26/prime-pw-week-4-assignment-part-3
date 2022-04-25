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


function empty(basket) {
    // Check that the basket has valid items
    console.log('The basket should have two items:', basket)

    // Take in a basket and reset the basket to an empty array
    basket = []

    // The function's basket is empty, but is appears to be scoped
    // within this function
    console.log(basket, 'This should be empty...')

    // However, I never override the global `basket` variable, so
    // all of this technically didn't matter. I need to instead return
    // an empty array and assign that array back to the global
    // `basket` variable.
    
    // --------OLD CODE-------
    // return basket

    //---------NEW CODE-------
    return []
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
//-------

//------Note from development:
//      Fourth test.
//
// Test that a basket with valid items can be successfully reset
// to an empty array.
console.log('\n     This should signal where my old code was. NOT WORKING AS INTENDED')
empty(basket)
// Log out basket to ensure it is empty
console.log('The basket should be empty:', basket)
//
console.log('\n         Here is my updated working code:')
basket = empty(basket)
console.log('Here is the updated method with the working `empty()` function', basket)
//-------