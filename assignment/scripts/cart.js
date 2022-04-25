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