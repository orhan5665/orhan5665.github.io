"""
SVG'yi PNG veya JPEG'ye dönüştürmek için basit script.

Gereksinimler:
    pip install cairosvg pillow

Kullanım:
    python convert_to_png.py
"""

import os
import sys

def check_dependencies():
    """Gerekli kütüphanelerin yüklü olup olmadığını kontrol et."""
    try:
        import cairosvg
        from PIL import Image
        return True
    except ImportError:
        print("⚠️  Gerekli kütüphaneler yüklü değil!")
        print("\nYüklemek için şu komutu çalıştırın:")
        print("pip install cairosvg pillow")
        return False

def convert_svg_to_png(svg_path, output_path, size=512):
    """SVG'yi PNG'ye dönüştür."""
    try:
        import cairosvg
        from PIL import Image
        import io
        
        # SVG'yi PNG'ye dönüştür (yüksek çözünürlükte)
        png_data = cairosvg.svg2png(
            url=svg_path,
            output_width=size,
            output_height=size
        )
        
        # PNG'yi kaydet
        with open(output_path, 'wb') as f:
            f.write(png_data)
        
        # Dosya boyutunu kontrol et
        file_size = os.path.getsize(output_path) / 1024  # KB cinsinden
        print(f"✅ PNG oluşturuldu: {output_path}")
        print(f"   Boyut: {size}x{size} piksel")
        print(f"   Dosya boyutu: {file_size:.2f} KB")
        
        if file_size > 1024:  # 1 MB'dan büyükse
            print("⚠️  Uyarı: Dosya boyutu 1 MB'dan büyük!")
            print("   PNG kalitesini düşürmek için optimize edebilirsiniz.")
        
        return True
        
    except Exception as e:
        print(f"❌ Hata: {e}")
        return False

def convert_png_to_jpeg(png_path, jpeg_path, quality=95):
    """PNG'yi JPEG'ye dönüştür."""
    try:
        from PIL import Image
        
        # PNG'yi aç
        img = Image.open(png_path)
        
        # RGB'ye dönüştür (JPEG alfa kanalı desteklemez)
        if img.mode in ('RGBA', 'LA', 'P'):
            # Beyaz arka plan oluştur
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # JPEG olarak kaydet
        img.save(jpeg_path, 'JPEG', quality=quality, optimize=True)
        
        file_size = os.path.getsize(jpeg_path) / 1024  # KB cinsinden
        print(f"✅ JPEG oluşturuldu: {jpeg_path}")
        print(f"   Kalite: {quality}%")
        print(f"   Dosya boyutu: {file_size:.2f} KB")
        
        return True
        
    except Exception as e:
        print(f"❌ Hata: {e}")
        return False

def main():
    """Ana fonksiyon."""
    print("🎨 SVG'den PNG/JPEG Dönüştürücü\n")
    
    # Gerekli kütüphaneleri kontrol et
    if not check_dependencies():
        return
    
    # Dosya yolları
    script_dir = os.path.dirname(os.path.abspath(__file__))
    svg_file = os.path.join(script_dir, "developer-logo-optimized.svg")
    
    if not os.path.exists(svg_file):
        print(f"❌ SVG dosyası bulunamadı: {svg_file}")
        return
    
    print(f"📁 SVG dosyası: {svg_file}\n")
    
    # PNG oluştur
    png_file = os.path.join(script_dir, "developer-logo-512x512.png")
    print("🔄 PNG oluşturuluyor...")
    if convert_svg_to_png(svg_file, png_file, size=512):
        print()
        
        # JPEG oluştur
        jpeg_file = os.path.join(script_dir, "developer-logo-512x512.jpg")
        print("🔄 JPEG oluşturuluyor...")
        convert_png_to_jpeg(png_file, jpeg_file, quality=95)
        
        print("\n✨ Tamamlandı!")
        print(f"\n📄 Oluşturulan dosyalar:")
        print(f"   - {png_file}")
        print(f"   - {jpeg_file}")
        print(f"\n💡 Google Play Console için her iki format da kullanılabilir.")
        print(f"   Her iki dosya da 512x512 piksel ve 1 MB'dan küçük olmalı.")

if __name__ == "__main__":
    main()




