# Portfolio — Berios Arol Djeufack Kafack (React + Vite)

Portfolio moderne d'ingénieur en Intelligence Artificielle, converti en architecture modulaire **React** avec **Vite**.

## 🚀 Fonctionnalités

- ⚡ **Vite + React 18** : Démarrage instantané, rechargement à chaud ultra-rapide (HMR) et build optimisé.
- 🧠 **Canvas Réseau Neuronal** : Arrière-plan interactif réactif aux mouvements de la souris et au thème sélectionné.
- 🎯 **Curseur Personnalisé** : Double curseur fluide (point + anneau) avec interpolation lerp et réactions aux survols interactifs (désactivé proprement sur écrans tactiles).
- 🌓 **Thème Sombre / Clair** : Basculement instantané avec persistance automatique dans `localStorage`.
- 📊 **Compteurs Animés** : Animation fluide des métriques clés (certifications, heures de formation certifiée, projets).
- ♾️ **Bandeau Défilant Signature (Marquee)** : Défilement fluide et infini des technologies IA clés.
- 💼 **Architecture de Données Centralisée** : Toutes les informations, projets, compétences, parcours et certifications sont configurables dans `src/data/portfolioData.js`.
- 📱 **100% Responsive & Accessible** : Menu tiroir mobile, gestion de `prefers-reduced-motion` et navigation clavier.

---

## 🛠️ Installation & Démarrage

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### 3. Construire pour la production
```bash
npm run build
```
Les fichiers prêts pour le déploiement seront générés dans le dossier `dist/`.

### 4. Prévisualiser le build de production
```bash
npm run preview
```

---

## 📁 Structure du projet

```
Portfolio/
├── public/                 # Fichiers statiques publics (favicon, icônes...)
│   └── favicon.svg
├── src/
│   ├── components/         # Composants React modulaires
│   │   ├── About.jsx       # Section À propos
│   │   ├── Contact.jsx     # Formulaire et coordonnées de contact
│   │   ├── CustomCursor.jsx# Curseur interactif
│   │   ├── Footer.jsx      # Pied de page
│   │   ├── Hero.jsx        # En-tête Hero & compteurs
│   │   ├── Marquee.jsx     # Bandeau de technologies défilant
│   │   ├── Navbar.jsx      # Navigation & menu mobile
│   │   ├── NeuralCanvas.jsx# Arrière-plan interactif en Canvas
│   │   ├── Parcours.jsx    # Timeline & certifications filtrables
│   │   ├── Projects.jsx    # Projets vedette & secondaires
│   │   ├── Skills.jsx      # Grille des compétences
│   │   └── ThemeToggle.jsx # Bouton de changement de thème
│   ├── data/
│   │   └── portfolioData.js# Données modifiables (textes, stats, projets...)
│   ├── hooks/
│   │   └── useScrollReveal.js # Hook d'apparition au scroll
│   ├── App.jsx             # Composant racine
│   ├── index.css           # Feuille de style globale (design tokens, thèmes)
│   └── main.jsx            # Point d'entrée React
├── Mes certifications/     # Documents et certificats originaux
├── index.html              # Template HTML principal pour Vite
├── index.html.backup       # Copie de sauvegarde du portfolio HTML d'origine
├── package.json            # Dépendances et scripts
└── vite.config.js          # Configuration Vite
```

---

## ✏️ Personnalisation du contenu

Pour mettre à jour vos projets, compétences, informations de contact ou certifications, il vous suffit de modifier le fichier :
👉 `src/data/portfolioData.js`
