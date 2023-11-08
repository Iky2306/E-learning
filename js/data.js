function ambil_data() {
    var tampilkan = document.getElementById("data");

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        var data = JSON.parse(this.responseText);

        for(var a = 0; a < data.length; a++){

            tampilkan.innerHTML += "<a onclick=\"tampilkan_pdf('pdf/" + data[a].pdf + "','" + data[a].judul + "')\" class='data_' href='#pdf'>"
            + "<img class='data_gambar' src='gambar/" + data[a].gambar + "'>"
            + "<p class='data_nama'>"
            + data[a].judul
            + "</p>"
            + "</a>";
        }

    }
  xhttp.open("GET", "data.json");
  xhttp.send();
}

ambil_data();