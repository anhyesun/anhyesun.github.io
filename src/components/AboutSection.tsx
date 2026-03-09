import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, GraduationCap, Users, Code } from 'lucide-react';
import teamsImg from '@/assets/teams-hyesun.png';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function AboutSection() {
  const { lang, t } = useLanguage();

  const stats = [
    { icon: Briefcase, value: '5+', label: t('Years in Marketing', '마케팅 경력'), sub: t('Smilegate, Seoul', '스마일게이트, 서울') },
    { icon: GraduationCap, value: 'UBC', label: t('BCS Degree', '컴퓨터공학 학사'), sub: t('Vancouver, Canada', '밴쿠버, 캐나다') },
    { icon: Code, value: 'SWE', label: t('Microsoft', '마이크로소프트'), sub: t('Redmond, WA', '레드몬드, WA') },
    { icon: Users, value: t('President', '회장'), label: t('Changbal Society', '창발'), sub: t('Korean Professional Community', '한인 전문가 커뮤니티') },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
            {t('About Me', '소개')}
          </p>
          <h2 className="text-3xl md:text-4xl mb-4">
            {t('From Marketing to Microsoft', '마케팅에서 마이크로소프트까지')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('A Story of Reinvention', '재발명의 이야기')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div {...fadeUp}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {t(
                  "Hi, I'm Hyesun! I hold a BBA and BA in Korean Language & Literature from Sungshin Women's University, and spent 5 years as an Assistant PM in game marketing at Smilegate in Seoul — analyzing KPIs, cutting budgets by 20%, and leading UI/UX revisions.",
                  "안녕하세요, 안혜선입니다! 성신여자대학교에서 경영학과 국어국문학 학사를 취득한 후, 스마일게이트에서 5년간 마케팅, 경영전략가로 KPI 분석, 경영 계획, 기업 브랜드 UI/UX 개선 프로젝트 등을 주도했습니다."
                )}
              </p>
              <p>
                {t(
                  "I made a bold pivot into tech — moving to Vancouver and earning my Bachelor of Computer Science from UBC. Along the way, I interned at SAP (Performance & Reliability Team), Citi, and Microsoft, co-founded Champ (a social habit app), and joined Microsoft full-time as a Software Engineer in Redmond.",
                  "이후 밴쿠버로 이주해 UBC에서 컴퓨터공학 학사를 취득했습니다. SAP, Citi, Microsoft에서 인턴십을 거치고, 습관 기르기 앱 Champ를 공동창업한 뒤, 현재 레드몬드 마이크로소프트에서 소프트웨어 엔지니어로 근무하고 있습니다."
                )}
              </p>
              <p>
                {t(
                  "Today I work on the Teams Meetings Lifecycle & Virtual Appointment team, building features with .NET 8, TypeScript, ReactJS, GraphQL, and Apollo Client. Outside of code, I serve as the President of Changbal, a community for Korean professionals, and love mentoring aspiring developers navigating career transitions.",
                  "현재 Teams Meetings Lifecycle & Virtual Appointment 팀에서 .NET 8, TypeScript, ReactJS, GraphQL, Apollo Client로 기능을 개발하고 있습니다. 업무 외에는 한인 전문가 커뮤니티 '창발'의 회장으로서 커리어 전환을 꿈꾸는 개발자들을 멘토링하고 있습니다."
                )}
              </p>
            </div>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['React.js', 'TypeScript', 'C#', '.NET 8', 'GraphQL', 'Kubernetes', 'Docker', 'Python', 'Java', 'Node.js'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-sky-light text-primary rounded-full text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
              <span>🇺🇸 {t('English (Full Professional)', '영어 (비즈니스급)')}</span>
              <span>🇰🇷 {t('Korean (Native)', '한국어 (원어민)')}</span>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl w-full max-w-md">
              <img
                src={teamsImg}
                alt={t('Hyesun An at Microsoft Teams', '마이크로소프트 Teams에서의 안혜선')}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Education row */}
        <motion.div {...fadeUp} className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="bg-card rounded-2xl border border-border p-5 flex gap-4 items-start shadow-sm">
            <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-foreground font-sans">{t('The University of British Columbia', 'UBC (브리티시컬럼비아 대학교)')}</div>
              <div className="text-sm text-muted-foreground">{t('Bachelor of Computer Science', '컴퓨터공학 학사')} · 2018–2023</div>
            </div>
          </div>
          <div className="bg-card rounded-2xl border border-border p-5 flex gap-4 items-start shadow-sm">
            <GraduationCap className="w-6 h-6 text-accent-foreground flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-foreground font-sans">{t("Sungshin Women's University", '성신여자대학교')}</div>
              <div className="text-sm text-muted-foreground">{t('BBA & BA in Korean Language & Literature', '경영학사 & 국어국문학 학사')} · 2005–2010</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-sm font-medium text-foreground">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
