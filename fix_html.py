import codecs
import re

with codecs.open('index.html', 'r', 'utf-8') as f:
    content = f.read()

# We need to fix the area from: <h2 class="section-title" data-i18n="app_title">...</h2>
# to the start of <div class="marquee fade-up delay-1">
# and insert the missing apps-grid and brands-section header.

missing_part = """</div>
        
        <div class="apps-grid">
          
          <!-- Card 1: Passenger Cars -->
          <div class="app-card-premium app-small fade-up">
            <div class="app-visual">
              <img src="/nissan_sunny_styled_1784202976019.png" alt="Passenger Cars" class="app-img">
              <div class="app-overlay"></div>
            </div>
            <div class="app-content">
              <h3 class="app-title" data-i18n="app_1_title">سيارات ملاكي</h3>
              <p class="app-desc" data-i18n="app_1_desc">حلول فلترة للمركبات اليومية</p>
            </div>
          </div>

          <!-- Card 2: Heavy Trucks -->
          <div class="app-card-premium app-large fade-up delay-1">
            <div class="app-visual">
              <img src="/mercedes_actros_truck_1784202308841.png" alt="Heavy Trucks" class="app-img">
              <div class="app-overlay"></div>
            </div>
            <div class="app-content">
              <h3 class="app-title" data-i18n="app_2_title">الشاحنات الثقيلة</h3>
              <p class="app-desc" data-i18n="app_2_desc">أداء موثوق للمركبات الثقيلة</p>
            </div>
          </div>

          <!-- Card 3: Equipment -->
          <div class="app-card-premium app-small fade-up delay-2">
            <div class="app-visual">
              <img src="/heavy_loader_equipment_1784202202396.png" alt="Heavy Equipment" class="app-img">
              <div class="app-overlay"></div>
            </div>
            <div class="app-content">
              <h3 class="app-title" data-i18n="app_3_title">المعدات</h3>
              <p class="app-desc" data-i18n="app_3_desc">حلول فلترة للمعدات والتطبيقات الشاقة</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- BRANDS -->
    <section id="brands" class="brands-section">
      <div class="container">
        <div class="brands-header fade-up">
          <h2 class="section-title" data-i18n="brands_title">العلامات التجارية التي ندعمها</h2>
          <p class="brands-subtitle" data-i18n="brands_subtitle">نوفر فلاتر أصلية وعالية الجودة لمجموعة واسعة من أشهر شركات السيارات والمعدات حول العالم.</p>
        </div>
      </div>
"""

# Fix the missing part between the app_title h2 and the marquee
pattern = re.compile(r'(<h2 class="section-title" data-i18n="app_title">.*?</h2>)\s*<div class="marquee fade-up delay-1">', re.DOTALL)
content = pattern.sub(r'\1\n' + missing_part + '      <div class="marquee fade-up delay-1">', content)

# Remove the old CTA section that was duplicated at the bottom
# It starts with <!-- CALL TO ACTION --> and ends before </main>
pattern2 = re.compile(r'<!-- CALL TO ACTION -->.*?</section>\s*</main>', re.DOTALL)
content = pattern2.sub('</main>', content)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(content)
