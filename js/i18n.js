/**
 * Simple Client-Side Internationalization for Adroit Bureau
 * Replaces text content based on a dictionary map.
 */

const translations = {
    // --- Navigation ---
    "Home": "Accueil",
    "Products": "Produits",
    "Services": "Services",
    "About Us": "À Propos",
    "Contact Us": "Contactez-nous",
    "Directors": "Directeurs",
    "Blog": "Blog",
    "Software Gallery": "Galerie de Logiciels",
    "Enterprise Solutions": "Solutions d'Entreprise",
    "Subsidiaries": "Filiales",
    "Partners": "Partenaires",
    "Contact": "Contact",

    // --- Sub-menus ---
    "Lite Accounting": "Comptabilité Lite",
    "Smart Accounting": "Comptabilité Smart",
    "Total Accounting": "Comptabilité Total",
    "Adroit ERP": "Adroit ERP",
    "Tell Them App": "Appli Tell Them",
    "Promosells": "Promosells",
    "Adroit Cloud": "Adroit Cloud",
    "Adroit Games": "Adroit Games",
    "Adroit Finance": "Adroit Finance",
    "Adroit Consortium": "Adroit Consortium",
    "Software University": "Université du Logiciel",
    "SWL Learn": "SWL Learn",

    // --- Hero Slides (Index) ---
    "Transforming Businesses with Intelligent IT Solutions": "Transformer les entreprises avec des solutions informatiques intelligentes",
    "We design 100% customized ERP software for industries and deliver secure, scalable systems that streamline operations, boost productivity, and drive measurable business growth.": "Nous concevons des logiciels ERP 100% personnalisés pour les industries et fournissons des systèmes sécurisés et évolutifs qui rationalisent les opérations, augmentent la productivité et stimulent la croissance.",
    "GET IN TOUCH": "CONTACTEZ-NOUS",
    "Learn More": "En Savoir Plus",

    "Building Powerful Digital Solutions for Modern Enterprises": "Des solutions numériques puissantes pour les entreprises modernes",
    "From custom desktop, web, and mobile applications to fully tailored enterprise systems, Adroit Bureau delivers reliable, secure technology built around your business needs.": "Des applications sur mesure aux systèmes d'entreprise complets, Adroit Bureau fournit une technologie fiable et sécurisée adaptée à vos besoins.",

    "Innovative IT Solutions That Power Business Success": "Des solutions informatiques innovantes pour le succès des entreprises",
    "Adroit Bureau specializes in 100% customized ERP software for industries alongside high-performance desktop, web, and mobile applications designed to scale, secure operations, and transform how businesses work.": "Adroit Bureau se spécialise dans les logiciels ERP personnalisés et les applications performantes conçues pour évoluer, sécuriser les opérations et transformer le travail.",

    // --- Welcome Section (Index) ---
    "Welcome to Adroit Bureau": "Bienvenue chez Adroit Bureau",
    "Adroit Bureau is a modern software development and enterprise solutions company dedicated to helping organizations transform, optimize, and scale through innovative technology. We specialize in delivering powerful digital systems that simplify business processes, improve productivity, and support long-term growth across multiple industries.": "Adroit Bureau est une entreprise moderne de développement de logiciels dédiée à aider les organisations à se transformer grâce à une technologie innovante. Nous livrons des systèmes numériques puissants qui simplifient les processus et soutiennent la croissance.",
    "With a strong focus on enterprise solutions, Adroit Bureau designs and develops fully customized ERP software for industries, alongside tailor-made desktop, web, and mobile applications. Our solutions are built to adapt to the specific operational needs of each organization — whether in government, education, healthcare, finance, manufacturing, retail, logistics, or emerging digital sectors.": "Axé sur les solutions d'entreprise, Adroit Bureau conçoit des logiciels ERP personnalisés et des applications sur mesure. Nos solutions s'adaptent aux besoins opérationnels spécifiques de chaque organisation dans divers secteurs.",
    "Adroit Bureau has a team of well experienced personnel with professional certifications in various Technologies.": "Adroit Bureau dispose d'une équipe expérimentée avec des certifications professionnelles dans diverses technologies.",

    // --- Stats ---
    "ERP Systems": "Systèmes ERP",
    "Consultants": "Consultants",
    // "Partners" already defined
    "App Users": "Utilisateurs de l'App",
    "Years Experience": "Années d'Expérience",

    // --- Products Section (Index & Products Page) ---
    "Our Products": "Nos Produits",
    "Innovative software solutions designed to transform your business": "Des solutions logicielles innovantes conçues pour transformer votre entreprise",
    "Need a Custom Solution?": "Besoin d'une Solution Personnalisée ?",
    "We build tailored software to meet your specific business requirements.": "Nous construisons des logiciels sur mesure pour répondre à vos besoins spécifiques.",
    // Product names already defined in Sub-menus

    // --- Media / Blog Section ---
    "Latest Blog Posts": "Derniers Articles de Blog",
    "ERP Software": "Logiciel ERP",
    "One Software for your entire business": "Un seul logiciel pour toute votre entreprise",
    "CRM Software": "Logiciel CRM",
    "Scale up profitability with CRM Software": "Augmentez la rentabilité avec le logiciel CRM",
    "Web": "Web",
    "Web design and development": "Conception et développement web",

    // --- Footer ---
    "About Adroit Bureau": "À propos d'Adroit Bureau",
    "Leading provider of enterprise software solutions across West Africa. Transforming businesses with innovative technology.": "Premier fournisseur de solutions logicielles d'entreprise en Afrique de l'Ouest. Transformer les entreprises grâce à une technologie innovante.",
    "Quick Links": "Liens Rapides",
    "Contact Info": "Infos Contact",
    "Email:": "Email :",
    "Phone:": "Téléphone :",
    "Address:": "Adresse :",
    "All rights reserved.": "Tous droits réservés.",

    // --- About Page ---
    "Powering Africa's sustainable industrialization through innovative software solutions": "Propulser l'industrialisation durable de l'Afrique grâce à des solutions logicielles innovantes",
    "Our History": "Notre Histoire",
    "The company was started as a partnership with the name": "L'entreprise a débuté sous la forme d'un partenariat nommé",
    "Adroit Technologies": "Adroit Technologies", // Proper noun
    "The company was started as a partnership with the name Adroit Technologies in 2009. At this time the founders were about completing their undergraduate degrees.": "L'entreprise a débuté en tant que partenariat sous le nom Adroit Technologies en 2009. À cette époque, les fondateurs terminaient leurs diplômes.",
    "In 2014, Adroit Bureau Ltd. was registered as a limited liability company and our flagship product 'Total Accounting' was launched.": "En 2014, Adroit Bureau Ltd. a été enregistrée comme société à responsabilité limitée et notre produit phare 'Total Accounting' a été lancé.",
    "By 2021, Adroit Bureau Ltd. evolved into a software holding company with multiple subsidiaries, dedicated to providing appropriate software systems for business productivity suited for African conditions.": "En 2021, Adroit Bureau Ltd. est devenue une société holding de logiciels avec plusieurs filiales, dédiée à fournir des systèmes adaptés aux conditions africaines.",

    "Our Vision": "Notre Vision",
    "To power Africa's sustainable Industrialization by providing appropriate Software Systems for Business Productivity suited for conditions on the continent.": "Propulser l'industrialisation durable de l'Afrique en fournissant des systèmes logiciels de productivité adaptés aux conditions du continent.",

    "Our Mission": "Notre Mission",
    "To provide Entrepreneurs and Small and Medium scale businesses with affordable access to accounting and book keeping products and online services thereby increasing their chances of success in a volatile business environment.": "Fournir aux entrepreneurs et PME un accès abordable aux produits de comptabilité et services en ligne, augmentant leurs chances de succès.",

    "What People Say": "Ce que disent les gens",
    // Testimonials
    "\"Adroit Bureau Accounting Software is relatively cheaper, locally developed, and has reliable support service. It is one of the best software I have worked with.\"": "\"Le logiciel de comptabilité Adroit Bureau est relativement moins cher, développé localement et dispose d'un support fiable. C'est l'un des meilleurs logiciels.\"",
    "\"Adroit Bureau Software enables me in lead recording, follow-ups, customer tracking, tracking of agents' KPIs. I strongly recommend to all real estate agencies.\"": "\"Le logiciel Adroit permet d'enregistrer les prospects, de faire des suivis et de suivre les clients. Je le recommande vivement aux agences immobilières.\"",
    "\"We have not had issues using Adroit Bureau Accounting Software. It has been used by us for generation of financial reports and other managerial purposes.\"": "\"Nous n'avons eu aucun problème avec le logiciel Adroit. Nous l'utilisons pour générer des rapports financiers et pour la gestion.\"",
    "\"Adroit School Software has met our need for a software for school operations, financials, students' management, billing, and payments.\"": "\"Le logiciel scolaire Adroit a répondu à nos besoins pour les opérations scolaires, les finances, la gestion des étudiants et la facturation.\"",
    "\"Adroit Accounting Software has aided us in the tracking of sales, keeping of stock, secure data handling and management with fewer human interventions.\"": "\"Le logiciel comptable Adroit nous a aidés à suivre les ventes, les stocks et à gérer les données de manière sécurisée avec moins d'interventions humaines.\"",

    // --- Contact Page ---
    "Contact Us": "Contactez-nous",
    "We'd love to hear from you": "Nous aimerions avoir de vos nouvelles",
    "Send Us a Message": "Envoyez-nous un message",
    "Full Name": "Nom Complet",
    "Email Address": "Adresse Email",
    "Phone Number": "Numéro de Téléphone",
    "Subject": "Sujet",
    "Message": "Message",
    "Send Message": "Envoyer le Message",
    "Find Us": "Trouvez-nous",

    // --- Services Page ---
    "Custom Software Development": "Développement de Logiciels Sur Mesure",
    "Tailored Applications": "Applications Personnalisées",
    "We design and develop fully customized desktop, web, and mobile applications tailored to your specific business requirements. Our solutions are built to be scalable, secure, and user-friendly.": "Nous concevons des applications de bureau, web et mobiles entièrement personnalisées. Nos solutions sont évolutives, sécurisées et conviviales.",

    "ERP Implementation": "Mise en œuvre ERP",
    "Enterprise Solutions": "Solutions d'Entreprise",
    "Expert implementation of Adroit ERP systems for various industries. We ensure seamless integration with your existing workflows to streamline operations and boost productivity.": "Mise en œuvre experte des systèmes ERP Adroit. Nous assurons une intégration transparente pour rationaliser les opérations et augmenter la productivité.",

    "IT Training & Consultancy": "Formation et Conseil Informatique",
    "Empowering Teams": "Autonomisation des Équipes",
    "We provide comprehensive training for your staff on our software solutions and offer expert consultancy to help you navigate the digital landscape effectively.": "Nous formons votre personnel sur nos solutions et offrons des conseils d'experts pour vous aider à naviguer dans le paysage numérique.",

    "Mobile App Development": "Développement d'App Mobile",
    "iOS & Android": "iOS & Android",
    "Native and cross-platform mobile application development to help you reach your customers wherever they are. We focus on performance and user experience.": "Développement d'applications mobiles natives et multiplateformes pour atteindre vos clients où qu'ils soient.",

    // --- Subsidiaries Page ---
    "Our Subsidiaries": "Nos Filiales",
    "Expanding excellence across different sectors": "Étendre l'excellence à travers différents secteurs",
    "Adroit Cloud provides secure, scalable cloud infrastructure and hosting solutions. We help businesses migrate to the cloud, ensuring high availability, data security, and seamless performance for all their digital assets.": "Adroit Cloud fournit une infrastructure cloud sécurisée et évolutive. Nous aidons les entreprises à migrer vers le cloud en assurant haute disponibilité et sécurité.",
    "Focusing on interactive entertainment, Adroit Games develops engaging digital experiences and educational games that combine fun with learning, targeting various age groups and markets.": "Se concentrant sur le divertissement interactif, Adroit Games développe des expériences numériques attrayantes et des jeux éducatifs.",
    "Adroit Finance offers specialized financial technology solutions, including payment gateways, fintech integration, and digital banking support services designed for the modern financial ecosystem.": "Adroit Finance offre des solutions technologiques financières spécialisées, incluant passerelles de paiement et intégration fintech.",
    "Adroit Consortium brings together expertise from various fields to handle large-scale government and private sector projects, delivering comprehensive turn-key solutions.": "Adroit Consortium rassemble des expertises de divers domaines pour gérer des projets d'envergure gouvernementaux et privés.",
    "Dedicated to bridging the skills gap, Software University provides practical, industry-standard training in software development, data science, and IT infrastructure to groom the next generation of tech leaders.": "Dédiée à combler le fossé des compétences, Software University fournit une formation pratique en développement de logiciels et science des données.",

    // --- Directors Page ---
    "Meet the leadership team driving our vision": "Rencontrez l'équipe de direction qui pilote notre vision",
    "CEO": "PDG",
    "COO": "Directeur des Opérations",
    "CTO": "Directeur Technique",
    "Director": "Directeur",

    // --- Product Details Updated ---
    "Features & Benefits": "Fonctionnalités & Avantages",
    "Light Weight Solution": "Solution Légère",
    "Perfect for small businesses and startups looking to manage their finances efficiently. Lite Accounting provides all the essential tools you need to track income, expenses, and generate professional reports without the complexity of enterprise systems.": "Parfait pour les petites entreprises et startups cherchant à gérer leurs finances efficacement. Lite Accounting fournit tous les outils essentiels sans la complexité des systèmes lourds.",

    "General Ledger": "Grand Livre",
    "Maintain a complete record of all financial transactions with automated double-entry bookkeeping.": "Maintenez un registre complet de toutes les transactions avec la comptabilité en partie double automatisée.",
    "Multi-currency, multi-entity general ledger with unlimited chart of accounts and dimensions.": "Grand livre multi-devises et multi-entités avec plan comptable et dimensions illimités.",

    "Account Receivables": "Comptes Clients",
    "Track outstanding customer invoices and manage payment collections efficiently.": "Suivez les factures impayées et gérez efficacement le recouvrement.",
    "Advanced receivables management with automated dunning and credit control.": "Gestion avancée des créances avec relance automatisée et contrôle du crédit.",

    "Account Payables": "Comptes Fournisseurs",
    "Monitor bills and payments to vendors with automated reminders and payment scheduling.": "Surveillez les factures et paiements aux fournisseurs avec des rappels automatisés.",
    "Automated payables workflow with purchase order matching and approval routing.": "Flux de travail automatisé des dettes avec rapprochement des commandes et routage d'approbation.",

    "Inventory": "Stock",
    "Real-time inventory tracking with low-stock alerts and automated reorder points.": "Suivi des stocks en temps réel avec alertes de stock bas.",
    "Advanced inventory management with serial/batch tracking, barcode scanning, and warehouse optimization.": "Gestion avancée des stocks avec suivi série/lot, scan de codes-barres et optimisation d'entrepôt.",

    "Invoice/Receipts": "Factures/Reçus",
    "Create professional invoices and receipts with customizable templates and branding.": "Créez des factures et reçus professionnels avec des modèles personnalisables.",
    "Customizable invoicing withrecurring billing and multiple payment gateway integrations.": "Facturation personnalisable avec facturation récurrente et intégrations multiples.",

    "Standard Reports": "Rapports Standards",
    "Generate balance sheets, profit & loss statements, and cash flow reports instantly.": "Générez bilans, comptes de résultat et rapports de trésorerie instantanément.",
    "Customizable reports and dashboards with real-time data visualization and drill-down capabilities.": "Rapports personnalisables et tableaux de bord avec visualisation de données en temps réel.",

    "Email and Phone Support": "Support Email et Téléphone",
    "Dedicated support team available to assist you with any questions or issues.": "Équipe de support dédiée disponible pour vous aider.",
    "Priority support access to ensure your business operations run smoothly.": "Accès au support prioritaire pour assurer le bon fonctionnement de vos opérations.",
    "Premium support access with dedicated account management.": "Accès support premium avec gestion de compte dédiée.",
    "24/7 dedicated support to ensure your mission-critical operations never stop.": "Support dédié 24/7 pour assurer vos opérations critiques.",

    "All Lite Features": "Toutes les fonctions Lite",
    "Includes all features from Lite Accounting (General Ledger, Invoicing, Inventory, etc.).": "Inclut toutes les fonctions de Lite Accounting (Grand Livre, Facturation, Stock, etc.).",

    "CRM": "CRM",
    "Manage customer relationships, track leads, and improve customer satisfaction with integrated CRM tools.": "Gérez la relation client, suivez les prospects et améliorez la satisfaction avec les outils CRM intégrés.",
    "Advanced CRM features to manage complex sales cycles, track customer interactions, and segment your audience.": "Fonctionnalités CRM avancées pour gérer des cycles de vente complexes.",

    "Machine Learning": "Apprentissage Automatique",
    "Leverage AI to analyze your business data, predict trends, and offer actionable insights for growth.": "Utilisez l'IA pour analyser vos données, prédire les tendances et offrir des informations exploitables.",
    "Deep dive into your financial data with predictive analytics to forecast cash flow and meaningful business trends.": "Plongez dans vos données financières avec l'analyse prédictive pour prévoir les flux de trésorerie.",

    "SMS Alerts": "Alertes SMS",
    "Keep your customers engaged with automated SMS notifications for invoices, payments, and promotions.": "Engagez vos clients avec des notifications SMS automatisées.",
    "Automated notifications for critical business updates and customer engagement.": "Notifications automatisées pour les mises à jour critiques et l'engagement client.",

    "Location Intelligence": "Intelligence de Localisation",
    "Visualize your business data on maps to identify geographical trends and opportunities.": "Visualisez vos données sur des cartes pour identifier les tendances géographiques.",
    "Strategic location analysis to optimize sales territories and identify new market opportunities.": "Analyse stratégique de localisation pour optimiser les territoires de vente.",

    "Payroll": "Paie",
    "Fully integrated payroll system with automated tax calculations, payslip generation, and statutory compliance reporting.": "Système de paie entièrement intégré avec calculs fiscaux automatisés.",

    "On-Site Support": "Support Sur Site",
    "Dedicated support engineers available on-site to assist with implementation, training, and troubleshooting.": "Ingénieurs support dédiés disponibles sur site pour l'implémentation, la formation et le dépannage.",

    "Ready to Get Started?": "Prêt à Commencer ?",
    "Join hundreds of businesses already using our solutions to streamline their operations.": "Rejoignez des centaines d'entreprises utilisant déjà nos solutions pour rationaliser leurs opérations.",
    "Get Started": "Commencer",

    // --- Blog Page ---
    "Blogs": "Blogs",
    "Latest Insights & Updates": "Dernières Idées & Mises à jour",
    "Want to learn more?": "Vous voulez en savoir plus ?",
    "Contact us today to discuss how our solutions can help your business.": "Contactez-nous aujourd'hui pour voir comment nos solutions peuvent aider votre entreprise.",

    // --- Common Buttons/Misc ---
    "Read More": "Lire la suite",
    "View Details": "Voir les détails",

    // --- PromoSells Page ---
    "Smart Sales or Returns": "Ventes ou Retours Intelligents",
    "Streamline your sale or return strategy with realtime analytics, automated workflows and easy stock tracking — all in one dashboard.": "Rationalisez votre stratégie de vente ou de retour avec des analyses en temps réel, des flux de travail automatisés et un suivi facile des stocks — le tout dans un seul tableau de bord.",

    "Easy Sales Or Returns": "Ventes ou Retours Faciles",
    "Simplify the sales or return process with a user-friendly interface and clear workflows.": "Simplifiez le processus de vente ou de retour avec une interface conviviale et des flux de travail clairs.",

    "Real-time Analytics": "Analyses en Temps Réel",
    "Access detailed sales or return metrics to make informed decisions quickly.": "Accédez à des indicateurs détaillés de vente ou de retour pour prendre des décisions rapides et éclairées.",

    "Automated Processes": "Processus Automatisés",
    "Automate repetitive tasks — returns verification, invoicing and stock reconciliation.": "Automatisez les tâches répétitives — vérification des retours, facturation et rapprochement des stocks.",

    "Stock Tracking": "Suivi des Stocks",
    "Keep track of inventory movements seamlessly.": "Suivez les mouvements de stock de manière transparente.",

    "Ready to Get Started?": "Prêt à Commencer ?",
    "Simplify your return strategies today.": "Simplifiez vos stratégies de retour dès aujourd'hui.",
    "Request Demo": "Demander une Démo",
    "Contact us for pricing details": "Contactez-nous pour les détails tarifaires",

    // PromoSells - Hero Section
    "Simplify Sales, Returns & Stock Tracking": "Simplifiez les Ventes, Retours et Suivi des Stocks",
    "Track sales, manage returns, and monitor distributed stock in real-time with PromoSells — the all-in-one mobile and web platform built for field teams.": "Suivez les ventes, gérez les retours et surveillez les stocks distribués en temps réel avec PromoSells — la plateforme mobile et web tout-en-un conçue pour les équipes terrain.",
    "Get Started Today": "Commencez Aujourd'hui",
    "Download Brochure": "Télécharger la Brochure",
    "hero_heading": "Gérez les Ventes, Retours et Stock Distribué — Tout en Un Seul Endroit",

    // PromoSells - Problem Statement
    "Sales Tracking Should not Be This Hard": "Le Suivi des Ventes Ne Devrait Pas Être Si Difficile",
    "Are you facing these common challenges?": "Rencontrez-vous ces défis courants ?",
    "Difficulty Tracking Sales": "Difficulté à Suivre les Ventes",
    "Spreadsheets are messy and hard to keep up to date.": "Les feuilles de calcul sont désordonnées et difficiles à maintenir à jour.",
    "No Stock Visibility": "Aucune Visibilité des Stocks",
    "Blind spots on stock held by field agents or distributors.": "Points aveugles sur les stocks détenus par les agents de terrain ou distributeurs.",
    "Manual Errors": "Erreurs Manuelles",
    "Data entry mistakes lead to lost revenue.": "Les erreurs de saisie entraînent des pertes de revenus.",
    "Poor Accountability": "Mauvaise Responsabilité",
    "Hard to verify remote sales activities.": "Difficile de vérifier les activités de vente à distance.",

    // PromoSells - Solution
    "PromoSells Solves All of This": "PromoSells Résout Tout Cela",
    "PromoSells centralizes sales, returns, campaigns, and stock tracking into one simple platform accessible on mobile and web.": "PromoSells centralise les ventes, retours, campagnes et suivi des stocks dans une plateforme simple accessible sur mobile et web.",

    // PromoSells - Features
    "Everything You Need to Scale": "Tout Ce Dont Vous Avez Besoin Pour Évoluer",
    "Sales Management": "Gestion des Ventes",
    "Track every sale in real-time from anywhere.": "Suivez chaque vente en temps réel de n'importe où.",
    "Returns Tracking": "Suivi des Retours",
    "Manage product returns and reasons effortlessly.": "Gérez les retours de produits et les raisons sans effort.",
    "Monitor distributed stock across all locations.": "Surveillez les stocks distribués dans tous les emplacements.",
    "Campaign Management": "Gestion de Campagne",
    "Organize promotional campaigns with clear targets.": "Organisez des campagnes promotionnelles avec des objectifs clairs.",
    "Real-Time Reporting": "Rapports en Temps Réel",
    "Get instant insights into sales performance.": "Obtenez des informations instantanées sur les performances de vente.",
    "Mobile-First Design": "Conception Mobile d'Abord",
    "Built for field agents working on the go.": "Conçu pour les agents de terrain en déplacement.",

    // PromoSells - How It Works
    "How It Works": "Comment Ça Marche",
    "Simple steps to get started": "Étapes simples pour commencer",
    "Create Your Account": "Créez Votre Compte",
    "Sign up and configure your business settings in minutes.": "Inscrivez-vous et configurez les paramètres de votre entreprise en quelques minutes.",
    "Add Your Team": "Ajoutez Votre Équipe",
    "Invite field agents, supervisors, and distributors.": "Invitez des agents de terrain, superviseurs et distributeurs.",
    "Distribute Stock": "Distribuez le Stock",
    "Assign products to agents and track their inventory.": "Assignez des produits aux agents et suivez leur inventaire.",
    "Track & Analyze": "Suivez et Analysez",
    "Monitor sales, returns, and performance in real-time.": "Surveillez les ventes, retours et performances en temps réel.",

    // PromoSells - Product Showcase
    "See PromoSells in Action": "Voir PromoSells en Action",
    "Dashboard Overview": "Aperçu du Tableau de Bord",
    "Monitor all your sales activities from one central dashboard.": "Surveillez toutes vos activités de vente depuis un tableau de bord central.",
    "Mobile App": "Application Mobile",
    "Empower your field team with our intuitive mobile app.": "Autonomisez votre équipe terrain avec notre application mobile intuitive.",

    // PromoSells - Target Audience
    "Who Is PromoSells For?": "Pour Qui Est PromoSells ?",
    "Retail & Wholesale": "Vente au Détail et Gros",
    "Manage distributed sales teams and track inventory across multiple locations.": "Gérez les équipes de vente distribuées et suivez l'inventaire dans plusieurs emplacements.",
    "NGOs (Outreach)": "ONG (Sensibilisation)",
    "Track outreach campaigns, distribute materials, and monitor field activities.": "Suivez les campagnes de sensibilisation, distribuez du matériel et surveillez les activités terrain.",

    // PromoSells - Benefits
    "Why Businesses Choose PromoSells": "Pourquoi les Entreprises Choisissent PromoSells",
    "Empower your team with tools that drive efficiency.": "Autonomisez votre équipe avec des outils qui favorisent l'efficacité.",
    "Better Accountability": "Meilleure Responsabilité",
    "Track every action of your field staff in real-time.": "Suivez chaque action de votre personnel de terrain en temps réel.",
    "Reduced Stock Loss": "Réduction des Pertes de Stock",
    "Minimize discrepancies with accurate tracking.": "Minimisez les écarts avec un suivi précis.",
    "Faster Reporting": "Rapports Plus Rapides",
    "Make data-driven decisions instantly.": "Prenez des décisions basées sur les données instantanément.",
    "Centralized Data": "Données Centralisées",
    "One source of truth for all branches and agents.": "Une source unique de vérité pour toutes les succursales et agents.",
    "Operational Efficiency": "Efficacité Opérationnelle",
    "Streamline workflows and reduce manual tasks.": "Rationalisez les flux de travail et réduisez les tâches manuelles.",

    // PromoSells - Training Videos
    "Master PromoSells with these step-by-step guides.": "Maîtrisez PromoSells avec ces guides étape par étape.",
    "Creating a new customer without selecting items": "Créer un nouveau client sans sélectionner d'articles",
    "Pick up and sales": "Ramassage et ventes",
    "Customer details, recording incidents and drop off": "Détails client, enregistrement d'incidents et dépôt",
    "Creating a new customer while selecting items for drop off": "Créer un nouveau client en sélectionnant des articles pour le dépôt",

    // PromoSells - CTA
    "Ready to take control of your sales and stock?": "Prêt à Prendre le Contrôle de Vos Ventes et Stocks ?",
    "Contact Sales": "Contacter les Ventes",

    // PromoSells - Who Needs PromoSells
    "Who Needs PromoSells?": "Qui a Besoin de PromoSells ?",
    "Sales Teams": "Équipes de Vente",
    "Field Agents": "Agents de Terrain",
    "Distribution Companies": "Entreprises de Distribution",
    "FMCG Businesses": "Entreprises de Biens de Consommation",

    // PromoSells - App Features
    "Intuitive Mobile App": "Application Mobile Intuitive",
    "Comprehensive Web Dashboard": "Tableau de Bord Web Complet",

    // PromoSells - How It Works (Alternative)
    "How PromoSells Works": "Comment Fonctionne PromoSells",
    "Create Campaigns": "Créer des Campagnes",
    "Set up campaigns and assign stock to agents.": "Configurez des campagnes et assignez du stock aux agents.",
    "Record Sales": "Enregistrer les Ventes",
    "Agents record sales/returns on the mobile app.": "Les agents enregistrent les ventes/retours sur l'application mobile.",
    "Track Stock": "Suivre le Stock",
    "Watch inventory levels update automatically.": "Regardez les niveaux d'inventaire se mettre à jour automatiquement.",
    "View Reports": "Voir les Rapports",
    "Analyze performance on the dashboard.": "Analysez les performances sur le tableau de bord.",

    // PromoSells - Visuals Section
    "Visuals That Build Trust": "Des Visuels Qui Inspirent Confiance",
    "Manage Sales, Returns & Distributed Stock — All in One Place": "Gérez les Ventes, Retours et Stock Distribué — Tout en Un Seul Endroit",
    "PromoSells helps businesses track sales, manage returns, and monitor stock left with agents or customers in real time.": "PromoSells aide les entreprises à suivre les ventes, gérer les retours et surveiller le stock laissé chez les agents ou clients en temps réel.",

    // --- Tell Them App Page ---
    "Church Growth and Evangelism Focused": "Axé sur la Croissance de l'Église et l'Évangélisation",
    "Trusted by many Churches": "Approuvé par de nombreuses Églises",
    "A comprehensive tool to monitor all outreach activities, follow up on new souls, manage prayer requests, and generate insightful reports to drive church growth.": "Un outil complet pour surveiller toutes les activités d'évangélisation, suivre les nouvelles âmes, gérer les demandes de prière et générer des rapports perspicaces pour stimuler la croissance de l'église.",

    "Track Evangelism": "Suivi de l'Évangélisation",
    "Monitor all outreach activities in one place.": "Surveillez toutes les activités de sensibilisation en un seul endroit.",

    "Follow Up Souls": "Suivi des Âmes",
    "Efficiently manage new converts and members.": "Gérez efficacement les nouveaux convertis et les membres.",

    "Prayer Requests": "Demandes de Prière",
    "Receive, track, and pray for members' needs.": "Recevez, suivez et priez pour les besoins des membres.",

    "Campaign Reports": "Rapports de Campagne",
    "Generate insightful reports for each campaign.": "Générez des rapports perspicaces pour chaque campagne.",

    "Ready to Grow Your Church?": "Prêt à Faire Grandir Votre Église ?",
    "Empower your evangelism team with the right tools.": "Autonomisez votre équipe d'évangélisation avec les bons outils.",

    // --- Sub-Nav & Videos ---
    "Brochure": "Brochure",
    "Training Videos": "Vidéos de Formation",
    "Intro Video": "Vidéo d'Intro",
    "Campaigns Overview": "Aperçu des Campagnes",
    "Dashboard Walkthrough": "Visite du Tableau de Bord",
    "Prayer Request Portal": "Portail de Demandes de Prière",
    "Tagging Souls": "Marquage des Âmes",
    "User Settings": "Paramètres Utilisateur",
    "Counseling Requests": "Demandes de Conseil",
    "Master Files Setup": "Configuration des Fichiers Maîtres",

    "Creating a new customer": "Création d'un nouveau client",
    "Pick up and sales": "Ramassage et ventes",
    "Customer details & incidents": "Détails client & incidents",
    "New customer & drop off": "Nouveau client & dépôt",

    // --- Tell Them App Extended (Flyer Content) ---
    "Why Your Church Needs This Software": "Pourquoi Votre Église a Besoin de Ce Logiciel",
    "Keep detailed records of individuals you reach out to.": "Conservez des dossiers détaillés des personnes que vous contactez.",
    "Assign follow-up tasks to ministry leaders.": "Assignez des tâches de suivi aux responsables de ministère.",
    "Set reminders for check-ins and engagement.": "Définissez des rappels pour les prises de contact et l'engagement.",
    "Track spiritual growth and church attendance.": "Suivez la croissance spirituelle et la fréquentation de l'église.",
    "Strengthen church engagement with meaningful follow-ups.": "Renforcez l'engagement de l'église grâce à des suivis significatifs.",

    "Campaign Management Feature": "Fonctionnalité de Gestion de Campagne",
    "With our powerful Campaigns feature, your church can plan and execute evangelism initiatives with clarity and impact.": "Grâce à notre puissante fonctionnalité Campagnes, votre église peut planifier et exécuter des initiatives d'évangélisation avec clarté et impact.",
    "Our software allows you to define your goals, assign team members, track engagement, and measure the results—all in one place.": "Notre logiciel vous permet de définir vos objectifs, d'assigner des membres d'équipe, de suivre l'engagement et de mesurer les résultats, le tout en un seul endroit.",
    "Start organizing your evangelism like never before. Because reaching souls should never be disorganized.": "Commencez à organiser votre évangélisation comme jamais auparavant. Parce que gagner des âmes ne devrait jamais être désorganisé.",

    "Deploy Feature": "Fonctionnalité de Déploiement",
    "Once your campaign is set up, simply deploy it. Your team will have instant access to all details—routes, contacts, and tools—to start the mission effectively.": "Une fois votre campagne configurée, déployez-la simplement. Votre équipe aura un accès instantané à tous les détails – itinéraires, contacts et outils – pour commencer la mission efficacement.",

    "Why Use Campaigns?": "Pourquoi Utiliser des Campagnes ?",
    "Targeted Outreach": "Sensibilisation Ciblée",
    "Focus your efforts by neighborhood, age group, or interest.": "Concentrez vos efforts par quartier, groupe d'âge ou intérêt.",
    "Data-Driven Decisions": "Décisions Basées sur les Données",
    "View real-time stats on how many people were reached, followed up with, or connected to a church.": "Consultez des statistiques en temps réel sur le nombre de personnes atteintes, suivies ou connectées à une église.",

    // --- Tell Them App Additional ---
    "campaign_heading": "Fonctionnalité de Gestion de Campagne",
    "campaign_desc": "Grâce à notre puissante fonctionnalité Campagnes, votre église peut planifier et exécuter des initiatives d'évangélisation avec clarté et impact. Notre logiciel vous permet de définir vos objectifs, d'assigner des membres d'équipe, de suivre l'engagement et de mesurer les résultats, le tout en un seul endroit.",
    "campaign_sub": "Commencez à organiser votre évangélisation comme jamais auparavant. Parce que atteindre les âmes ne devrait jamais être désorganisé.",
    "deploy_feature": "Fonctionnalité de Déploiement",
    "deploy_desc": "Une fois votre campagne configurée, déployez-la simplement. Votre équipe aura un accès instantané à tous les détails—itinéraires, contacts et outils—pour commencer la mission efficacement.",
    "why_campaigns": "Pourquoi Utiliser des Campagnes ?",
    "targeted_outreach": "Sensibilisation Ciblée",
    "targeted_outreach_desc": "Concentrez vos efforts par quartier, groupe d'âge ou intérêt.",
    "data_driven": "Décisions Basées sur les Données",
    "data_driven_desc": "Consultez des statistiques en temps réel sur le nombre de personnes atteintes, suivies ou connectées à une église.",
    "download_brochure": "Télécharger la Brochure",
    "training_videos": "Vidéos de Formation",
    "video_intro": "Vidéo d'Intro",
    "video_campaigns": "Aperçu des Campagnes",
    "video_dashboard": "Visite du Tableau de Bord",
    "video_prayer_portal": "Portail de Demandes de Prière",
    "video_follow_up": "Suivi des Âmes",
    "video_tagging": "Marquage des Âmes",
    "video_reports": "Rapports",
    "video_settings": "Paramètres Utilisateur",
    "video_counseling": "Demandes de Conseil",

    // --- Industries Page & CTA ---
    "IndustrySolutionsTitle": "Solutions ERP Spécifiques à l'Industrie",
    "IndustryIntro": "Nous proposons des logiciels ERP sur mesure pour",
    "IndustryCount": "plus de 100 industries",
    "IndustryList": "incluant la Banque, la Santé, l'Agriculture, le Commerce, l'Industrie et plus encore. Trouvez la solution parfaite conçue spécifiquement pour les besoins de votre entreprise.",
    "ExploreIndustriesBtn": "Explorer Toutes les Industries",
    "IndustriesCoveredStat": "Industries Couvertes",
    "CustomSolutionsStat": "Solutions Personnalisées",

    // Common Elements
    "Request Demo": "Demander une démo",
    "All": "Tout",

    // Industry Categories (Filters)
    "Finance": "Finance",
    "Agriculture": "Agriculture",
    "Healthcare": "Santé",
    "Education": "Éducation",
    "Retail": "Commerce",
    "Industrial": "Industriel",
    "Hospitality": "Hôtellerie",
    "Services": "Services",
    "Organizations": "Organisations",

    // Industry Names (Partial List)
    "Banking": "Banque",
    "Rural Banking": "Banque Rurale",
    "Savings & Loans": "Épargne et Prêts",
    "Microfinance": "Microfinance",
    "Susu Collection": "Collecte Susu",
    "Credit Union": "Coopérative de Crédit",
    "Insurance": "Assurance",
    "Forex Bureau": "Bureau de Change",
    "Auditing": "Audit",
    "Farming": "Agriculture",
    "Poultry": "Aviculture",
    "Fishery": "Pêche",
    "Crops": "Cultures",
    "Animal Husbandry": "Élevage",
    "Beekeeping": "Apiculture",
    "Insect Rearing": "Élevage d'Insectes",
    "Horticulture": "Horticulture",
    "Snail Farming": "Héliciculture",
    "Hospital": "Hôpital",
    "Pharmacy": "Pharmacie",
    "Medical Lab": "Laboratoire Médical",
    "Dental Clinic": "Clinique Dentaire",
    "Eye Care": "Soins Oculaires",
    "Herbal Medicine": "Médecine Par les Plantes",
    "Veterinary": "Vétérinaire",
    "School": "École",
    "Tertiary Institution": "Établissement Tertiaire",
    "Professional College": "Collège Professionnel",
    "Vocational School": "École Professionnelle",
    "Special School": "École Spéciale",
    "Library Management": "Gestion de Bibliothèque",
    "Supermarket": "Supermarché",
    "Shop Management": "Gestion de Magasin",
    "Point of Sale (POS)": "Point de Vente (POS)",
    "Fashion Shop": "Magasin de Mode",
    "Clothing Store": "Magasin de Vêtements",
    "Shoe Store": "Magasin de Chaussures",
    "Cosmetics Shop": "Magasin de Cosmétiques",
    "Jewelry Store": "Bijouterie",
    "Textiles Shop": "Magasin de Textiles",
    "Bookstore": "Librairie",
    "Spare Parts": "Pièces Détachées",
    "Motor Dealership": "Concessionnaire Automobile",
    "Sachet Water": "Eau en Sachet",
    "Factory": "Usine",
    "Manufacturing": "Fabrication",
    "Construction": "Construction",
    "Real Estate": "Immobilier",
    "Mining": "Exploitation Minière",
    "Oil & Gas": "Pétrole et Gaz",
    "Quarry Management": "Gestion de Carrière",
    "Sawmill": "Scierie",
    "Roofing Company": "Entreprise de Toiture",
    "Cement Factory": "Cimenterie",
    "Concrete Factory": "Usine de Béton",
    "Architecture Firm": "Cabinet d'Architecture",
    "Furniture Company": "Entreprise de Meubles",
    "Energy Company": "Entreprise Énergétique",
    "Hotel": "Hôtel",
    "Eatery": "Restaurant Populaire",
    "Restaurant": "Restaurant",
    "Printing Press": "Imprimerie",
    "Publishing House": "Maison d'Édition",
    "Auto Mechanic": "Mécanicien Auto",
    "Software Development": "Développement de Logiciels",
    "Consultancy Firm": "Cabinet de Conseil",
    "Import & Export": "Import & Export",
    "NGO": "ONG",
    "Church": "Église",
    "Worship": "Culte",
    "Union": "Syndicat",
    "Association": "Association",
    "Funeral Services": "Services Funéraires",
    "Waste Management": "Gestion des Déchets",
    "Esports": "Esports",
    "Restaurant": "Restaurant",
    "Food Services": "Services Alimentaires",
    "Bakery": "Boulangerie",
    "Breweries": "Brasseries",
    "Event Management": "Gestion d'Événements",

    // Services Category
    "Cleaning Services": "Services de Nettoyage",
    "Courier Services": "Services de Courrier",
    "Logistics": "Logistique",
    "Security Services": "Services de Sécurité",
    "Legal Services": "Services Juridiques",
    "Gym": "Salle de Sport",
    "Spa": "Spa",
    "Salon": "Salon de Coiffure",
    "Barbershop": "Salon de Coiffure Homme",
    "Laundry": "Blanchisserie",
    "Photography": "Photographie",
    "Videography": "Vidéographie",
    "Freight Forwarding": "Transit de Fret",
    "Media House": "Maison de Médias",

    // Industry Page Hero
    "SpecializedERPSolutions": "Solutions ERP Spécialisées",
    "SpecializedERPIntro": "Logiciels sur mesure pour plus de 90 industries. Trouvez la solution idéale pour votre entreprise.",

    // Additional Industries
    "Import & Export": "Import & Export",
    "Bridal Shop": "Boutique de Mariage",
    "Beauty Salon": "Salon de Beauté",
    "Gym & Fitness": "Gym & Fitness",
    "Telecommunications": "Télécommunications",
    "Post Office": "Bureau de Poste",
    "Airline": "Compagnie Aérienne",
    "Transportation": "Transport",
    "Travel Agency": "Agence de Voyage",
    "Graphic Design": "Conception Graphique",
    "Delivery Services": "Services de Livraison",
    "Advertising Agency": "Agence de Publicité",
    "Music Production": "Production Musicale",
    "Film Production": "Production Cinématographique",
    "Photography Studio": "Studio Photographique",
    "TV Station": "Station TV",
    "Radio Station": "Station Radio",
    "Legal Firm": "Cabinet Juridique",
    "Microfinance": "Microfinance",
    "Insurance": "Assurance",
    "Audit": "Audit",

    // --- Industry Page CTAs ---
    "AndManyMore": "Et bien plus encore...",
    "CantFindIndustry": "Vous ne trouvez pas votre industrie ?",
    "ContactCustomERP": "Contactez-nous pour votre logiciel ERP personnalisé"
};

