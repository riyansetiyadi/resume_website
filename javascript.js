// fungsi yang memberikan soal keamanan penjumlahan sebelum dapat mengakses website
function keamanan() {
	var hasil = false;
	while (hasil == false) {
		var angka1 = Math.floor(Math.random() * Math.floor(20));
		var angka2 = Math.floor(Math.random() * Math.floor(20));
		var jawaban = prompt("pertanyaan keamanan " + angka1 + "+" + angka2);
		var benar = angka1 + angka2;

		if (jawaban == benar) {
			hasil = true
		}
	}
}

keamanan();

// fungsi untuk menghilangkan header beserta isinya jika di scroll ke bawah
let prevScrollPos = window.pageYOffset;

function handleScroll() {
	const currentScrollPos = window.pageYOffset;

	if (prevScrollPos > currentScrollPos) {
		document.getElementById("mainHeader").classList.remove("hide");
		nav.classList.toggle("show", false);
	} else {
		document.getElementById("mainHeader").classList.add("hide");
		nav.classList.toggle("show", false);
	}

	prevScrollPos = currentScrollPos;
}

window.onscroll = function () {
	handleScroll();
}

// fungsi untuk memunculkan header jika tidak ada aktifitas scroll
window.onscrollend = function () {
	document.getElementById("mainHeader").classList.remove("hide");
}

// fungsi toggle menu untuk tampilan mobile
const burgerMenu = document.getElementById("burgerMenu");
const nav = document.querySelector("nav");

burgerMenu.addEventListener("click", function () {
	nav.classList.toggle("show");
});

// data konten website
var pendidikan = {
	nama: "pendidikan",
	items: [
		{
			nama: "SMK Negeri 6 Jember",
			tahun_mulai: 2016,
			tahun_selesai: 2019,
			sub_nama: "Multimedia",
			deskripsi: [
				"Belajar editing foto & video, HTML, CSS"
			],
			img: "asset/img/smkn6jember.png"
		},
		{
			nama: "Universitas Jember",
			tahun_mulai: 2019,
			tahun_selesai: "Sekarang",
			sub_nama: "Ilmu Komputer",
			deskripsi: [
				"Sistem Informasi",
				"IPK : 3.68 / 4.00",
			],
			img: "asset/img/unej.png"
		},
	]
}

var pengalaman = {
	nama: "pengalaman",
	items: [
		{
			nama: "MSI Vision",
			tahun_mulai: 2018,
			tahun_selesai: null,
			sub_nama: "Foto & Video Editor (Magang SMK Negeri 6 Jember)",
			deskripsi: [
				"Mengedit foto pernikahan untuk dijadikan album.",
				"Mengedit video dokumentasi sebuah pernikahan.",
				"Belajar cara mengoperasikan kamera foto dan video.",
			],
			img: null
		},
		{
			nama: "PKM Center",
			tahun_mulai: 2018,
			tahun_selesai: null,
			sub_nama: "Anggota Divisi Acara (Volunteer)",
			deskripsi: [
				"Menyusun acara kegiatan pembinaan PKM di Universitas Jember secara daring.",
				"Menjaga keberlangsungan acara.",
			],
			img: null
		},
		{
			nama: "Friendship Competition",
			tahun_mulai: 2021,
			tahun_selesai: null,
			sub_nama: "Anggota Divisi Perlengkapan (Volunteer)",
			deskripsi: [
				"Menyiapkan perlengkapan acara perlombaan bagian Mobile Legend Bang Bang.",
				"Operator streaming Youtube perlombaan.",
				"Menjaga keberlangsungan acara.",
			],
			img: null
		},
		{
			nama: "Koperasi Mahasiswa Fasilkom",
			tahun_mulai: 2019,
			tahun_selesai: 2021,
			sub_nama: "Anggota Media & Teknologi (Organisasi)",
			deskripsi: [
				"Pramuniaga di Koperasi Mahasiswa (Kopma) Fasilkom",
				"Membuat desain postingan Instagram Kopma Fasilkom",
				"Membuat desain sertifikat anggota Kopma Fasilkom",
			],
			img: null
		},
		{
			nama: "Vocasia",
			tahun_mulai: 2022,
			tahun_selesai: null,
			sub_nama: "App Developer (Magang Kampus Merdeka)",
			deskripsi: [
				"Melanjutkan pembuatan aplikasi Vocasia versi Android dengan Flutter dari pemagang sebelumnya",
				"Menambahkan navigasi pada banner di halaman Home",
				"Membuat halaman Form Lengkapi Data Diri",
				"Menambahkan Login & Register melalui Google & Facebook menggunakan Firebase",
				"Menghubungkan database Firebase dengan database Vocasia",
				"Memperbarui beberapa tampilan halaman sesuai pembaruan desain UI/UX",
			],
			img: null,
		}
	]
}

