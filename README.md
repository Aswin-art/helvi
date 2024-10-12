# Helvi

Proyek ini adalah **Sistem Manajemen Bank Sampah** yang bertujuan untuk memfasilitasi pengelolaan sampah secara bertanggung jawab dan terintegrasi dengan berbagai fitur. Platform ini menyediakan solusi untuk pengumpulan, penukaran sampah, serta menjadi wadah bagi komunitas yang peduli terhadap lingkungan.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [MySQL](https://www.mysql.com/) dengan [Prisma ORM](https://www.prisma.io/)
- **Form Validation**: [Zod](https://zod.dev/)
- **Komponen UI**: [shadcn/ui](https://ui.shadcn.dev/)
- **Rich Text Editor**: [Blocknote Editor](https://blocknote.dev/)

## 🚀 Fitur Utama

1. **Mengumpulkan dan Menukarkan Sampah**

   - Pengguna dapat mengumpulkan dan menukarkan sampah yang dapat didaur ulang dengan imbalan atau poin.

2. **Melaporkan Penumpukan Sampah**

   - Fitur untuk melaporkan lokasi penumpukan sampah yang memerlukan tindakan lebih lanjut untuk dibersihkan.

3. **Penyedia Jasa Kebersihan**

   - Platform ini memungkinkan pengguna untuk memesan jasa kebersihan untuk area sekitar mereka.

4. **Informasi Jadwal Keliling**

   - Menyediakan jadwal terkini mengenai pengumpulan sampah di berbagai area.

5. **Wadah untuk Komunitas & Event Lingkungan**

   - Fasilitasi komunitas dan event terkait lingkungan untuk mendukung inisiatif ramah lingkungan.

6. **Berita Terupdate tentang Pengelolaan Sampah**

   - Menyediakan berita dan informasi terkini tentang pengelolaan sampah, daur ulang, dan isu lingkungan.

7. **Sistem Gamifikasi**

   - Pengguna dapat mengumpulkan poin dan mendapatkan badge berdasarkan kontribusi mereka terhadap pengelolaan sampah.

8. **Marketplace Produk Olahan Sampah**
   - Marketplace untuk membeli dan menjual produk yang terbuat dari hasil daur ulang sampah.

## 🎯 Peran Pengguna

Proyek ini memiliki 3 peran pengguna utama:

1. **Admin**: Memiliki akses penuh untuk mengelola semua fitur, termasuk manajemen pengguna dan pengaturan sistem.
2. **Admin Post**: Bertanggung jawab atas manajemen konten, seperti membuat dan mengelola berita atau event.
3. **User**: Pengguna yang dapat memanfaatkan fitur seperti melaporkan sampah, menukarkan sampah, dan mengikuti komunitas atau event.

## ⚙️ Cara Instalasi

1. Clone repositori:
   ```bash
   git clone https://github.com/username/repo-bank-sampah.git
   cd repo-bank-sampah
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Atur variabel lingkungan:
   - Buat file .env di direktori root dan tambahkan variabel lingkungan yang dibutuhkan untuk MySQL, Prisma, dll.
4. Jalankan migrasi database:
   ```bash
   npx prisma migrate dev
   ```
5. Mulai server pengembangan:
   ```bash
   npm run dev
   ```

## 📜 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT.
