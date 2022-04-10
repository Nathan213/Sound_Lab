let wingsinteractable = document.getElementById("wingsinteractable")
let wings = document.getElementById("wings")
let dreamsinteractable = document.getElementById("dreamsinteractable")
let dreams = document.getElementById("dreams")
let goneinteractable = document.getElementById("goneinteractable")
let gone = document.getElementById("gone")


wingsinteractable.addEventListener('mouseenter', () => {
  wings.play();
})

wingsinteractable.addEventListener('mouseleave', () => {
  wings.pause();
})

wings.addEventListener('pause', () => {
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage = "none";
})

wings.addEventListener('play', () => {
  document.body.style.backgroundImage = "url('mack.jpeg')";
  document.body.style.backgroundSize = "20%";

})

dreamsinteractable.addEventListener('mouseenter', () => {
  dreams.play();
})

dreamsinteractable.addEventListener('mouseleave', () => {
  dreams.pause();
})

dreams.addEventListener('pause', () => {
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage = "none";
})

dreams.addEventListener('play', () => {
  document.body.style.backgroundImage = "url('juice.jpeg')";
  document.body.style.backgroundSize = "20%";

})

goneinteractable.addEventListener('mouseenter', () => {
  gone.play();
})

goneinteractable.addEventListener('mouseleave', () => {
  gone.pause();
})

gone.addEventListener('pause', () => {
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage = "none";
})

gone.addEventListener('play', () => {
  document.body.style.backgroundImage = "url('rose.jpeg')";
  document.body.style.backgroundSize = "20%";

})