!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=0;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.startBtn.addEventListener("click",(function(){var e=t.body,a=t.startBtn,r=t.stopBtn;e.style.backgroundColor=o(),a.disabled=!0,r.disabled=!1,n=setInterval((function(){e.style.backgroundColor=o()}),1e3)})),t.stopBtn.addEventListener("click",(function(){var o=t.startBtn,e=t.stopBtn;clearTimeout(n),o.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7d011a09.js.map
