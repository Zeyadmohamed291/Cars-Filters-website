import codecs
import re

with codecs.open('index.html', 'r', 'utf-8') as f:
    content = f.read()

missing_code = """              <div class="cta-feat-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span data-i18n="cta_feat_4">دعم فني</span>
              </div>
            </div>

            <div class="cta-buttons-wrapper">
              <a href="https://wa.me/201013088804" target="_blank" class="btn btn-premium-red" data-i18n="btn_contact_us">تواصل معنا</a>
            </div>
          </div>
          
          <div class="cta-visual">
            <div class="cta-image-glow"></div>
            <img src="/cta_filters_3d.png" alt="Premium Filters" class="cta-3d-image floating-anim">
          </div>
        </div>
      </div>
    </section>"""

# Replace the broken part
pattern = re.compile(r'<div class="cta-feat-item">\s*</div>\s*</div>\s*</section>', re.DOTALL)
content = pattern.sub(missing_code, content)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(content)
