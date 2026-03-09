import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import devfest1 from '@/assets/speaking/devfest-incheon-1.jpg';
import devfest2 from '@/assets/speaking/devfest-incheon-2.jpg';
import dddSeoul from '@/assets/speaking/ddd-seoul-2025.png';
import kddVancouver from '@/assets/speaking/kdd-vancouver.jpg';
import oktaPoster from '@/assets/speaking/okta-conference-poster.jpg';
import oktaSpeaking from '@/assets/speaking/okta-speaking.jpg';

interface GalleryItem {
  src: string;
  title: { en: string; ko: string };
  subtitle: { en: string; ko: string };
  span?: string;
}

const items: GalleryItem[] = [
  {
    src: devfest1,
    title: { en: 'DevFest Incheon 2025', ko: '구글 DevFest 인천 2025' },
    subtitle: { en: 'Speaking on career pivot from arts to engineering', ko: '예술전공에서 엔지니어로의 커리어 전환 강연' },
    span: 'md:col-span-1',
  },
  {
    src: devfest2,
    title: { en: 'DevFest Incheon 2025', ko: 'DevFest 인천 2025' },
    subtitle: { en: 'Packed room at Google Developer Fest', ko: '가득 찬 구글 개발자 축제 강연장' },
    span: 'md:col-span-2',
  },
  {
    src: dddSeoul,
    title: { en: 'DDD Seoul 2025', ko: 'DDD 서울 2025' },
    subtitle: { en: 'Featured Keynote Speaker', ko: '초청 기조 연사' },
    span: 'md:col-span-1',
  },
  {
    src: kddVancouver,
    title: { en: 'KDD Vancouver', ko: '밴쿠버 KDD' },
    subtitle: { en: 'Korean IT Professionals Community Talk', ko: '밴쿠버 한인 IT 전문가 커뮤니티 강연' },
    span: 'md:col-span-1',
  },
  {
    src: oktaPoster,
    title: { en: 'OKTA Emerging Leaders 2025', ko: 'OKTA 차세대 리더 컨퍼런스 2025' },
    subtitle: { en: '"The Paradox of Networking: How Givers Become Leaders"', ko: '"네트워킹의 역설: Giver는 어떻게 리더가 되는가"' },
    span: 'md:col-span-1',
  },
  {
    src: oktaSpeaking,
    title: { en: 'OKTA Conference — Speaking', ko: 'OKTA 컨퍼런스 — 발표' },
    subtitle: { en: 'At Korean Consulate General, Seattle', ko: '주시애틀 대한민국 총영사관에서' },
    span: 'md:col-span-1',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function SpeakingSection() {
  const { lang, t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((v) => (v !== null ? (v - 1 + items.length) % items.length : null));
  const next = () => setLightbox((v) => (v !== null ? (v + 1) % items.length : null));

  return (
    <section id="speaking" className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
            {t('Speaking & Gallery', '강연 & 갤러리')}
          </p>
          <h2 className="text-3xl md:text-4xl mb-4">
            {t('On Stage', '무대 위에서')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(
              'Sharing stories of career transitions, networking, and growth at conferences across the globe.',
              '전 세계 컨퍼런스에서 커리어 전환, 네트워킹, 성장에 대한 이야기를 나눕니다.'
            )}
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.span || ''}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={item.src}
                alt={lang === 'en' ? item.title.en : item.title.ko}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <div className="text-primary-foreground font-semibold text-sm font-sans">
                    {lang === 'en' ? item.title.en : item.title.ko}
                  </div>
                  <div className="text-primary-foreground/80 text-xs mt-1 font-sans">
                    {lang === 'en' ? item.subtitle.en : item.subtitle.ko}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[lightbox].src}
                alt={lang === 'en' ? items[lightbox].title.en : items[lightbox].title.ko}
                className="max-h-[75vh] max-w-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <div className="text-primary-foreground font-semibold font-sans">
                  {lang === 'en' ? items[lightbox].title.en : items[lightbox].title.ko}
                </div>
                <div className="text-primary-foreground/70 text-sm mt-1 font-sans">
                  {lang === 'en' ? items[lightbox].subtitle.en : items[lightbox].subtitle.ko}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
