const input = require('sync-input');

let machine = {
    "water": 400, "milk": 540, "beans": 120, "cups": 9, "money": 550
}

const coffee = [espresso = {
    "water": 250, "milk": 0, "beans": 16, "money": 4
}, latte = {
    "water": 350, "milk": 75, "beans": 20, "money": 7
}, cappuccino = {
    "water": 200, "milk": 100, "beans": 12, "money": 6
}]

function remaining() {
    console.log(`\nThe coffee machine has:
${machine.water} ml of water
${machine.milk} ml of milk
${machine.beans} g of coffee beans
${machine.cups} disposable cups
$${machine.money} of money\n`);
}

function get_action() {
    let action = input(`Write action (buy, fill, take, remaining, exit):\n`);
    return action;
}

function buy() {
    let coffee_to_buy = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
    if (coffee_to_buy == "back") {
        return;
    } else {
        coffee_to_buy--;
        if (machine.water < coffee[coffee_to_buy].water) {
            console.log("Sorry, not enough water!\n");
        } else if (machine.milk < coffee[coffee_to_buy].milk) {
            console.log("Sorry, not enough milk!\n");
        } else if (machine.beans < coffee[coffee_to_buy].beans) {
            console.log("Sorry, not enough coffee beans!\n");
        } else if (machine.cups < 1) {
            console.log("Sorry, not enough cups!\n");
        } else {
            machine.water -= coffee[coffee_to_buy].water;
            machine.milk -= coffee[coffee_to_buy].milk;
            machine.beans -= coffee[coffee_to_buy].beans;
            machine.money += coffee[coffee_to_buy].money;
            machine.cups -= 1;
            console.log("I have enough resources, making you a coffee!\n");
        }
    }
}

function fill() {
    let water_added = Number(input("\nWrite how many ml of water you want to add:\n"));
    let milk_added = Number(input("Write how many ml of milk you want to add:\n"));
    let beans_added = Number(input("Write how many grams of coffee beans you want to add:\n"));
    let cups_added = Number(input("Write how many disposable coffee cups you want to add:\n"));
    console.log();
    machine.water += water_added;
    machine.milk += milk_added;
    machine.beans += beans_added;
    machine.cups += cups_added;
}

function take() {
    console.log(`\nI gave you $${machine.money}\n`);
    machine.money = 0;
}

while (true) {
    let new_action = get_action();
    switch (new_action) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            remaining();
            break;
        case "exit":
            return;
        default:
            break;
    }
}
