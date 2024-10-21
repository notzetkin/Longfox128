var internet = document.createElement("div");
var statusBarInner = document.createElement("div");
statusBarInner.classList.add('statusBarInner');
internet.classList.add('statusBarInternet');
document.getElementById('statuspanel').appendChild(statusBarInner);
document.getElementById('statuspanel').appendChild(statusBarInner.cloneNode(true)).classList.add('statusBarInnerTwoBoxes');
document.getElementById('statuspanel').appendChild(statusBarInner.cloneNode(true)).classList.add('statusBarInnerTwoBoxes');
document.getElementById('statuspanel').appendChild(internet);