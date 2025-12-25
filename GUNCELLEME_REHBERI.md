# 🔄 Website Güncelleme ve Deploy Rehberi

Bu rehber website'yi güncelledikten sonra GitHub'a push edip yayınlamanız için adımları içerir.

## 📝 Hızlı Başlangıç

Website'de bir değişiklik yaptıktan sonra, şu 3 adımı takip edin:

```bash
# 1. Değişiklikleri ekle
git add .

# 2. Commit yap (değişiklikleri açıkla)
git commit -m "Değişiklik açıklaması buraya"

# 3. GitHub'a gönder
git push
```

## 🚀 Detaylı Adımlar

### 1. Terminal/PowerShell'i Açın

Website klasörüne gidin:

```bash
cd C:\projrcts\newFolder\website
```

### 2. Yapılan Değişiklikleri Kontrol Edin

Hangi dosyaların değiştiğini görmek için:

```bash
git status
```

Bu komut size hangi dosyaların değiştirildiğini, eklenip eklenmediğini gösterir.

### 3. Değişiklikleri Staging Area'ya Ekleyin

**Tüm değişiklikleri eklemek için:**
```bash
git add .
```

**Sadece belirli bir dosyayı eklemek için:**
```bash
git add index.html
git add css/style.css
# vs...
```

### 4. Commit Yapın (Değişiklikleri Kaydedin)

Her commit'in açıklayıcı bir mesajı olmalı:

```bash
git commit -m "Açıklayıcı mesaj buraya"
```

**İyi commit mesajı örnekleri:**
```bash
git commit -m "Ana sayfa tasarımını güncelle"
git commit -m "Yeni uygulama kartı eklendi"
git commit -m "İletişim formu düzeltildi"
git commit -m "Mobil responsive iyileştirmeleri"
git commit -m "Play Store linki güncellendi"
```

### 5. GitHub'a Push Edin

Değişiklikleri GitHub'a göndermek için:

```bash
git push
```

İlk seferinde kullanıcı adı ve şifre isteyebilir. GitHub Personal Access Token kullanmanız gerekebilir.

### 6. Otomatik Deploy

Push işlemi tamamlandıktan sonra:

- GitHub Actions otomatik olarak devreye girer
- Website otomatik olarak build edilir ve deploy edilir
- Birkaç dakika içinde website güncellenir

## 📊 Deployment Durumunu Kontrol Etme

### GitHub'da Kontrol

1. Repository sayfanıza gidin: https://github.com/orhan5665/app-portfolio-website
2. **Actions** sekmesine tıklayın
3. En üstteki workflow'un durumunu kontrol edin:
   - ✅ Yeşil tik = Başarılı
   - ⏳ Sarı daire = Devam ediyor
   - ❌ Kırmızı X = Hata var

### Website'de Kontrol

Push'tan 1-2 dakika sonra:
- Website'yi açın: https://orhan5665.github.io/app-portfolio-website/
- Sayfayı yenileyin (Ctrl+F5 veya Cmd+Shift+R)
- Değişikliklerin göründüğünden emin olun

## 🔍 Sık Kullanılan Senaryolar

### Senaryo 1: Sadece HTML Güncelleme

```bash
# HTML dosyasını düzenlediniz
git add index.html
git commit -m "Ana sayfa içeriği güncellendi"
git push
```

### Senaryo 2: CSS Değişiklikleri

```bash
# CSS dosyasını düzenlediniz
git add css/style.css
git commit -m "Renk şeması ve responsive tasarım iyileştirmeleri"
git push
```

### Senaryo 3: JavaScript Değişiklikleri

```bash
# JavaScript dosyasını düzenlediniz
git add js/main.js
git commit -m "Form validasyonu eklendi"
git push
```

### Senaryo 4: Yeni Uygulama Eklendi

```bash
# index.html'e yeni uygulama kartı eklediniz
git add index.html
git commit -m "Yeni uygulama: [Uygulama Adı] eklendi"
git push
```

### Senaryo 5: Çoklu Dosya Değişikliği

```bash
# Birden fazla dosyayı düzenlediniz
git add index.html css/style.css js/main.js
git commit -m "Genel tasarım güncellemesi"
git push
```

