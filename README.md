# 🌐 App Portfolio Website

Uygulamalarımızı tanıtmak ve gelecekteki projelerimizi sergilemek için oluşturulmuş modern, responsive website.

## ✨ Özellikler

- 🎨 Modern ve şık tasarım
- 📱 Tam responsive (mobil, tablet, desktop)
- ⚡ Hızlı ve optimize edilmiş
- 🎯 Smooth scrolling ve animasyonlar
- 🌙 Modern UI/UX prensipleri
- ♿ Erişilebilirlik odaklı

## 📁 Proje Yapısı

```
website/
├── index.html          # Ana HTML dosyası
├── css/
│   └── style.css      # Stil dosyası
├── js/
│   └── main.js        # JavaScript dosyası
├── images/            # Görseller (gerekirse)
└── README.md          # Bu dosya
```

## 🚀 Kullanım

### Yerel Geliştirme

Website'yi yerel olarak görüntülemek için birkaç seçenek var:

#### 1. Basit HTTP Server (Python)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 2. Node.js (http-server)
```bash
npx http-server
```

#### 3. VS Code Live Server
VS Code'da "Live Server" extension'ı ile açabilirsiniz.

### Tarayıcıda Açma
Dosyayı doğrudan tarayıcıda açmak için `index.html` dosyasına çift tıklayın.

## 🎨 Özelleştirme

### Renkler
Renkler `css/style.css` dosyasındaki CSS değişkenlerinde tanımlı:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Yeni Uygulama Ekleme
`index.html` dosyasındaki `#appsGrid` içine yeni bir app-card ekleyin:

```html
<div class="app-card">
    <div class="app-icon">🎯</div>
    <h3 class="app-title">Yeni Uygulama</h3>
    <p class="app-description">Açıklama buraya...</p>
    <div class="app-features">
        <span class="feature-tag">Özellik 1</span>
        <span class="feature-tag">Özellik 2</span>
    </div>
    <div class="app-tech">
        <span class="tech-badge">Teknoloji 1</span>
        <span class="tech-badge">Teknoloji 2</span>
    </div>
    <div class="app-actions">
        <button class="btn btn-outline">Detayları Gör</button>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 480px

## 🔧 Geliştirme Notları

- Saf HTML, CSS ve JavaScript kullanıldı (framework yok)
- Modern CSS özellikleri kullanıldı (Grid, Flexbox, CSS Variables)
- Intersection Observer API ile scroll animasyonları
- Smooth scrolling için native JavaScript

## 🌐 Deployment

### İlk Deployment

Detaylı deployment rehberi için: **[DEPLOY.md](DEPLOY.md)**

1. **GitHub Pages** (Önerilen)
   - Repository'yi GitHub'a push edin
   - Settings > Pages > Source: main branch seçin
   - Website otomatik olarak yayınlanacak

### Güncelleme ve Deploy

Website'yi güncelledikten sonra deploy etmek için: **[GUNCELLEME_REHBERI.md](GUNCELLEME_REHBERI.md)**

**Hızlı Komutlar:**
```bash
git add .
git commit -m "Değişiklik açıklaması"
git push
```

Website otomatik olarak 1-2 dakika içinde güncellenecektir.

### Alternatif Hosting Seçenekleri

2. **Netlify**
   - Netlify'e drag & drop yapın
   - Veya GitHub ile bağlayın

3. **Vercel**
   - Vercel CLI veya dashboard kullanın

4. **Geleneksel Hosting**
   - Tüm dosyaları FTP ile yükleyin

## 📝 İletişim Formu

Şu anda form sadece frontend tarafında çalışıyor. Gerçek bir form gönderimi için:

1. Backend API endpoint'i oluşturun
2. `js/main.js` dosyasındaki form submit handler'ını güncelleyin
3. Form verilerini API'ye gönderin

Örnek backend entegrasyonu için bir email servisi (EmailJS, Formspree, vb.) kullanabilirsiniz.

## 🔮 Gelecek Geliştirmeler

- [ ] Blog bölümü ekleme
- [ ] Portfolyo detay sayfaları
- [ ] Çoklu dil desteği (i18n)
- [ ] Dark mode
- [ ] Form backend entegrasyonu
- [ ] SEO optimizasyonu
- [ ] Performance optimizasyonu
- [ ] Progressive Web App (PWA) desteği

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Happy Coding! 🚀**

