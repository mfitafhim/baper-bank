function getInputFieldValueById(input) {
    const inputField = document.getElementById(input);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}

function getElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(element.innerText)
    return elementValue;
}

function setElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}