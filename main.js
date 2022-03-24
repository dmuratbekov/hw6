const mass = [1,2,3,4,5]
const mass2 = [1,2,3,4,5]
const mass3 = [1,2,3,4,5]
const mass4 = [1,2,3,4,5]
const mass5 = [1,2,3,4,5]
const massMain = [
    ...mass,
    ...mass2,
    ...mass3,
    ...mass4,
    ...mass5
]
console.log(massMain);

//

const keys = {
    key1: 'value',
    key2: 'value',
    key3: 'value',
    key4: 'value',
    key5: 'value'
}
const obj = {
    ...keys,
    key6: 'value',
    key7: 'value',
    key8: 'value'
}
console.log(obj);

//

const button = document.querySelector('button')
const input = document.querySelector('input')

button.onclick = () =>{
    const list = document.createElement('div')
    list.setAttribute('class', 'list')
    const p = document.createElement('p')
    p.innerText = `Hello ${input.value}!`
    list.append(p)
    const block = document.querySelector('.block')
    block.append(list)
}
