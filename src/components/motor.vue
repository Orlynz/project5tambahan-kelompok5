<template>
  <div id="a">
    <div class="b">
      <div class="c">
        <h2 id="ab">Daftar Motor Siap Jual</h2>
        <br />
        <table id="as" class="table">
          <thead>
            <tr>
              <th class="th">No</th>
              <th class="th">Nama Motor</th>
              <th class="th">CC</th>
              <th class="th">Tahun Produksi</th>
              <th class="th">Harga</th>
              <th class="th">Gambar</th>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
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
  methods: {
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
#f {
  width: 300px;
}
#ab {
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#as {
  width: 1205px;
}
</style>