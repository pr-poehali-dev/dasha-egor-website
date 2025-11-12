import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const memories = [
    {
      image: 'https://cdn.poehali.dev/files/6b2ae173-60bf-406e-94b3-86d8533c882b.jpg',
      title: 'Наша первая встреча',
      date: '2023'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cf8e2e0e-0ce0-469c-9ed7-b396cfc10f3a/files/a26ac2ed-4852-4537-9da9-473d6a0e577a.jpg',
      title: 'Незабываемые моменты',
      date: '2024'
    }
  ];

  const timeline = [
    { year: '2023', event: 'Первая встреча', description: 'Момент, когда всё началось' },
    { year: '2024', event: 'Первое путешествие', description: 'Новые горизонты вместе' },
    { year: '2025', event: 'Наше будущее', description: 'Впереди столько прекрасного' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center filter grayscale"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/cf8e2e0e-0ce0-469c-9ed7-b396cfc10f3a/files/5e4544b9-032d-441f-bb74-77c14d84bb5e.jpg)`,
            opacity: 0.15
          }}
        />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-cormorant text-8xl md:text-9xl font-light mb-6 tracking-wide">
            Даша & Егор
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground animate-fade-in-delay">
            <div className="h-px w-16 bg-current opacity-50" />
            <p className="text-lg font-light tracking-widest">НАША ИСТОРИЯ</p>
            <div className="h-px w-16 bg-current opacity-50" />
          </div>
        </div>

        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </button>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-4">Наши воспоминания</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый момент, проведенный вместе, становится особенным
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {memories.map((memory, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={memory.image} 
                    alt={memory.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white/60 text-sm mb-2">{memory.date}</p>
                  <h3 className="text-white font-cormorant text-2xl">{memory.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-4">Наш путь</h2>
            <p className="text-muted-foreground">История, которую мы пишем вместе</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative mb-12 md:mb-16 animate-fade-in ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`md:absolute md:top-0 ${
                  index % 2 === 0 ? 'md:right-12' : 'md:left-12'
                } md:w-[calc(50%-3rem)]`}>
                  <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-light">{item.year}</span>
                      </div>
                      <h3 className="font-cormorant text-3xl">{item.event}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
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
