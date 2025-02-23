const langs = [
  {
    eng: {
      home: "Home",
      about: "About",
      contact: "Contact",
      services: "Services",
      login: "Login",
      register: "Register",
      language_one: "English",
      language_two: "French",
      heroparagraph: "Afiacare is dedicated to transforming the healthcare system in Cameroon. Our comprehensive digital platform addresses key challenges such as data mismanagement, donor matching, and information sharing between hospitals. We leverage cutting-edge technology to enhance the accuracy, efficiency, and accessibility of healthcare services.",
      discoverButton: "Discover more",
      about_us: "About us",
      hero_greetings: "We are afiacare",
      hero_title: "Empowering Healthcare with Technology",
      hero_text: "Transforming Healthcare, One digital step at a time",
      card_title: "Features",
      records_text: "Digital patient records",
      description1: "Accurate and quick access to medical information by digitizing patient records.",
      donor_text: "Donor Matching",
      description2: "Efficient donor matching system for hospitals to connect with potential donors quickly and effectively.",
      sharing_text: "Seamless Data Sharing",
      description3: "Enable smooth and error-free information exchange between hospitals.",
      monitoring_text: "Health Monitoring",
      description4: "Monitor patient health and provide timely medical suggestions.",
      doctor_text: "Doctor-Patient Consultations",
      description5: "Efficient and user-friendly doctor-patient consultations.",
      insurance_text: "Insurance Management",
      description6: "Efficient and user-friendly insurance management system.",
      forum_text: "Community forums",
      description7: "Engage with the community of healthcare professionals and patients through informative, interactive forums.",
      SuggestButton: "Suggest a feature",
      quote1: "Thanks to Afiacare, managing my health records has never been easier. I can access my medical history anytime.",
      role1: "Patient",
      quote2: "As a donor, Afiacare provides a seamless process for tracking my donations and connecting with those in need.",
      role2: "Donor",
      quote3: "As a patient, I can access my health records anytime.",
      quote4: "Life has become easier for me as a doctor, I can easily and efficiently manage my patients' records.",
      role3: "Doctor",
      testimonial_title: "What our clients have to say",
      contact_hero1: "We've got an entire team to help you,",
      contact_hero2: "every step of your health journey",
      contact_text: "Get help 24/7 with our award-winning support network",
      contact_action: "Book a call",
      contact_action2: "Get in touch",
      contact_item_text1: "Call us",
      contact_item_description1: "Call our team, Mon - Fri from 8am to 5pm",
      contact_item_text2: "Chat with us",
      contact_item_description2: "Speak to our friendly team via live chat.",
      contact_item_text3: "Visit us",
      contact_item_description3: "Chat with us at our Douala HQ",
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      message_placeholder: "Leave us a message...",
      send: "Send",
      message_twitter: "Message us on X (formerly Twitter)",
      faq_title: "Frequently Asked Questions",
      faq_question1: "What is Afiacare?",
      faq_answer1: "Afiacare is a digital healthcare platform designed to improve the management and delivery of healthcare services in Cameroon.",
      faq_question2: "How can I join Afiacare as a healthcare provider?",
      faq_answer2: "Healthcare providers can join Afiacare by registering on our platform and completing the required onboarding process.",
      faq_question3: "What services does Afiacare offer to patients?",
      faq_answer3: "Afiacare offers services such as digitized patient records, doctor-patient consultations, health monitoring, and more.",
      faq_question4: "How can donors contribute to Afiacare?",
      faq_answer4: "Donors can contribute by donating blood, organs, or financial aid through the Afiacare platform.",
      footer_newsletter: "Sign up for our Newsletter",
      footer_quick_links: "Quick Links",
      footer_contact_us: "Contact us",
      footer_follow_us: "Follow us",
      footer_address: "123 Main St, Anytown USA",
      footer_phone: "+1234567890",
      footer_email: "Qp6Xa@example.com",
      footer_rights: "© 2023 afiacare. All rights reserved.",
      get_involved_title: "Get Involved",
      get_involved_intro: "Join us in our mission to revolutionize healthcare in Cameroon. Whether you are a healthcare provider, patient, or donor, Afiacare offers the tools and support you need for a better healthcare experience.",
      get_involved_healthcare_providers: "Healthcare Providers",
      get_involved_healthcare_description: "Join our network of professionals to deliver high-quality care and improve patient outcomes.",
      get_involved_patients: "Patients",
      get_involved_patients_description: "Access comprehensive healthcare services and manage your health records with ease.",
      get_involved_donors: "Donors",
      get_involved_donors_description: "Support our mission by donating blood, organs, or financial aid to those in need.",
      get_involved_button: "Get Started",
      placeholder_email: "Enter your email",
      newsButton: "Get Demo",
      how_it_works_title: "How it works",
      how_it_works_platform_development: "Platform Development",
      how_it_works_platform_development_description: "We build a secure, scalable platform using modern technologies.",
      how_it_works_data_integration: "Data Integration",
      how_it_works_data_integration_description: "Our platform seamlessly integrates with existing hospital management systems.",
      how_it_works_user_training: "User Training",
      how_it_works_user_training_description: "We provide comprehensive training for healthcare providers and patients.",
      how_it_works_pilot_testing: "Pilot Testing",
      how_it_works_pilot_testing_description: "Conduct pilot tests in selected hospitals to refine the system.",
      how_it_works_full_deployment: "Full Deployment",
      how_it_works_full_deployment_description: "Roll out the platform across Cameroon with ongoing support and updates.",
      login_email: "Email",
      login_password: "Password",
      login_forgot_password: "Forgot Password?",
      login_button: "Login",
      login_google_button: "Login with Google",
      about_mission_title: "Mission",
      about_mission_description: "To modernize healthcare management in Cameroon by providing a user-friendly digital platform that ensures better patient outcomes through accurate and efficient data handling.",
      about_button_text: "Be part of our journey",
      our_journey_title: "Our Journey",
      our_journey_description: "Afiacare was founded in 2024 with the goal of addressing the critical gaps in the healthcare system in Cameroon. Since then, we have worked tirelessly to develop a robust and user-friendly platform that meets the needs of patients, healthcare providers, and donors. Our journey has been one of continuous learning and improvement, and we are proud of the impact we have made so far.",
      our_journey_button_text: "Be part of our journey",
      our_services_title: "Our Services",
      our_services_description: "At Afiacare, we are committed to enhancing the healthcare experience through our innovative digital solutions.",
      services_title_1: "Healthcare Management System",
      services_description_1: "Streamline your operations with our user-friendly healthcare management platform. Our system enables efficient patient data handling, appointment scheduling, and medical record management.",
      services_title_2: "Donor Matching and Management",
      services_description_2: "Our advanced donor matching system helps hospitals connect with potential donors quickly and effectively, increasing the likelihood of successful outcomes.",
      services_title_3: "Telemedicine Services",
      services_description_3: "Access healthcare from the comfort of your home with our telemedicine services. Patients can consult with healthcare professionals via video calls.",
      services_title_4: "Mobile Application",
      services_description_4: "Stay connected with our mobile application, designed for both patients and healthcare providers, featuring appointment reminders and medication tracking.",
      services_title_5: "Training and Support",
      services_description_5: "We believe in empowering our users. Our ongoing training sessions and dedicated technical support ensure effective use of our platform.",
      services_title_6: "Research and Analytics",
      services_description_6: "Gain insights into healthcare trends and performance metrics, helping healthcare providers make informed decisions.",
      get_started_button: "Get Started",
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      password: "Password",
      confirm_password: "Confirm Password",
      agree_to: "I agree to the",
      terms_and_conditions: "Terms and Conditions",
      and: "and",
      privacy_policy: "Privacy Policy",
      register: "Register",
      get_started_with_google: "Get Started with Google",
      team_role1: "Backend Developer",
      team_role2: "Frontend Developer",
      team_role3: "DevOps Engineer",
      team_role4: "Software Architect",
      ourTeam_title: "Our Team",
      ourTeam_description: "Afiacare is powered by a team of dedicated professionals with diverse expertise in healthcare, technology, and business. Our team is passionate about driving positive change in the healthcare sector and is committed to delivering the best possible solutions for our users.",
      Trusted_title: "Trusted by",
      our_values: "Our Values",
      innovation: "Innovation",
      innovation_text: "We embrace cutting-edge technology to provide innovative solutions that address the unique challenges of the healthcare system.",
      accessibility: "Accessibility",
      accessibility_text: "We are committed to making healthcare services accessible to everyone, regardless of their location or background.",
      integrity: "Integrity",
      integrity_text: "We uphold the highest standards of integrity in all our operations, ensuring transparency, accountability, and ethical practices.",
      compassion: "Compassion",
      compassion_text: "We prioritize the well-being of our users and are dedicated to providing compassionate and patient-centered care.",
      collaboration: "Collaboration",
      collaboration_text: "We believe in the power of collaboration and work closely with healthcare providers, patients, and donors to achieve our mission.",
      our_vision: "Our Vision",
      vision_text: "We envision a healthcare system where every individual has easy access to accurate medical information, timely healthcare services, and seamless communication with healthcare providers. Afiacare aspires to be the leading digital healthcare platform in Cameroon, driving positive change and better health outcomes for all.",
      join_us: "Join us",
      who_we_are: "Who We Are",
      description: "Afiacare is a pioneering digital healthcare platform designed to transform the healthcare landscape in Cameroon. Our mission is to provide a seamless, efficient, and accessible healthcare experience for patients, healthcare providers, and donors. With a focus on leveraging cutting-edge technology, Afiacare aims to address the critical challenges faced by the healthcare system and improve overall health outcomes.",
      discover_us: "Discover us",
      WhyTitle: "Why Choose Us",
      WhyReason1: "Streamline healthcare management processes.",
      WhyReason2: "Minimize errors in patient data handling.",
      WhyReason3: "Ensure quick and effective donor matching and information sharing.",
      WhyReason4: "Accessible via web and mobile applications.",
      WhyReason5: "Ongoing training and technical support.",
      Caccount_Title: "Create an Account",
      Login_Title: "Login",
      Login_question: "Don't have an account?",
      Register_question: "Already have an account?",
      page_not_found_h1: "We are sorry!",
      page_not_found_description: "The page you are looking for does not exist or may have been moved, contact support if you think this was a mistake!",
      welcomeTitle: "Welcome to Afiacre!",
      welcomeParagraph1: "We're thrilled to have you here at Afiacre, your ultimate healthcare companion! Afiacre is designed to seamlessly connect you with top healthcare professionals, provide comprehensive health management tools, and ensure you have access to the best medical resources at your fingertips.",
      welcomeParagraph2: "Let's get started on this exciting journey together! Click the button below to begin your onboarding process and discover all that Afiacre has to offer.",
      getStarted: "Get Started",
      howAreYouJoining: "How are you joining us?",
      doctor: "Doctor",
      user: "User",
      hospital: "Hospital",
      previous: "Previous",
      submit: "Submit",
    },
    fre: {
      home: `Page d'accueil`,
      about: `À propos`,
      contact: `Contact`,
      services: `Les services`,
      login: `Connexion`,
      register: `Inscription`,
      language_one: `Anglais`,
      language_two: `Français`,
      heroparagraph: `Afiacare se consacre à la transformation du système de santé au Cameroun. Notre plateforme numérique complète répond à des défis clés tels que la mauvaise gestion des données, le jumelage des donateurs et le partage d'informations entre les hôpitaux. Nous exploitons une technologie de pointe pour améliorer la précision, l’efficacité et l’accessibilité des services de santé.`,
      discoverButton: `En savoir plus`,
      about_us: `À propos de nous`,
      hero_greetings: `Nous sommes afiacare`,
      hero_title: `Renforcer les soins de santé grâce à la technologie`,
      hero_text: `Transformation des soins de santé, un pas à la fois`,
      card_title: `Fonctionnalités`,
      records_text: `Des enregistrements numériques`,
      description1: `Accès à la documentation médicale par la digitisation des enregistrements des patients.`,
      donor_text: `Jumelage des donateurs`,
      description2: `Jumelage des donateurs efficace pour les hôpitaux à la recherche de volontaires rapidement et efficacement.`,
      sharing_text: `Partage de données`,
      description3: `Activer le partage de données précis et sans erreur pour les hôpitaux.`,
      monitoring_text: `Suivi de la santé`,
      description4: `Suivi de la santé des patients et des suggestions de soins.`,
      doctor_text: `Consultations médecins-patients`,
      description5: `Consultations médecins-patients efficaces et utilisables`,
      insurance_text: `Gestion des assurances`,
      description6: `Gestion des assurances efficace et utilisable`,
      forum_text: `Forums de communauté`,
      description7: `Engager avec la communauté des professionnels de la santé et des patients via des forums informatifs et interactifs`,
      SuggestButton: `Suggérer une fonctionnalité`,
      quote1: `Merci d'avoir utilisé Afiacare. L’accès aux données médicales n’a jamais été facile.`,
      role1: `Patient`,
      quote2: `En tant que donateur, Afiacare fournit un processus complet pour suivre mes dons et se connecter avec les volontaires dans le besoin.`,
      role2: `Donateur`,
      quote3: `En tant que patient, l’accès aux données médicales n’a jamais été facile.`,
      quote4: `La vie est devenue plus facile pour moi en tant que médecin. Je peux facilement et efficacement gérer mes patients.`,
      role3: `Médecin`,
      testimonial_title: `Quelques clients en ce moment`,
      contact_hero1: `Nous avons toute une équipe pour vous`,
      contact_hero2: `aider à chaque étape de votre parcours de santé.`,
      contact_text: `Obtenez de l'aide 24/7 avec notre réseau de support de qualité`,
      contact_action: `Prise de rendez-vous`,
      contact_action2: `Contacter`,
      contact_item_text1: `Appelez-nous`,
      contact_item_description1: `Appelez notre équipe, Lun - Ven de 08h à 17h`,
      contact_item_text2: `Chattez avec nous`,
      contact_item_description2: `Parlez à notre équipe amicale via le chat en direct.`,
      contact_item_text3: `Visitez-nous`,
      contact_item_description3: `Venez nous voir à notre siège de Douala`,
      first_name: `Prénom`,
      last_name: `Nom de famille`,
      email: `Email`,
      phone: `Téléphone`,
      message: `Message`,
      message_placeholder: `Laissez-nous un message...`,
      send: `Envoyer`,
      message_twitter: `Message nous sur Twitter`,
      faq_title: "Questions Fréquemment Posées",
      faq_question1: "Qu'est-ce qu'Afiacare ?",
      faq_answer1: "Afiacare est une plateforme de santé numérique conçue pour améliorer la gestion et la prestation des services de santé au Cameroun.",
      faq_question2: "Comment puis-je rejoindre Afiacare en tant que fournisseur de soins de santé ?",
      faq_answer2: "Les fournisseurs de soins de santé peuvent rejoindre Afiacare en s'inscrivant sur notre plateforme et en complétant le processus d'intégration requis.",
      faq_question3: "Quels services Afiacare offre-t-il aux patients ?",
      faq_answer3: "Afiacare offre des services tels que des dossiers de patients numérisés, des consultations médecins-patients, le suivi de la santé, et plus encore.",
      faq_question4: "Comment les donateurs peuvent-ils contribuer à Afiacare ?",
      faq_answer4: "Les donateurs peuvent contribuer en faisant don de sang, d'organes ou d'aide financière via la plateforme Afiacare.",
      footer_newsletter: "Inscrivez-vous à notre newsletter",
      footer_quick_links: "Liens rapides",
      footer_contact_us: "Contactez-nous",
      footer_follow_us: "Suivez-nous",
      footer_address: "123 Main St, Anytown USA",
      footer_phone: "+1234567890",
      footer_email: "Qp6Xa@example.com",
      footer_rights: "© 2023 afiacare. Tous droits réservés.",
      get_involved_title: "Impliquez-vous",
      get_involved_intro: "Rejoignez-nous dans notre mission de révolutionner les soins de santé au Cameroun. Que vous soyez un prestataire de soins de santé, un patient ou un donneur, Afiacare offre les outils et le soutien dont vous avez besoin pour une meilleure expérience de soins de santé.",
      get_involved_healthcare_providers: "Prestataires de soins de santé",
      get_involved_healthcare_description: "Rejoignez notre réseau de professionnels pour fournir des soins de haute qualité et améliorer les résultats des patients.",
      get_involved_patients: "Patients",
      get_involved_patients_description: "Accédez à des services de santé complets et gérez vos dossiers de santé en toute simplicité.",
      get_involved_donors: "Donneurs",
      get_involved_donors_description: "Soutenez notre mission en donnant du sang, des organes ou une aide financière à ceux qui en ont besoin.",
      get_involved_button: "Commencer",
      placeholder_email: "Entrez votre email",
      newsButton: "Obtenir le démo",
      how_it_works_title: "Comment ça marche",
      how_it_works_platform_development: "Développement de la plateforme",
      how_it_works_platform_development_description: "Nous construisons une plateforme sécurisée et évolutive utilisant des technologies modernes.",
      how_it_works_data_integration: "Intégration de données",
      how_it_works_data_integration_description: "Notre plateforme s'intègre parfaitement aux systèmes de gestion hospitalière existants.",
      how_it_works_user_training: "Formation des utilisateurs",
      how_it_works_user_training_description: "Nous offrons une formation complète aux prestataires de soins de santé et aux patients.",
      how_it_works_pilot_testing: "Tests pilotes",
      how_it_works_pilot_testing_description: "Réalisez des tests pilotes dans des hôpitaux sélectionnés pour affiner le système.",
      how_it_works_full_deployment: "Déploiement complet",
      how_it_works_full_deployment_description: "Déployez la plateforme à travers le Cameroun avec un support et des mises à jour continues.",
      login_email: "E-mail",
      login_password: "Mot de passe",
      login_forgot_password: "Mot de passe oublié?",
      login_button: "Connexion",
      login_google_button: "Connexion avec Google",
      about_mission_title: "Mission",
      about_mission_description: "Moderniser la gestion des soins de santé au Cameroun en fournissant une plateforme numérique conviviale qui garantit de meilleurs résultats pour les patients grâce à une gestion des données précise et efficace.",
      about_button_text: "Faites partie de notre voyage",
      our_journey_title: "Notre Parcours",
      our_journey_description: "Afiacare a été fondée en 2024 avec pour objectif de combler les lacunes critiques du système de santé au Cameroun. Depuis, nous travaillons sans relâche pour développer une plateforme robuste et conviviale qui répond aux besoins des patients, des prestataires de soins de santé et des donateurs. Notre parcours a été une quête d'apprentissage et d'amélioration continus, et nous sommes fiers de l'impact que nous avons eu jusqu'à présent.",
      our_journey_button_text: "Faites partie de notre voyage",
      our_services_title: "Nos Services",
      our_services_description: "Chez Afiacare, nous nous engageons à améliorer l'expérience de soins de santé grâce à nos solutions numériques innovantes.",
      services_title_1: "Système de Gestion des Soins de Santé",
      services_description_1: "Rationalisez vos opérations avec notre plateforme de gestion des soins de santé conviviale. Notre système permet une gestion efficace des données des patients, la planification des rendez-vous et la gestion des dossiers médicaux.",
      services_title_2: "Correspondance et Gestion des Donateurs",
      services_description_2: "Notre système avancé de correspondance des donateurs aide les hôpitaux à se connecter rapidement et efficacement avec des donateurs potentiels, augmentant ainsi les chances de succès.",
      services_title_3: "Services de Télémédecine",
      services_description_3: "Accédez aux soins de santé depuis le confort de votre domicile avec nos services de télémédecine. Les patients peuvent consulter des professionnels de la santé via des appels vidéo.",
      services_title_4: "Application Mobile",
      services_description_4: "Restez connecté avec notre application mobile, conçue pour les patients et les prestataires de soins de santé, avec des rappels de rendez-vous et un suivi des médicaments.",
      services_title_5: "Formation et Support",
      services_description_5: "Nous croyons en l'autonomisation de nos utilisateurs. Nos sessions de formation continues et notre support technique dédié garantissent une utilisation efficace de notre plateforme.",
      services_title_6: "Recherche et Analyse",
      services_description_6: "Obtenez des informations sur les tendances de la santé et les indicateurs de performance, aidant les prestataires de soins de santé à prendre des décisions éclairées.",
      get_started_button: "Commencer",
      first_name: "Prénom",
      last_name: "Nom de famille",
      email: "Email",
      password: "Mot de passe",
      confirm_password: "Confirmez le mot de passe",
      agree_to: "J'accepte les",
      terms_and_conditions: "Conditions générales",
      and: "et",
      privacy_policy: "Politique de confidentialité",
      register: "S'inscrire",
      get_started_with_google: "Commencer avec Google",
      team_role1: "Developpeur Backend",
      team_role2: "Developpeur Frontend",
      team_role3: "Chef de projet DevOps",
      team_role4: "Architecte logiciel",
      ourTeam_title: "Notre Equipe",
      ourTeam_description: "Afiacare s'appuie sur une équipe de professionnels dévoués possédant une expertise diversifiée dans les domaines de la santé, de la technologie et des affaires. Notre équipe est passionnée par la conduite de changements positifs dans le secteur de la santé et s'engage à fournir les meilleures solutions possibles à nos utilisateurs.",
      Trusted_title: "Nos Partenaires",
      our_values: "Nos Valeurs",
      innovation: "Innovation",
      innovation_text: "Nous adoptons une technologie de pointe pour fournir des solutions innovantes qui répondent aux défis uniques du système de santé.",
      accessibility: "Accessibilité",
      accessibility_text: "Nous nous engageons à rendre les services de santé accessibles à tous, quel que soit leur lieu ou leur origine.",
      integrity: "Intégrité",
      integrity_text: "Nous respectons les normes les plus élevées d'intégrité dans toutes nos opérations, assurant la transparence, la responsabilité et des pratiques éthiques.",
      compassion: "Compassion",
      compassion_text: "Nous privilégions le bien-être de nos utilisateurs et nous nous engageons à fournir des soins compatissants et centrés sur le patient.",
      collaboration: "Collaboration",
      collaboration_text: "Nous croyons au pouvoir de la collaboration et travaillons en étroite collaboration avec les prestataires de soins de santé, les patients et les donateurs pour atteindre notre mission.",
      our_vision: "Notre Vision",
      vision_text: "Nous envisageons un système de santé où chaque individu a un accès facile à des informations médicales précises, à des services de santé en temps voulu et à une communication fluide avec les prestataires de soins. Afiacare aspire à être la principale plateforme de santé numérique au Cameroun, favorisant un changement positif et de meilleurs résultats en matière de santé.",
      join_us: "Rejoignez-nous",
      who_we_are: "Qui Nous Sommes",
      description: "Afiacare est une plateforme de santé numérique pionnière conçue pour transformer le paysage de la santé au Cameroun. Notre mission est de fournir une expérience de santé fluide, efficace et accessible pour les patients, les prestataires de soins et les donateurs. En mettant l'accent sur l'utilisation de technologies de pointe, Afiacare vise à relever les défis critiques auxquels le système de santé est confronté et à améliorer les résultats globaux en matière de santé.",
      discover_us: "Découvrez-nous",
      WhyTitle: "Pourquoi choisir Afiacare ?",
      WhyReason1: "Rationaliser les processus de gestion des soins de santé.",
      WhyReason2: "Minimiser les erreurs dans la gestion des données des patients.",
      WhyReason3: "Assurer un appariement et un partage d'informations des donateurs rapides et efficaces.",
      WhyReason4: "Accessible via des applications web et mobiles.",
      WhyReason5: "Formation continue et support technique.",
      Caccount_Title: "Creer un compte",
      Login_Title: "Se connecter",
      Login_question: "Vous n'avez pas de compte ?",
      Register_question: "Vous avez deja un compte ?",
      page_not_found_h1: "Nous sommes désolés!",
      page_not_found_description: "La page que vous cherchez n'existe pas ou a été modifié. Contactez-nous pour plus d'informations.",
      welcomeTitle: "Bienvenue chez Afiacre !",
      welcomeParagraph1: "Nous sommes ravis de vous accueillir chez Afiacre, votre compagnon de santé ultime ! Afiacre est conçu pour vous connecter sans effort avec les meilleurs professionnels de la santé, fournir des outils de gestion de la santé complets et garantir que vous avez accès aux meilleures ressources médicales à portée de main.",
      welcomeParagraph2: "Commençons ensemble ce voyage passionnant ! Cliquez sur le bouton ci-dessous pour commencer votre processus d'intégration et découvrir tout ce qu'Afiacre a à offrir.",
      getStarted: "Commencer",
      howAreYouJoining: "Comment nous rejoignez-vous?",
    doctor: "Médecin",
    user: "Utilisateur",
    hospital: "Hôpital",
    previous: "Précédent",
    submit: "Soumettre",
    }
  }
];

export default langs;
