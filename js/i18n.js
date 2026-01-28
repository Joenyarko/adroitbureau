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
    "Adroit Technologies": "Adroit Technologies", // Proper noun, maybe keep same? or context implies translation of surrounding text.
    // Handling split text nodes is tricky, adding fuller sentences if found intact:
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

    // --- Product Details (e.g., Lite Accounting) ---
    "Light Weight Solution": "Solution Légère",
    "Perfect for small businesses and startups looking to manage their finances efficiently. Lite Accounting provides all the essential tools you need to track income, expenses, and generate professional reports without the complexity of enterprise systems.": "Parfait pour les petites entreprises et startups cherchant à gérer leurs finances efficacement. Lite Accounting fournit tous les outils essentiels sans la complexité des systèmes lourds.",

    "Benefits": "Avantages",
    "General Ledger": "Grand Livre",
    "Complete financial record keeping": "Tenue complète des registres financiers",
    "Maintain a complete record of all financial transactions with automated double-entry bookkeeping.": "Maintenez un registre complet de toutes les transactions avec la comptabilité en partie double automatisée.",

    "Account Receivables": "Comptes Clients",
    "Track customer payments": "Suivre les paiements clients",
    "Track outstanding customer invoices and manage payment collections efficiently.": "Suivez les factures impayées et gérez efficacement le recouvrement.",

    "Account Payables": "Comptes Fournisseurs",
    "Manage vendor bills": "Gérer les factures fournisseurs",
    "Monitor bills and payments to vendors with automated reminders and payment scheduling.": "Surveillez les factures et paiements aux fournisseurs avec des rappels automatisés.",

    "Inventory": "Stock",
    "Stock management system": "Système de gestion de stock",
    "Real-time inventory tracking with low-stock alerts and automated reorder points.": "Suivi des stocks en temps réel avec alertes de stock bas.",

    "Invoice/Receipts": "Factures/Reçus",
    "Professional invoicing": "Facturation professionnelle",
    "Create professional invoices and receipts with customizable templates and branding.": "Créez des factures et reçus professionnels avec des modèles personnalisables.",

    "Standard Reports": "Rapports Standards",
    "Comprehensive analytics": "Analyses complètes",
    "Generate balance sheets, profit & loss statements, and cash flow reports instantly.": "Générez bilans, comptes de résultat et rapports de trésorerie instantanément.",

    "Email and Phone Support": "Support Email et Téléphone",
    "Dedicated support team": "Équipe de support dédiée",

    "What's Included": "Ce qui est inclus",
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
    "View Details": "Voir les détails"
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
            // Try exact match matching first, then normalized
            if (translations[text]) {
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
}
