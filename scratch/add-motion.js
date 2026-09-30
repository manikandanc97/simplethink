const fs = require('fs');

function wrapHero() {
  let content = fs.readFileSync('components/workbench/workbench-hero.tsx', 'utf8');

  // Add import if not present
  if (!content.includes('motion/react')) {
    content = content.replace(
      'import { HeroGridAccents } from "./hero-grid-accents";', 
      'import { HeroGridAccents } from "./hero-grid-accents";\nimport { motion } from "motion/react";\n\nconst containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };\nconst itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 } } };'
    );
  }

  // Background
  content = content.replace(
    '<HeroGridAccents />', 
    '<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 pointer-events-none"><HeroGridAccents /></motion.div>'
  );

  // Text Col
  content = content.replace(
    '<div className="hero-text-col', 
    '<motion.div variants={containerVariants} initial="hidden" animate="visible" className="hero-text-col'
  );
  content = content.replace(
    /<\/div>(\s*)<div\s+className="hero-artwork/g, 
    '</motion.div>$1<div className="hero-artwork'
  );

  // Headline
  content = content.replace(
    /<h1(\s+className="font-satoshi)/g, 
    '<motion.h1 variants={itemVariants}$1'
  );
  content = content.replace(/<\/h1>/g, '</motion.h1>');

  // Paragraph
  content = content.replace(
    /<p(\s+className="hero-desc)/g, 
    '<motion.p variants={itemVariants}$1'
  );
  content = content.replace(/<\/p>/g, '</motion.p>');

  // CTA wrapper
  content = content.replace(
    '<div className="flex flex-col gap-8 sm:gap-16 w-full">', 
    '<motion.div variants={itemVariants} className="flex flex-col gap-8 sm:gap-16 w-full">'
  );
  content = content.replace(
    '</button>\r\n            </div>\r\n\r\n            </div>', 
    '</button>\r\n            </div>\r\n\r\n            </motion.div>'
  );
  content = content.replace(
    '</button>\n            </div>\n\n            </div>', 
    '</button>\n            </div>\n\n            </motion.div>'
  );

  // SVG
  content = content.replace(
    '<svg ', 
    '<motion.svg initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }} '
  );
  content = content.replace('</svg>', '</motion.svg>');
  content = content.replace(
    /<path /g, 
    '<motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.8 }} '
  );
  content = content.replace(/<\/path>/g, '</motion.path>');

  // Artwork
  content = content.replace(
    '<div\r\n            className="hero-artwork', 
    '<motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}\r\n            className="hero-artwork'
  );
  content = content.replace(
    '<div\n            className="hero-artwork', 
    '<motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}\n            className="hero-artwork'
  );
  content = content.replace(/<Hero3DCoder \/>\r\n          <\/div>/g, '<Hero3DCoder />\r\n          </motion.div>');
  content = content.replace(/<Hero3DCoder \/>\n          <\/div>/g, '<Hero3DCoder />\n          </motion.div>');

  // Scroll Button
  content = content.replace(
    '<button\r\n        type="button"\r\n        id="hero-scroll-indicator"', 
    '<motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }} \r\n        type="button"\r\n        id="hero-scroll-indicator"'
  );
  content = content.replace(
    '<button\n        type="button"\n        id="hero-scroll-indicator"', 
    '<motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }} \n        type="button"\n        id="hero-scroll-indicator"'
  );
  content = content.replace('</button>\r\n    </section>', '</motion.button>\r\n    </section>');
  content = content.replace('</button>\n    </section>', '</motion.button>\n    </section>');

  fs.writeFileSync('components/workbench/workbench-hero.tsx', content);
  console.log("Hero updated");
}

function wrapWhatWeBuild() {
  let content = fs.readFileSync('components/sections/what-we-build.tsx', 'utf8');
  if (!content.includes('motion/react')) {
    content = content.replace(
      'import { Container } from "@/components/ui/container";',
      'import { Container } from "@/components/ui/container";\nimport { motion } from "motion/react";'
    );
  }
  
  content = content.replace(
    '<SectionHeader',
    '<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring" }} viewport={{ once: true, margin: "-100px" }}>\n          <SectionHeader'
  );
  
  content = content.replace(
    '        />\n\n        <div ref={parallaxWrapperRef} className="w-full">',
    '        />\n        </motion.div>\n\n        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, margin: "-100px" }} ref={parallaxWrapperRef} className="w-full">'
  );
  content = content.replace(
    '        />\r\n\r\n        <div ref={parallaxWrapperRef} className="w-full">',
    '        />\r\n        </motion.div>\r\n\r\n        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, margin: "-100px" }} ref={parallaxWrapperRef} className="w-full">'
  );
  
  content = content.replace(
    '          </div>\n        </div>\n\n        <WhatWeBuildNav',
    '          </div>\n        </motion.div>\n\n        <WhatWeBuildNav'
  );
  content = content.replace(
    '          </div>\r\n        </div>\r\n\r\n        <WhatWeBuildNav',
    '          </div>\r\n        </motion.div>\r\n\r\n        <WhatWeBuildNav'
  );

  fs.writeFileSync('components/sections/what-we-build.tsx', content);
  console.log("What we build updated");
}

wrapHero();
wrapWhatWeBuild();
