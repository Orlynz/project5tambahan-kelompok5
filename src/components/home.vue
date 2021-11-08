<template>
    <div class="all">
<div class="row">
  <div class="leftcolumn">
    <div class="card" style="margin-left:15px">
      <h2>YAMAHA</h2>
      <p>Since 9 April 2004</p>
      <img
            src="https://i.ytimg.com/vi/SKX8E4K9OnU/maxresdefault.jpg"
            height="400px"
          />
      <p style="text-align:justify">
            PT YAMAHA KW Indonesia didirikan pada tahun 2004. Bisnis utama
            kami adalah berbisnis sepeda motor. Kami mempunyai dua puluh pabrik di 
            seluruh Indonesia dan telah mendistribusikan produk ke
            seluruh wilayah Indonesia.
            <br />
            Brand kami adalah MIO, FINO, YZF, dll kami akan terus
            membuat motor-motor yang orisinil dan pertama di Indonesia, serta
            berkontribusi terhadap perwujudan kehidupan yang sejahtera bagi
            konsumen Indonesia. <br />Fokus kami adalah memahami dengan
            baik keinginan dan kendala yang dihadapi oleh para pelanggan kami.
            Semakin kami memahami kebutuhan para pelanggan, semakin kami dapat
            mengembangkan produk baru yang memenuhi kebutuhan tersebut.
            <br />Berkat saran dari pelanggan, kami
            memutuskan untuk membuat tampilan website Yamaha dan kami sangat 
            berterima kasih untuk itu. Mungkin saran
            tersebut tampak sederhana, tetapi hasilnya sangat luar biasa. Hingga
            kini, lebih dari setengah penjualan kami berasal dari pemesanan
            melalui internet dan jumlahnya terus meningkat. <br />Bagi
            sang pelanggan, Yamaha yang kuat adalah simbol kepercayaan dan
            kepemimpinan, yang memberikan rasa percaya diri dan rasa yakin.
            Yamaha bukan saja menjadi maskapai terbesar, tetapi juga menjadi
            pilihan utama mereka. Ini adalah semangat AirAsia. Percayalah saat
            saya mengatakan bahwa semangat kami untuk menjadi yang terbaik tidak
            akan pernah padam.
          </p>
          </div>
  </div>
  <div class="rightcolumn">
    <div class="card" style="margin-right:15px">
      <h2>About Me</h2>
      <img src="https://res.cloudinary.com/tyadeta/images/w_620,h_325,c_fill,g_auto/f_auto,q_auto/v1585826151/logo-yamaha/logo-yamaha-620x325.png?_i=AA" height="100px">
      <p><b>Visi</b><br>Kami senantiasa berusaha Menjadi yang terbaik dalam bisnis Perdagangan Sepeda Motor serta suku cadang dan aksesorisnya sesuai kebutuhan konsumen serta didukung oleh Fasilitas Terpadu, jaringan pemeliharaan, suku cadang dan Management yang Profesional.</p>
      <p><b>Misi</b><br>Kami bertekad untuk memberikan pelayanan yang terbaik bagi konsumen dengan pelayanan yang memuaskan dan Profesional.</p>
    </div>
    <div class="card" style="margin-right:15px">
      <h3>Follow Me</h3>
      <p><i class="fab fa-facebook-square"></i> orlynz.shirakami</p>
      <p><i class="fab fa-whatsapp-square"></i> 089-506-616-552</p>
      <p><i class="fab fa-twitter-square"></i> yamaha_kw</p>
      <p><i class="fab fa-instagram-square"></i> @yamaha_kw22</p>
      <p><i class="fas fa-envelope-square"></i> schwarz090404@gmail.com</p>
    </div>
  </div>
</div>

<div class="footer">
</div>

  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: lightblue;
}

/* Header/Blog Title */
.header {
  padding: 10px;
  width: 1140px;
  text-align: center;
  background: lightblue;
}

.header h1 {
  font-size: 50px;
}


/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: skyblue;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: lightblue;
  color: black;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  background-color: lightblue;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: rgb(160, 145, 145);
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: skyblue;
  padding: 20px;
  margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 10px;
  text-align: center;
  background: skyblue;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {
    width: 100%;
    padding: 0;
  }
}

/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .topnav a {
    float: none;
    width: 100%;
  }
}
</style>