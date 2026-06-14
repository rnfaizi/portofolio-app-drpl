# Portfolio App - Reza Nashwan Faizi

Website portfolio statis untuk tugas mata kuliah DRPL. Website menampilkan profil,
pengalaman organisasi, project, dan kontak. Desain utama tetap menggunakan HTML,
CSS, dan JavaScript tanpa framework atau dependency tambahan.

## Teknologi

- HTML5 untuk struktur dan konten
- CSS3 untuk layout responsif, animasi, serta light/dark mode
- JavaScript untuk navigasi mobile, active navigation, sorting pengalaman,
  reveal animation, penyimpanan tema, dan tahun footer
- GitHub Actions dan GitHub Pages sebagai deployment utama
- GitLab CI/CD dan GitLab Pages sebagai alternatif deployment
- Docker, Nginx, dan Kubernetes untuk opsi container deployment

## Struktur Folder

```text
.
|-- .github/
|   `-- workflows/
|       `-- deploy-pages.yml
|-- assets/
|   |-- profile-picture.JPG
|   `-- project-oop.png
|-- .dockerignore
|-- .gitlab-ci.yml
|-- 18224008_TugasK2.txt
|-- Dockerfile
|-- VIDEO_GUIDE.md
|-- index.html
|-- k8s-deployment.yaml
|-- k8s-service.yaml
|-- script.js
`-- style.css
```

## Menjalankan Secara Lokal

Website dapat dibuka langsung melalui `index.html`. Agar perilakunya sama seperti
website live, jalankan server statis dari root project:

```bash
python -m http.server 8080
```

Buka `http://localhost:8080` di browser. Pastikan navigasi, dark mode, sorting
pengalaman, layout responsif, dan seluruh gambar tampil dengan benar.

## Deployment Utama: GitHub Pages

Workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
berjalan otomatis pada setiap push ke branch `main`. Workflow menyalin
`index.html`, `style.css`, `script.js`, dan `assets/` ke artifact GitHub Pages,
kemudian memublikasikannya.

Langkah aktivasi pertama:

1. Buat repository GitHub dan push project ini ke branch `main`.
2. Buka repository di GitHub, lalu pilih **Settings > Pages**.
3. Pada **Build and deployment > Source**, pilih **GitHub Actions**.
4. Buka tab **Actions** dan pastikan workflow **Deploy portfolio to GitHub Pages**
   selesai dengan status hijau.
5. Buka URL pada environment `github-pages` atau halaman **Settings > Pages**.

Jika branch utama repository bukan `main`, sesuaikan nilai branch pada
`.github/workflows/deploy-pages.yml`.

## Alternatif: GitLab Pages

File `.gitlab-ci.yml` menyediakan job `pages` yang berjalan pada default branch.
Job tersebut menyalin file website ke artifact `public/`, lalu GitLab Pages
memublikasikannya. URL live dapat dilihat pada **Deploy > Pages** setelah pipeline
selesai.

Job `build-image` tetap tersedia untuk membuat dan mengirim image Nginx ke GitLab
Container Registry. Job ini dibuat manual agar proses Docker tidak menghambat
deployment Pages. Jalankan dari halaman pipeline hanya ketika image container
memang diperlukan.

## Cara Kerja CI/CD

1. Developer mengubah file website dan push ke branch utama.
2. GitHub Actions atau GitLab CI/CD mendeteksi push.
3. Pipeline mengemas file statis beserta folder `assets/`.
4. Artifact dikirim ke layanan Pages.
5. Pages mengganti versi website live dengan hasil commit terbaru.

Tidak ada proses build aplikasi karena website ini merupakan HTML/CSS/JS murni.
Path aset menggunakan path relatif sehingga tetap bekerja pada project Pages.

## Demo Perubahan Otomatis

Gunakan teks `Last deployment demo: v1` di footer sebagai perubahan yang mudah
dilihat:

1. Buka `index.html` dan ubah `v1` menjadi `v2`.
2. Jalankan website lokal untuk memastikan perubahan tampil.
3. Commit perubahan, misalnya `git commit -am "demo: update deployment version"`.
4. Push commit ke GitHub atau GitLab.
5. Buka tab **Actions** di GitHub atau **Build > Pipelines** di GitLab.
6. Tunggu workflow atau pipeline selesai.
7. Refresh website live dan tunjukkan bahwa footer sekarang menampilkan `v2`.

## Docker

Build dan jalankan website melalui Nginx:

```bash
docker build -t portfolio-app:latest .
docker run --rm -p 8080:80 portfolio-app:latest
```

Buka `http://localhost:8080`. Dockerfile menyalin HTML, CSS, JavaScript, dan
seluruh folder `assets/`, sehingga gambar tetap tersedia di dalam image.

## Kubernetes Minikube

```powershell
minikube docker-env | Invoke-Expression
docker build -t portfolio-app:latest .
kubectl apply -f k8s-deployment.yaml
kubectl apply -f k8s-service.yaml
minikube service portfolio-app-service
```

## Checklist Video Maksimal 10 Menit

- [ ] Perkenalan singkat dan tujuan website
- [ ] Demo tampilan desktop/mobile, navigasi, dark mode, dan sorting
- [ ] Tunjukkan struktur repository dan file utama
- [ ] Jelaskan workflow GitHub Actions atau pipeline GitLab
- [ ] Tunjukkan URL website live
- [ ] Ubah footer dari `v1` ke `v2`, commit, dan push
- [ ] Tunjukkan workflow/pipeline berjalan sampai sukses
- [ ] Refresh website live dan tunjukkan perubahan
- [ ] Tunjukkan file `18224008_TugasK2.txt`
- [ ] Pastikan durasi video tidak lebih dari 10 menit

Alur narasi yang lebih rinci tersedia di [`VIDEO_GUIDE.md`](VIDEO_GUIDE.md).

## File Submission

File `18224008_TugasK2.txt` berada di root project. Isi ketiga placeholder `TODO`
setelah video, repository, dan website live sudah tersedia. Jangan mengisi link
perkiraan atau link yang belum dapat diakses.
