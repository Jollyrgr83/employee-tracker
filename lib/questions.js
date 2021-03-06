// validate function for non-numeric inputs
function validateString(answer) {
    if (answer != "" && isNaN(parseInt(answer))) {
        return true;
    }
    return false;
}
// validate function for numeric inputs
function validateNumber(answer) {
    if (answer != "" && !isNaN(parseInt(answer))) {
        return true;
    }
    return false;
}
// inquirer questions
const questions = {
    // continue prompt
    continue: {
        type: "confirm",
        name: "continue",
        message: "Would you like to perform another action?",
    },
    // main menu
    menu: {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
            "View",
            "Update",
            "Add",
            "Remove",
            "Exit"
        ]
    },
    // view menu
    viewMenu: {
        type: "list",
        name: "viewMenu",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View Employees by Department",
            "View Employees by Manager",
            "View All Roles",
            "View Payroll by Department",
            "View Total Payroll"
        ],
        when: (answers) => answers.menu === 'View',
    },
    // update menu
    updateMenu: {
        type: "list",
        name: "updateMenu",
        message: "What would you like to do?",
        choices: [
            "Update Employee",
            "Update Role",
            "Update Department"
        ],
        when: (answers) => answers.menu === 'Update',
    },
    // add menu
    addMenu: {
        type: "list",
        name: "addMenu",
        message: "What would you like to do?",
        choices: [
            "Add Employee",
            "Add Role",
            "Add Department"
        ],
        when: (answers) => answers.menu === 'Add',
    },
    // remove menu
    removeMenu: {
        type: "list",
        name: "removeMenu",
        message: "What would you like to do?",
        choices: [
            "Remove Employee",
            "Remove Role",
            "Remove Department"
        ],
        when: (answers) => answers.menu === 'Remove',
    },
    // inputs for employee create/update prompts
    firstName: {
        type: "input",
        name: "firstName",
        message: "Please enter the employee's first name:",
        validate: validateString
    },
    lastName: {
        type: "input",
        name: "lastName",
        message: "Please enter the employee's last name:",
        validate: validateString
    },
    mgrStatus: {
        type: "confirm",
        name: "mgrStatus",
        message: "Is this employee a manager of other employees?"
    },
    // inputs for role create/update prompts
    title: {
        type: "input",
        name: "title",
        message: "Please enter the title:",
        validate: validateString
    },
    salary: {
        type: "input",
        name: "salary",
        message: "Please enter the salary (numbers only):",
        validate: validateNumber
    },
    // input for department create/update prompt
    department: {
        type: "input",
        name: "department",
        message: "Please enter the name of the department:",
        validate: validateString
    }
};

module.exports = questions;
