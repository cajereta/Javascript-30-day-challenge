const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
   const suffix = this.dataset.sizing ||"";
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));

// var loadFile = function(event){
//    var image = document.getElementById("image");
//    image.src = URL.createObjectURL(event.target.files[0]);
// };
var loadFile = function (event) {
   var image = document.getElementById("image");
   image.src = URL.createObjectURL(event.target.files[0]);
};