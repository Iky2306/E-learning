function tampilkan_pdf(link, judul){

    var pdf = document.getElementById("pdf");

    pdf.innerHTML = "<h2>" + judul + "</h2>"
    + "<object data='" + link + "'></object>";

}