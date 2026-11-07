"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Dumbbell, Instagram, Menu, Play, ShieldCheck, Sparkles, Star, Timer, Trophy, Users, X, Zap } from "lucide-react";

const programs = [
  { no: "01", title: "Strength & Conditioning", detail: "Build real-world strength with structured progressive training.", tag: "ALL LEVELS" },
  { no: "02", title: "Personal Training", detail: "One-to-one coaching built around your goals and your pace.", tag: "COACH-LED" },
  { no: "03", title: "Fat Loss & Fitness", detail: "A sustainable approach to movement, conditioning and consistency.", tag: "RESULT FOCUSED" },
  { no: "04", title: "Muscle Building", detail: "Train with intent using proven hypertrophy principles.", tag: "HYPERTROPHY" }
];
const plans = [
  { name: "MONTHLY", price: "₹1,499", period: "/ month", description: "A focused start to your fitness journey.", features: ["Full gym floor access", "Trainer floor assistance", "Locker access", "Fitness assessment"], featured: false },
  { name: "QUARTERLY", price: "₹3,499", period: "/ 3 months", description: "Build consistency and make progress.", features: ["Everything in Monthly", "Progress check-in", "Personalised workout plan", "Priority class booking"], featured: true },
  { name: "YEARLY", price: "₹9,999", period: "/ year", description: "The best value for long-term commitment.", features: ["Everything in Quarterly", "Quarterly fitness review", "Guest pass each month", "Member-only challenges"], featured: false }
];
const photos = [
  "photo-1534438327276-14e5300c3a48",
  "photo-1583454110551-21f2fa2afe61",
  "photo-1517836357463-d25dfeac3438",
  "photo-1581009146145-b5ef050c2e1e"
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const submitEnquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <main className="overflow-hidden">
      <div className="border-b border-white/10 bg-[#d9ff35] py-2 text-center text-[10px] font-extrabold tracking-[.18em] text-black">YOUR FIRST SESSION STARTS HERE — BOOK A FREE INTRO</div>
      <header className="absolute left-0 right-0 top-9 z-50 border-b border-white/10 bg-black/25 backdrop-blur-md">
        <div className="container-main flex h-[82px] items-center justify-between">
          <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center bg-[#d9ff35] text-black"><Dumbbell size={22}/></span>
            <span className="leading-none"><span className="display-font block text-[27px] font-extrabold tracking-tight">IRONCORE</span><span className="mt-1 block text-[9px] font-bold tracking-[.32em] text-[#d9ff35]">FITNESS CLUB</span></span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {["About", "Programs", "Coaches", "Membership", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[.12em] text-white/75 transition hover:text-[#d9ff35]">{item}</a>)}
          </nav>
          <div className="hidden lg:block"><a href="#contact" className="btn-primary">Join the club <ArrowUpRight size={15}/></a></div>
          <button className="text-white lg:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <nav className="border-t border-white/10 bg-[#0b0b0b] px-6 py-5 lg:hidden">{["About", "Programs", "Coaches", "Membership", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="block border-b border-white/10 py-4 text-sm font-bold uppercase tracking-widest">{item}</a>)}</nav>}
      </header>

      <section className="relative flex min-h-[760px] items-center bg-cover bg-center pt-24 md:min-h-[850px]" style={{backgroundImage:"url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90')"}}>
        <div className="hero-overlay absolute inset-0"/>
        <div className="grid-lines absolute inset-0 opacity-30"/>
        <div className="container-main relative z-10 grid items-end gap-14 pb-28 pt-32 lg:grid-cols-[1fr_280px]">
          <div className="max-w-[780px]">
            <div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-[#d9ff35]"/><span className="eyebrow">Built for the driven</span></div>
            <h1 className="display-font text-[clamp(76px,12vw,150px)] font-black leading-[.78] tracking-[-.045em]">TRAIN<br/><span className="accent-text">BEYOND</span><br/>LIMITS<span className="accent-text">.</span></h1>
            <p className="mt-9 max-w-[480px] text-base leading-7 text-white/70 md:text-lg">More than a workout. A place to build strength, sharpen discipline and become your strongest self.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="btn-primary">Start your journey <ArrowUpRight size={16}/></a><a href="#about" className="btn-outline"><Play size={14}/> Explore the club</a></div>
          </div>
          <div className="hidden border-l border-white/25 pb-2 pl-7 lg:block">
            <p className="eyebrow mb-5">The ironcore standard</p>
            <div className="mb-5"><p className="display-font text-5xl font-bold">01<span className="text-[#d9ff35]">.</span></p><p className="mt-1 text-xs text-white/60">Train with purpose</p></div>
            <div className="mb-5"><p className="display-font text-5xl font-bold">02<span className="text-[#d9ff35]">.</span></p><p className="mt-1 text-xs text-white/60">Progress with a plan</p></div>
            <div><p className="display-font text-5xl font-bold">03<span className="text-[#d9ff35]">.</span></p><p className="mt-1 text-xs text-white/60">Show up. Every day.</p></div>
          </div>
        </div>
        <a href="#about" className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 text-[9px] font-bold tracking-[.25em] text-white/60"><ArrowDown size={14}/> SCROLL TO EXPLORE</a>
      </section>

      <section className="border-y border-white/10 bg-[#111]">
        <div className="container-main grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
          {[["01","Purpose-built training"],["02","Expert-led coaching"],["03","Progress that lasts"],["04","A stronger community"]].map(([n,t]) => <div key={n} className="flex items-center gap-4 px-4 py-7 md:px-7"><span className="display-font text-3xl font-bold text-[#d9ff35]">{n}</span><span className="max-w-[120px] text-[10px] font-bold uppercase leading-4 tracking-wider text-white/70">{t}</span></div>)}
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container-main grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[#d9ff35]"/>
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1100&q=85" alt="Athlete training with free weights" className="relative z-10 h-[520px] w-full object-cover grayscale-[20%]"/>
            <div className="absolute -bottom-7 right-0 z-20 bg-[#d9ff35] px-7 py-5 text-black"><p className="display-font text-4xl font-black">NO SHORTCUTS.</p><p className="text-[9px] font-extrabold tracking-[.2em]">JUST WORK. JUST PROGRESS.</p></div>
          </div>
          <div>
            <p className="eyebrow mb-5">The ironcore mindset</p>
            <h2 className="section-title">MADE OF<br/>MORE THAN<br/><span className="accent-text">MUSCLE.</span></h2>
            <p className="mt-8 text-sm leading-7 text-white/60">We believe fitness is built one decision at a time. The right environment, a clear plan and a community that keeps you accountable can change the way you move through life.</p>
            <p className="mt-4 text-sm leading-7 text-white/60">Whether you are taking your first step or pushing for a new personal best, your training should meet you where you are — and challenge you to go further.</p>
            <div className="mt-9 grid grid-cols-2 gap-5 border-t border-white/10 pt-7"><div><ShieldCheck className="mb-3 text-[#d9ff35]"/><p className="text-xs font-bold uppercase tracking-wider">Train with confidence</p><p className="mt-2 text-xs leading-5 text-white/45">A welcoming space for every level.</p></div><div><Trophy className="mb-3 text-[#d9ff35]"/><p className="text-xs font-bold uppercase tracking-wider">Own your progress</p><p className="mt-2 text-xs leading-5 text-white/45">Small wins. Stronger habits.</p></div></div>
            <a href="#programs" className="mt-9 inline-flex items-center gap-3 text-[10px] font-extrabold tracking-[.18em] text-[#d9ff35]">DISCOVER OUR PROGRAMS <ArrowRight size={15}/></a>
          </div>
        </div>
      </section>

      <section id="programs" className="section-pad bg-[#111]">
        <div className="container-main">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow mb-5">Find your focus</p><h2 className="section-title">TRAIN FOR<br/><span className="accent-text">YOUR GOAL.</span></h2></div><p className="max-w-[330px] text-sm leading-6 text-white/55">Different goals. One commitment. Choose the training path that moves you forward.</p></div>
          <div className="grid gap-px bg-white/10 md:grid-cols-2">{programs.map((p) => <div key={p.no} className="group bg-[#111] p-8 transition hover:bg-[#191919] md:p-11"><div className="mb-14 flex items-center justify-between"><span className="display-font text-4xl text-white/20">{p.no}</span><span className="border border-white/20 px-3 py-1 text-[9px] font-bold tracking-[.16em] text-[#d9ff35]">{p.tag}</span></div><h3 className="display-font text-4xl font-bold uppercase">{p.title}</h3><p className="mt-4 max-w-[370px] text-sm leading-6 text-white/50">{p.detail}</p><a href="#contact" className="mt-8 inline-flex items-center gap-3 text-[10px] font-extrabold tracking-[.18em] text-white/70 transition group-hover:text-[#d9ff35]">EXPLORE PROGRAM <ArrowUpRight size={15}/></a></div>)}</div>
        </div>
      </section>

      <section id="coaches" className="section-pad">
        <div className="container-main">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow mb-5">Guidance that moves you</p><h2 className="section-title">COACHES WHO<br/><span className="accent-text">GET IT DONE.</span></h2></div><p className="max-w-[330px] text-sm leading-6 text-white/55">Good coaching is more than counting reps. It is listening, teaching and helping you build habits that last.</p></div>
          <div className="grid gap-5 md:grid-cols-3">
            {[["photo-1567013127542-490d757e51fc","ALEX MORGAN","STRENGTH COACH"],["photo-1534438327276-14e5300c3a48","JORDAN LEE","CONDITIONING COACH"],["photo-1581009146145-b5ef050c2e1e","SAM RIVERA","PERSONAL TRAINER"]].map(([img,name,role]) => <div key={name} className="group"><div className="relative h-[390px] overflow-hidden bg-[#171717]"><img src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=800&q=80`} alt={name} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"/><span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center bg-[#d9ff35] text-black"><ArrowUpRight size={19}/></span></div><div className="flex items-center justify-between border-b border-white/15 py-5"><div><h3 className="display-font text-3xl font-bold">{name}</h3><p className="mt-1 text-[9px] font-bold tracking-[.2em] text-[#d9ff35]">{role}</p></div><span className="text-[10px] text-white/40">IRONCORE TEAM</span></div></div>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d9ff35] py-16 text-black">
        <div className="container-main relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-[10px] font-extrabold tracking-[.2em]">THE ONLY BAD WORKOUT IS THE ONE THAT DIDN'T HAPPEN</p><h2 className="display-font mt-3 text-5xl font-black leading-none md:text-7xl">SHOW UP FOR YOURSELF.</h2></div><a href="#contact" className="inline-flex shrink-0 items-center gap-3 border border-black px-6 py-4 text-[10px] font-extrabold tracking-[.15em] transition hover:bg-black hover:text-[#d9ff35]">BOOK A FREE INTRO <ArrowUpRight size={16}/></a></div>
      </section>

      <section id="membership" className="section-pad bg-[#111]">
        <div className="container-main">
          <div className="mb-14 text-center"><p className="eyebrow mb-5">Invest in your strongest self</p><h2 className="section-title">PICK YOUR<br/><span className="accent-text">COMMITMENT.</span></h2><p className="mx-auto mt-5 max-w-[450px] text-sm leading-6 text-white/50">Straightforward membership options to help you get started. Ask our team about the right fit for your goals.</p></div>
          <div className="grid items-stretch gap-5 lg:grid-cols-3">{plans.map((plan) => <div key={plan.name} className={`relative flex flex-col p-8 ${plan.featured ? "border border-[#d9ff35] bg-[#d9ff35] text-black lg:-translate-y-3" : "card-line"}`}>{plan.featured && <span className="absolute -top-3 left-8 bg-black px-4 py-2 text-[9px] font-extrabold tracking-[.15em] text-[#d9ff35]">MOST POPULAR</span>}<p className={`text-[10px] font-extrabold tracking-[.2em] ${plan.featured ? "text-black/60" : "text-[#d9ff35]"}`}>{plan.name}</p><div className="mt-7 flex items-end gap-2"><span className="display-font text-6xl font-black">{plan.price}</span><span className={`pb-2 text-xs ${plan.featured ? "text-black/60" : "text-white/45"}`}>{plan.period}</span></div><p className={`mt-4 min-h-10 text-xs leading-5 ${plan.featured ? "text-black/65" : "text-white/50"}`}>{plan.description}</p><div className={`my-7 h-px ${plan.featured ? "bg-black/20" : "bg-white/15"}`}/><ul className="flex-1 space-y-4">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-xs"><Check size={15} className={plan.featured ? "text-black" : "text-[#d9ff35]"}/>{feature}</li>)}</ul><a href="#contact" className={`mt-9 flex items-center justify-center gap-3 px-5 py-4 text-[10px] font-extrabold tracking-[.14em] ${plan.featured ? "bg-black text-white hover:bg-black/80" : "bg-[#d9ff35] text-black hover:bg-[#e6ff70]"}`}>CHOOSE THIS PLAN <ArrowUpRight size={15}/></a></div>)}</div><p className="mt-7 text-center text-[10px] text-white/35">Illustrative demo pricing only. Final plans and inclusions should be confirmed by the gym owner.</p>
        </div>
      </section>

      <section id="gallery" className="section-pad">
        <div className="container-main">
          <div className="mb-12 flex items-end justify-between"><div><p className="eyebrow mb-5">Inside the club</p><h2 className="section-title">THE WORK<br/><span className="accent-text">HAPPENS HERE.</span></h2></div><span className="hidden text-[10px] font-bold tracking-[.16em] text-white/40 sm:block">A GLIMPSE OF THE GRIND ↗</span></div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{photos.map((photo, i) => <div key={photo} className={`group relative overflow-hidden bg-[#171717] ${i === 0 ? "md:col-span-2 md:row-span-2" : ""} `}><img src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1000&q=80`} alt="Ironcore gym training space" className={`h-full min-h-[190px] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 ${i === 0 ? "md:min-h-[430px]" : ""}`/><span className="absolute bottom-4 left-4 text-[9px] font-extrabold tracking-[.16em] text-white">IRONCORE / 0{i+1}</span></div>)}</div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111] py-20">
        <div className="container-main grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow mb-5">A few things you may be wondering</p><h2 className="section-title">GOOD TO<br/><span className="accent-text">KNOW.</span></h2><p className="mt-6 max-w-[300px] text-sm leading-6 text-white/50">Still have questions? Talk to our team and we'll help you find your starting point.</p></div><div>{["I'm new to the gym. Can I still join?","Can I try a session before joining?","Do you offer personal training?","Can I change my membership plan?"].map((q,i) => <div key={q} className="border-b border-white/15"><button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-sm font-semibold">{q}<ChevronDown size={17} className={`shrink-0 text-[#d9ff35] transition ${faqOpen === i ? "rotate-180" : ""}`/></button>{faqOpen === i && <p className="max-w-[570px] pb-6 text-xs leading-6 text-white/50">Absolutely. Our team can walk you through the space, understand your goals and help you choose a comfortable starting point. Contact us to discuss the details.</p>}</div>)}</div></div>
      </section>

      <section id="contact" className="section-pad">
        <div className="container-main grid gap-14 lg:grid-cols-2">
          <div><p className="eyebrow mb-5">Your next chapter starts now</p><h2 className="section-title">READY TO<br/><span className="accent-text">GET TO WORK?</span></h2><p className="mt-7 max-w-[400px] text-sm leading-7 text-white/55">Tell us a little about yourself. Our team will help you take the first step towards a stronger, healthier you.</p><div className="mt-10 space-y-5"><div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center border border-white/15 text-[#d9ff35]"><Timer size={18}/></span><div><p className="text-xs font-bold">OPENING HOURS</p><p className="mt-1 text-xs text-white/45">Mon – Sat · 6:00 AM – 10:00 PM (demo hours)</p></div></div><div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center border border-white/15 text-[#d9ff35]"><Users size={18}/></span><div><p className="text-xs font-bold">VISIT THE CLUB</p><p className="mt-1 text-xs text-white/45">Add your gym's address before publishing.</p></div></div></div></div>
          <div className="card-line p-7 md:p-10">{formSent ? <div className="flex min-h-[390px] flex-col items-center justify-center text-center"><span className="mb-5 grid h-14 w-14 place-items-center bg-[#d9ff35] text-black"><Check size={25}/></span><h3 className="display-font text-4xl font-bold">THANKS FOR REACHING OUT.</h3><p className="mt-3 max-w-[280px] text-sm leading-6 text-white/50">This is a frontend demo. Connect a form service or backend to receive enquiries.</p><button onClick={() => setFormSent(false)} className="mt-7 text-xs font-bold text-[#d9ff35]">SEND ANOTHER ENQUIRY</button></div> : <form onSubmit={submitEnquiry}><p className="eyebrow mb-8">Membership enquiry</p><label className="mb-5 block text-[10px] font-bold uppercase tracking-wider text-white/60">Your name<input required name="name" placeholder="Enter your name" className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#d9ff35]"/></label><label className="mb-5 block text-[10px] font-bold uppercase tracking-wider text-white/60">Phone number<input required name="phone" type="tel" placeholder="+91 00000 00000" className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#d9ff35]"/></label><label className="mb-5 block text-[10px] font-bold uppercase tracking-wider text-white/60">I'm interested in<select name="interest" className="mt-2 w-full border-b border-white/20 bg-[#111] px-0 py-3 text-sm text-white outline-none focus:border-[#d9ff35]"><option>General membership</option><option>Personal training</option><option>Strength training</option><option>Fat loss program</option></select></label><label className="mb-8 block text-[10px] font-bold uppercase tracking-wider text-white/60">Anything else? <textarea name="message" rows={2} placeholder="Tell us about your goals..." className="mt-2 w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#d9ff35]"/></label><button type="submit" className="btn-primary w-full">SEND ENQUIRY <ArrowUpRight size={15}/></button><p className="mt-4 text-center text-[9px] text-white/30">Demo form only — submissions are not stored or sent.</p></form>}</div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050505] py-12"><div className="container-main"><div className="flex flex-col justify-between gap-10 md:flex-row md:items-center"><a href="#" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center bg-[#d9ff35] text-black"><Dumbbell size={22}/></span><span><span className="display-font block text-[27px] font-extrabold">IRONCORE</span><span className="block text-[9px] font-bold tracking-[.32em] text-[#d9ff35]">FITNESS CLUB</span></span></a><div className="flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-bold uppercase tracking-wider text-white/50">{["About","Programs","Coaches","Membership","Contact"].map(x=><a key={x} href={`#${x.toLowerCase()}`} className="hover:text-[#d9ff35]">{x}</a>)}</div><a href="#contact" className="flex items-center gap-3 text-xs font-bold text-[#d9ff35]">LET'S TALK <ArrowUpRight size={15}/></a></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[9px] tracking-wider text-white/30 md:flex-row"><span>© 2026 IRONCORE FITNESS CLUB. DEMO WEBSITE.</span><span>BUILT FOR THOSE WHO SHOW UP.</span></div></div></footer>
    </main>
  );
}