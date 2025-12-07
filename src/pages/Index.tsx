import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  emoji: string;
}

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  date: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [notifications, setNotifications] = useState(3);
  const [guestName, setGuestName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');

  const news: NewsItem[] = [
    {
      id: 1,
      title: 'Открытое занятие по лепке',
      date: '15 декабря 2025',
      content: 'Приглашаем родителей на открытое занятие! Дети покажут свои навыки работы с пластилином.',
      emoji: '🎨'
    },
    {
      id: 2,
      title: 'Новогодний утренник',
      date: '25 декабря 2025',
      content: 'Праздничное представление для детей и родителей. Готовимся к встрече Нового года!',
      emoji: '🎄'
    },
    {
      id: 3,
      title: 'Выставка детских работ',
      date: '10 декабря 2025',
      content: 'В холле детского сада открылась выставка лучших пластилиновых работ наших воспитанников.',
      emoji: '🏆'
    }
  ];

  const [guestbook, setGuestbook] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: 'Мария Петрова',
      message: 'Огромное спасибо за внимание к детям! Мой сын с радостью ходит в садик.',
      date: '5 декабря 2025'
    },
    {
      id: 2,
      name: 'Александр Иванов',
      message: 'Замечательные занятия по лепке! Дочка постоянно показывает новые поделки.',
      date: '3 декабря 2025'
    }
  ]);

  const portfolio = [
    { title: 'Диплом "Воспитатель года"', year: '2024', emoji: '🏅' },
    { title: 'Сертификат "Современные методики"', year: '2023', emoji: '📜' },
    { title: 'Благодарность от родителей', year: '2025', emoji: '💐' }
  ];

  const methodicalMaterials = [
    { title: 'Конспекты занятий по лепке', category: 'Творчество', emoji: '🎨' },
    { title: 'Игры на развитие моторики', category: 'Развитие', emoji: '🧩' },
    { title: 'Сценарии праздников', category: 'Мероприятия', emoji: '🎭' }
  ];

  const parentMaterials = [
    { title: 'Как развивать мелкую моторику дома', emoji: '✋' },
    { title: 'Игры для развития речи', emoji: '💬' },
    { title: 'Подготовка к школе', emoji: '📚' }
  ];

  const gallery = [
    { title: 'Зимний пейзаж', color: 'bg-blue-300', emoji: '❄️' },
    { title: 'Весёлая гусеница', color: 'bg-green-300', emoji: '🐛' },
    { title: 'Радуга', color: 'bg-purple-300', emoji: '🌈' },
    { title: 'Цветочная поляна', color: 'bg-pink-300', emoji: '🌸' },
    { title: 'Морское дно', color: 'bg-cyan-300', emoji: '🐠' },
    { title: 'Космос', color: 'bg-indigo-300', emoji: '🚀' }
  ];

  const handleSubscribe = () => {
    setNotifications(0);
    toast.success('Вы подписались на уведомления! 🔔');
  };

  const handleAddGuestbookEntry = () => {
    if (guestName.trim() && guestMessage.trim()) {
      const newEntry: GuestbookEntry = {
        id: Date.now(),
        name: guestName,
        message: guestMessage,
        date: new Date().toLocaleDateString('ru-RU')
      };
      setGuestbook([newEntry, ...guestbook]);
      setGuestName('');
      setGuestMessage('');
      toast.success('Спасибо за ваш отзыв! 💝');
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ background: 'linear-gradient(135deg, #FFB76B 0%, #FF8A5C 100%)' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-squeeze">
              <div className="w-16 h-16 rounded-full plasticine-shine flex items-center justify-center text-4xl" style={{ background: 'linear-gradient(145deg, #FFF 0%, #FFE0B8 100%)', boxShadow: '0 8px 20px rgba(255, 140, 60, 0.35), 0 0 0 3px rgba(255, 255, 255, 0.5) inset' }}>
                ☀️
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Воспитатель</h1>
                <p className="text-sm text-white/90">Детский сад "Солнышко"</p>
              </div>
            </div>
            <div className="relative">
              <Button
                onClick={handleSubscribe}
                className="plasticine-button bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_6px_0_0_rgba(0,0,0,0.1)]"
              >
                <Icon name="Bell" size={20} />
                {notifications > 0 && <span className="notification-badge">{notifications}</span>}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-[88px] z-40 backdrop-blur-md" style={{ background: 'rgba(255, 255, 255, 0.85)', borderBottom: '3px solid rgba(255, 183, 107, 0.3)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)' }}>
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-3 overflow-x-auto">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'portfolio', label: 'Портфолио', icon: 'Award' },
              { id: 'methods', label: 'Методичка', icon: 'BookOpen' },
              { id: 'parents', label: 'Родителям', icon: 'Users' },
              { id: 'gallery', label: 'Галерея', icon: 'Image' },
              { id: 'news', label: 'Новости', icon: 'Newspaper' },
              { id: 'guestbook', label: 'Гостевая', icon: 'MessageSquare' },
              { id: 'sitemap', label: 'Карта', icon: 'Map' }
            ].map((item) => (
              <Button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                variant={activeSection === item.id ? 'default' : 'outline'}
                className="plasticine-button whitespace-nowrap"
                style={activeSection === item.id 
                  ? { background: 'linear-gradient(145deg, #FFB76B 0%, #FFA055 100%)', color: 'white' }
                  : { background: 'linear-gradient(145deg, #FFFFFF 0%, #FFF8F0 100%)', color: '#555' }
                }
              >
                <Icon name={item.icon as any} size={18} />
                <span className="ml-2">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <Card className="plasticine-card plasticine-shine p-8 border-0" style={{ background: 'linear-gradient(145deg, #FFF8F0 0%, #FFE8D5 100%)' }}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full plasticine-shine flex items-center justify-center text-6xl animate-float" style={{ background: 'linear-gradient(145deg, #FFD580 0%, #FFC04D 100%)', boxShadow: '0 12px 30px rgba(255, 183, 107, 0.4), 0 0 0 4px rgba(255, 255, 255, 0.6) inset' }}>
                  👩‍🏫
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-4xl font-bold text-primary mb-4">Добро пожаловать!</h2>
                  <p className="text-xl text-foreground leading-relaxed">
                    Здравствуйте! Я воспитатель детского сада с 10-летним стажем. Моя страсть — творческое развитие детей через лепку и рукоделие. 
                    На этом сайте вы найдёте полезные материалы, фотографии работ наших воспитанников и актуальные новости.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="plasticine-card bg-pink-100 p-6 border-4 border-pink-300 shadow-[0_8px_0_0_rgba(219,39,119,0.3)] hover:shadow-[0_4px_0_0_rgba(219,39,119,0.3)]">
                <div className="text-5xl mb-4 animate-squeeze">🎨</div>
                <h3 className="text-2xl font-bold mb-2 text-pink-800">Творчество</h3>
                <p className="text-pink-900">Развиваем фантазию и мелкую моторику</p>
              </Card>
              <Card className="plasticine-card bg-green-100 p-6 border-4 border-green-300 shadow-[0_8px_0_0_rgba(34,197,94,0.3)] hover:shadow-[0_4px_0_0_rgba(34,197,94,0.3)]">
                <div className="text-5xl mb-4 animate-squeeze" style={{ animationDelay: '0.3s' }}>
                  🧠
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-800">Развитие</h3>
                <p className="text-green-900">Игровые методики обучения</p>
              </Card>
              <Card className="plasticine-card bg-yellow-100 p-6 border-4 border-yellow-300 shadow-[0_8px_0_0_rgba(234,179,8,0.3)] hover:shadow-[0_4px_0_0_rgba(234,179,8,0.3)]">
                <div className="text-5xl mb-4 animate-squeeze" style={{ animationDelay: '0.6s' }}>
                  💝
                </div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-800">Забота</h3>
                <p className="text-yellow-900">Индивидуальный подход к каждому</p>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'portfolio' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">🏆 Портфолио</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((item, index) => (
                <Card
                  key={index}
                  className="plasticine-card bg-white p-6 border-4 border-accent/40 shadow-[0_8px_0_0_rgba(0,0,0,0.1)]"
                >
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <Badge className="bg-accent text-white">{item.year}</Badge>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'methods' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">📚 Методическая копилка</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodicalMaterials.map((item, index) => (
                <Card
                  key={index}
                  className="plasticine-card bg-purple-50 p-6 border-4 border-purple-300 shadow-[0_8px_0_0_rgba(168,85,247,0.2)]"
                >
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <Badge className="bg-purple-500 text-white mb-3">{item.category}</Badge>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <Button className="plasticine-button bg-secondary text-secondary-foreground mt-4 w-full shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
                    <Icon name="Download" size={18} />
                    <span className="ml-2">Скачать</span>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'parents' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">👨‍👩‍👧 Материалы для родителей</h2>
            <div className="space-y-4">
              {parentMaterials.map((item, index) => (
                <Card
                  key={index}
                  className="plasticine-card bg-blue-50 p-6 border-4 border-blue-300 shadow-[0_8px_0_0_rgba(59,130,246,0.2)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{item.emoji}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <Button className="plasticine-button bg-primary text-white shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
                    <Icon name="FileText" size={18} />
                    <span className="ml-2">Читать</span>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">🖼️ Фотогалерея</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <Card
                  key={index}
                  className={`plasticine-card ${item.color} p-8 border-4 border-foreground/20 shadow-[0_8px_0_0_rgba(0,0,0,0.15)] h-64 flex flex-col items-center justify-center`}
                >
                  <div className="text-7xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {item.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-center">{item.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-primary">📰 Новости</h2>
              <Button
                onClick={handleSubscribe}
                className="plasticine-button bg-destructive text-white shadow-[0_6px_0_0_rgba(0,0,0,0.1)]"
              >
                <Icon name="Bell" size={18} />
                <span className="ml-2">Подписаться</span>
              </Button>
            </div>
            <div className="space-y-4">
              {news.map((item) => (
                <Card
                  key={item.id}
                  className="plasticine-card bg-white p-6 border-4 border-primary/20 shadow-[0_8px_0_0_rgba(0,0,0,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl animate-squeeze">{item.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <Badge className="bg-primary text-white">{item.date}</Badge>
                      </div>
                      <p className="text-lg text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'guestbook' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">💬 Гостевая книга</h2>
            <Card className="plasticine-card bg-pink-50 p-6 border-4 border-pink-300 shadow-[0_8px_0_0_rgba(0,0,0,0.1)]">
              <h3 className="text-2xl font-bold mb-4">Оставить отзыв</h3>
              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="border-4 border-pink-200 rounded-2xl"
                />
                <Textarea
                  placeholder="Ваш отзыв"
                  value={guestMessage}
                  onChange={(e) => setGuestMessage(e.target.value)}
                  className="border-4 border-pink-200 rounded-2xl min-h-[100px]"
                />
                <Button
                  onClick={handleAddGuestbookEntry}
                  className="plasticine-button bg-primary text-white w-full shadow-[0_6px_0_0_rgba(0,0,0,0.1)]"
                >
                  <Icon name="Send" size={18} />
                  <span className="ml-2">Отправить</span>
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              {guestbook.map((entry) => (
                <Card
                  key={entry.id}
                  className="plasticine-card bg-white p-6 border-4 border-accent/30 shadow-[0_8px_0_0_rgba(0,0,0,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-bold text-lg">{entry.name}</h4>
                        <span className="text-sm text-muted-foreground">{entry.date}</span>
                      </div>
                      <p className="text-foreground">{entry.message}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'sitemap' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">🗺️ Карта сайта</h2>
            <Card className="plasticine-card bg-white p-8 border-4 border-primary/30 shadow-[0_8px_0_0_rgba(0,0,0,0.1)]">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { section: 'Главная', icon: 'Home', id: 'home' },
                  { section: 'Портфолио', icon: 'Award', id: 'portfolio' },
                  { section: 'Методическая копилка', icon: 'BookOpen', id: 'methods' },
                  { section: 'Материалы для родителей', icon: 'Users', id: 'parents' },
                  { section: 'Фотогалерея', icon: 'Image', id: 'gallery' },
                  { section: 'Новости', icon: 'Newspaper', id: 'news' },
                  { section: 'Гостевая книга', icon: 'MessageSquare', id: 'guestbook' },
                  { section: 'Карта сайта', icon: 'Map', id: 'sitemap' }
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(item.id)}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 transition-colors text-left"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
                      <Icon name={item.icon as any} size={24} />
                    </div>
                    <span className="text-xl font-bold">{item.section}</span>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;