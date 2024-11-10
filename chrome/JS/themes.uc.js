// ==UserScript==
// @name        Geckium - Theme Manager (Misc.)
// @author      Dominic Hayes
// @loadorder   2
// @include		main
// ==/UserScript==

const { ColorUtils } = ChromeUtils.importESModule("chrome://modules/content/ChromiumColorUtils.sys.mjs");

function applyAccent() {
  var colorDiv = document.createElement("div");
  colorDiv.style.backgroundColor="AccentColor";
  document.head.appendChild(colorDiv);
  var rgb = window.getComputedStyle(colorDiv)["background-color"];
  document.head.removeChild(colorDiv);
  rgb = rgb.match(/\d+/g);
  let hsl = ColorUtils.ColorToHSL(rgb);
  document.documentElement.style.setProperty("--accent-h", hsl[0]);
  document.documentElement.style.setProperty("--accent-s", `${hsl[1]}%`);
  document.documentElement.style.setProperty("--accent-l", `${hsl[2]}%`);
}

window.addEventListener("load", applyAccent);
window.addEventListener("nativethemechange", applyAccent);