import codecs
import re

with codecs.open('index.html', 'r', 'utf-8') as f:
    content = f.read()

# The garbage is right after the new CTA section's closing </section>
# It looks like: </section>brand-item"><img ... </div> ... </section> \n </main>
# We want to replace </section>brand-item"... to </main> with </section>\n  </main>

pattern = re.compile(r'</section>brand-item".*?</main>', re.DOTALL)
content = pattern.sub(r'</section>\n  </main>', content)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(content)
