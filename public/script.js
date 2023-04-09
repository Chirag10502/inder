var table = document.querySelector(".table");
var func = async () => {
  try {
    var users = await fetch("/getUser");
    users = await users.json();
    console.log(users);
    users.map((item, idx) => {
      var tr = document.createElement("tr");

      let props = Object.keys(item);
      props.forEach((property) => {
        if (property == "joining_date" || property == "expiry_date") {
          console.log("inside");
          var inputDate = new Date(item[property]);
          const day = inputDate.getDate().toString().padStart(2, "0");
          const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
          const year = inputDate.getFullYear().toString().slice(2);
          const outputDate = `${day}/${month}/${year}`;
          var date = outputDate;
          var td = document.createElement("td");
          var h4 = document.createElement("h4");
          h4.innerText = date;
          td.appendChild(h4);
          tr.appendChild(td);
        } else if (property == "sno") {
          var td = document.createElement("td");
          var h4 = document.createElement("h4");
          h4.innerText = idx + 1;
          td.appendChild(h4);
          tr.appendChild(td);
        } else {
          var td = document.createElement("td");
          var h4 = document.createElement("h4");
          h4.innerText = item[property];
          td.appendChild(h4);
          tr.appendChild(td);
        }
      });
      table.appendChild(tr);
    });
  } catch (err) {
    alert("error in retrieving data");
  }
};
if (table) func();

var dueTable = document.querySelector(".due");
var duePayment = async () => {
  try {
    var users = await fetch("/duePayment");
    users = await users.json();
    console.log(users);
    users.map((item, idx) => {
      var tr = document.createElement("tr");
      let props = Object.keys(item);
      props.forEach((property) => {
        if (property == "joining_date" || property == "expiry_date") {
          console.log("inside");
          var inputDate = new Date(item[property]);
          const day = inputDate.getDate().toString().padStart(2, "0");
          const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
          const year = inputDate.getFullYear().toString().slice(2);
          const outputDate = `${day}/${month}/${year}`;
          var date = outputDate;
          var td = document.createElement("td");
          var h4 = document.createElement("h4");
          h4.innerText = date;
          td.appendChild(h4);
          tr.appendChild(td);
        } else if (property == "sno") {
          var td = document.createElement("td");
          var h4 = document.createElement("h4");
          h4.innerText = idx + 1;
          td.appendChild(h4);
          tr.appendChild(td);
        } else {
          var td = document.createElement("td");
          var h4 = document.createElement("h4");
          h4.innerText = item[property];
          td.appendChild(h4);
          tr.appendChild(td);
        }
      });

      dueTable.appendChild(tr);
    });
  } catch (err) {
    alert("Error in retreiving data!");
  }
};

if (dueTable) duePayment();

let array = [];
var allTable = document.querySelector(".alldata");
var alldata = async () => {
  try {
    var users = await fetch("/allUser");
    array = await users.json();
    console.log(users);
    array.map((item, idx) => {
      var tr = document.createElement("tr");
      let props = Object.keys(item);
      props.forEach((property) => {
        if (property == "joining_date" || property == "expiry_date") {
          console.log("inside");
          var inputDate = new Date(item[property]);
          const day = inputDate.getDate().toString().padStart(2, "0");
          const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
          const year = inputDate.getFullYear().toString().slice(2);
          const outputDate = `${day}/${month}/${year}`;
          var date = outputDate;
          var td = document.createElement("td");
          var h4 = document.createElement("h4");
          h4.innerText = date;
          td.appendChild(h4);
          tr.appendChild(td);
        } else if (property == "sno") {
          var td = document.createElement("td");
          var h4 = document.createElement("h4");
          h4.innerText = idx + 1;
          td.appendChild(h4);
          tr.appendChild(td);
        } else {
          var td = document.createElement("td");
          var h4 = document.createElement("h4");
          h4.innerText = item[property];
          td.appendChild(h4);
          tr.appendChild(td);
        }
      });
      allTable.appendChild(tr);
    });
  } catch (err) {}
};

if (allTable) alldata();

const searchfun = () => {
  let filter = document.getElementById("myinput").value;
  let mytable = document.getElementById("myTable");
  let tr = mytable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      let textvlaue = td.textContent || td.innerHTML;
      if (textvlaue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
