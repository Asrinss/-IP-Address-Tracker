const formControl = document.querySelector(".form-control");
const locat = document.querySelector(".location");
const ip = document.querySelector(".ip");
const timezone = document.querySelector(".timezone");
const isp = document.querySelector(".isp");
const btn = document.querySelector(".btn");
let ipAddress = formControl.value;




const url =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_HhJNyJ1OMUR4sGpEGhdQeXev18gd6&ipAddress=8.8.8.8";
const getFacts = async () => {
  let response = await fetch(newUrl);
  let data = await response.json();
  console.log(data);

  locat.innerText = data.location.country;
  ip.innerText = formControl.value;
  timezone.innerText = data.location.timezone;
  isp.innerText = data.isp;

  L.marker([data.location.lat, data.location.lng], {
    icon: locationIcon,
  }).addTo(map);
};
btn.addEventListener("click", () => {
  
  ipAddress = formControl.value;
  newUrl = url.replace("8.8.8.8", ipAddress);
  getFacts();
});


var map = L.map("map", {
  center: [38.466, 27.1663],
  zoom: 18,
});
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


var locationIcon = L.icon({
  iconUrl: "images/icon-location.svg",

  iconSize: [38, 95],
  iconAnchor: [22, 94], 

  popupAnchor: [-3, -76], 
});
