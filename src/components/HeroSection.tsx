import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, MapPin } from 'lucide-react';
import profileImg from '@/assets/profile.png';

export function HeroSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-sky-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-sky-light text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span>✨</span>
              <span>{t('Software Engineer @ Microsoft · Tech Career Mentor', '마이크로소프트 소프트웨어 엔지니어 · 테크 커리어 멘토')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {lang === 'en' ? (
                <>From Arts Major to <span className="text-primary">Microsoft</span> Engineer</>
              ) : (
                <>예술전공에서 <span className="text-primary">마이크로소프트</span> 엔지니어로</>
              )}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed">
              {t(
                "Versatile Software Engineer · NPO Volunteer · Career Pivoter · Women's Empowerment Advocate",
                '다재다능한 소프트웨어 엔지니어 · NPO 봉사자 · 커리어 피보터 · 여성 역량 강화 옹호자'
              )}
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {t(
                "Let's navigate your tech journey together. Everyone has what it takes — you just need the right map.",
                '함께 테크 여정을 헤쳐나가요. 누구나 할 수 있어요 — 올바른 길잡이가 필요할 뿐이죠.'
              )}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mb-8">
              <MapPin size={16} className="text-primary" />
              <span>Seattle, Washington, United States</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="#contact">{t('Book a Talk', '강연 신청하기')}</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-sky-light" asChild>
                <a href="#about">{t('Learn More', '더 알아보기')}</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-72 md:w-80 md:h-[22rem] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-accent/30">
                <img
                  src={profileImg}
                  alt="Hyesun An - Software Engineer at Microsoft"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground px-4 py-2 rounded-2xl font-semibold text-sm shadow-lg">
                {t('🚀 Microsoft Engineer', '🚀 마이크로소프트 엔지니어')}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs">{t('Scroll', '스크롤')}</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
