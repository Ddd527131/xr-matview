#  XR-MATVIEW – Visualisation XR de matériaux

> Projet de démonstration immersive des propriétés de matériaux en 3D, avec contrôle via WebXR ou Unity. Conçu pour la visualisation scientifique, le prototypage XR et la recherche appliquée.

---

##  Objectif

XR-MATVIEW vise à offrir une expérience immersive pour :

- Visualiser les **propriétés physiques** des matériaux (transmission, réflexion, résistance…)
- Afficher leur **rendu 3D interactif** (forme, texture, couleur)
- Explorer ces données via **WebXR dans le navigateur** ou un casque VR (Unity)

---

##  Stack technique

| Composant       | Techno utilisée          |
|------------------|---------------------------|
| **Backend API**  | FastAPI (Python)          |
| **Frontend XR**  | Three.js + WebXR / Unity  |
| **Données**      | JSON (simulées)           |
| **Déploiement**  | Vercel (frontend) + Render (backend) |

---

##  Lancer le projet en local

### 1. Lancer le backend (API FastAPI)

```bash
cd backend
uvicorn main:app --reload
```

Accès aux données :
 http://localhost:8000/materials

### 2. Lancer le frontend WebXR (Three.js)

```bash
cd frontend/webxr
python -m http.server 5500
```

Ouvre ensuite :
 http://localhost:5500

>  Utiliser un serveur (Live Server ou http.server), pas un simple double-clic sur index.html.

---

##  Structure du projet

```
xr-matview/
├── backend/              # API FastAPI avec les données
│   └── main.py
├── frontend/
│   ├── webxr/            # Version navigateur (Three.js + WebXR)
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   └── unity_xr/         # Option Unity XR (projet Unity)
├── data/
│   └── materials.json    # Données simulées des matériaux
├── README.md
└── demo/                 # Captures ou vidéos
```

---

##  Fonctionnalités prévues

-  Visualisation 3D des matériaux
-  Chargement dynamique des données via API
-  Couleur des objets basée sur `material.color`
-  Ajout futur : interactions (clic, survol, affichage de propriétés)
-  Mode VR immersif (WebXR / Unity XR)

---

##  Technologies utilisées

- Python, FastAPI, Uvicorn
- JavaScript, Three.js, WebXR
- Unity (URP + XR Interaction Toolkit)
- JSON, HTML/CSS, Git

---

##  Captures

| Vue WebXR | Mode immersif Unity |
|-----------|---------------------|
| ![webxr](demo/webxr_preview.png) | ![unity](demo/unity_vr.png) |

---

##  Auteur

**Durand Ngouadou**, 


---

##  Liens utiles

- [Three.js WebXR docs](https://threejs.org/docs/index.html#manual/en/introduction/WebXR)
- [FastAPI documentation](https://fastapi.tiangolo.com/)
- [Unity XR Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit)

---

##  Licence

Projet open source sous licence MIT. Réutilisation autorisée avec attribution.
