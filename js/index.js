// using this file is optional
// you can also load the code snippets in using your browser's console
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}
 
for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}