# 🚀 GitHub Pages Deployment Rehberi

Bu rehber website'yi GitHub Pages'te yayınlamanız için adımları içerir.

## 📋 Adımlar

### 1. GitHub'da Yeni Repository Oluştur

1. [GitHub](https://github.com) hesabınıza giriş yapın
2. Sağ üstteki "+" butonuna tıklayın ve "New repository" seçin
3. Repository adını girin (örnek: `app-portfolio-website` veya `website`)
4. Repository'yi **Public** olarak oluşturun (GitHub Pages ücretsiz sürümü için gerekli)
5. **README, .gitignore veya lisans eklemeyin** (zaten mevcut)
6. "Create repository" butonuna tıklayın

### 2. Repository'yi Yerel Projeye Bağla ve Push Et

Terminal/Command Prompt'ta website klasöründe şu komutları çalıştırın:

```bash
# Remote repository'yi ekle (YOUR_USERNAME ve REPO_NAME'i değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Branch adını main olarak değiştir (GitHub Pages için)
git branch -M main

# Dosyaları GitHub'a gönder
git push -u origin main
```

**Örnek:**
```bash
git remote add origin https://github.com/orhanerbek/app-portfolio-website.git
git branch -M main
git push -u origin main
```

### 3. GitHub Pages'i Aktif Et

1. GitHub repository sayfanıza gidin
2. **Settings** sekmesine tıklayın
3. Sol menüden **Pages** seçeneğine tıklayın
4. **Source** kısmında:
   - "Deploy from a branch" seçin
   - Branch: **main** (veya **master**)
   - Folder: **/ (root)** seçin
   - "Save" butonuna tıklayın

### 4. GitHub Actions ile Otomatik Deploy (Önerilen)

Yukarıdaki ayarları yaptıktan sonra:

1. Repository'nizde **Actions** sekmesine gidin
2. İlk kez kullanıyorsanız, "I understand my workflows, go ahead and enable them" butonuna tıklayın
3. `.github/workflows/deploy.yml` dosyası otomatik olarak çalışacak

### 5. Website'nizi Görüntüleme

Deployment tamamlandıktan sonra (birkaç dakika sürebilir):

1. Repository Settings > Pages bölümüne gidin
2. **"Your site is live at..."** başlığının altında website URL'inizi göreceksiniz
3. URL şu formatta olacak: `https://YOUR_USERNAME.github.io/REPO_NAME/`

**Örnek:**
- `https://orhanerbek.github.io/app-portfolio-website/`

### 6. app-ads.txt Doğrulama

Website yayınlandıktan sonra:

1. Website URL'inizi kontrol edin: `https://YOUR_USERNAME.github.io/REPO_NAME/app-ads.txt`
2. Dosya görüntülenebiliyorsa, Google Play Console'da doğrulama yapabilirsiniz
3. Google Play Console'da belirttiğiniz domain şu olmalı: `YOUR_USERNAME.github.io`

## 🔄 Güncellemeler

Website'yi güncellemek için:

```bash
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Update: açıklama buraya"

# GitHub'a gönder
git push
```

GitHub Actions otomatik olarak yeni versiyonu deploy edecektir.

## 🎯 Özel Domain Kullanma (Opsiyonel)

Eğer kendi domain'inizi kullanmak isterseniz:

1. Domain'inizde bir CNAME kaydı oluşturun:
   - Type: `CNAME`
   - Name: `www` (veya `@`)
   - Value: `YOUR_USERNAME.github.io`

2. GitHub Pages ayarlarında "Custom domain" alanına domain'inizi girin

3. DNS propagasyonu için birkaç saat bekleyin

## ⚠️ Önemli Notlar

- GitHub Pages ücretsiz sürümü için repository **Public** olmalıdır
- Deployment işlemi genellikle 1-2 dakika sürer
- İlk deployment'tan sonra website'niz birkaç dakika içinde erişilebilir olacaktır
- HTTPS otomatik olarak aktif olur

## 🆘 Sorun Giderme

**Website görünmüyor:**
- Settings > Pages'te source'un doğru ayarlandığından emin olun
- Actions sekmesinde deployment'ın başarılı olduğunu kontrol edin
- Birkaç dakika bekleyin (DNS propagasyonu)

**404 Hatası:**
- `index.html` dosyasının root dizinde olduğundan emin olun
- Dosya adlarının doğru olduğundan emin olun (büyük/küçük harf duyarlı)

**app-ads.txt çalışmıyor:**
- Dosyanın root dizinde olduğundan emin olun
- Google Play Console'da domain'in doğru girildiğinden emin olun
- GitHub Pages URL'inin tam olarak eşleştiğinden emin olun

---

**İyi çalışmalar! 🚀**




