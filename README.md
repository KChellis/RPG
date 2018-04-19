# _Role Play Game_

#### _Page created to practice using Jasmine and Karma_

#### By _**Kristen Chellis and Susan Southall April 18, 2018**_

## Description

_This page lays out the logic behind an rpg game._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program will create a base character** | User input: "choose wizard, Kristen" | Output: "name:Kristen, Health: 30 Level: 1 " |
| **Program will remove health when character takes damage** | User input: "takes damage" | Output: "Health -5" |
| **Program will add health when character heals** | User input: "use potion" | Output: "Health +20" |
| **Program will add experience points to character** | User input: "win battle" | Output: "Experience +100" |
| **Program will add level once needed experience is reached** | User input: "get 1000 exp" | Output: "level 2" |
| **Program will add weapons/armor/potions to respective inventories** | User input: "pickup sword" | Output: Weapons:[Sword] |
| **Program will add money to character** | User input: "sell sword" | Output: Money : 50 |
| **Program will not add items if inventory is full** | User input: "pickup sword" | Output: "Inventory Full"  |
| **Program will remove dropped/sold items from inventory** | User input: "drop sword" | Output: Weapons: []  |

| **Program will change active weapon/armor/shield** | User input: "choose sword" | Output: "Sword Equipped" |
| **Program will determine attack power and type** | User input: "warrior attack with sword" | Output: [13, "power"] |
| **Program will determine number of hit points taken based on type and attack power** | User input: "warrior takes magic hit power 10" | Output: 5 |
| **Program will give character more skills at set levels** | User input: "warrior gets level 4" | Output: warrior learns Cleave skill|
| **Program will add levelup points to selected attributes** | User input: "power" | Output: power = 11|
| **Program will determine turn order based on agility** | User input: start battle | Output: hero goes first|


## Setup/Installation Requirements

* _Clone this repository to your computer_
* _Run "npm install" in CLI_
* _Run "npm run build" in CLI_
* _Open index.html in browser_


## Known Bugs

_There are no known bugs at this time_

## Support and contact details

_If you have any questions comments or concerns contact Kristen at peanutster@gmail.com or Susan at sue@proteanaegis.com_

## Technologies Used

_HTML, CSS, JavaScript, jQuery, Bootstrap, and Webpack_

### License

*This page is licensed under the MIT license*

Copyright (c) 2018 **_Kristen Chellis and Susan Southall_**
