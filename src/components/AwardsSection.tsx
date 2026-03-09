import { Award, Heart, Star, Trophy } from 'lucide-react';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function AwardsSection() {
  const { lang, t } = useLanguage();

  const awards = [
    {
      icon: Trophy,
      title: { en: 'Hack4Health — 1st Place', ko: 'Hack4Health — 1위' },
      subtitle: { en: 'Champ App · Hackathon', ko: 'Champ 앱 · 해커톤' },
      desc: {
        en: 'Won first place with Champ, a social habit-building app, at the Hack4Health hackathon.',
        ko: '소셜 습관 앱 Champ로 Hack4Health 해커톤에서 1위를 차지했습니다.',
      },
      color: 'text-accent',
    },
    {
      icon: Trophy,
      title: { en: 'OPPOHack — 2nd Place (Seeding Group)', ko: 'OPPOHack — 2위 (시딩 그룹)' },
      subtitle: { en: 'Champ App · Hackathon', ko: 'Champ 앱 · 해커톤' },
      desc: {
        en: 'Placed 2nd in the seeding group at OPPOHack with the Champ team.',
        ko: 'Champ 팀으로 OPPOHack 시딩 그룹에서 2위를 차지했습니다.',
      },
      color: 'text-accent',
    },
    {
      icon: Award,
      title: { en: 'SAP Analysts Champion — nwHacks 2020', ko: 'SAP Analysts Champion — nwHacks 2020' },
      subtitle: { en: 'Largest Hackathon in Pacific Northwest', ko: '태평양 북서부 최대 해커톤' },
      desc: {
        en: 'Recognized as SAP Analysts Champion at nwHacks, the largest hackathon in the Pacific Northwest.',
        ko: '태평양 북서부 최대 해커톤 nwHacks에서 SAP Analysts Champion으로 선정되었습니다.',
      },
      color: 'text-primary',
    },
    {
      icon: Award,
      title: { en: 'MLH Best Use of Blockstack Award & Wolfram Award (Top 10)', ko: 'MLH Best Use of Blockstack Award & Wolfram Award (Top 10)' },
      subtitle: { en: 'Major League Hacking', ko: 'Major League Hacking' },
      desc: {
        en: 'Received MLH Best Use of Blockstack Award and Wolfram Award, finishing in the top 10.',
        ko: 'MLH Best Use of Blockstack Award와 Wolfram Award를 수상하며 상위 10위에 들었습니다.',
      },
      color: 'text-primary',
    },
    {
      icon: Heart,
      title: { en: 'VISIER Service Award — Women in Computer Science', ko: 'VISIER 봉사상 — 여성 컴퓨터과학' },
      subtitle: { en: 'UBC Women in CS Community', ko: 'UBC 여성 CS 커뮤니티' },
      desc: {
        en: 'Recognized for outstanding service and leadership in the Women in Computer Science community at UBC.',
        ko: 'UBC 여성 컴퓨터과학 커뮤니티에서의 탁월한 봉사 및 리더십으로 수상했습니다.',
      },
      color: 'text-secondary-foreground',
    },
    {
      icon: Star,
      title: { en: 'Grand Prize — UCC for Preventing Child Abuse Campaign', ko: '대상 — 아동학대 예방 UCC 공모전' },
      subtitle: { en: 'Community Awareness Campaign', ko: '커뮤니티 인식 캠페인' },
      desc: {
        en: 'Received grand prize for a UCC (User Created Content) campaign focused on preventing child abuse.',
        ko: '아동학대 예방을 주제로 한 UCC 공모전에서 대상인 보건복지부 장관상을 수상했습니다.',
      },
      color: 'text-accent-foreground',
    },
    {
      icon: Star,
      title: { en: 'The 3rd Place Popular Vote', ko: '대중 투표 3위' },
      subtitle: { en: 'Community Recognition', ko: '커뮤니티 인정' },
      desc: {
        en: 'Earned the 3rd place popular vote award.',
        ko: '대중 투표에서 3위를 수상했습니다.',
      },
      color: 'text-muted-foreground',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
            {t('Awards & Recognition', '수상 경력')}
          </p>
          <h2 className="text-3xl md:text-4xl">
            {t('Honors & Awards', '수상 및 수상 경력')}
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-4">
          {awards.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-5 bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className={`flex-shrink-0 mt-1 ${a.color}`}>
                <a.icon size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground font-sans">
                  {lang === 'en' ? a.title.en : a.title.ko}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {lang === 'en' ? a.subtitle.en : a.subtitle.ko}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {lang === 'en' ? a.desc.en : a.desc.ko}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
