//inisialisasi library
const express = require("express")
const app = express()

//import fungsi authorization auth
const auth = require("./auth")

//import route user
const user = require("./route/user")
app.use("/", user)

//import route pegawai
const pegawai = require("./route/pegawai")
app.use("/pegawai",auth, pegawai)

//import route pelanggaran
const pelanggaran = require("./route/pelanggaran")
app.use("/pelanggaran",auth, pelanggaran)

//base url -> http://localhost:2000/pelanggarannya_siswa
const pelanggarannya_siswa = require("./route/pelanggarannya_siswa")
app.use("/pelanggarannya_siswa", auth, pelanggarannya_siswa)

//base url -> http://localhost:2000/detail_pelanggaran_siswa
const detail_pelanggaran_siswa = require("./route/detail_pelanggaran_siswa")
app.use("/detail_pelanggaran_siswa", auth, detail_pelanggaran_siswa)

//import route siswa
const siswa = require("./route/siswa")
app.use("/siswa",auth, siswa)

//import route jurusan
const jurusan = require("./route/jurusan")
app.use("/jurusan",auth, jurusan)

//membuat web server dengan port 2000
app.listen(2000, () => {
    console.log("server run on port 2000")
})
