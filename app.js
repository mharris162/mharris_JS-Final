window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
      uri: 'spotify:playlist:36NMhpq6exkxnETYgZK1OJ'
    };
  const callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};

const options = {
  width: '60%',
  height: '200',
  uri: 'spotify:playlist:36NMhpq6exkxnETYgZK1OJ'
};


let darkmode = localStorage.getItem('darkmode');
const change = document.getElementById('change');

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem("darkmode", 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode ()



change.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("info").innerHTML = this.responseText;
      }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }


let clickCount = 0;
  
const button = document.getElementById("change");
const display = document.getElementById("clickDisplay");


button.addEventListener("click", function() {
    clickCount++;
    display.textContent = "You've magically changed the time of day  " + clickCount + " times."; 
  });
