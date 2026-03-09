import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif text-lg mb-1">Hyesun An</div>
            <p className="text-primary-foreground/60 text-sm">
              {t('© 2026 Hyesun An. Built with passion in Seattle.', '© 2026 안혜선. 시애틀에서 열정으로 만들었습니다.')}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:anhyesun@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com/in/anhyesun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
