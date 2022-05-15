// problem 1: ana to vori convert

function anaToVori(ana) {
    // if params is not a number
    if (typeof (ana) !== 'number') {
        return 'Please input a number!!!'
    }

    // if param zero or negative
    if (ana <= 0) {
        return 'Input cannot be zero or negative!!!'
    }

    // 16 ana = 1 vori
    let vori = ana / 16;
    return vori
}






// problem 2: Panda store bill maker function 

function pandaCost(singraQuantity, samuchaQuantity, jilapiQuantity) {
    let singraPrice = 7;
    let samuchaPrice = 10;
    let jilapiPrice = 15;

    // if params is not a number
    if (typeof (singraQuantity) !== 'number' || typeof (samuchaQuantity) !== 'number' || typeof (jilapiQuantity) !== 'number') {
        return 'Please input three numbers params.'
    }

    // if cannot by anything
    if (singraQuantity == 0 && samuchaQuantity == 0 && jilapiQuantity == 0) {
        return 'If you want to see your bill, you have to buy something.'
    }
    // If params are negative
    if (singraQuantity < 0 || samuchaQuantity < 0 || jilapiQuantity < 0) {
        return 'Price cannot be negative.'
    }

    // total cost value
    let totalCost = (singraPrice * singraQuantity) + (samuchaPrice * samuchaQuantity) + (jilapiPrice * jilapiQuantity)
    return totalCost
}







// problem 3: show picnic budget function 
function picnicBudget(numberOfParticipants) {
    let firstCost = 5000;
    let secondCost = 4000;
    let remainCost = 3000;
    // if params is not a number
    if (typeof (numberOfParticipants) !== 'number') {
        return 'Please input a number.';
    }
    // If params are negative
    if (numberOfParticipants <= 0) {
        return 'Participants cannot be zero or negative.'
    }

    // first 100 participants
    if (numberOfParticipants <= 100) {
        let budget = numberOfParticipants * firstCost;
        return budget;
    }

    // more than 100 and less than or equal 200 participants
    else if (numberOfParticipants > 100 && numberOfParticipants <= 200) {
        let budget = (100 * firstCost) + ((numberOfParticipants - 100) * secondCost)
        return budget;
    }

    // more than 300 participants
    else {
        let budget = (100 * firstCost) + (100 * secondCost) + ((numberOfParticipants - 200) * remainCost)
        return budget;
    }
}







// problem 4: find odd friend 
let friendslist = ['Nahian', 'Ahanaf', 'azaz', 'abbas', 'sagor', 'suronjit']
function oddFriend(friends) {
    let myOddFriend = ''
    if (Array.isArray(friends)) {
        // find odd friend from array
        for (const friend of friends) {
            if (friend.length % 2 !== 0) {
                myOddFriend = friend;
                break;
            } else {
                myOddFriend = 'No odd number friend in your list'
            }
        }
        // if input is not an array
        return myOddFriend
    }

    return ' Please input a list of your firend (array) '


}
console.log(oddFriend(friendslist));
