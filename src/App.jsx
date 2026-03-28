import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, WhatsappLogo, InstagramLogo, Phone, Sparkle, Syringe, Heartbeat, Leaf, Scissors, UserCircle, MapPin, Clock, Certificate } from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/5548991079698?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20Ibelli!'
const IG = 'https://www.instagram.com/ibelliclinica/'
const TEL = 'tel:+5548991079698'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">IBELLI</div>
      <div className="nav-links">
        <a href="#servicos">Serviços</a>
        <a href="#equipe">Equipe</a>
        <a href="#avaliacoes">Avaliações</a>
      </div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nb">
        <WhatsappLogo size={16} weight="duotone" /> Agendar
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="mx hero-center">
        <motion.div className="hero-label" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Sparkle size={14} weight="fill" /> Estética & Endocrinologia
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          Sua melhor versão<br /><span className="gold">começa aqui</span>
        </motion.h1>
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Harmonização facial e corporal, endocrinologia, nutrologia e medicina integrativa. Consultas personalizadas com acolhimento e excelência em Palhoça.
        </motion.p>
        <motion.div className="hero-stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <div className="stat"><strong>4.6</strong><span>Google</span></div>
          <div className="stat-sep" />
          <div className="stat"><strong>200+</strong><span>Avaliações</span></div>
          <div className="stat-sep" />
          <div className="stat"><strong>1000+</strong><span>Pacientes</span></div>
        </motion.div>
        <motion.div className="hero-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-prim">
            <WhatsappLogo size={18} weight="duotone" /> <span>Agendar Consulta</span>
          </a>
          <a href={TEL} className="btn-sec">
            <Phone size={18} weight="duotone" /> <span>(48) 99107-9698</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const servicos = [
  { icon: <Syringe size={26} weight="duotone" />, title: 'Harmonização Facial', desc: 'Preenchimento labial, toxina botulínica e bioestimuladores para resultados naturais e sofisticados.' },
  { icon: <Sparkle size={26} weight="duotone" />, title: 'Harmonização Corporal', desc: 'Procedimentos avançados para contorno corporal, redução de medidas e rejuvenescimento.' },
  { icon: <Heartbeat size={26} weight="duotone" />, title: 'Endocrinologia', desc: 'Equilíbrio hormonal, tireoide, diabetes e saúde metabólica com Dr. Nemer Finotelo.' },
  { icon: <Leaf size={26} weight="duotone" />, title: 'Nutrologia', desc: 'Nutrição clínica e esportiva personalizada para emagrecimento saudável e performance.' },
  { icon: <Scissors size={26} weight="duotone" />, title: 'Pequenas Cirurgias', desc: 'Procedimentos ambulatoriais com segurança, técnica e conforto em ambiente controlado.' },
  { icon: <Certificate size={26} weight="duotone" />, title: 'Medicina Integrativa', desc: 'Abordagem holística para envelhecimento saudável, bem-estar e qualidade de vida.' },
]