var pelatihan = {
	nama: "pelatihan",
	items: [
		{
			nama: "Pelatihan Coding Daring Ready, Set Ccde! Angkatan II (SQL)",
			tahun_mulai: 2020,
			tahun_selesai: null,
			sub_nama: "Progate",
			deskripsi: [
				"Belajar kelas Kursus SQL Fundamental di Progate"
			],
			img: null,
		},
		{
			nama: "Dicoding QuickLearn: Data Science",
			tahun_mulai: 2020,
			tahun_selesai: null,
			sub_nama: "Dicoding",
			deskripsi: [
				"Menyelesaikan kelas Belajar Dasar Data Science, Structured Query Language (SQL), dan memulai pemrograman dengan Python di Dicoding"
			],
			img: null,
		},
	]
}

var proyek = {
	nama: 'proyek',
	items:
		[
			{
				nama: "Kalkulator Sederhana",
				tahun_mulai: 2020,
				tahun_selesai: null,
				sub_nama: "Web Developer",
				deskripsi: [
					"Membuat kalkulator sederhana dengan HTML, CSS, & Javascript"
				],
				img: null,
			},
			{
				nama: "Lapak Tani",
				tahun_mulai: 2020,
				tahun_selesai: null,
				sub_nama: "Web Developer",
				deskripsi: [
					"Membuat website (prototipe desain) jual beli hasil pertanian menggunakan HTML, CSS, & Javascript"
				],
				img: null,
			},
			{
				nama: "Mathing",
				tahun_mulai: 2021,
				tahun_selesai: null,
				sub_nama: "UI Designer & Web Developer",
				deskripsi: [
					"Membuat website belajar operator matematika menggunakan PHP & MVC"
				],
				img: null,
			},
			{
				nama: "Nuansa",
				tahun_mulai: 2021,
				tahun_selesai: null,
				sub_nama: "Flutter Developer",
				deskripsi: [
					"Membuat aplikasi informasi wisata di Jember menggunakan Flutter & Google Firebase"
				],
				img: null,
			},
			{
				nama: "Aeru Wedding",
				tahun_mulai: 2022,
				tahun_selesai: null,
				sub_nama: "Web Developer",
				deskripsi: [
					"Membuat website undangan pernikahan menggunakan ReactJS & Google Firebase"
				],
				img: null,
			},
			{
				nama: "Undanganmu",
				tahun_mulai: 2022,
				tahun_selesai: null,
				sub_nama: "Web Developer",
				deskripsi: [
					"Membuat website undangan pernikahan menggunakan VueJS & Google Firebase"
				],
				img: null,
			},
			{
				nama: "Deliceat",
				tahun_mulai: 2023,
				tahun_selesai: null,
				sub_nama: "Flutter Developer",
				deskripsi: [
					"Membuat aplikasi informasi restoran menggunakan Flutter & Database SQL"
				],
				img: null,
			}
		]
};

