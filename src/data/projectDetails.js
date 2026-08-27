export const projectDetails = {
  deveval: {
    tagline:
      'An AI-powered Engineering Team Matrix and Performance Tracking Dashboard.',
    overview:
      'DevEval AI is an intelligent dashboard designed for Engineering Managers and Tech Leads to evaluate, mentor, and track the growth of their software development teams. By combining role-specific competency matrices with Generative AI (Google Gemini), the application translates granular 1–5 skill ratings into comprehensive performance insights, actionable mentorship plans, and dynamic growth curves.',
    features: [
      {
        title: 'Role-Specific Skill Rubrics',
        text: 'Built-in, granular evaluation criteria for Mobile, Backend, Web Frontend, QA, UI/UX, and Embedded Systems developers, assessing everything from Domain-Driven Design to Core Web Vitals.',
      },
      {
        title: 'AI-Driven Gap Analysis',
        text: 'Leverages the Gemini API to analyze initial scores and generate a true 0–100 performance score, identify three specific skill gaps, and formulate a personalized 3-step action plan for every team member.',
      },
      {
        title: 'Continuous Feedback Engine',
        text: 'Managers can log weekly, natural-language observations (e.g. “Missed a race condition in PR”). The AI analyzes the sentiment and impact of the log, automatically adjusting the developer’s score and dynamically updating their action plan.',
      },
      {
        title: 'Interactive Data Visualization',
        text: 'Utilizes Recharts to render real-time Learning Improvement Curves and Target vs. Actual gap analyses, allowing managers to spot at a glance who is ready for a promotion and who needs coaching.',
      },
      {
        title: 'Real-time Cloud Sync',
        text: 'Fully integrated with Firebase Auth and Firestore to seamlessly and securely persist team data, historical logs, and weekly states across sessions.',
      },
      {
        title: 'Dense, Modern UI',
        text: 'Built with Tailwind CSS and Lucide React icons, focusing on a dense, data-first UX tailored for enterprise-grade team management.',
      },
    ],
    stack: [
      { label: 'Frontend', text: 'React, Tailwind CSS, Lucide Icons' },
      { label: 'Data Visualization', text: 'Recharts' },
      { label: 'Backend & DB', text: 'Firebase (Authentication, Firestore)' },
      {
        label: 'AI Integration',
        text: 'Google Gemini 2.5 Flash API with custom JSON schema parsing and exponential backoff',
      },
    ],
    impact:
      'DevEval AI solves the common management challenge of subjective and infrequent performance reviews. By turning subjective managerial observations into objective, AI-adjusted data points, it ensures continuous feedback, eliminates recency bias, and creates clear, actionable paths for developer career progression.',
  },

  apppulse: {
    tagline: 'Engineering & Release Command Center.',
    overview:
      'AppPulse is a comprehensive, responsive web dashboard designed for engineering managers, product owners, and tech leads. It serves as a single source of truth to orchestrate complete software lifecycles, manage cross-functional departments, and track complex release phases across web, mobile, backend services, and infrastructure in real time.',
    features: [
      {
        title: 'Project Lifecycle Analytics',
        text: 'A detailed project view that automatically calculates Time to Production and average stage durations (for example, time spent in QA vs. Development) from historical release data, helping identify bottlenecks.',
      },
      {
        title: 'Advanced Release Management',
        text: 'Interactive, timeline-based release tracker. Users can log release notes, advance builds through custom environments (Planning, Dev, QA, Staging, Prod), and visually track how many days a version spent in each phase.',
      },
      {
        title: 'Cross-Functional Team Allocation',
        text: 'A built-in directory to manage diverse departments (DevOps, UI/UX, Backend, QA) and team members, mapping specific engineering skills to assigned projects to optimize resource planning.',
      },
      {
        title: 'Interactive Data Visualization',
        text: 'Dynamic charting for a bird’s-eye view of project phase distributions, department headcounts, and overall organizational health.',
      },
      {
        title: 'Modern, State-Driven UI',
        text: 'Robust SPA with dynamic filtering, responsive navigation, custom modals, toast notifications, and a seamless dark/light mode toggle.',
      },
    ],
    stack: [
      { label: 'Frontend', text: 'HTML5, CSS3, Vanilla JavaScript (ES6+)' },
      {
        label: 'Styling & UI',
        text: 'Tailwind CSS, FontAwesome, Space Grotesk & DM Sans',
      },
      { label: 'Data Visualization', text: 'Chart.js' },
      {
        label: 'Architecture',
        text: 'Custom vanilla JS state management for SPA routing, DOM updates, and relational mapping (Projects ↔ Teams ↔ Releases) without a heavy frontend framework',
      },
    ],
    impact:
      'AppPulse solves the operational chaos of managing parallel software releases across multiple engineering departments. By centralizing release timelines, cross-functional team assignments, and bottleneck analytics, it empowers engineering leadership to make data-driven decisions, improve velocity, and streamline CI/CD pipelines across the organization.',
  },

  biowave: {
    tagline: 'All-in-one biometric workforce platform.',
    overview:
      'BioWave is Arana Security’s production workforce platform for time & attendance, facility access control, and payments. It lets organizations run distributed biometric devices both on-site and globally, with bilingual Arabic/English UX and workflows that can be tailored per customer.',
    features: [
      {
        title: 'Time, Access & Payments',
        text: 'One app covers clock-in/out, gated access, and payment flows so sites do not juggle separate tools for workforce operations.',
      },
      {
        title: 'Distributed Device Management',
        text: 'Operators manage readers and terminals locally and across locations, keeping enrollment and attendance data in sync with backend services.',
      },
      {
        title: 'Bilingual Workflows',
        text: 'Full Arabic and English support with customizable attendance and access rules for mixed-language workplaces.',
      },
      {
        title: 'Store-Ready Flutter Client',
        text: 'Shipped on Google Play and the App Store, backed by REST APIs and Firebase for notifications, auth, and operational data.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Flutter, Dart' },
      { label: 'Backend', text: 'REST API, Firebase' },
      { label: 'Distribution', text: 'Google Play, App Store' },
    ],
    impact:
      'BioWave gives facilities a single bilingual control plane for people, doors, and payments—reducing hardware sprawl and making attendance and access policies consistent across sites.',
  },

  biobox: {
    tagline: 'Portable multi-biometric enrollment kit.',
    overview:
      'BioBox is a field enrollment workstation for law enforcement and border use. Officers capture 4-4-2 fingerprints, iris, face (front/left/right), documents, and voice on a portable kit, then export standards-compliant records even when the network is down.',
    features: [
      {
        title: 'Multi-Modal Capture',
        text: 'Fingerprints, iris, multi-angle face, document, and voice recording in one guided landscape workflow.',
      },
      {
        title: 'Certified Hardware',
        text: 'FBI-certified FIVE-0 fingerprint scanner with IBScan integration for high-quality slap and roll capture.',
      },
      {
        title: 'Offline Enroll & Sync',
        text: 'Records are stored locally and synchronized later, so enrollment continues in disconnected environments.',
      },
      {
        title: 'Standards Export',
        text: 'ANSI/NIST-ITL EFT file export so downstream AFIS and border systems can ingest the kit’s output without custom converters.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Kotlin, Android' },
      { label: 'Biometrics', text: 'IBScan, iris cameras, face capture' },
      { label: 'Exchange', text: 'ANSI/NIST-ITL EFT' },
    ],
    impact:
      'BioBox shortens field enrollment from a lab process to a portable kit: officers capture complete biometric packages offline and hand standards-ready files to national identity systems.',
  },

  bluaccess: {
    tagline: 'BLE facility access for users and admins.',
    overview:
      'BluAccess is a Bluetooth Low Energy access-control pair: a user app that unlocks nearby gates, and an admin app to manage doors, rules, and time zones. Built with Flutter and flutter_blue_plus for live communication with access boards.',
    features: [
      {
        title: 'Proximity Unlock',
        text: 'Users see nearby doors and authenticate over BLE without relying on a wide-area network at the gate.',
      },
      {
        title: 'Admin Policy Console',
        text: 'Admins configure doors, access rules, and time zones, then push policy to the field hardware.',
      },
      {
        title: 'Calibration Flows',
        text: 'Dedicated hand and card calibration screens so readers behave consistently across installations.',
      },
      {
        title: 'Access History & Alerts',
        text: 'History and notifications give security teams a trail of who opened what, and when.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Flutter, Bloc, Dio' },
      { label: 'Hardware', text: 'BLE, flutter_blue_plus' },
    ],
    impact:
      'BluAccess replaces badge-only gates with phone-plus-BLE access that facilities can administer without a custom native stack per board.',
  },

  biogo: {
    tagline: 'Time & attendance on the IDEMIA ID Screen.',
    overview:
      'BioGo (formerly ADNOC Attend) is a Kotlin attendance and access client for the IDEMIA ID Screen. Staff enroll by ID, tablets stay in sync, and the device records sign-in, sign-out, and break intervals against Morpho biometrics.',
    features: [
      {
        title: 'ID Screen Enrollment',
        text: 'Enroll users by employee ID on the tablet, then verify them at the reader without a separate kiosk app.',
      },
      {
        title: 'Multi-Tablet Sync',
        text: 'User records propagate across devices so a site can run more than one ID Screen without split directories.',
      },
      {
        title: 'Attendance Intervals',
        text: 'Tracks sign-in, sign-out, and breaks so T&A reports match actual presence, not just a single punch.',
      },
      {
        title: 'Morpho Verification',
        text: 'Match-on-device fingerprint checks on IDEMIA hardware keep templates close to the sensor.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Kotlin, Android' },
      { label: 'Hardware', text: 'IDEMIA ID Screen, Morpho' },
      { label: 'Domain', text: 'Time & attendance, access control' },
    ],
    impact:
      'BioGo turns an ID Screen into a full T&A station: enroll once, sync tablets, and capture presence with biometric certainty on the shop floor.',
  },

  ekyc: {
    tagline: 'NFC, face, liveness, and OCR in one eKYC flow.',
    overview:
      'Arana eKYC is a fast electronic identity flow that reads passports and IDs over NFC, captures a live face, runs liveness, and OCRs the document. It is powered by the Idemia Capture SDK, with Shorebird for store-free patches after release.',
    features: [
      {
        title: 'NFC Document Reading',
        text: 'Reads chip data from passports and national IDs after the user grants NFC permission, reducing typed identity errors.',
      },
      {
        title: 'Guided ID Scan',
        text: 'Camera frame guidance for the physical document, then face capture before matching against the chip or OCR data.',
      },
      {
        title: 'Liveness & Face Match',
        text: 'Live capture plus liveness detection to block spoofed photos before the identity decision.',
      },
      {
        title: 'Results & Evidence',
        text: 'Final screens show document images and extracted details so reviewers can audit the session.',
      },
      {
        title: 'Instant Patches',
        text: 'Shorebird delivers fixes without waiting on store review—critical when capture SDKs and country document rules change.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Flutter' },
      { label: 'Capture', text: 'Idemia Capture SDK, NFC, OCR, liveness' },
      { label: 'Delivery', text: 'Shorebird code push' },
    ],
    impact:
      'Arana eKYC collapses passport NFC, OCR, and face matching into a single mobile session so onboarding teams can verify identity in minutes instead of manual document review.',
  },

  liveness: {
    tagline: 'On-device liveness as a building block for eKYC.',
    overview:
      'Liveness Check is a Flutter module that uses on-device face detection (ML Kit) and live camera frames to prove a real person is present before eKYC face-matching. It is reused across Arana identity flows rather than being a one-off screen.',
    features: [
      {
        title: 'Guided Capture',
        text: 'Onboarding copy and a circular viewfinder keep the face centered, with timed head-turn instructions to complete the check.',
      },
      {
        title: 'On-Device Detection',
        text: 'ML Kit and camera frames run on the phone so raw video does not have to leave the device for a basic liveness decision.',
      },
      {
        title: 'Review & Retry',
        text: 'Captured photo review, re-check, and success/error feedback so operators can resubmit without restarting enrollment.',
      },
      {
        title: 'Enrollment Hook',
        text: 'Personal-data registration feeds the same pipeline used by broader Arana eKYC products.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Flutter' },
      { label: 'Vision', text: 'ML Kit, Camera, TensorFlow Lite' },
    ],
    impact:
      'Liveness Check raises the cost of photo spoofing in identity flows without a custom native SDK for every app that needs a live face.',
  },

  biowave2fa: {
    tagline: 'Card tap plus fingerprint, templates never leave RAM.',
    overview:
      'BioWave 2FA is an IDEMIA ID Screen client for two-factor verification: a MIFARE DESFire EV1/EV2 card tap plus match-on-device fingerprint. Fingerprint templates stay in memory only—they are never written to disk or sent to a server.',
    features: [
      {
        title: 'Two-Factor Gate',
        text: 'Verify Card then Verify Fingerprint as a guided 1/3–2/3 flow with sensor-ready states on the ID Screen.',
      },
      {
        title: 'DESFire Card Data',
        text: 'Admin view of card details, employee info, and last verification result after a successful tap and match.',
      },
      {
        title: 'On-Card File Layout',
        text: 'Create File forms define standard file types, AES keys, offsets, and field titles so card encoding matches the attendance application AID.',
      },
      {
        title: 'Memory-Only Biometrics',
        text: 'MorphoSmart matching keeps templates out of persistent storage and off the network.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Kotlin, Jetpack Compose' },
      { label: 'Card', text: 'MIFARE DESFire EV1/EV2' },
      { label: 'Biometrics', text: 'MorphoSmart, ID Screen' },
    ],
    impact:
      'BioWave 2FA gives high-security sites card-plus-fingerprint access without creating a biometric database on the tablet or in the cloud.',
  },

  greenzone: {
    tagline: 'High-precision fingerprint capture for Green Zone badging.',
    overview:
      'Green Zone is an Android app for fingerprint acquisition on IDEMIA Morpho / ID Screen 60 devices used by the Green Zone Badging Office. It supports slap 4-4-2 and single-finger capture via MorphoKit, with Jetpack Compose UI, Room, DataStore, and Retrofit sync.',
    features: [
      {
        title: 'Official Home Console',
        text: 'Arabic-first home for verifying records, registering new records, synchronizing, and opening archives—branded for G.Z.B.O.',
      },
      {
        title: 'Slap & Single Capture',
        text: 'MorphoKit-driven 4-4-2 slaps and single-finger capture on ID Screen 60 hardware.',
      },
      {
        title: 'First-Time Enrollment',
        text: 'Empty and filled enrollment states so operators can complete records even on a new device.',
      },
      {
        title: 'Sync Without a Saved Number',
        text: 'Sync UI handles users who do not yet have a stored identifier, reducing failed uploads in the field.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Kotlin, Jetpack Compose, Room, DataStore' },
      { label: 'Hardware', text: 'MorphoKit, IDEMIA ID Screen 60' },
      { label: 'Sync', text: 'Retrofit' },
    ],
    impact:
      'Green Zone standardizes government-grade fingerprint capture for badging: operators get Morpho quality in a Compose app that can sync when the network is available.',
  },

  alnoor: {
    tagline: 'Campus transport, wallet, and live bus tracking.',
    overview:
      'Alnoor Transport is a Flutter suite for Alnoor University College: students book buses and watch balances, while related tablet, POS, and ATM/top-up hardware handle card withdrawal and printed receipts.',
    features: [
      {
        title: 'Student Home & Route',
        text: 'Arabic home shows current balance, assigned route, driver, bus number, and departure, plus a live “where is the bus?” map.',
      },
      {
        title: 'Wallet & History',
        text: 'Pocket screen lists fare charges against routes so students can reconcile balance without a cashier visit.',
      },
      {
        title: 'Auth & Profile',
        text: 'University-branded sign-in with fingerprint option, plus account tools to edit data, check balance, or log out.',
      },
      {
        title: 'Campus Hardware',
        text: 'Companion tablet validators, POS withdrawal with receipts, and ATM/top-up flows close the loop with NFC cards.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Flutter, i18n (Arabic RTL)' },
      { label: 'Hardware', text: 'NFC, POS, maps' },
    ],
    impact:
      'Alnoor Transport replaces cash-on-the-bus with a student wallet, live routing, and campus POS—so the college can run paid shuttles with an auditable balance.',
  },

  alreem: {
    tagline: 'Bilingual cards, transfers, budgets, and support.',
    overview:
      'Al Reem Pay is a Flutter finance app with Arabic/English UX: phone or fingerprint login, multiple cards, transfers, budgets, analytics, notifications, and transaction history.',
    features: [
      {
        title: 'Wallet & Cards',
        text: 'Physical vs. virtual cards, contactless/online/ATM toggles, and account picker for transfers.',
      },
      {
        title: 'Budgets & Analytics',
        text: 'Category budgets with progress, create-budget forms, and an interactivity chart over transaction history.',
      },
      {
        title: 'Profile & Security',
        text: 'Fingerprint-capable login, profile updates, and settings including privacy and notifications.',
      },
      {
        title: 'Help & Locator',
        text: 'In-app support chat and an ATM/bank map so users can find cash points without leaving the app.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Flutter, Redux, i18n' },
      { label: 'Auth', text: 'Phone login, fingerprint' },
    ],
    impact:
      'Al Reem Pay packages everyday banking—cards, transfers, budgets, and support—into one bilingual Flutter client that can sit on top of card and core-banking APIs.',
  },

  identity: {
    tagline: 'Barcode identity for lawyer records.',
    overview:
      'Arana Identity is a barcode-scanning app for lawyer credentials: scan a card, show bilingual profile data, and keep registration and expiry details aligned with backend releases. Status screens distinguish activated vs. rejected records.',
    features: [
      {
        title: 'Scan to Profile',
        text: 'Barcode capture opens a lawyer details view with photo, association badge, ID numbers, and validity dates.',
      },
      {
        title: 'Status at a Glance',
        text: 'Activated vs. rejected states so inspectors know whether the credential is current before relying on it.',
      },
      {
        title: 'Bilingual Records',
        text: 'Profile fields stay aligned with backend releases so Arabic and English labels match the issuing authority.',
      },
      {
        title: 'Rescan Flow',
        text: 'Operators can rescan another card from the details screen without restarting the app.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Flutter, Bloc, i18n' },
      { label: 'Capture', text: 'Barcode scanning' },
    ],
    impact:
      'Arana Identity lets inspectors verify a lawyer’s standing in seconds from a barcode, instead of calling a registry or trusting a paper card alone.',
  },

  forall: {
    tagline: 'Shopping, services, vendors, and live chat—four apps.',
    overview:
      'ForAll is a family of four production apps (ForAll, Vendor, Sales, Driver) covering shopping, ticketing, and healthcare. UI modules are driven by backend APIs; maps, tracking, and WebSocket chat (text, images, files, voice) keep customers and vendors in the same loop.',
    features: [
      {
        title: 'Super-App Home',
        text: 'Platforms grid for shopping, delivery, medical, hotels, flights, and more, plus Business Gate categories for B2B services.',
      },
      {
        title: 'Vendor Chat',
        text: 'In-thread voice notes, image attachments, and PDF menus so buyers can close with vendors without leaving the app.',
      },
      {
        title: 'Dynamic UI',
        text: 'Screens assembled from backend configuration, so new categories and modules ship without a full client rewrite.',
      },
      {
        title: 'Role-Split Clients',
        text: 'Separate Vendor, Sales, and Driver apps share the platform while keeping each role’s workflow focused.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Flutter, Firebase, Maps' },
      { label: 'Realtime', text: 'WebSocket (text, images, files, voice)' },
      { label: 'Packages', text: 'api_helper, multi_selection' },
    ],
    impact:
      'ForAll gave a regional marketplace one Flutter codebase for consumers and operators—dynamic modules and live chat instead of four disconnected products.',
  },

  rapidid: {
    tagline: 'Fingerprint ID plus Lite RapidID document OCR.',
    overview:
      'RapidID is a field identification kit for officers. The core app matches fingerprints on FBI PIV and FAP 30 certified sensors with TFT scanning. Lite RapidID adds high-speed OCR for passports and national IDs—MRZ recognition, image pre-processing, and automated data entry with secure parsing for other systems.',
    features: [
      {
        title: 'On-the-Spot Fingerprints',
        text: 'Identity Search captures left/right fingers and requests a match in seconds, even in rugged portable deployments.',
      },
      {
        title: 'Certified Sensors',
        text: 'FBI PIV and FAP 30 hardware with advanced TFT scanning so print quality holds up outside a lab.',
      },
      {
        title: 'Lite RapidID OCR',
        text: 'MRZ and document OCR with image pre-processing so passport and national-ID fields populate without retyping.',
      },
      {
        title: 'Secure Handoff',
        text: 'Parsed identity data is structured for cross-platform integration rather than locked in a proprietary dump.',
      },
    ],
    stack: [
      { label: 'Client', text: 'Android, Kotlin' },
      { label: 'Fingerprints', text: 'FBI PIV, FAP 30' },
      { label: 'Documents', text: 'OCR, MRZ, ONNX' },
    ],
    impact:
      'RapidID lets officers identify a person from a finger or a travel document in the field—without waiting on a back-office scan station.',
  },
}
