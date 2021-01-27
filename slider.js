

var sliderInput1 = document.getElementById("hybrid-slider");
var sliderOutput1 = document.getElementById("hybrid-text");
var sliderOutput2 = document.getElementById("hybrid-text-n");

var slAfIn1= document.getElementById("dance-slider");
var slAfOut1 = document.getElementById("dance-text");
var slAfIn2= document.getElementById("acoustic-slider");
var slAfOut2 = document.getElementById("acoustic-text");
var slAfIn3= document.getElementById("valence-slider");
var slAfOut3 = document.getElementById("valence-text");
var slAfIn4= document.getElementById("instr-slider");
var slAfOut4 = document.getElementById("instr-text");
var slAfIn5= document.getElementById("duration-slider");
var slAfOut5 = document.getElementById("duration-text");


sliderMethod2 = function(input, output1, output2){
    output1.innerHTML = input.value; // Display the default slider value
    output2.innerHTML = 100-input.value;

    // Update the current slider value (each time you drag the slider handle)
    input.oninput = function() {
      output1.innerHTML = this.value;
      output2.innerHTML = 100-this.value;    }
}

sliderMethod = function(input, output1){
    output1.innerHTML = input.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    input.oninput = function() {
      output1.innerHTML = this.value;
  }
}

sliderMethod2(sliderInput1, sliderOutput1, sliderOutput2)
sliderMethod(slAfIn1, slAfOut1)
sliderMethod(slAfIn2, slAfOut2)
sliderMethod(slAfIn3, slAfOut3)
sliderMethod(slAfIn4, slAfOut4)
sliderMethod(slAfIn5, slAfOut5)