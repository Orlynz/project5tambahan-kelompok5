<template>
  <div>
    <div id="az">
        <div class="cz">
          <h2 id="abz">Daftar Kegiatan</h2>
          <br />
          <table
            style="
              color: black;
              border: 1px solid black;
              border-collapse: collapse;
              width: 1270px"
          >
            <thead>
              <tr>
                <th class="thh">No</th>
                <th class="thh">Kegiatan</th>
                <th class="thh">Tempat</th>
                <th class="thh">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in Kegiatan" :key="user.id">
                <td class="tdd">
                  <b>{{ user.id }}</b>
                </td>
                <td class="tdd">{{ user.namakegiatan }}</td>
                <td class="tdd">{{ user.tempat }}</td>
                <td class="tdd">
                  {{ user.tanggal }}
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
        namakegiatan: "",
        tempat: "",
        tanggal: "",
      },
      Kegiatan: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/Kegiatan/")
        .then((res) => {
          this.Kegiatan = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/Kegiatan/", this.form).then((res) => {
        this.load();
        this.form.namakegiatan = "";
        this.form.tempat = "";
        this.form.tanggal = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.namakegiatan = user.namakegiatan;
      this.form.tempat = user.tempat;
      this.form.tanggal = user.tanggal;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/Kegiatan/" + form.id, {
          namakegiatan: this.form.namakegiatan,
          tempat: this.form.tempat,
          tanggal: this.form.tanggal,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.namakegiatan = "";
          this.form.tempat = "";
          this.form.tanggal = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete(" http://localhost:3000/Kegiatan/" + user.id).then((res) => {
        this.load();
        let index = this.Kegiatan.indexOf(form.motor);
        this.Kegiatan.splice(index, 1);
      });
    },
  },
};
</script>
<style>
#az {
  background-color: skyblue;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.bz {
  display: flex;
  text-align: left;
  padding-left: 30px;
}

.cz {
  margin-left: 40px;
  margin-right: 40px;
  padding-top: 20px;
}

.dz {
  padding: 20px;
  margin-top: 28px;
  border: 2px dotted black;
}

#fz {
  width: 300px;
}

#abz {
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.thh {
  border: 1px solid black;
  border-collapse: collapse;
  background-color: white;
  padding: 5px;
  text-align: center;
}
.tdd {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  background-color: white;
}
</style>