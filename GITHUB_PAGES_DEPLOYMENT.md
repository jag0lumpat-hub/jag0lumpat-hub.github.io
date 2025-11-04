# Deploy ke GitHub Pages

Proyek ini sudah dikonfigurasi untuk di-deploy ke GitHub Pages secara otomatis.

## Konfigurasi

### 1. Vite Configuration
File `vite.config.ts` sudah dikonfigurasi dengan `base: "/"` untuk deployment di root direktori GitHub Pages.

Jika Anda ingin men-deploy ke project page (misalnya `username.github.io/repository-name`), ubah:
```typescript
base: "/repository-name/"
```

### 2. GitHub Actions Workflow
File `.github/workflows/deploy.yml` sudah dibuat untuk otomatis build dan deploy ke GitHub Pages setiap kali ada push ke branch `main`.

## Cara Deploy

### Setup di GitHub Repository

1. **Push kode ke GitHub:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Aktifkan GitHub Pages:**
   - Buka repository di GitHub
   - Pergi ke **Settings** → **Pages**
   - Di bagian **Source**, pilih **GitHub Actions**

3. **Deploy Otomatis:**
   - Setiap kali Anda push ke branch `main`, GitHub Actions akan otomatis:
     - Install dependencies
     - Build project dengan `npm run build`
     - Deploy hasil build ke GitHub Pages

4. **Akses Website:**
   - Setelah deployment selesai, website akan tersedia di:
     - User/Organization page: `https://username.github.io`
     - Project page: `https://username.github.io/repository-name`

## Manual Deploy

Jika ingin deploy manual:

```bash
# Build project
npm run build

# Preview hasil build locally
npm run preview
```

## Catatan Penting

- **Base Path**: Pastikan `base` di `vite.config.ts` sesuai dengan struktur URL GitHub Pages Anda
- **Branch**: Workflow akan berjalan pada push ke branch `main`
- **Permissions**: GitHub Actions perlu permission untuk deploy pages (sudah dikonfigurasi dalam workflow)
- **Build Output**: Vite akan build project ke folder `dist/` yang kemudian di-deploy ke GitHub Pages

## Troubleshooting

### Jika deployment gagal:
1. Periksa tab **Actions** di GitHub repository untuk melihat error log
2. Pastikan GitHub Pages sudah diaktifkan di repository settings
3. Pastikan branch `main` adalah branch default
4. Periksa apakah semua dependencies terinstall dengan benar

### Jika halaman blank:
1. Periksa `base` path di `vite.config.ts`
2. Untuk user page: gunakan `base: "/"`
3. Untuk project page: gunakan `base: "/nama-repository/"`
