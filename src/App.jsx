import { portfolioData } from './data/portfolioData'
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

  return (
    <>
      {/* Curseur personnalisé */}
      <CustomCursor />

      {/* Canvas interactif réseau de neurones */}
      <NeuralCanvas />

      {/* Barre de navigation */}
      <Navbar shortName={portfolioData.personalInfo.shortName} />

      <main>
        {/* Section Hero */}
        <Hero personalInfo={portfolioData.personalInfo} />

        {/* Bannière défilante signature */}
        <Marquee keywords={portfolioData.marqueeKeywords} />

        {/* Projets */}
        <Projects projects={portfolioData.projects} />

        {/* À propos */}
        <About about={portfolioData.about} />

        {/* Compétences */}
        <Skills skills={portfolioData.skills} />

        {/* Parcours & Certifications */}
        <Parcours parcours={portfolioData.parcours} />

        {/* Contact */}
        <Contact contact={portfolioData.contact} />
      </main>

      {/* Pied de page */}
      <Footer
        personalInfo={portfolioData.personalInfo}
        contact={portfolioData.contact}
      />
    </>
  )
}
