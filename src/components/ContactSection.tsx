import { Linkedin, Mail, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function ContactSection() {
  const { t } = useLanguage();
  const [type, setType] = useState<'talk' | 'mentor'>('talk');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;
    const subject = type === 'talk' ? 'Speaking Inquiry' : 'Mentoring Request';

    window.location.href = `mailto:anhyesun@gmail.com?subject=${encodeURIComponent(subject + ' from ' + name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

    toast.success(t('Opening your email client!', '이메일 클라이언트를 열고 있습니다!'));
    form.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
            {t('Contact', '연락')}
          </p>
          <h2 className="text-3xl md:text-4xl mb-4">
            {t("Let's Connect", '연락하기')}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t(
              "Whether you'd like to book me for a talk or need career mentoring, I'd love to hear from you.",
              '강연 초청이나 커리어 멘토링이 필요하시다면 편하게 연락해 주세요.'
            )}
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            {/* Type toggle */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setType('talk')}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  type === 'talk'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {t('📣 Request a Talk', '📣 강연 신청')}
              </button>
              <button
                onClick={() => setType('mentor')}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  type === 'mentor'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {t('🤝 Request Mentoring', '🤝 멘토링 신청')}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder={t('Your name', '이름')} required className="rounded-xl h-12" />
              <Input name="email" type="email" placeholder={t('Email address', '이메일 주소')} required className="rounded-xl h-12" />
              <Textarea
                name="message"
                placeholder={
                  type === 'talk'
                    ? t('Tell me about your event, date, and topic...', '이벤트, 날짜, 주제에 대해 알려주세요...')
                    : t('Tell me about yourself and what kind of guidance you need...', '본인 소개와 어떤 도움이 필요한지 알려주세요...')
                }
                required
                rows={5}
                className="rounded-xl resize-none"
              />
              <Button type="submit" size="lg" className="rounded-full px-8 gap-2">
                <Send size={16} />
                {t('Send Message', '메시지 보내기')}
              </Button>
            </form>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4 font-sans">{t('Direct Contact', '직접 연락')}</h3>
              <div className="space-y-4">
                <a
                  href="mailto:anhyesun@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} className="text-primary" />
                  anhyesun@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/anhyesun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={18} className="text-primary" />
                  linkedin.com/in/anhyesun
                </a>
              </div>
            </div>

            <div className="bg-accent/15 rounded-2xl p-6 border border-accent/30">
              <p className="text-sm text-accent-foreground leading-relaxed">
                {t(
                  '💡 I especially enjoy speaking about career transitions, non-traditional paths into tech, networking, and the Korean tech community abroad.',
                  '💡 특히 커리어 전환, 비전공자의 테크 진입, 네트워킹, 해외 한인 테크 커뮤니티에 대한 강연을 즐겨 합니다.'
                )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
