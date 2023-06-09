let longitude=22.7868542,latitude=88.3643296;
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:4
})
var img1=document.querySelector("#amber")
var marker1=new mapboxgl.Marker({
    element:img1
 })
.setLngLat([ 75.85054073275451,26.98497975857025])
.addTo(map);
var img2=document.querySelector("#gateway")
var marker2=new mapboxgl.Marker({
    element:img2
 })
 .setLngLat([72.83458992286575,18.922237808492838])
 .addTo(map);

 var img3=document.querySelector("#gate")
 var marker3=new mapboxgl.Marker({
     element:img3
  })
  .setLngLat([ 77.22942869821026,28.613577045130032])
  .addTo(map);
  var img4=document.querySelector("#lotus")
  var marker4=new mapboxgl.Marker({
      element:img4
   })
   .setLngLat([77.25855482261251,28.553197267752093 ])
   .addTo(map);
   var img5=document.querySelector("#victoria")
   var marker5=new mapboxgl.Marker({
       element:img5
    })
    .setLngLat([ 88.34260605240192,22.5449171186 ])
    .addTo(map);
    
  

map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    }),
)