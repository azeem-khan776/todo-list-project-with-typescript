#! /usr/bin/env node
import inquirer from "inquirer";
let todostring = [];
let loop = true;
while (loop) {
    const todoInput = await inquirer.prompt([{
            type: "input",
            name: "todoItem",
            message: "Enter item Name which you want to add in your to-do list"
        },
        {
            type: "confirm",
            name: "addmore",
            Message: "Do you want to add more item in your To-Do list",
        }
    ]);
    const todoItem = todoInput.todoItem;
    const addmore = todoInput.addmore;
    if (todoItem) {
        todostring.push(todoItem);
    }
    loop = addmore;
}
;
if (todostring.length > 0) {
    [];
    console.log(`more is your To-Do list`);
    for (let i = 0; i < todostring.length; i++) {
        console.log(`$ (i + 1). ${todostring[i]}`);
    }
}
else {
    console.log(`your to-do list is empty!`);
}
