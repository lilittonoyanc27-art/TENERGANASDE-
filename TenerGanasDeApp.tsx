import React, { useState } from 'react';
import { 
  Heart, 
  CheckCircle2, 
  XCircle, 
  RefreshCcw, 
  ArrowRight,
  Star,
  Pizza,
  Music,
  Gamepad2,
  Plane,
  IceCream,
  Coffee,
  BookOpen,
  Bike,
  Camera,
  Ghost,
  Info,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Data ---

const EXERCISES = [
  {
    id: 1,
    sentence: "Yo ___ comer pizza.",
    options: ["tengo ganas de", "tienes ganas de", "tiene ganas de"],
    correct: "tengo ganas de",
    translation: "Ես պիցցա ուտելու ցանկություն ունեմ:",
    icon: <Pizza className="w-8 h-8 text-orange-500" />
  },
  {
    id: 2,
    sentence: "Tú ___ escuchar música.",
    options: ["tengo ganas de", "tienes ganas de", "tenemos ganas de"],
    correct: "tienes ganas de",
    translation: "Դու երաժշտություն լսելու ցանկություն ունես:",
    icon: <Music className="w-8 h-8 text-blue-500" />
  },
  {
    id: 3,
    sentence: "Él ___ jugar videojuegos.",
    options: ["tengo ganas de", "tienes ganas de", "tiene ganas de"],
    correct: "tiene ganas de",
    translation: "Նա տեսախաղեր խաղալու ցանկություն ունի:",
    icon: <Gamepad2 className="w-8 h-8 text-purple-500" />
  },
  {
    id: 4,
    sentence: "Nosotros ___ viajar a España.",
    options: ["tenemos ganas de", "tienen ganas de", "tengo ganas de"],
    correct: "tenemos ganas de",
    translation: "Մենք Իսպանիա ճամփորդելու ցանկություն ունենք:",
    icon: <Plane className="w-8 h-8 text-sky-500" />
  },
  {
    id: 5,
    sentence: "Ellos ___ comer helado.",
    options: ["tengo ganas de", "tienes ganas de", "tienen ganas de"],
    correct: "tienen ganas de",
    translation: "Նրանք պաղպաղակ ուտելու ցանկություն ունեն:",
    icon: <IceCream className="w-8 h-8 text-pink-500" />
  },
  {
    id: 6,
    sentence: "Ustedes ___ beber café.",
    options: ["tienen ganas de", "tenemos ganas de", "tiene ganas de"],
    correct: "tienen ganas de",
    translation: "Դուք սուրճ խմելու ցանկություն ունեք:",
    icon: <Coffee className="w-8 h-8 text-amber-700" />
  },
  {
    id: 7,
    sentence: "Ella ___ leer un libro.",
    options: ["tengo ganas de", "tiene ganas de", "tienes ganas de"],
    correct: "tiene ganas de",
    translation: "Նա գիրք կարդալու ցանկություն ունի:",
    icon: <BookOpen className="w-8 h-8 text-emerald-500" />
  },
  {
    id: 8,
    sentence: "Nosotros ___ montar en bici.",
    options: ["tengo ganas de", "tienes ganas de", "tenemos ganas de"],
    correct: "tenemos ganas de",
    translation: "Մենք հեծանիվ քշելու ցանկություն ունենք:",
    icon: <Bike className="w-8 h-8 text-red-500" />
  },
  {
    id: 9,
    sentence: "Yo ___ hacer fotos.",
    options: ["tengo ganas de", "tienes ganas de", "tiene ganas de"],
    correct: "tengo ganas de",
    translation: "Ես լուսանկարելու ցանկություն ունեմ:",
    icon: <Camera className="w-8 h-8 text-slate-600" />
  },
  {
    id: 10,
    sentence: "Tú ___ ver una película.",
    options: ["tengo ganas de", "tienes ganas de", "tenemos ganas de"],
    correct: "tienes ganas de",
    translation: "Դու ֆիլմ դիտելու ցանկություն ունես:",
    icon: <Ghost className="w-8 h-8 text-indigo-500" />
  }
];

// --- Components ---

export default function TenerGanasDeApp() {
  const [view, setView] = useState<'theory' | 'game' | 'result'>('theory');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    if (feedback) return;
    setSelectedOption(option);
    
    if (option === EXERCISES[currentIndex].correct) {
      setFeedback('correct');
      setScore(prev => prev + 1);
    } else {
      setFeedback('wrong');
    }

    setTimeout(() => {
      if (currentIndex < EXERCISES.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setFeedback(null);
        setSelectedOption(null);
      } else {
        setView('result');
      }
    }, 1500);
  };

  const reset = () => {
    setView('theory');
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-rose-50 text-slate-900 font-sans selection:bg-rose-200">
      <div className="max-w-4xl mx-auto p-4 md:p-8 min-h-screen flex flex-col">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-[32px] shadow-lg border border-rose-100">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200 rotate-3">
              <Heart className="text-white w-8 h-8 fill-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter uppercase italic text-rose-950">Tener Ganas De</h1>
              <p className="text-[10px] font-extrabold text-rose-500 uppercase tracking-[0.2em]">Ցանկություններ • Desires</p>
            </div>
          </div>
          {view === 'game' && (
            <div className="flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full border border-rose-100">
              <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="text-sm font-black text-rose-700">{score} / {EXERCISES.length}</span>
            </div>
          )}
        </header>

        <AnimatePresence mode="wait">
          {view === 'theory' && (
            <motion.div 
              key="theory"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Theory Card */}
              <div className="bg-white rounded-[48px] p-8 md:p-12 shadow-2xl border-b-8 border-rose-200 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-rose-50 rounded-2xl text-rose-600 shadow-sm">
                    <Info className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tighter text-rose-950 uppercase italic">Ի՞նչ է սա նշանակում:</h2>
                </div>

                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Իսպաներենում <span className="text-rose-600 font-black">Tener ganas de</span> կառույցն օգտագործում ենք այն ժամանակ, երբ մենք ուզում ենք ասել, որ ինչ-որ բան <span className="underline decoration-rose-300 decoration-4 underline-offset-4">ցանկանում ենք</span> անել:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 p-8 rounded-[32px] border border-orange-100 space-y-4">
                    <h3 className="text-orange-700 font-black uppercase tracking-widest text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> Օրինակներ
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-700">
                        <span className="text-orange-400 font-black">•</span>
                        <span><b>Tengo ganas de</b> comer. (Ես ուտելու ցանկություն ունեմ:)</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-700">
                        <span className="text-orange-400 font-black">•</span>
                        <span><b>Tienes ganas de</b> jugar. (Դու խաղալու ցանկություն ունես:)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-rose-50 p-8 rounded-[32px] border border-rose-100 space-y-4">
                    <h3 className="text-rose-700 font-black uppercase tracking-widest text-sm flex items-center gap-2">
                      <RefreshCcw className="w-4 h-4" /> Խոնարհում
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm font-bold text-rose-900">
                      <div>Yo tengo</div>
                      <div>Nosotros tenemos</div>
                      <div>Tú tienes</div>
                      <div>Vosotros tenéis</div>
                      <div>Él/Ella tiene</div>
                      <div>Ellos/Ellas tienen</div>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setView('game')}
                className="w-full group relative bg-rose-600 text-white p-8 rounded-[32px] font-black text-3xl shadow-2xl shadow-rose-200 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-4"
              >
                ՍԿՍԵԼ ԽԱՂԸ
                <ArrowRight className="group-hover:translate-x-2 transition-transform w-8 h-8" />
              </button>
            </motion.div>
          )}

          {view === 'game' && (
            <motion.div 
              key="game"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl border-b-8 border-rose-200 text-center space-y-12 relative overflow-hidden">
                
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-6 py-2 bg-rose-50 rounded-full border border-rose-100">
                    <span className="text-xs font-black uppercase tracking-widest text-rose-700">Exercise {currentIndex + 1} / {EXERCISES.length}</span>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="p-6 bg-rose-50 rounded-full shadow-inner">
                      {EXERCISES[currentIndex].icon}
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800">
                    {EXERCISES[currentIndex].sentence.split('___').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="inline-block min-w-[200px] border-b-8 border-rose-400 mx-2 text-rose-600 italic px-2">
                            {selectedOption || '...'}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </h2>
                  <p className="text-xl font-bold text-slate-400 italic">({EXERCISES[currentIndex].translation})</p>
                </div>

                <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                  {EXERCISES[currentIndex].options.map((opt) => (
                    <button
                      key={opt}
                      disabled={feedback !== null}
                      onClick={() => handleAnswer(opt)}
                      className={`p-6 rounded-[24px] font-black text-xl transition-all border-4 shadow-sm ${
                        selectedOption === opt
                          ? (feedback === 'correct' ? 'bg-green-500 border-green-400 text-white shadow-green-200' : 'bg-red-500 border-red-400 text-white shadow-red-200')
                          : 'bg-white border-slate-100 text-rose-900 hover:border-rose-400 hover:bg-rose-50 hover:scale-105'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {feedback === 'correct' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2 text-green-600 font-black text-2xl uppercase italic"
                    >
                      <CheckCircle2 /> ՃԻՇՏ Է!
                    </motion.div>
                  )}
                  {feedback === 'wrong' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2 text-red-600 font-black text-2xl uppercase italic"
                    >
                      <XCircle /> ՍԽԱԼ Է!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {view === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-12"
            >
              <div className="relative">
                <div className="w-56 h-56 bg-rose-500 rounded-[48px] flex items-center justify-center shadow-2xl rotate-6 relative z-10 border-8 border-rose-400">
                  <Star className="w-28 h-28 text-white fill-white" />
                </div>
                <div className="absolute inset-0 bg-rose-500 blur-3xl opacity-30 animate-pulse" />
              </div>

              <div className="space-y-6">
                <h2 className="text-6xl font-black tracking-tighter uppercase italic text-rose-950">ԱՊՐԵՍ!</h2>
                <div className="p-8 bg-white rounded-[32px] border border-rose-100 shadow-xl">
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Քո արդյունքը</p>
                  <p className="text-7xl font-black text-rose-600">{score} / {EXERCISES.length}</p>
                  <p className="mt-4 text-xl font-bold text-slate-600">
                    {score === EXERCISES.length ? 'Դու հիանալի գիտես քո ցանկությունները!' : 'Լավ էր, բայց կարող ես ավելի լավ!'}
                  </p>
                </div>
              </div>

              <button 
                onClick={reset}
                className="bg-rose-600 text-white px-16 py-6 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-all flex items-center gap-4"
              >
                <RefreshCcw />
                ՓՈՐՁԵԼ ՆՈՐԻՑ
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-auto py-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-rose-50">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Spanish Learning • Tener Ganas De Edition
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
