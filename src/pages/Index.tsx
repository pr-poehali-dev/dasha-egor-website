import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/files/6b2ae173-60bf-406e-94b3-86d8533c882b.jpg"
          alt="Даша и Егор"
          className="absolute inset-0 w-full h-full object-cover filter grayscale"
        />
        
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-cormorant text-8xl md:text-9xl font-light mb-6 tracking-wide text-white drop-shadow-2xl">
            Даша & Егор
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 animate-fade-in-delay">
            <div className="h-px w-16 bg-current opacity-50" />
            <p className="text-lg font-light tracking-widest">НАША ИСТОРИЯ</p>
            <div className="h-px w-16 bg-current opacity-50" />
          </div>
        </div>

        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <Icon name="ChevronDown" size={32} className="text-white/80" />
        </button>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-8">Наше видео</h2>
          <p className="text-muted-foreground mb-12">Моменты, которые мы храним в сердце</p>
          
          <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <Icon name="Video" size={64} className="text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">Разместите здесь ссылку на ваше видео</p>
              <p className="text-sm text-muted-foreground/60">YouTube, Vimeo или прямая ссылка</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-cormorant text-3xl mb-4">Даша & Егор</p>
          <p className="text-muted-foreground text-sm">С любовью, навсегда</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;