document.addEventListener('DOMContentLoaded', function () {
    // Check for language param
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');

    // Simple state check (localStorage could be used too)
    const isFrench = lang === 'fr';

    // Update Language Switcher UI
    const langSwitcherText = document.querySelector('.lang-switcher .dropdown-toggle');
    if (langSwitcherText) {
        if (isFrench) {
            langSwitcherText.innerHTML = 'FR <i class="fas fa-chevron-down"></i>';
        } else {
            langSwitcherText.innerHTML = 'EN <i class="fas fa-chevron-down"></i>';
        }
    }

    // Preserve language in links
    if (isFrench) {
        // Only run preservation if we are actually in French mode
        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.includes('mailto:') && !href.includes('tel:')) {
                // Check if it already has parameters
                const separator = href.includes('?') ? '&' : '?';
                // Avoid duplicating lang param
                if (!href.includes('lang=')) {
                    link.setAttribute('href', href + separator + 'lang=fr');
                }
            }
        });

        // Translate Content
        translatePage(document.body);
    }
});

function translatePage(rootElement) {
    const walker = document.createTreeWalker(
        rootElement,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;
    const nodesToUpdate = [];

    // First pass: collect nodes to avoid modifying DOM while walking
    while (node = walker.nextNode()) {
        const text = node.nodeValue.trim();
        // Normalize whitespace in text for lookup (single space between words)
        const normalizedText = text.replace(/\s+/g, ' ');

        if (text.length > 0) {
            // Check for data-i18n attribute on parent
            const i18nKey = node.parentElement.getAttribute('data-i18n');
            if (i18nKey && translations[i18nKey]) {
                nodesToUpdate.push({ node: node, translation: translations[i18nKey] });
            }
            // Try exact match matching first, then normalized
            else if (translations[text]) {
                nodesToUpdate.push({ node: node, translation: translations[text] });
            } else if (translations[normalizedText]) {
                nodesToUpdate.push({ node: node, translation: translations[normalizedText] });
            }
        }
    }

    // Update nodes
    nodesToUpdate.forEach(item => {
        item.node.nodeValue = item.translation;
    });

    // Handle attributes (placeholders, etc.)
    rootElement.querySelectorAll('[placeholder]').forEach(el => {
        const text = el.getAttribute('placeholder').trim();
        if (translations[text]) {
            el.setAttribute('placeholder', translations[text]);
        }
    });

    // Translate Page Title properly (it's not a text node in body)
    if (translations[document.title]) {
        document.title = translations[document.title];
    }
}