### Senaryo 6: Hepsini Güncelle

```bash
# Tüm değişiklikleri ekle
git add .
git commit -m "Kapsamlı site güncellemesi"
git push
```

## ⚠️ Sorun Giderme

### "Changes not staged for commit" Hatası

Bu, değişikliklerin henüz staging area'ya eklenmediği anlamına gelir:

```bash
git add .
git commit -m "Mesaj"
```

### "Nothing to commit" Mesajı

Bu, tüm değişikliklerin zaten commit edildiği anlamına gelir. Yeni bir değişiklik yapmanız gerekir.

### Push Hatası: Authentication Failed

GitHub kimlik doğrulama sorunu:

1. GitHub Personal Access Token kullanın (şifre yerine)
2. Veya GitHub Desktop uygulamasını kullanın

**Personal Access Token oluşturma:**
1. GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
2. "Generate new token" butonuna tıklayın
3. "repo" iznini seçin
4. Token'ı kopyalayın ve şifre yerine kullanın

### Website Güncellenmedi

1. Birkaç dakika bekleyin (deploy zaman alabilir)
2. Tarayıcı cache'ini temizleyin (Ctrl+Shift+Delete)
3. Hard refresh yapın (Ctrl+F5)
4. GitHub Actions'ta hata olup olmadığını kontrol edin

### Yanlış Commit Mesajı

Eğer commit mesajını değiştirmek isterseniz:

```bash
git commit --amend -m "Yeni mesaj"
git push --force
```

⚠️ **Dikkat:** Force push sadece kendi branch'inizde yapın, başkalarıyla çalışıyorsanız dikkatli olun.

## 📱 GitHub Desktop Kullanımı (Alternatif)

Eğer komut satırı kullanmak istemiyorsanız, GitHub Desktop uygulamasını kullanabilirsiniz:

1. **GitHub Desktop'ı indirin:** https://desktop.github.com/
2. Repository'nizi açın
3. Değişiklikleri görün
4. Sol alt köşede commit mesajı yazın
5. "Commit to main" butonuna tıklayın
6. "Push origin" butonuna tıklayın

## 🎯 Best Practices (En İyi Uygulamalar)

### 1. Anlamlı Commit Mesajları

✅ **İyi:**
```bash
git commit -m "Uygulama kartlarına hover efekti eklendi"
git commit -m "Mobil menü düzeltildi"
git commit -m "Play Store linkini güncelle"
```

❌ **Kötü:**
```bash
git commit -m "güncelleme"
git commit -m "değişiklik"
git commit -m "fix"
```

### 2. Sık Commit Yapın

Küçük, anlamlı değişiklikler için sık sık commit yapın. Büyük değişiklikleri tek seferde commit etmekten kaçının.

### 3. Push Öncesi Kontrol

Push etmeden önce:
```bash
git status    # Değişiklikleri kontrol et
git diff      # Değişiklikleri incele
```

### 4. Test Edin

Mümkünse, push etmeden önce değişiklikleri yerel olarak test edin:
- `index.html` dosyasını tarayıcıda açın
- Görünümü kontrol edin
- Linklerin çalıştığından emin olun

## 📋 Hızlı Referans Komutları

```bash
# Durum kontrolü
git status

# Değişiklikleri görüntüle
git diff

# Tüm değişiklikleri ekle
git add .

# Commit yap
git commit -m "Mesaj"

# GitHub'a gönder
git push

# Commit geçmişini görüntüle
git log --oneline

# Son commit'i iptal et (değişiklikler durur)
git reset --soft HEAD~1
```

## 🔗 Faydalı Linkler

- **Website:** https://orhan5665.github.io/app-portfolio-website/
- **Repository:** https://github.com/orhan5665/app-portfolio-website
- **GitHub Actions:** https://github.com/orhan5665/app-portfolio-website/actions
- **GitHub Pages Settings:** https://github.com/orhan5665/app-portfolio-website/settings/pages

---

**Not:** Her push işleminden sonra website otomatik olarak 1-2 dakika içinde güncellenecektir. Sabırlı olun! 🚀




