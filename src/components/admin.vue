<template>
  <div>
    <div class="navbar">
      <h3 class="admin">Dashboard Admin</h3>
    </div>
    <div class="sidebar">
      <div class="nav"></div>
      <a href="/motorr"
        ><button class="btn">
          <i style="margin-right: 5px" class="fas fa-motorcycle"></i
          ><br />Info</button
        ><br
      /></a>
      <a href="/calculate"
        ><button class="btn">
          <i style="margin-right: 5px" class="fas fa-shopping-cart"></i
          ><br />Beli</button
        ><br
      /></a>
      <a href="/peduli"
        ><button class="btnn">
          <i style="margin-right: 5px" class="fas fa-hand-holding-heart"></i
          ><br />Care</button
        ><br
      /></a>
      <a href="/login"
        ><button class="btnn">
          <i style="margin-right: 5px" class="fas fa-sign-out-alt"></i
          ><br />Logout</button
        ><br
      /></a>
    </div>
    <div class="all">
      <div id="aa" class="row">
        <div class="leftcolumn">
          <div class="card" style="margin-left: 15px">
            <h1 style="text-align:center"><b>SELAMAT DATANG ADMIN</b></h1><br>
            <img
              src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/240469612_10158323929347643_6911159650890525396_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=6e5ad9&_nc_ohc=M1vpWJ4AMF4AX8F29e3&_nc_ht=scontent-sin6-4.xx&oh=41419a8ec58815b7554b857b93bdd289&oe=61949208"
              height="330px"
            />
            <p style="text-align: justify">
              PT YAMAHA KW Indonesia didirikan pada tahun 2004. Bisnis utama
              kami adalah berbisnis sepeda motor. Kami mempunyai dua puluh
              pabrik di seluruh Indonesia dan telah mendistribusikan produk ke
              seluruh wilayah Indonesia.
              <br />
              Brand kami adalah MIO, FINO, YZF, dll kami akan terus membuat
              motor-motor yang orisinil dan pertama di Indonesia, serta
              berkontribusi terhadap perwujudan kehidupan yang sejahtera bagi
              konsumen Indonesia. <br />Fokus kami adalah memahami dengan baik
              keinginan dan kendala yang dihadapi oleh para pelanggan kami.
              Semakin kami memahami kebutuhan para pelanggan, semakin kami dapat
              mengembangkan produk baru yang memenuhi kebutuhan tersebut.
              <br />Berkat saran dari pelanggan, kami memutuskan untuk membuat
              tampilan website Yamaha dan kami sangat berterima kasih untuk itu.
              Mungkin saran tersebut tampak sederhana, tetapi hasilnya sangat
              luar biasa. Hingga kini, lebih dari setengah penjualan kami
              berasal dari pemesanan melalui internet dan jumlahnya terus
              meningkat. <br />Bagi sang pelanggan, Yamaha yang kuat adalah
              simbol kepercayaan dan kepemimpinan, yang memberikan rasa percaya
              diri dan rasa yakin. Yamaha bukan saja menjadi maskapai terbesar,
              tetapi juga menjadi pilihan utama mereka. Ini adalah semangat
              AirAsia. Percayalah saat saya mengatakan bahwa semangat kami untuk
              menjadi yang terbaik tidak akan pernah padam.
            </p>
          </div>
        </div>
        <div class="rightcolumn">
          <div class="card" style="margin-right: 15px">
            <h2 style="text-align: center">About Me</h2>
            <img
              src="https://res.cloudinary.com/tyadeta/images/w_620,h_325,c_fill,g_auto/f_auto,q_auto/v1585826151/logo-yamaha/logo-yamaha-620x325.png?_i=AA"
              height="135px"
            />
            <p>
              <b>Visi</b><br />Kami senantiasa berusaha Menjadi yang terbaik
              dalam bisnis Perdagangan Sepeda Motor serta suku cadang dan
              aksesorisnya sesuai kebutuhan konsumen serta didukung oleh
              Fasilitas Terpadu, jaringan pemeliharaan, suku cadang dan
              Management yang Profesional.
            </p>
            <p>
              <b>Misi</b><br />Kami bertekad untuk memberikan pelayanan yang
              terbaik bagi konsumen dengan pelayanan yang memuaskan dan
              Profesional.
            </p>
          </div>
          <div class="card" style="margin-right: 15px">
            <h3>Follow Me</h3>
            <p><i class="fab fa-facebook-square"></i> orlynz.shirakami</p>
            <p><i class="fab fa-whatsapp-square"></i> 089-506-616-552</p>
            <p><i class="fab fa-twitter-square"></i> yamaha_kw</p>
            <p><i class="fab fa-instagram-square"></i> @yamaha_kw22</p>
            <p>
              <i class="fas fa-envelope-square"></i> schwarz090404@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.navbar {
  width: 100%;
  background: skyblue;
}
.sidebar {
  width: 70px;
  height: 850px;
  background: #3a3a3aff;
  float: left;
}
.admin {
  color: white;
  font-size: 35px;
  line-height: 60px;
  margin-left: 20px;
}
.btn {
  width: 70px;
  height: 40px;
  background: #3a3a3aff;
  border: none;
  border-bottom: 1px solid #666666ff;
  color: white;
  cursor: pointer;
  outline-color: #3a3a3aff;
}
.btnt {
  width: 70px;
  height: 40px;
  background: #3a3a3aff;
  border: none;
  border-bottom: 1px solid #666666ff;
  color: white;
  cursor: pointer;
  outline-color: #3a3a3aff;
}
.btnn {
  width: 70px;
  height: 40px;
  background: #3a3a3aff;
  border: none;
  border-bottom: 1px solid #666666ff;
  color: white;
  cursor: pointer;
  outline-color: #3a3a3aff;
}
.btn:hover {
  background: #3a3a3aff;
}
.btnn:hover {
  background: #353535ff;
}
</style>