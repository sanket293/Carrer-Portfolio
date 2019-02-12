/*custom Javascripts goes here */
// IIFE

(function() {
  function Start() {
    console.log(
      `%c App startted`,
      "font-size:20 px, color: blue, font-weight:bold"
    );
  }

  window.addEventListener("load", Start);
})();
