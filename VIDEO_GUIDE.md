# Panduan Video Demo Portfolio

Target durasi: 8-9 menit agar tetap aman di bawah batas maksimal 10 menit.

## 0:00-0:40 - Pembukaan

- Perkenalkan nama, NIM, dan tujuan tugas.
- Jelaskan bahwa website merupakan portfolio statis HTML, CSS, dan JavaScript.
- Sebutkan bahwa deployment utama memakai GitHub Pages dan GitHub Actions.

## 0:40-2:15 - Demo Website

- Buka website live dari URL Pages.
- Tunjukkan bagian profil, pengalaman, project, dan kontak.
- Coba navigasi utama dan menu mobile melalui responsive view.
- Ubah light/dark mode.
- Ubah sorting pengalaman antara ascending dan descending.
- Tunjukkan bahwa foto profil dan gambar project berhasil dimuat.

## 2:15-3:40 - Struktur Kode

- Buka repository dan jelaskan `index.html`, `style.css`, dan `script.js`.
- Tunjukkan folder `assets/`.
- Jelaskan singkat bahwa JavaScript menangani menu, tema, sorting, active
  navigation, reveal animation, dan tahun footer.
- Tunjukkan `Dockerfile` dan bahwa folder `assets/` ikut disalin.

## 3:40-4:40 - Repository dan Deployment

- Tunjukkan commit dan branch utama repository.
- Buka `.github/workflows/deploy-pages.yml`.
- Jelaskan trigger push ke `main`, pembuatan artifact statis, dan job deploy.
- Jika memakai GitLab, tunjukkan job `pages` di `.gitlab-ci.yml`.

## 4:40-7:30 - Demo CI/CD Otomatis

1. Buka footer website yang masih menampilkan `Last deployment demo: v1`.
2. Ubah teks `v1` menjadi `v2` di `index.html`.
3. Tunjukkan perubahan lokal sebentar.
4. Jalankan `git add`, `git commit`, dan `git push`.
5. Buka tab **Actions** GitHub atau **Build > Pipelines** GitLab.
6. Tunjukkan workflow/pipeline yang terpicu oleh push.
7. Tunggu sampai job build/upload dan deploy selesai dengan status sukses.

Gunakan waktu tunggu untuk menjelaskan bahwa setiap push ke branch utama
menjalankan pipeline yang memublikasikan versi terbaru tanpa upload manual.

## 7:30-8:30 - Verifikasi Website Live

- Buka kembali URL Pages.
- Lakukan hard refresh bila cache browser masih menampilkan versi lama.
- Tunjukkan footer sudah berubah menjadi `Last deployment demo: v2`.
- Tegaskan bahwa perubahan berasal dari commit yang baru saja dipush.

## 8:30-9:00 - Penutup dan Submission

- Tunjukkan file `18224008_TugasK2.txt` di root repository.
- Pastikan file berisi link YouTube public, repository, dan website live.
- Tutup dengan ringkasan singkat bahwa website, repository, dan CI/CD dapat
  diakses publik.

## Sebelum Merekam

- Pastikan repository dapat diakses sesuai ketentuan tugas.
- Aktifkan GitHub Pages dengan source **GitHub Actions**.
- Jalankan satu deployment awal dan pastikan website live dapat dibuka.
- Login ke GitHub/GitLab dan siapkan terminal agar demo push tidak terhambat.
- Tutup tab atau notifikasi yang memuat informasi sensitif.
- Pastikan rekaman memperlihatkan URL browser dan status workflow dengan jelas.
- Isi link repository dan website pada `18224008_TugasK2.txt`.
- Setelah video diunggah public, isi link YouTube dan push pembaruan terakhir.
