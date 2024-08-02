'use client'


import "./train.css";

export default function Train(){

    let trains=[
        {
            no:1,
            seats:10,
            booked:0
        },
        {
            no:2,
            seats:10,
            booked:0
        },
        {
            no:3,
            seats:10,
            booked:0
        },
        {
            no:4,
            seats:10,
            booked:0
        },
        {
            no:5,
            seats:10,
            booked:0
        },
        {
            no:6,
            seats:10,
            booked:0
        },
        {
            no:7,
            seats:10,
            booked:0
        },
        {
            no:8,
            seats:10,
            booked:0
        },
        {
            no:9,
            seats:10,
            booked:0
        },
        {
            no:10,
            seats:10,
            booked:0
        }
        ]


   
function display(){
   

    trainContainer.innerHTML = "";

trains.forEach((bogies)=>{
    let bogie = document.createElement("div");
    bogie.className = "box";
    trainContainer.append(bogie);

    let dastaib = bogies.seats - bogies.booked;

    for(let i=1;i<=dastaib;i++){
        let seats = document.createElement("div");
        seats.className = "seat";
        bogie.append(seats);
    }

    for(let i=1;i<=bogies.booked;i++){
        let booked = document.createElement("div");
        booked.className = "booked";
        bogie.append(booked);
    }
})




}


function addMedicen(){
    let userSeat = prompt("seat");
      if(stationSelector.selectedIndex <= 4){
      
          let bogies = trains.slice(0,4);
          for(let bogie of bogies){
              let dastaib = bogie.seats - bogie.booked;
              if(userSeat < dastaib){
                  bogie.booked +=userSeat;
                  break;
              }else{
                  bogie.booked +=dastaib;
                  userSeat -= dastaib;
              }
          }
  
  
  
      }else{
          let bogies = trains.slice(4);
          for(let bogie of bogies){
              let dastaib = bogie.seats - bogie.booked;
              if(userSeat < dastaib){
                  bogie.booked +=userSeat;
                  break;
              }else{
                  bogie.booked +=dastaib;
                  userSeat -= dastaib;
              }
          }
      }
  
  
  display();
  
  
  
  }
  




return <div>


<div id="trainContainer" >

</div>



<select   id="stationSelector">
    <option>Select Station</option>
    <option>Hyderabad</option>
    <option>Multan</option>
    <option>Toba</option>
    <option>Gojra</option>
    <option>Faisalabad</option>
    <option>Hafizabad</option>
    <option>Rawalpindi</option>
    <option>Peshawar</option>
</select>
<button  onClick={addMedicen} >Add Medicen</button>
<button onClick={display}>display</button>


</div>




}