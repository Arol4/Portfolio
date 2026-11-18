import { useLanguage } from './context/LanguageContext'
import { CustomCursor } from './components/CustomCursor'
import { NeuralCanvas } from './components/NeuralCanvas'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Parcours } from './components/Parcours'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()
  const { data } = useLanguage()

  return (
    <>
      {/* Curseur personnalisé */}
      <CustomCursor />

      {/* Canvas interactif réseau de neurones */}
      <NeuralCanvas />

      {/* Barre de navigation */}
      <Navbar shortName={data.personalInfo.shortName} />

      <main>
        {/* Section Hero */}
        <Hero personalInfo={data.personalInfo} />

        {/* Bannière défilante signature */}
        <Marquee keywords={data.marqueeKeywords} />

        {/* Projets */}
        <Projects projects={data.projects} />

        {/* À propos */}
        <About about={data.about} />

        {/* Compétences */}
        <Skills skills={data.skills} />

        {/* Parcours & Certifications */}
        <Parcours parcours={data.parcours} />

        {/* Contact */}
        <Contact contact={data.contact} />
      </main>

      {/* Pied de page */}
      <Footer
        personalInfo={data.personalInfo}
        contact={data.contact}
      />
    </>
  )
}
