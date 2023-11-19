let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #145A32;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #145A32;">Aprendiz de programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
