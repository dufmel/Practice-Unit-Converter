let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const feetToMeter = 0.305
const literToGallon =  0.264
const gallonToLiter = 3.785
const kiloToPound =  2.204
const poundToKilo = 0.454

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meter`
    volumeEl.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue * gallonToLiter).toFixed(3)} liter`
    massEl.textContent = `${baseValue} kilo = ${(baseValue * kiloToPound).toFixed(3)} pound | ${baseValue} pound = ${(baseValue * poundToKilo).toFixed(3)} kilo`
}
)
