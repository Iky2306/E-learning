var pilihan = document.getElementById("pilihan");
var penutup_pilihan = document.getElementById("penutup_pilihan");

function tampilkan_pilihan(link, judul){

    pilihan.style.display = "block";
    penutup_pilihan.style.display = "block";

    pilihan.innerHTML = "<p>Pilihan:<br>1. LIHAT PDF(Hanya Berlaku untuk desktop)<br>2. UNDUH</p><button onclick=\"lihat('" + link + "','" + judul + "')\">LIHAT</button><a download href=" + link + " onclick='unduh()'>UNDUH</a>"

}

function unduh(){

    pilihan.style.display = "none";
    penutup_pilihan.style.display = "none";

}

function lihat(link, judul){

    pilihan.style.display = "none";
    penutup_pilihan.style.display = "none";

    var pdf = document.getElementById("pdf");

    pdf.innerHTML = "<h2>" + judul + "</h2>"
    + "<object data='" + link + "'></object>";

    pdf.scrollIntoView();

}

function batal(){

    pilihan.style.display = "none";
    penutup_pilihan.style.display = "none";

}