function Servicos() {
  return (
    <section className="sp serv-sec" id="servicos">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Especialidades</span>
          <h2>Excelência em cada procedimento</h2>
          <p>Tecnologia avançada e profissionais qualificados para resultados que transformam</p>
        </motion.div>
        <motion.div className="serv-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {servicos.map((s, i) => (
            <motion.div key={i} className="serv-card" variants={fadeUp} custom={i}>
              <div className="serv-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Equipe() {
  return (
    <section className="sp" id="equipe">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Nossa Equipe</span>
          <h2>Profissionais de referência</h2>
        </motion.div>
        <motion.div className="eq-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {[
            { name: 'Dr. Nemer Finotelo', role: 'Endocrinologia & Nutrologia', desc: 'Especialista em equilíbrio hormonal e emagrecimento saudável.' },
            { name: 'Dra. Fernanda Wilk', role: 'Nutrição Clínica', desc: 'Nutricionista com foco em nutrição esportiva e funcional.' },
          ].map((d, i) => (
            <motion.div key={i} className="eq-card" variants={fadeUp} custom={i}>
              <div className="eq-avatar"><UserCircle size={40} weight="duotone" /></div>
              <h3>{d.name}</h3>
              <span className="eq-role">{d.role}</span>
              <p>{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const reviews = [
  { text: 'Ambiente impecável e atendimento humanizado. Me senti acolhida desde a recepção. Resultados surpreendentes!', author: 'Camila R.' },
  { text: 'O Dr. Nemer é um profissional excepcional. Finalmente entendi meu corpo e estou emagrecendo de forma saudável.', author: 'Patrícia M.' },
  { text: 'Fiz harmonização facial e o resultado ficou extremamente natural. Equipe atenciosa e ambiente sofisticado.', author: 'Amanda S.' },
  { text: 'Consulta completa e personalizada de verdade. Não é consulta de 10 minutos. Vale cada centavo.', author: 'Roberto L.' },
  { text: 'Clínica linda, limpa e higiênica. Profissionais qualificados e simpáticos. Recomendo de olhos fechados!', author: 'Fernanda T.' },
  { text: 'Melhor clínica da região de Palhoça. Atendimento pós-consulta diferenciado. Voltarei sempre!', author: 'Juliana C.' },
]

function Avaliacoes() {
  return (
    <section className="sp rev-sec" id="avaliacoes">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Avaliações</span>
          <h2>O que dizem nossos pacientes</h2>
          <p>200+ avaliações com nota 4.6 no Google</p>
        </motion.div>
        <motion.div className="rev-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((r, i) => (
            <motion.div key={i} className="rev-card" variants={fadeUp} custom={i}>
              <div className="rev-stars">{[0,1,2,3,4].map(j => <Star key={j} size={14} weight="fill" color="#C9A96E" />)}</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <span className="rev-author">{r.author}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta sp">
      <div className="mx cta-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Inicie sua<br /><span className="gold">transformação</span></h2>
          <p>Agende sua consulta e descubra o tratamento ideal para você.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-prim">
            <WhatsappLogo size={18} weight="duotone" /> <span>Agendar pelo WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Info() {
  return (
    <section className="sp info-sec">
      <div className="mx info-grid">
        <motion.div className="info-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <MapPin size={22} weight="duotone" />
          <h3>Localização</h3>
          <p>R. Monza, 226 – Sala 708<br />Pagani, Palhoça – SC</p>
        </motion.div>
        <motion.div className="info-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          <Clock size={22} weight="duotone" />
          <h3>Horário</h3>
          <p>Segunda a Sexta<br />08:00 às 17:00</p>
        </motion.div>
        <motion.div className="info-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <WhatsappLogo size={22} weight="duotone" />
          <h3>Contato</h3>
          <p>(48) 99107-9698<br />WhatsApp e telefone</p>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-brand">IBELLI</div>
        <div className="footer-sub">Clínica de Estética e Endocrinologia</div>
        <div className="footer-info">R. Monza, 226, Sala 708, Pagani — Palhoça, SC<br />(48) 99107-9698</div>
        <div className="footer-links">
          <a href={IG} target="_blank" rel="noopener noreferrer" className="fl"><InstagramLogo size={14} weight="duotone" /> @ibelliclinica</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="fl"><WhatsappLogo size={14} weight="duotone" /> WhatsApp</a>
        </div>
        <div className="footer-copy">&copy; 2026 Clínica Ibelli. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

function FloatingWa() {
  return (
    <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="fbtn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.05 }}>
      <WhatsappLogo size={20} weight="duotone" />
    </motion.a>
  )
}

function App() {
  return (
    <>
      <Helmet>
        <title>Clínica Ibelli | Estética e Endocrinologia — Palhoça</title>
        <meta name="description" content="Clínica Ibelli - Estética, endocrinologia e nutrologia em Palhoça, SC. 200+ avaliações no Google. Harmonização, emagrecimento, medicina integrativa." />
      </Helmet>
      <Navbar />
      <Hero />
      <Servicos />
      <Equipe />
      <Avaliacoes />
      <Info />
      <Cta />
      <Footer />
      <FloatingWa />
    </>
  )
}

export default App
