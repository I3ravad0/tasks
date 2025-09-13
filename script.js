const selectType = document.querySelector('#type')

const arraysSelect = document.querySelector('#arrays-tasks')
const numbersSelect = document.querySelector('#numbers-tasks')
const stringSelect = document.querySelector('#string-tasks')
let currentType = ''

let task = {
    description: ``,
    tests: [],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: ``
}

switchSelection()

function switchSelection() {
    switch (selectType.value) {
        case 'Arrays':
            arraysSelect.style.display = 'block'
            numbersSelect.style.display = 'none'
            stringSelect.style.display = 'none'
            break;

        case 'Numbers':
            arraysSelect.style.display = 'none'
            numbersSelect.style.display = 'block'
            stringSelect.style.display = 'none'
            break;

        case 'String':
            arraysSelect.style.display = 'none'
            numbersSelect.style.display = 'none'
            stringSelect.style.display = 'block'
            break;
    
        default:
            console.log('Error');
            break;
    }
}
selectType.addEventListener('change', switchSelection)

// LOAD CURRENT SCRIPT

function loadTaskScript() {
    const scriptBox = document.querySelector('#task-script')
    const scriptTag = document.createElement('script')

    switch (selectType.value) {
        case 'Arrays':
            scriptTag.src = `assets/script/${selectType.value}/${arraysSelect.value}/script.js`
            break;

        case 'Numbers':
            scriptTag.src = `assets/script/${selectType.value}/${numbersSelect.value}/script.js`
            break;

        case 'String':
            scriptTag.src = `assets/script/${selectType.value}/${stringSelect.value}/script.js`
            break;
    
        default:
            console.log('Error');
            break;
    }
    console.log(scriptTag.src);

    scriptBox.appendChild(scriptTag)

    scriptBox.removeChild(scriptBox.firstChild)

    setTimeout(() => {
        loadTaskTable()
    }, 100);

}

function loadTaskTable() {
    clearTaskTable()
    const taskDescription = document.querySelector('#task-description')
    const taskConsole = document.querySelector('#task-console')

    taskDescription.innerHTML = task.description
    taskConsole.innerHTML = task.output

    for (let i = 0; i < task.tests.length; i++) {
        createTaskTableRow(task.tests[i],task.results[i] + '\n')
    }
}

function clearTaskTable() {
    const taskDescription = document.querySelector('#task-description')
    const taskConsole = document.querySelector('#task-console')

    taskDescription.textContent = ''
    taskConsole.textContent = ''

    const table = document.querySelector('table')
    const tableChildrenCount = table.children.length     
    for (let i = 1; i < tableChildrenCount; i++) {
        table.removeChild(table.children.item(table.children.length-1))
    }
}

function createTaskTableRow(input, output) {
    const tableRow = document.createElement('tr')
    const tableRowInput = document.createElement('td')
    const tableRowOutput = document.createElement('td')
    tableRowInput.textContent = input
    tableRowOutput.textContent = output
    tableRow.appendChild(tableRowInput)
    tableRow.appendChild(tableRowOutput)
    document.querySelector('table').appendChild(tableRow)
}