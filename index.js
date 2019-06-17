var logo = document.getElementsByClassName('logo')[0];
var overlay = document.getElementById('overlay');

overlay.style.height = document.getElementById('myVideo').style.height;

document.getElementById('toggler').addEventListener('mouseover', function(){
  document.getElementById('toggler').innerHTML = `<span>MENU</span>`;
});

document.getElementById('toggler').addEventListener('mouseout', function(){
  document.getElementById('toggler').innerHTML = `        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <defs>
            <style>
              .cls-1, .cls-2 {
                fill: none;
              }
        
              .cls-2 {
                stroke: #001d3a;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 2px;
              }
            </style>
          </defs>
          <g id="menu" transform="translate(4 4)">
            <rect id="Rectangle_26" data-name="Rectangle 26" class="cls-1" width="32" height="32" transform="translate(-4 -4)"/>
            <line id="Line_23" data-name="Line 23" class="cls-2" x2="18" transform="translate(3 12)"/>
            <line id="Line_24" data-name="Line 24" class="cls-2" x2="12" transform="translate(9 6)"/>
            <line id="Line_25" data-name="Line 25" class="cls-2" x2="12" transform="translate(9 18)"/>
          </g>
        </svg>`;
});


logo.addEventListener('mouseover', function(){
  document.getElementsByClassName('heading')[0].style.display = "block";
});

logo.addEventListener('mouseout', function(){
  document.getElementsByClassName('heading')[0].style.display = "none";
});

