"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Check, Heart, Menu, MessageCircle, PenLine, Quote, Sparkles, Star, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

const whatsapp = "https://wa.me/916383393155?text=" + encodeURIComponent("வணக்கம்! என் கதையை ஒரு புத்தகமாக மாற்ற விரும்புகிறேன்.");
const services = [
  ["காதல் கதை","Love Story","காதலின் முதல் சந்திப்பிலிருந்து வாழ்நாள் பயணம் வரை.","❤️"],
  ["குடும்ப நினைவுகள்","Family Story","உங்கள் குடும்பத்தின் அழகிய பாரம்பரியத்தைப் பாதுகாப்போம்.","👨‍👩‍👧"],
  ["வீட்டின் பயணம்","House Journey","கனவிலிருந்து இல்லம் வரை ஒவ்வொரு அத்தியாயமும்.","🏠"],
  ["பெற்றோர் வரலாறு","Parents Memoir","அன்பும் தியாகமும் நிறைந்த அவர்களின் வாழ்க்கை.","👵"],
  ["திருமண நினைவுகள்","Wedding Story","உங்கள் சிறப்பான நாளை என்றும் வாழும் கதையாக்குவோம்.","💍"],
  ["தொழில் பயணம்","Business Journey","ஒரு கனவின் தொடக்கமும் அதன் வெற்றியும்.","💼"],
];
const serviceDescriptions = [
  "From your first meeting to a lifetime journey of love.",
  "Preserve your family's beautiful heritage for generations.",
  "Every chapter from a dream to the home you built.",
  "A life of love and sacrifice, held close forever.",
  "Let your special day live on as a beautiful story.",
  "The beginning of a dream and the path to success.",
];
const testimonials = [
  ["என் அப்பாவின் வாழ்க்கை கதையை புத்தகமாக கொடுத்தபோது அவர் கண்களில் கண்ணீர் வந்தது.","When we gave my father his life story as a book, there were tears in his eyes."],
  ["எங்கள் காதல் பயணத்தை புத்தகமாக மாற்றிய விதம் மிகவும் அழகாக இருந்தது.","The way they turned our journey of love into a book was truly beautiful."],
  ["வீடு கட்டிய பயணத்தை புத்தகமாக வைத்திருப்பது எங்கள் குடும்பத்திற்கு ஒரு பொக்கிஷம்.","Keeping our home-building journey as a book is a treasure for our family."],
];
const navLinks = (t:(a:string,b:string)=>string):[string,string][] => [
  ["#services", t("சேவைகள்","Services")],
  ["#portfolio", t("புத்தகங்கள்","Books")],
  ["#pricing",   t("விலை","Pricing")],
  ["#about",     t("எங்களைப் பற்றி","About")],
  ["#contact",   t("தொடர்பு","Contact")],
];

function Tag({children}:{children:React.ReactNode}){
  return <p className="mb-2 text-[11px] font-bold uppercase tracking-[.22em] text-gold">{children}</p>;
}
function SectionTitle({eyebrow,title,text,light=false}:{eyebrow:string;title:string;text?:string;light?:boolean}){
  return(
    <div className="max-w-xl">
      <Tag>{eyebrow}</Tag>
      <h2 className={`font-serif text-2xl leading-tight sm:text-3xl md:text-4xl ${light?"text-white":"text-wine"}`}>{title}</h2>
      {text&&<p className={`mt-3 text-sm leading-7 ${light?"text-white/60":"text-stone-500"}`}>{text}</p>}
    </div>
  );
}
function Btn({children,ghost=false,href=whatsapp,internal=false}:{children:React.ReactNode;ghost?:boolean;href?:string;internal?:boolean}){
  return(
    <a href={href} {...(!internal&&{target:"_blank",rel:"noopener noreferrer"})}
      className={"inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition active:scale-95 "+(ghost?"border border-white/30 text-white hover:bg-white/10":"bg-wine text-white shadow-md shadow-wine/20")}>
      {children}<ArrowRight size={15}/>
    </a>
  );
}

