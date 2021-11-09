<template>
  <div>
    <div class="navbar">
      <h3 class="admin">Dashboard Admin</h3>
    </div>
    <div class="sidebar">
      <div class="nav"></div>
      <a href="/motorr"
        ><button class="btn">
          <i style="margin-: right5px" class="fas fa-motorcycle"></i
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
    <div id="a">
      <div class="b">
        <form @submit.prevent="add" action="login.php" method="POST">
          <div class="d">
            <h2 style="text-align: center">
              Simulasi Kredit
              <hr size="2px" color="black" />
            </h2>
            <br />
            <p>
              <label><b>Nama Motor:</b></label
              ><br />
              <select
                style="width: 300px; padding: 5px"
                type="select"
                v-model="motor"
                required
              >
                <option value="">Pilih Motor</option>
                <option
                  v-bind:value="user.harga"
                  v-for="user in Project5"
                  :key="user.id"
                >
                  {{ user.motor }}
                </option>
              </select>
            </p>
            <br />
            <p>
              <label><b>Harga:</b></label
              ><br />
              <input
                style="width: 300px; padding: 5px"
                placeholder="0"
                type="text"
                v-model="motor"
                required
                disabled
              />
            </p>
            <br />
            <p>
              <label><b>DP:</b> </label><br /><br />
              <input
                style="width: 100px; padding: 5px"
                placeholder="Tahun Produksi..."
                type="radio"
                value="30"
                v-model="depe"
                required
              />
              <label style="width: 100px"><b>30%</b></label>
            </p>
            <br />
            <p>
              <label><b>Jangka Waktu:</b></label
              ><br /><br />
              <input
                style="width: 100px; padding: 5px"
                placeholder="Masukkan Harga..."
                type="radio"
                v-model="bulan"
                value="12"
                required
              />
              <label style="width: 100px"><b>12 bulan</b></label
              ><br />
              <input
                style="width: 100px; padding: 5px"
                placeholder="Masukkan Harga..."
                type="radio"
                v-model="bulan"
                value="24"
              />
              <label style="width: 100px"><b>24 bulan</b></label>
            </p>
            <br />
            <p>
              <label><b>Angsuran:</b></label
              ><br />
              <input
                style="width: 300px; padding: 5px"
                placeholder="Angsuran..."
                type="text"
                v-model="hargamotor"
                disabled
              />
            </p>
            <br />
            <button
              style="background-color: green; border-radius: 5px"
              class="btn btn-info"
              type="submit"
              id="f"
              v-show="updateSubmit"
              @click="update(form)"
            >
              Update
            </button>
          </div>
          <p><i>*Syarat & Ketentuan Berlaku</i></p>
        </form>

        <div class="c">
          <h2 id="ab">Data Angsuran Motor</h2>
          <br />
          <table id="as" class="table">
            <thead>
              <tr>
                <th class="th">No</th>
                <th class="th">Nama Motor</th>
                <th class="th">CC</th>
                <th class="th">Tahun Produksi</th>
                <th class="th">Angsuran</th>
                <th class="th">Gambar</th>
                <th class="th">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in Project5" :key="user.id">
                <td class="td">
                  <b>{{ user.id }}</b>
                </td>
                <td class="td">{{ user.motor }}</td>
                <td class="td">{{ user.cc }}</td>
                <td class="td">
                  {{ user.tahun }}
                </td>
                <td class="td">
                  {{ user.harga }}
                </td>
                <td class="td">
                  <img :src="user.gambar" width="80px" height="80px" />
                </td>
                <td class="td">
                  <b>
                    <u>
                      <button
                        style="
                          margin-top: 3px;
                          width: 115px;
                          background-color: green;
                          text-align: center;
                          margin-bottom: 5px;
                          border-radius: 5px;
                        "
                        class="btn btn-success"
                        @click="edit(user)"
                      >
                        Utang
                      </button>
                      <br />
                      <button
                        style="
                          width: 115px;
                          text-align: center;
                          margin-bottom: 3px;
                          background-color: red;
                          border-radius: 5px;
                        "
                        class="btn btn-danger"
                        @click="del(user)"
                      >
                        Sold Out
                      </button>
                    </u>
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "Motorr",
  data() {
    return {
      hargamotor: "",
      hargaMotor: 0,
      depe: "",
      bulan: "",
      motor: 0,
      harga: 0,
      form: {
        id: "",
        motor: "",
        cc: "",
        tahun: "",
        harga: "",
        gambar: "",
      },
      Project5: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  watch: {
    motor(v) {
      this.hargaMotor = this.motor;
      this.motor = v;
    },
    bulan(v) {
      let nilai = Math.floor(
        (parseInt(this.hargaMotor) * parseInt(this.depe)) / 100 / parseInt(v)
      );
      this.hargamotor = nilai;
      this.form.harga = nilai;
    },
  },
  methods: {
    fungsi() {
      this.hargamotor =
        (parseInt(this.motor) * parseInt(this.depe)) / 100 / this.bulan;
      this.hargamotor = this.hargamotor;
    },
    load() {
      axios
        .get("http://localhost:3000/Project5")
        .then((res) => {
          this.Project5 = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/Project5", this.form).then((res) => {
        this.load();
        this.form.motor = "";
        this.form.cc = "";
        this.form.tahun = "";
        this.form.harga = "";
        this.form.gambar = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.motor = user.motor;
      this.form.cc = user.cc;
      this.form.tahun = user.tahun;
      this.form.harga = user.harga;
      this.form.gambar = user.gambar;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/Project5/" + form.id, {
          motor: this.form.motor,
          cc: this.form.cc,
          tahun: this.form.tahun,
          harga: this.form.harga,
          gambar: this.form.gambar,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.motor = "";
          this.form.cc = "";
          this.form.tahun = "";
          this.form.harga = "";
          this.form.gambar = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/Project5/" + user.id).then((res) => {
        this.load();
        let index = this.Project5.indexOf(form.motor);
        this.Project5.splice(index, 1);
      });
    },
  },
};
</script>
<style>
#a {
  background-color: skyblue;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.b {
  display: flex;
  text-align: left;
  padding-left: 30px;
}
.c {
  margin-left: 40px;
  margin-right: 40px;
  padding-top: 20px;
  text-align: center;
}
.d {
  padding: 20px;
  margin-top: 28px;
  border: 2px dotted black;
}
#f {
  width: 300px;
}
#ab {
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#as {
  width: 829px;
}
</style>