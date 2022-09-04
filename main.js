const input = require('sync-input')

// let water = Number(input("Write how many ml of water the coffee machine has:\n"));
// let milk = Number(input("Write how many ml of milk the coffee machine has:\n"));
// let beans = Number(input("Write how many grams of coffee beans the coffee machine has:\n"));
// let cups_needed = Number(input("Write how many cups of coffee you will need:\n"));
// let cups_can_make = 0;

// function count_cups() {
//     while (water >= 200 && milk >= 50 && beans >= 15) {
//         water -= 200;
//         milk -= 50;
//         beans -= 15;
//         cups_can_make += 1;
//         if (water <= 0 || milk <= 0 || beans <= 0) {
//             return cups_can_make;
//         }
//     }
// }

// count_cups();

// if (cups_can_make == cups_needed) {
//     console.log(`Yes, I can make that amount of coffee`);
// }
// else if (cups_can_make < cups_needed) {
//     console.log(`No, I can make only ${cups_can_make} cups of coffee`);
// }
// else {
//     console.log(`Yes, I can make that amount of coffee (and even ${cups_can_make - cups_needed} more than that)`);
// }

let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;

const coffee = [
    espresso = {
        water: 250,
        milk: 0,
        beans: 16,
        cup: 1,
        money: 4
    },
    latte = {
        water: 350,
        milk: 75,
        beans: 20,
        cup: 1,
        money: 7
    },
    cappuccino = {
        water: 200,
        milk: 100,
        beans: 12,
        cup: 1,
        money: 6
    }
]

function display_supply() {
    console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} disposable cups
$${money} of money`);
}

function get_action() {
    let action = input(`\nWrite action (buy, fill, take):\n`);
    return action;
}

function buy() {
    let buy_option = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n"));

    buy_option--;
    water -= coffee[buy_option].water;
    milk -= coffee[buy_option].milk;
    beans -= coffee[buy_option].beans;
    cups -= coffee[buy_option].cup;
    money += coffee[buy_option].money;
}

function fill() {
    let water_added = Number(input("Write how many ml of water you want to add:\n"));
    let milk_added = Number(input("Write how many ml of milk you want to add:\n"));
    let beans_added = Number(input("Write how many grams of coffee beans you want to add:\n"));
    let cups_added = Number(input("Write how many disposable coffee cups you want to add:\n"));

    water += water_added;
    milk += milk_added;
    beans += beans_added;
    cups += cups_added;
}

function take() {
    console.log(`I gave you $${money}`);
    money = 0;
}

display_supply();

let action = get_action();
switch (action) {
    case "buy":
        buy();
        console.log();
        display_supply();
        break;
    case "fill":
        fill();
        console.log();
        display_supply();
        break;
    case "take":
        take();
        console.log();
        display_supply();
        break;
    default:
        break;
}