var keterampilan = {
	nama: "keterampilan",
	items:
		[
			{
				nama: "BAHASA PEMROGRAMAN",
				tahun_mulai: null,
				tahun_selesai: null,
				sub_nama: null,
				deskripsi: [
					"Dart (Intermediate)",
					"Python (Intermediate)",
					"HTML + CSS (Intermediate)",
					"JavaScript (Beginner)",
					"PHP (Beginner)",
					"SQL (Beginner)",
					"R (Beginner)",
					"Kotlin (Beginner)",
				],
				img: null,
			},
			{
				nama: "FRAMEWORK",
				tahun_mulai: null,
				tahun_selesai: null,
				sub_nama: null,
				deskripsi: [
					"Flutter (Intermediate)",
					"ReactJS (Beginner)",
					"VueJS (Beginner)",
					"Laravel (Beginner)",
				],
				img: null,
			},
			{
				nama: "LAIN-LAIN",
				tahun_mulai: null,
				tahun_selesai: null,
				sub_nama: null,
				deskripsi: [
					"Git",
					"Figma",
					"Agile Project Management",
				],
				img: null,
			},
		]
};

var dataKonten = {
	"pendidikan": pendidikan,
	"pengalaman": pengalaman,
	"pelatihan": pelatihan,
	"proyek": proyek,
	"keterampilan": keterampilan,
}

// menampilkan data kedalam website
const kontenElement = document.getElementById('content');

Object.entries(dataKonten).forEach(([key, konten]) => {
	const garisHorizontal = document.createElement('hr')
	kontenElement.appendChild(garisHorizontal)

	const kartu = document.createElement('article')
	kartu.classList.add('kartu')
	kartu.id = key

	const titleKonten = document.createElement('h1')
	titleKonten.textContent = konten.nama.toUpperCase()
	kartu.appendChild(titleKonten)

	konten.items.forEach(item => {

		const kartuItem = document.createElement('section')
		kartuItem.classList.add('kartu-item')

		const kartuItemContent = document.createElement('div')
		kartuItemContent.classList.add('kartu-item-content')

		const kartuItemTitle = document.createElement('div')
		kartuItemTitle.classList.add('kartu-item-title')

		const nama = document.createElement('h3')
		nama.textContent = item.nama
		kartuItemTitle.appendChild(nama)

		if (item.tahun_mulai !== null || item.tahun_selesai !== null) {
			const tahun = document.createElement('h6')

			if (item.tahun_mulai !== null && item.tahun_selesai !== null) {
				tahun.textContent = `${item.tahun_mulai} - ${item.tahun_selesai}`
			} else if (item.tahun_selesai === null) {
				tahun.textContent = `${item.tahun_mulai}`
			}
			kartuItemTitle.appendChild(tahun)
		}

		kartuItemContent.appendChild(kartuItemTitle)

		if (item.sub_nama !== null) {
			const subNama = document.createElement('h4')
			subNama.textContent = item.sub_nama

			kartuItemContent.appendChild(subNama)
		}

		const ulDeskripsi = document.createElement('ul')
		item.deskripsi.forEach(deskripsiItem => {
			const deskripsi = document.createElement('h5')
			deskripsi.textContent = deskripsiItem

			if (key === 'keterampilan') {
				const liDeskripsi = document.createElement('li')
				liDeskripsi.appendChild(deskripsi)
				ulDeskripsi.appendChild(liDeskripsi)
				kartuItemContent.appendChild(ulDeskripsi)
			} else {
				kartuItemContent.appendChild(deskripsi)
			}
		})

		kartuItem.appendChild(kartuItemContent)

		if (item.img !== null) {
			const kartuItemImg = document.createElement('div')

			const imgElement = document.createElement('img')
			imgElement.src = item.img
			imgElement.alt = item.nama
			imgElement.classList.add('logo-item')

			kartuItemImg.appendChild(imgElement)

			kartuItem.appendChild(kartuItemImg)
		}

		kartu.appendChild(kartuItem)
	})

	kontenElement.appendChild(kartu)
});

const garisHorizontal = document.createElement('hr')
kontenElement.appendChild(garisHorizontal)