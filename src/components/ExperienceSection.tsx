import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface Job {
  company: string;
  title: { en: string; ko: string };
  period: { en: string; ko: string };
  location: { en: string; ko: string };
  bullets: { en: string[]; ko: string[] };
  color: string;
}

const jobs: Job[] = [
  {
    company: 'Microsoft',
    title: { en: 'Software Engineer', ko: '소프트웨어 엔지니어' },
    period: { en: 'Aug 2023 – Present · 2 yrs 8 mo', ko: '2023.08 – 현재 · 2년 8개월' },
    location: { en: 'Redmond, WA', ko: '레드몬드, WA' },
    color: 'bg-primary',
    bullets: {
      en: [
        'Full Stack Engineer on Microsoft Teams Meetings Lifecycle / Virtual Appointment team',
        'Infrastructure work with Kubernetes and Docker in .NET 8',
        'Security work including deprecating mTLS and disabling local Auth in Azure Cloud Services',
        'Developing new Teams features with TypeScript, C#, ReactJS, GraphQL, and Apollo Client',
      ],
      ko: [
        'Microsoft Teams Meetings Lifecycle / Virtual Appointment 팀 풀스택 엔지니어',
        '.NET 8 기반 Kubernetes 및 Docker 인프라 작업',
        'mTLS 폐기, Azure Cloud Services 로컬 인증 비활성화 등 보안 작업',
        'TypeScript, C#, ReactJS, GraphQL, Apollo Client로 Teams 신규 기능 개발',
      ],
    },
  },
  {
    company: 'Champ',
    title: { en: 'Co-Founder', ko: '공동창업자' },
    period: { en: 'Feb 2021 – Jul 2023 · 2 yrs 6 mo', ko: '2021.02 – 2023.07 · 2년 6개월' },
    location: { en: 'Vancouver, BC, Canada', ko: '밴쿠버, BC, 캐나다' },
    color: 'bg-accent',
    bullets: {
      en: [
        'Social app designed to help people reach goals and build positive habits',
        'Mentored by entrepreneurship@UBC CORE program – Phase 3, 2021 Winter cohort',
        'Won Hack4Health (1st Place) and OPPOHack (2nd in seeding group)',
        'Received $6,300 CAD as pre-seeding funds',
        'joinchampapp.com',
      ],
      ko: [
        '사람들이 목표를 달성하고 긍정적인 습관을 형성하도록 돕는 소셜 앱',
        'entrepreneurship@UBC CORE 프로그램(2021 Winter 코호트) 멘토링 수료',
        'Hack4Health 1위, OPPOHack 시딩 그룹 2위 수상',
        '프리시딩 펀딩 CAD $6,300 수령',
        'joinchampapp.com',
      ],
    },
  },
  {
    company: 'Microsoft',
    title: { en: 'Software Engineer Intern', ko: '소프트웨어 엔지니어 인턴' },
    period: { en: 'Jun 2022 – Sep 2022 · 4 mo', ko: '2022.06 – 2022.09 · 4개월' },
    location: { en: 'Redmond, WA', ko: '레드몬드, WA' },
    color: 'bg-primary',
    bullets: {
      en: [
        'Developed Windows 11 features for System Settings',
      ],
      ko: [
        'Windows 11 시스템 설정 기능 개발',
      ],
    },
  },
  {
    company: 'Citi',
    title: { en: 'Software Development Analyst Intern', ko: '소프트웨어 개발 분석가 인턴' },
    period: { en: 'May 2021 – Aug 2021 · 4 mo', ko: '2021.05 – 2021.08 · 4개월' },
    location: { en: 'Mississauga, ON, Canada', ko: '미시사가, ON, 캐나다' },
    color: 'bg-sky',
    bullets: {
      en: [
        'Developed integrated internal stock handling email system using Java and Gradle to improve security and efficiency',
        'Generated RPM package to build on TeamCity; logged all processes using Logback and SLF4J',
        'Wrote start/stop shell scripts to run the application on remote server; deployed with uDeploy',
      ],
      ko: [
        'Java와 Gradle을 이용한 사내 주식 처리 이메일 시스템 개발로 보안 및 효율성 향상',
        'TeamCity 빌드용 RPM 패키지 생성; Logback 및 SLF4J로 전 과정 로깅',
        '원격 서버 실행용 start/stop 셸 스크립트 작성 및 uDeploy로 배포',
      ],
    },
  },
  {
    company: 'SAP',
    title: { en: 'Software Engineer Intern', ko: '소프트웨어 엔지니어 인턴' },
    period: { en: 'May 2020 – Dec 2020 · 8 mo', ko: '2020.05 – 2020.12 · 8개월' },
    location: { en: 'Vancouver, BC, Canada', ko: '밴쿠버, BC, 캐나다' },
    color: 'bg-sky',
    bullets: {
      en: [
        'SAP HANA Analysts: Performance and Reliability Team',
        'Engineered automated data storage backup with GCP APIs, improving storage capacity',
        'Re-designed inefficient Jenkins pipelines with Groovy script, increasing automation chain availability',
        'Maintained performance testing chains; resolved functional bugs with Python, mitmproxy, and internal tools',
      ],
      ko: [
        'SAP HANA Analysts: 성능 및 안정성 팀 소속',
        'GCP API로 데이터 스토리지 백업 자동화 구축, 저장 용량 개선',
        'Groovy 스크립트로 비효율적인 Jenkins 파이프라인 재설계, 자동화 체인 가용성 향상',
        'Python, mitmproxy 및 내부 도구로 성능 테스트 체인 유지 및 기능 버그 수정',
      ],
    },
  },
  {
    company: 'The University of British Columbia',
    title: { en: 'Web Software Developer', ko: '웹 소프트웨어 개발자' },
    period: { en: 'Jan 2021 – Apr 2021 · 4 mo', ko: '2021.01 – 2021.04 · 4개월' },
    location: { en: 'Vancouver, BC, Canada', ko: '밴쿠버, BC, 캐나다' },
    color: 'bg-yellow',
    bullets: {
      en: [
        'Developed interlingual reading/translation tool for the UBC Asian Studies Department',
        'Built web application with React, Node.js, HTML/CSS, MongoDB, and external APIs',
      ],
      ko: [
        'UBC 아시아학과를 위한 다국어 읽기/번역 도구 개발',
        'React, Node.js, HTML/CSS, MongoDB 및 외부 API로 웹 애플리케이션 구축',
      ],
    },
  },
  {
    company: 'The University of British Columbia',
    title: { en: 'Teaching Assistant', ko: '조교' },
    period: { en: 'Jan 2019 – Apr 2020 · 1 yr 4 mo', ko: '2019.01 – 2020.04 · 1년 4개월' },
    location: { en: 'Vancouver, BC, Canada', ko: '밴쿠버, BC, 캐나다' },
    color: 'bg-yellow',
    bullets: {
      en: [
        'Led labs and office hours; assisted 250 students with questions and grading assignments/exams',
        'Collaborated with 50 TAs and 5 professors for Systematic Program Design (1st year CS course)',
      ],
      ko: [
        '실습 및 오피스아워 진행; 250명 학생의 질문 답변 및 과제/시험 채점',
        'Systematic Program Design(1학년 CS 과목)에서 50명 조교 및 5명 교수와 협력',
      ],
    },
  },
  {
    company: 'Smilegate',
    title: { en: 'Assistant Project Manager', ko: '어시스턴트 PM' },
    period: { en: 'May 2010 – 2015 · 5 yrs', ko: '2010.05 – 2015 · 5년' },
    location: { en: 'Seongnam, Gyeonggi-do, Korea', ko: '경기도 성남시, 대한민국' },
    color: 'bg-accent',
    bullets: {
      en: [
        'Analyzed KPI statistics across finance, HR, and sales; redesigned processes to reduce budget by 20%',
        'Led company website UI/UX revision as PM to meet web accessibility guidelines',
        'Designed ERP system flowchart and created executive dashboard based on user research',
      ],
      ko: [
        '재무, HR, 영업 KPI 통계 분석 및 프로세스 재설계로 예산 20% 절감',
        'PM으로서 웹 접근성 가이드라인 준수를 위한 회사 웹사이트 UI/UX 개선 주도',
        '사용자 리서치 기반 ERP 시스템 플로우차트 설계 및 경영진용 대시보드 제작',
      ],
    },
  },
];

export function ExperienceSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
            {t('Experience', '경력')}
          </p>
          <h2 className="text-3xl md:text-4xl">
            {t('Career Journey', '커리어 여정')}
          </h2>
        </motion.div>

        <motion.div {...fadeUp}>
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {jobs.map((job, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-left">
                    <div className={`w-3 h-3 rounded-full ${job.color} flex-shrink-0`} />
                    <div>
                      <div className="font-semibold text-foreground font-sans">
                        {job.company}
                      </div>
                      <div className="text-sm text-muted-foreground font-sans">
                        {lang === 'en' ? job.title.en : job.title.ko} · {lang === 'en' ? job.period.en : job.period.ko}
                      </div>
                      <div className="text-xs text-muted-foreground/70 font-sans mt-0.5">
                        {lang === 'en' ? job.location.en : job.location.ko}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul className="space-y-2 pl-7">
                    {(lang === 'en' ? job.bullets.en : job.bullets.ko).map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
