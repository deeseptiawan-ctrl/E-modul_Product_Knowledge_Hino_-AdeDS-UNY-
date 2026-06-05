function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Nu5Cc4EGoQ":
        Script1();
        break;
      case "5pRK0WXmQeS":
        Script2();
        break;
      case "5YWpIbJOnfr":
        Script3();
        break;
      case "6Jpjj1JbMq7":
        Script4();
        break;
      case "5xhfGQPAe6r":
        Script5();
        break;
      case "66T4zT6XQi4":
        Script6();
        break;
      case "5drYC6qfD0E":
        Script7();
        break;
      case "6jtbK9AAYvw":
        Script8();
        break;
      case "6q3icaIPOG2":
        Script9();
        break;
      case "5uKVjklW1ox":
        Script10();
        break;
      case "5lUYjaNoJWU":
        Script11();
        break;
      case "5W1wAqJ4jTe":
        Script12();
        break;
      case "6l3NOV3T3Ot":
        Script13();
        break;
      case "6lUYUJ0lkQX":
        Script14();
        break;
      case "66jCSIpk8au":
        Script15();
        break;
      case "5gvpiD1oww8":
        Script16();
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

fetch(
"https://script.google.com/macros/s/AKfycbxUBpCMAReM3XSkZOWrAanuyPW48vVlm22FB-fVfzS5d_69LnUZHl00iFbo-5HoCRDeUA/exec",
{
method:"POST",
mode:"no-cors",
body:JSON.stringify({
Nama_Sales:player.GetVar("Nama_Sales"),
p300_4:player.GetVar("300_4")
})
});
}

function Script3()
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

function Script4()
{
  var player = GetPlayer();

fetch(
"https://script.google.com/macros/s/AKfycbxUBpCMAReM3XSkZOWrAanuyPW48vVlm22FB-fVfzS5d_69LnUZHl00iFbo-5HoCRDeUA/exec",
{
method:"POST",
mode:"no-cors",
body:JSON.stringify({
Nama_Sales:player.GetVar("Nama_Sales"),
p300_1:player.GetVar("300_1")
})
});
}

function Script5()
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

function Script6()
{
  var player = GetPlayer();

fetch(
"https://script.google.com/macros/s/AKfycbxUBpCMAReM3XSkZOWrAanuyPW48vVlm22FB-fVfzS5d_69LnUZHl00iFbo-5HoCRDeUA/exec",
{
method:"POST",
mode:"no-cors",
body:JSON.stringify({
Nama_Sales:player.GetVar("Nama_Sales"),
p500_1:player.GetVar("500_1")
})
});
}

function Script7()
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

function Script8()
{
  var player = GetPlayer();

fetch(
"https://script.google.com/macros/s/AKfycbxUBpCMAReM3XSkZOWrAanuyPW48vVlm22FB-fVfzS5d_69LnUZHl00iFbo-5HoCRDeUA/exec",
{
method:"POST",
mode:"no-cors",
body:JSON.stringify({
Nama_Sales:player.GetVar("Nama_Sales"),
p500_4:player.GetVar("500_4")
})
});
}

function Script9()
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

function Script10()
{
  var player = GetPlayer();

fetch(
"https://script.google.com/macros/s/AKfycbxUBpCMAReM3XSkZOWrAanuyPW48vVlm22FB-fVfzS5d_69LnUZHl00iFbo-5HoCRDeUA/exec",
{
method:"POST",
mode:"no-cors",
body:JSON.stringify({
Nama_Sales:player.GetVar("Nama_Sales"),
pBus_1:player.GetVar("Bus_1")
})
});
}

function Script11()
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

function Script12()
{
  var player = GetPlayer();

fetch(
"https://script.google.com/macros/s/AKfycbxUBpCMAReM3XSkZOWrAanuyPW48vVlm22FB-fVfzS5d_69LnUZHl00iFbo-5HoCRDeUA/exec",
{
method:"POST",
mode:"no-cors",
body:JSON.stringify({
Nama_Sales:player.GetVar("Nama_Sales"),
pBus_4:player.GetVar("Bus_4")
})
});
}

function Script13()
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

function Script14()
{
  var player = GetPlayer();

fetch(
"https://script.google.com/macros/s/AKfycbxUBpCMAReM3XSkZOWrAanuyPW48vVlm22FB-fVfzS5d_69LnUZHl00iFbo-5HoCRDeUA/exec",
{
method:"POST",
mode:"no-cors",
body:JSON.stringify({
Nama_Sales:player.GetVar("Nama_Sales"),
Nilai_tes:player.GetVar("Nilai_tes")
})
});
}

function Script15()
{
  var player = GetPlayer();

var data = {
    Nama_Sales: player.GetVar("Nama_Sales")
};

fetch(
    "https://script.google.com/macros/s/AKfycbxUBpCMAReM3XSkZOWrAanuyPW48vVlm22FB-fVfzS5d_69LnUZHl00iFbo-5HoCRDeUA/exec",
    {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    }
)
.then(() => {
    alert("Data dikirim");
})
.catch(error => {
    alert("Error: " + error);
});
}

function Script16()
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