export default function Home(){
  const [en,setEn]=useState(false);
  const [activeTesti,setActiveTesti]=useState(0);
  const [menuOpen,setMenuOpen]=useState(false);
  const t=(ta:string,en2:string)=>en?en2:ta;
  const links = navLinks(t);
  const closeMenu = ()=>setMenuOpen(false);

  // programmatic smooth-scroll that accounts for the fixed nav height
  const navigateTo = (href: string) => {
    setMenuOpen(false);
    if(!href.startsWith("#")) return;
    const id = href.slice(1);
    // small delay so drawer close animation doesn't fight the scroll
    setTimeout(()=>{
      const el = document.getElementById(id);
      if(el){
        const navH = document.querySelector("nav")?.offsetHeight ?? 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({top, behavior:"smooth"});
      }
    }, 50);
  };

  useEffect(()=>{document.title=en?"Jeevanyam | Personalized Story Books":"ஜீவனயம் | தனிப்பயன் கதை புத்தகங்கள்";},[en]);
  useEffect(()=>{const id=window.setInterval(()=>setActiveTesti(c=>(c+1)%testimonials.length),5000);return()=>window.clearInterval(id);},[]);
  // close menu on resize to desktop
  useEffect(()=>{
    const fn=()=>{ if(window.innerWidth>=768) setMenuOpen(false); };
    window.addEventListener("resize",fn);
    return ()=>window.removeEventListener("resize",fn);
  },[]);

  const submit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const f=new FormData(e.currentTarget);
    window.open(`https://wa.me/916383393155?text=Hello!%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0AStory: ${f.get("story")}%0AMessage: ${f.get("message")}`,"_blank");
  };

  return(
  <main>

  {/* ══════════════ NAV ══════════════ */}
  <nav className="fixed inset-x-0 top-0 z-50 border-b border-wine/10 bg-cream/95 backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

      {/* logo */}
      <a href="#home" onClick={(e)=>{e.preventDefault();navigateTo("#home");}} className="shrink-0">
        <img src="/images/jeevanyam-logo-dark.png" alt="ஜீவனயம்" className="h-16 w-auto object-contain sm:h-20" fetchPriority="high"/>
      </a>

      {/* desktop links */}
      <div className="hidden items-center gap-6 text-sm font-medium text-ink/70 md:flex">
        {links.map(([href,label])=>
          <button key={href} onClick={()=>navigateTo(href)}
            className="transition hover:text-wine">{label}</button>
        )}
      </div>

      {/* controls */}
      <div className="flex items-center gap-2">
        <button onClick={()=>setEn(!en)}
          className="rounded-full border border-gold/50 px-3 py-1.5 text-xs font-bold text-wine hover:bg-gold/10 transition active:scale-95">
          {en?"தமிழ்":"EN"}
        </button>
        {/* hamburger */}
        <button
          onClick={()=>setMenuOpen(o=>!o)}
          aria-label={menuOpen?"Close menu":"Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-wine/20 text-wine transition hover:bg-wine/8 active:scale-95 md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen
              ? <motion.span key="x" initial={{rotate:-45,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:45,opacity:0}} transition={{duration:.15}}><X size={18}/></motion.span>
              : <motion.span key="m" initial={{rotate:45,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:-45,opacity:0}} transition={{duration:.15}}><Menu size={18}/></motion.span>
            }
          </AnimatePresence>
        </button>
      </div>
    </div>

    {/* mobile drawer */}
    <AnimatePresence>
      {menuOpen&&(
        <motion.div key="drawer"
          initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
          transition={{duration:.25,ease:"easeInOut"}}
          className="overflow-hidden border-t border-wine/8 bg-cream/98 backdrop-blur-md md:hidden">
          <ul className="mx-auto max-w-7xl space-y-0.5 px-4 py-3">
            {links.map(([href,label],i)=>(
              <motion.li key={href}
                initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} transition={{delay:i*0.04,duration:.18}}>
                <button
                  onClick={()=>navigateTo(href)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-base font-semibold text-ink/80 transition hover:bg-wine/6 hover:text-wine active:bg-wine/10 active:scale-[.98]">
                  {label}
                  <ArrowRight size={15} className="text-wine/30"/>
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>

  {/* ══════════════ HERO ══════════════ */}
  <section id="home" className="relative bg-[#1e0810] pt-20 text-white overflow-hidden">
    <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(200,155,75,.12),transparent_70%)]"/>
    <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(100,31,43,.4),transparent_70%)]"/>
    <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-20">

      {/* copy */}
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="flex flex-col">
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold">
          <Sparkles size={10}/>{t("உங்கள் நினைவுகள், எங்கள் கலை","YOUR MEMORIES, OUR CRAFT")}
        </div>
        <h1 className="font-serif text-3xl leading-[1.12] sm:text-4xl md:text-5xl lg:text-6xl">
          {en?<>Turn Your Life<br/><span className="text-gold">Into A Beautiful</span><br/>Book</>
             :<>உங்கள் வாழ்க்கை<br/><span className="text-gold">ஒரு அழகான</span><br/>புத்தகமாக</>}
        </h1>
        <div className="my-4 flex items-center gap-3">
          <span className="h-px w-8 bg-gold/50"/><Heart size={12} className="text-gold/70" fill="currentColor"/><span className="h-px flex-1 bg-white/10"/>
        </div>
        <p className="max-w-sm text-sm leading-7 text-white/60">
          {en?"Preserve the moments that made you — thoughtfully written, beautifully designed, forever yours."
             :"நினைவுகளை தலைமுறைகள் கடந்து பாதுகாப்போம். உங்கள் கதை, உங்கள் குரலில், என்றும் வாழும் ஒரு புத்தகமாக."}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Btn>{t("கதையைத் தொடங்குங்கள்","Begin Your Story")}</Btn>
          <button onClick={()=>navigateTo("#how")}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 active:scale-95">
            {t("எப்படி செய்கிறோம்","How it works")}<ArrowRight size={15}/>
          </button>
        </div>
        <div className="mt-7 flex gap-6 border-t border-white/10 pt-6">
          {[["500+",t("கதைகள்","Stories")],["4.9/5",t("மதிப்பீடு","Rating")],["3+",t("ஆண்டுகள்","Years")]].map(([n,l])=>
            <div key={l}><b className="block font-serif text-xl text-gold sm:text-2xl">{n}</b><span className="text-white/45 text-[11px]">{l}</span></div>
          )}
        </div>
      </motion.div>

      {/* photo mosaic — desktop only */}
      <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.85,delay:.2}} className="relative hidden md:block">
        <div className="grid grid-cols-12 grid-rows-[160px_150px_150px] gap-2">
          <div className="col-span-5 row-span-2 overflow-hidden rounded-xl"><img src="/images/hero-memory-1.jpg" alt="குடும்ப நினைவு" fetchPriority="high" loading="eager" className="h-full w-full object-cover transition duration-700 hover:scale-105"/></div>
          <div className="col-span-4 row-span-1 overflow-hidden rounded-xl"><img src="/images/hero-memory-2.jpg" alt="விளக்கு" loading="lazy" className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"/></div>
          <div className="col-span-3 row-span-2 overflow-hidden rounded-xl"><img src="/images/hero-memory-4.jpg" alt="வாசல்" loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105"/></div>
          <div className="col-span-4 row-span-1 overflow-hidden rounded-xl"><img src="/images/hero-memory-3.jpg" alt="பொங்கல்" loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105"/></div>
          <div className="col-span-12 row-span-1 overflow-hidden rounded-xl"><img src="/images/hero-memory-5.jpg" alt="இல்லம்" loading="lazy" className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"/></div>
        </div>
        <div className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-xl border border-gold/20 bg-[#1e0810]/90 px-3 py-2.5 backdrop-blur-sm shadow-lg">
          <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/20"><Heart size={11} className="text-gold" fill="currentColor"/></div>
          <div><p className="text-[10px] font-bold text-white">{t("ஒவ்வொரு நினைவும் சிறப்பானது","Every memory is precious")}</p><p className="text-[9px] text-white/40">Jeevanyam</p></div>
        </div>
      </motion.div>

      {/* mobile-only image strip */}
      <div className="flex gap-2 overflow-x-auto pb-1 md:hidden" style={{scrollSnapType:"x mandatory"}}>
        {["hero-memory-1","hero-memory-2","hero-memory-4","hero-memory-3"].map(img=>(
          <div key={img} className="h-44 w-36 shrink-0 overflow-hidden rounded-xl" style={{scrollSnapAlign:"start"}}>
            <img src={`/images/${img}.jpg`} alt="" loading="lazy" className="h-full w-full object-cover"/>
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* ══════════════ HOW ══════════════ */}
  <section id="how" className="bg-cream py-14 sm:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <SectionTitle eyebrow="OUR PROCESS" title={t("நான்கு எளிய படிகள்","Four simple steps")}/>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {([["01",t("பகிருங்கள்","Share"),MessageCircle],["02",t("எழுதுகிறோம்","We Write"),PenLine],["03",t("வடிவமைக்கிறோம்","We Design"),Sparkles],["04",t("உங்களிடம்","Delivered"),BookOpen]] as [string,string,any][]).map(([num,name,Icon])=>
          <motion.div whileHover={{y:-4}} key={num} className="rounded-xl border border-wine/8 bg-white p-5 shadow-sm">
            <span className="text-xs font-bold text-gold">{num}</span>
            <Icon className="my-3 text-wine" size={20}/>
            <h3 className="font-serif text-base text-wine sm:text-lg">{name}</h3>
            <p className="mt-1 text-xs leading-5 text-stone-500">{t("அன்புடன், உங்கள் வசதிக்கு ஏற்றபடி.","At your pace, with gentle guidance.")}</p>
          </motion.div>
        )}
      </div>
    </div>
  </section>

  {/* ══════════════ SERVICES ══════════════ */}
  <section id="services" className="bg-[#f0e6d3] py-14 sm:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <SectionTitle eyebrow="STORIES WE HOLD" title={t("ஒவ்வொரு வாழ்க்கைக்கும் ஒரு புத்தகம்","A book for every life")} text={t("காதல், குடும்பம், கனவுகள் — எந்த நினைவும் சிறியது அல்ல.","Love, family, milestones — no memory is too small.")}/>
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {services.map(([ta,enN,desc,emoji],i)=>
          <motion.article whileHover={{y:-3}} key={ta} className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-sm">
            <div className="absolute right-3 top-3 text-3xl opacity-15 transition group-hover:scale-125 group-hover:opacity-25">{emoji}</div>
            <h3 className="relative font-serif text-lg text-wine">{en?enN:ta}</h3>
            <p className="relative mt-2 text-xs leading-6 text-stone-500">{en?serviceDescriptions[i]:desc}</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-wine">
              {t("விசாரிக்கவும்","Enquire")}<ArrowRight size={12}/>
            </a>
          </motion.article>
        )}
      </div>
    </div>
  </section>

  {/* ══════════════ GLIMPSE ══════════════ */}
  <section id="portfolio" className="bg-[#1e0810] py-14 text-white sm:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle light eyebrow="A GLIMPSE INSIDE" title={t("கைகளில் பிடிக்கக்கூடிய நினைவுகள்","Memories made tangible")}/>
        <div className="flex flex-wrap gap-2">
          {[t("காதல்","Love"),t("குடும்பம்","Family"),t("திருமணம்","Wedding"),t("வாழ்க்கை","Life")].map(l=>
            <span key={l} className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/50">{l}</span>
          )}
        </div>
      </div>
      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}
          className="group flex overflow-hidden rounded-2xl bg-[#2c1019] ring-1 ring-gold/20 shadow-xl">
          <div className="relative w-32 shrink-0 overflow-hidden sm:w-36">
            <img src="/images/kalai-joathi-book.jpg" alt="கவைஜோதி இல்லம்" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[#2c1019] to-transparent"/>
          </div>
          <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{t("வீட்டின் பயணம்","House Journey")}</span>
              <h3 className="mt-1 font-serif text-sm text-white sm:text-base">{t("கவைஜோதி இல்லம்","Kavalajoathi Illam")}</h3>
              <p className="mt-1 text-[11px] text-white/40">{t("எழுத்து — ராம்","Written by Ram")}</p>
              <div className="my-2 h-px w-5 bg-gold/30"/>
              <p className="text-[11px] leading-5 text-white/50">{t("ஒரு குடும்பக் கனவும் உழைப்பும் புத்தகமானது.","A family's dream, now a book.")}</p>
            </div>
            <div className="mt-3 flex items-center gap-0.5">
              {[...Array(5)].map((_,i)=><Star key={i} size={10} className="text-gold" fill="currentColor"/>)}
              <span className="ml-2 text-[9px] text-white/30">{t("வெளியிடப்பட்டது","Published")}</span>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:.12}}
          className="flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5">
          <div className="flex flex-col items-center gap-3 p-6 text-center">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/40"><BookOpen size={18}/></div>
            <p className="font-serif text-sm text-white/50">{t("அடுத்த கதை விரைவில்…","Next story coming soon…")}</p>
            <p className="text-[11px] text-white/30">{t("உங்கள் கதை இங்கே இருக்கலாம்","Your story could be here")}</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-4 py-1.5 text-[11px] font-bold text-gold transition hover:bg-gold/10">
              {t("தொடங்குங்கள்","Begin yours")}<ArrowRight size={11}/>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* ══════════════ PRICING ══════════════ */}
  <section id="pricing" className="bg-cream py-14 sm:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-center"><SectionTitle eyebrow="CHOOSE YOUR LEGACY" title={t("உங்கள் கதைக்கான சிறந்த வடிவம்","The right form for your story")}/></div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {([["Starter",t("தொடக்கம்","Starter"),["Story writing","PDF delivery"],false],["Premium",t("அழகு","Premium"),["Story writing","Premium design","PDF delivery"],true],["Luxury",t("பாரம்பரியம்","Luxury"),["Story writing","Premium design","Print support","Gift-ready finish"],false]] as [string,string,string[],boolean][]).map(([key,name,items,featured])=>
          <div key={key} className={`relative rounded-xl p-6 text-left ${featured?"bg-wine text-white shadow-xl ring-2 ring-gold/40":"bg-white border border-wine/10 shadow-sm"}`}>
            {featured&&<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-0.5 text-[10px] font-bold text-wine">MOST LOVED</span>}
            <p className="text-[10px] uppercase tracking-widest text-gold">{key}</p>
            <h3 className={`mt-2 font-serif text-xl sm:text-2xl ${featured?"text-white":"text-wine"}`}>{name}</h3>
            <div className={`my-4 h-px ${featured?"bg-white/15":"bg-wine/10"}`}/>
            <ul className="space-y-2 text-sm">
              {items.map(x=><li key={x} className="flex items-center gap-2"><Check size={14} className="text-gold shrink-0"/>{x}</li>)}
            </ul>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-block text-sm font-bold ${featured?"text-gold":"text-wine"}`}>{t("விலை கேளுங்கள் →","Ask for pricing →")}</a>
          </div>
        )}
      </div>
      <p className="mt-5 text-center text-xs text-stone-400">{t("உங்கள் கனவுக்கு ஏற்ப தனிப்பயன் விலையும் உண்டு.","Custom pricing available for your unique story.")}</p>
    </div>
  </section>

  {/* ══════════════ ABOUT ══════════════ */}
  <section id="about" className="bg-[#f0e6d3] py-14 sm:py-16">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-12">
      <div>
        <SectionTitle eyebrow="WHY WE EXIST" title={t("நினைவுகள் மறக்கப்படக் கூடாது","Memories deserve to outlive the moment")} text={t("ஒரு வீட்டில் சொல்லப்படும் கதைகள், நாளை ஒரு குடும்பத்தின் வேர்களாக மாறுகின்றன. அவற்றை அன்புடன் எழுதிப் பாதுகாப்பதே எங்கள் பணி.","The stories told in a home become a family's roots. We give them a lasting, beautiful place to live.")}/>
        <div className="mt-6 flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-wine text-sm font-bold text-gold">A</div>
          <div><b className="text-sm text-wine">Ananya Raman</b><p className="text-xs text-stone-500">Founder &amp; Story Keeper</p></div>
        </div>
      </div>
      <blockquote className="border-l-2 border-gold pl-6 font-serif text-xl leading-relaxed text-wine sm:text-2xl">
        "{t("ஒவ்வொரு குடும்பத்திலும் எழுதப்படக் காத்திருக்கும் ஒரு நூல் இருக்கிறது.","Every family has a book waiting to be written.")}"
      </blockquote>
    </div>
  </section>

  {/* ══════════════ TESTIMONIALS ══════════════ */}
  <section className="bg-[#1e0810] py-14 text-white sm:py-16">
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <SectionTitle light eyebrow={t("எங்கள் குடும்பங்களிடமிருந்து","FROM OUR FAMILIES")} title={t("அன்பால் எழுதப்பட்ட வார்த்தைகள்","Words from the families we serve")}/>
      <div className="mt-7">
        <AnimatePresence mode="wait">
          <motion.article key={activeTesti} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:.35}}
            className="rounded-xl border border-white/8 bg-white/5 p-6 sm:p-8">
            <Quote className="text-gold" size={24}/>
            <p className="mt-4 font-serif text-lg leading-relaxed text-white/90 sm:text-xl">
              "{en?testimonials[activeTesti][1]:testimonials[activeTesti][0]}"
            </p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-1">{[1,2,3,4,5].map(x=><Star key={x} size={12} fill="currentColor" className="text-gold"/>)}</div>
              <span className="text-xs text-white/40">{en?["Meena & family","Arun & Kavya","Rajesh family"][activeTesti]:["மீனா & குடும்பம்","அருண் & காவ்யா","ராஜேஷ் குடும்பம்"][activeTesti]}</span>
            </div>
          </motion.article>
        </AnimatePresence>
        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((_,i)=>
            <button key={i} onClick={()=>setActiveTesti(i)} aria-label={`Testimonial ${i+1}`}
              className={`h-1.5 rounded-full transition-all ${i===activeTesti?"w-7 bg-gold":"w-1.5 bg-white/20"}`}/>
          )}
        </div>
      </div>
    </div>
  </section>

  {/* ══════════════ CONTACT ══════════════ */}
  <section id="contact" className="bg-cream py-14 sm:py-16">
    <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-2 md:items-start md:gap-12">
      <SectionTitle eyebrow="BEGIN YOUR BOOK" title={t("உங்கள் கதையை எங்களுக்குச் சொல்லுங்கள்","Tell us about your story")}/>
      <form onSubmit={submit} className="grid gap-3" autoComplete="on">
        <input required name="name" autoComplete="name" placeholder={t("உங்கள் பெயர்","Your name")} className="rounded-lg border border-wine/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"/>
        <input required name="phone" autoComplete="tel" type="tel" inputMode="numeric" placeholder={t("தொலைபேசி எண்","Phone number")} className="rounded-lg border border-wine/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"/>
        <select name="story" autoComplete="off" className="rounded-lg border border-wine/15 bg-white px-4 py-3 text-sm text-stone-500 outline-none focus:border-gold">
          <option>{t("கதை வகையைத் தேர்ந்தெடுங்கள்","Select story type")}</option>
          {services.map(x=><option key={x[0]}>{x[0]}</option>)}
        </select>
        <textarea name="message" autoComplete="off" placeholder={t("உங்கள் கதையைப் பற்றி சில வார்த்தைகள்...","A few words about your story...")} rows={3} className="rounded-lg border border-wine/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"/>
        <button type="submit" className="flex items-center justify-center gap-2 rounded-lg bg-wine px-5 py-3 text-sm font-bold text-white transition hover:bg-wine/90 active:scale-[.98]">
          {t("WhatsApp-ல் அனுப்புங்கள்","Send on WhatsApp")}<MessageCircle size={16}/>
        </button>
      </form>
    </div>
  </section>

  {/* ══════════════ FOOTER ══════════════ */}
  <footer className="border-t border-wine/10 bg-[#f0e6d3]">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      {/* 3-col grid: logo | instagram | copyright */}
      <div className="grid grid-cols-1 items-center gap-5 text-center sm:grid-cols-3 sm:text-left">

        {/* col 1 — logo */}
        <div className="flex justify-center sm:justify-start">
          <img src="/images/jeevanyam-logo-dark.png" alt="ஜீவனயம்" loading="lazy" className="h-10 w-auto object-contain"/>
        </div>

        {/* col 2 — instagram (centered on both) */}
        <div className="flex flex-col items-center gap-2">
          <a
            href="https://www.instagram.com/jeevanyam_/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Jeevanyam on Instagram"
            className="group flex flex-col items-center gap-1.5 transition"
          >
            {/* Official Instagram glyph SVG */}
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5] shadow-md transition duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22" fill="white" aria-hidden="true">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </span>
            <span className="text-[11px] font-semibold text-stone-500 transition group-hover:text-[#d62976]">@jeevanyam_</span>
          </a>
        </div>

        {/* col 3 — copyright */}
        <div className="flex justify-center sm:justify-end">
          <p className="text-xs text-stone-400">© 2026 Jeevanyam.<br className="sm:hidden"/> {t("நினைவுகளை பாதுகாப்போம்.","Made for stories that matter.")}</p>
        </div>

      </div>
    </div>
  </footer>

  {/* floating WhatsApp */}
  <a href={whatsapp} target="_blank" rel="noopener noreferrer"
    className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 active:scale-95 sm:px-5">
    <MessageCircle size={17}/><span className="hidden sm:inline">{t("WhatsApp","WhatsApp")}</span>
  </a>

  </main>
  );
}
