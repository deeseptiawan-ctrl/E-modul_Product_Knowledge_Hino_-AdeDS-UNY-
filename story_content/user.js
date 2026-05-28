function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6g5Brhtn98U":
        Script1();
        break;
      case "6hmQZEWVXvn":
        Script2();
        break;
      case "6bE0jkDakRZ":
        Script3();
        break;
      case "5rbpnvcmkz7":
        Script4();
        break;
      case "5td3GQpkmG7":
        Script5();
        break;
      case "6RuRqr5xrkS":
        Script6();
        break;
      case "6qRbwOsgrKO":
        Script7();
        break;
      case "5WmmMqlyhTM":
        Script8();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var nama = player.GetVar("Nama");

fetch("https://script.google.com/macros/s/AKfycbwTn7YX6BccN-_tXyMEPUq8uSwEkIuZur-8PQ9Zf0K3jMdHjT_B0pYr39QIbufoNFbI2g/exec?nama=" + encodeURIComponent(nama))

.then(response => response.json())

.then(data => {

    if(data.status != "not_found"){

        player.SetVar("300_1", data["300_1"]);
        player.SetVar("300_2", data["300_2"]);
        player.SetVar("300_3", data["300_3"]);
        player.SetVar("300_4", data["300_4"]);

        player.SetVar("500_1", data["500_1"]);
        player.SetVar("500_2", data["500_2"]);
        player.SetVar("500_3", data["500_3"]);
        player.SetVar("500_4", data["500_4"]);

        player.SetVar("Bus_1", data["Bus_1"]);
        player.SetVar("Bus_2", data["Bus_2"]);
        player.SetVar("Bus_3", data["Bus_3"]);
        player.SetVar("Bus_4", data["Bus_4"]);

        player.SetVar("TES", data["TES"]);
    }

});
}

function Script2()
{
  var player = GetPlayer();

var nama = localStorage.getItem("currentUser");

localStorage.setItem(
"300_4_" + nama,
player.GetVar("300_4")
);

localStorage.setItem(
"Progress_Count_" + nama,
player.GetVar("Progress_Count")
);
}

function Script3()
{
  var player = GetPlayer();

var nama = localStorage.getItem("currentUser");

// simpan status progress
localStorage.setItem(
"300_1_" + nama,
player.GetVar("300_1")
);

// simpan jumlah progress
localStorage.setItem(
"Progress_Count_" + nama,
player.GetVar("Progress_Count")
);
}

function Script4()
{
  var player = GetPlayer();

var nama = localStorage.getItem("currentUser");

localStorage.setItem(
"500_1_" + nama,
player.GetVar("500_1")
);

localStorage.setItem(
"Progress_Count_" + nama,
player.GetVar("Progress_Count")
);
}

function Script5()
{
  var player = GetPlayer();

var nama = localStorage.getItem("currentUser");

localStorage.setItem(
"500_4_" + nama,
player.GetVar("500_4")
);

localStorage.setItem(
"Progress_Count_" + nama,
player.GetVar("Progress_Count")
);
}

function Script6()
{
  var player = GetPlayer();

var nama = localStorage.getItem("currentUser");

// simpan status progress
localStorage.setItem(
"Bus_1_" + nama,
player.GetVar("Bus_1")
);

// simpan jumlah progress
localStorage.setItem(
"Progress_Count_" + nama,
player.GetVar("Progress_Count")
);
}

function Script7()
{
  var player = GetPlayer();

var nama = localStorage.getItem("currentUser");

// simpan status progress
localStorage.setItem(
"Bus_4_" + nama,
player.GetVar("Bus_4")
);

// simpan jumlah progress
localStorage.setItem(
"Progress_Count_" + nama,
player.GetVar("Progress_Count")
);
}

function Script8()
{
  var player = GetPlayer();

// ambil nama lalu ubah jadi huruf kecil
var nama = player.GetVar("Nama_Sales").toLowerCase();

// simpan user aktif
localStorage.setItem("currentUser", nama);

// daftar variabel progress
var vars = [
"300_1",
"300_4",
"500_1",
"500_4",
"Bus_1",
"Bus_4"
];

// ambil data tersimpan
vars.forEach(function(v){

var data = localStorage.getItem(v + "_" + nama);

if(data !== null){
player.SetVar(v, data === "true");
}

});

// ambil progress count
var progress = localStorage.getItem("Progress_Count_" + nama);

if(progress !== null){
player.SetVar("Progress_Count", Number(progress));
}
}

