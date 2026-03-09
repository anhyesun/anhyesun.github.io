import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Newspaper, Video, Globe } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface PressItem {
  icon: typeof Newspaper;
  outlet: { en: string; ko: string };
  title: { en: string; ko: string };
  desc: { en: string; ko: string };
  date: string;
  url: string;
  color: string;
}

const pressItems: PressItem[] = [
  {
    icon: Video,
    outlet: { en: 'Radio Korea Seattle', ko: '시애틀 라디오한국' },
    title: { en: 'Tech Trends and Life in Seattle', ko: "실시간 '요즘 우리는'" },
    desc: { en: 'Live interview discussing tech trends and life as a Korean professional in Seattle', ko: '시애틀 한인 전문가로서의 삶과 테크 트렌드를 다룬 라이브 인터뷰' },
    date: 'Sep 18, 2025',
    url: 'https://www.youtube.com/live/zW2RsmqLW-4?si=EN12MVQzqyvrSuYn',
    color: 'bg-destructive/10 text-destructive',
  },
  {
    icon: Newspaper,
    outlet: { en: 'Joy Seattle', ko: 'Joy Seattle' },
    title: { en: 'Korean Students Must Keep Up with AI Trends', ko: '안혜선 창발회장 "한인 학생들, AI 트렌드 따라가야"' },
    desc: { en: 'Interview on the importance of AI trends for Korean students in tech', ko: 'AI 트렌드를 따라가야 하는 한인 학생들에 대한 인터뷰' },
    date: 'May 20, 2025',
    url: 'https://www.joyseattle.com/news/59408',
    color: 'bg-sky-light text-primary',
  },
  {
    icon: Globe,
    outlet: { en: 'Vancouver Chosun Ilbo', ko: '밴쿠버 조선일보' },
    title: { en: 'From Marketer to Big Tech Developer', ko: '"마케터에서 빅테크 개발자로… 출신 배경이 강점 됐죠"' },
    desc: { en: 'Feature on how a marketing background became a strength in big tech', ko: '마케팅 배경이 빅테크에서 강점이 된 이야기' },
    date: 'Mar 21, 2025',
    url: 'https://www.vanchosun.com/news/main/frame.php?main=1&boardId=17&bdId=83419',
    color: 'bg-yellow-light text-accent-foreground',
  },
  {
    icon: Newspaper,
    outlet: { en: 'The Korea Economic Daily', ko: '한국경제' },
    title: { en: 'Networking is Essential to Break the Glass Ceiling', ko: '"미 빅테크엔 한인 CEO 없어.. 울타리 넘는 네트워킹 필수"' },
    desc: { en: 'Interview on the importance of networking to break barriers in big tech', ko: '빅테크의 유리천장을 깨기 위한 네트워킹의 중요성' },
    date: 'Dec 18, 2024',
    url: 'https://www.hankyung.com/article/2024121856661',
    color: 'bg-sky-light text-primary',
  },
  {
    icon: Video,
    outlet: { en: 'DevTalk YouTube', ko: 'DevTalk 유튜브' },
    title: { en: 'From Math-Abandoner to Microsoft Developer', ko: '수포자에서 마이크로소프트 개발자로' },
    desc: { en: 'Video interview on the journey from struggling with math to becoming a Microsoft developer', ko: '수학을 포기했던 학생에서 마이크로소프트 개발자가 되기까지의 여정' },
    date: 'Sep 22, 2024',
    url: 'https://youtu.be/GHJAuZbnb1A?si=ZgD0KZ181-uSw7TN',
    color: 'bg-destructive/10 text-destructive',
  },
];

export function PressSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
            {t('Media & Press', '미디어 & 언론')}
          </p>
          <h2 className="text-3xl md:text-4xl">
            {t('In the News', '언론 보도')}
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                  <item.icon size={22} />
                </div>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {lang === 'en' ? item.outlet.en : item.outlet.ko}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">
                {lang === 'en' ? item.title.en : item.title.ko}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {lang === 'en' ? item.desc.en : item.desc.ko}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:underline">
                {t('Read More', '더 보기')} <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
