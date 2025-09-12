const selectType = document.querySelector('#type')

const arraysSelect = document.querySelector('#arrays-tasks')
const numbersSelect = document.querySelector('#numbers-tasks')
const stringSelect = document.querySelector('#string-tasks')

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