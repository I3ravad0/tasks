const selectType = document.querySelector('#type')

const arraysSelect = document.querySelector('#arrays-tasks')
const numbersSelect = document.querySelector('#numbers-tasks')
const stringSelect = document.querySelector('#string-tasks')
let currentType = ''

selectType.addEventListener('change', (e) => {
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
})

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

}