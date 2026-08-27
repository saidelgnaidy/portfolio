import {
  Activity,
  Box,
  ShieldCheck,
  KeyRound,
  Bus,
  Eye,
  ClipboardCheck,
  ShoppingBag,
  Fingerprint,
  ScanLine,
  Nfc,
  Wallet,
  IdCard,
  LayoutDashboard,
  BrainCircuit,
} from 'lucide-react'

import { projectDetails } from './projectDetails'

export const cvPath = `${import.meta.env.BASE_URL}cv.pdf`

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const gallery = (folder, files) =>
  files.map((file) => asset(`projects/${folder}/${file}`))

const biowaveImages = gallery('biowave', [
  'onboarding-1.png',
  'onboarding-2.png',
  'onboarding-3.png',
  'registration.png',
  'notifications.png',
  'reports.png',
  'reports-detail.png',
  'splash.png',
])

const bioboxImages = gallery('biobox', [
  'home.png',
  'record-list.png',
  'face.png',
  'fingerprint.png',
  'iris.png',
  'document.png',
  'voice.png',
])

const bluaccessImages = gallery('bluaccess', [
  'home.png',
  'login.png',
  'access-history.png',
  'notifications.png',
  'hand-calibration.png',
  'card-calibration.png',
])

const biogoImages = gallery('biogo', [
  'home.png',
  'login.png',
  'modal.png',
  'add-user.png',
  'users-list.png',
  'enroll.png',
  'verification.png',
])

const ekycImages = gallery('ekyc', [
  'onboarding.png',
  'nfc.png',
  'scan-id.png',
  'face-capture.png',
  'results-document.png',
  'results-details.png',
])

const rapididImages = gallery('rapidid', ['home.png'])

const livenessImages = gallery('liveness', [
  'personal-data.png',
  'intro.png',
  'capture.png',
  'captured.png',
  'captured-set.png',
  'success.png',
])

const biowave2faImages = gallery('biowave-2fa', [
  'verify-card.png',
  'verify-fingerprint.png',
  'card-data.png',
  'files.png',
  'create-file.png',
])

const alreemImages = gallery('alreem', [
  'budget.png',
  'choose-account.png',
  'transfer-success.png',
  'create-budget.png',
  'cards.png',
  'profile.png',
  'analytics.png',
  'settings.png',
  'support.png',
  'atm-locator.png',
])

const forallImages = gallery('forall', [
  'login.webp',
  'services.webp',
  'business-gate.webp',
  'chat.webp',
  'profile.webp',
])

const alnoorImages = gallery('alnoor', [
  'home.png',
  'sign-in.png',
  'wallet.png',
  'route.png',
  'profile.png',
])

const greenzoneImages = gallery('greenzone', [
  'home.png',
  'enroll.png',
  'enroll-filled.png',
  'settings.png',
  'sync.png',
])

const aranaIdentityImages = gallery('arana-identity', [
  'details-active.png',
  'details-rejected.png',
  'splash.png',
])

const apppulseImages = gallery('apppulse', [
  'dashboard.png',
  'applications.png',
  'releases.png',
  'team.png',
])

const devevalImages = gallery('deveval', [
  'matrix.png',
  'member.png',
  'evaluate.png',
])

export const profile = {
  fullName: 'Saeed Ahmed Mohamed',
  shortName: 'Saeed',
  title: 'Mobile Developer & Technical Lead',
  email: 'saeed.elgnaidy@gmail.com',
  phone: '+20 114 023 0179',
  phoneHref: 'tel:+201140230179',
  location: 'Egypt',
  github: 'https://github.com/saidelgnaidy',
  linkedin: 'https://linkedin.com/in/saidelgnaidy',
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Very Good' },
  ],
}

const aranaStores = {
  playStore: 'https://play.google.com/store/apps/developer?id=Arana+Security',
  appStore:
    'https://apps.apple.com/us/developer/aranasecurity/id1574371832?see-all=i-phonei-pad-apps',
}

export const projects = [
  {
    id: 2,
    name: "BioWave",
    description:
      "All-in-one biometric workforce platform for time & attendance, facility access control, and payments. Manages distributed devices locally and globally, with bilingual Arabic/English support and customizable workflows.",
    icon: Activity,
    category: "Biometrics",
    tech: ["Flutter", "Dart", "REST API", "Firebase"],
    gradient: "from-cyan-400 to-blue-500",
    shadowColor: "rgba(6, 182, 212, 0.3)",
    company: "Arana Security",
    images: biowaveImages,
    details: projectDetails.biowave,
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.aranasecurity.biowave",
      appStore: "https://apps.apple.com/ao/app/biowave/id1574371830",
    },
  },
  {
    id: 3,
    name: "BioBox",
    description:
      "Portable multi-biometric enrollment kit: 4-4-2 fingerprints, iris, and front/left/right face capture. Offline enroll-and-sync later, FBI-certified FIVE-0 scanner, and ANSI/NIST-ITL EFT file export for law enforcement and border use.",
    icon: Box,
    category: "Biometrics",
    tech: ["Kotlin", "IBScan", "Iris", "NIST/EFT"],
    gradient: "from-emerald-400 to-teal-500",
    shadowColor: "rgba(16, 185, 129, 0.3)",
    company: "Arana Security",
    images: bioboxImages,
    details: projectDetails.biobox,
  },
  {
    id: 10,
    name: "BluAccess",
    description:
      "BLE facility access control: user app for nearby gates plus an admin app to manage doors, rules, and time zones. Built with Flutter and flutter_blue_plus for real-time board communication.",
    icon: KeyRound,
    category: "Hardware",
    tech: ["Flutter", "BLE", "Bloc", "Dio"],
    gradient: "from-blue-400 to-indigo-500",
    shadowColor: "rgba(59, 130, 246, 0.3)",
    company: "Arana Security",
    images: bluaccessImages,
    details: projectDetails.bluaccess,
  },
  {
    id: 11,
    name: "BioGo",
    description:
      "Time & attendance and access control on the IDEMIA ID Screen. Enroll by ID, sync users across tablets, and track sign-in, sign-out, and break intervals.",
    icon: ClipboardCheck,
    category: "Hardware",
    tech: ["Kotlin", "ID Screen", "Morpho", "T&A"],
    gradient: "from-red-400 to-orange-500",
    shadowColor: "rgba(239, 68, 68, 0.3)",
    company: "Arana Security",
    images: biogoImages,
    details: projectDetails.biogo,
  },
  {
    id: 1,
    name: "Arana eKYC",
    description:
      "Fast electronic identity verification combining NFC passport and ID reading, live face matching, liveness detection, and OCR. Powered by Idemia Capture SDK, with Shorebird for instant store-free patches.",
    icon: ShieldCheck,
    category: "Biometrics",
    tech: ["Flutter", "NFC", "OCR", "Idemia SDK", "Shorebird"],
    gradient: "from-violet-400 to-purple-500",
    shadowColor: "rgba(139, 92, 246, 0.3)",
    company: "Arana Security",
    images: ekycImages,
    details: projectDetails.ekyc,
    links: aranaStores,
  },

  {
    id: 7,
    name: "Liveness Check",
    description:
      "Flutter liveness module using on-device face detection (ML Kit) and live camera frames to block spoofing before eKYC face-matching. Used as a building block across Arana identity flows.",
    icon: Eye,
    category: "Biometrics",
    tech: ["Flutter", "ML Kit", "Camera", "TFLite"],
    gradient: "from-teal-400 to-cyan-500",
    shadowColor: "rgba(20, 184, 166, 0.3)",
    company: "Arana Security",
    images: livenessImages,
    details: projectDetails.liveness,
  },
  {
    id: 8,
    name: "BioWave 2FA",
    description:
      "IDEMIA ID Screen client for two-factor verification: MIFARE DESFire EV1/EV2 card tap plus match-on-device fingerprint. Templates stay in memory only — never written to disk or sent to a server.",
    icon: Nfc,
    category: "Hardware",
    tech: ["Kotlin", "Compose", "DESFire", "MorphoSmart"],
    gradient: "from-orange-400 to-red-500",
    shadowColor: "rgba(249, 115, 22, 0.3)",
    company: "Arana Security",
    images: biowave2faImages,
    details: projectDetails.biowave2fa,
  },
  {
    id: 20,
    name: "DevEval AI",
    description:
      "AI dashboard for engineering managers: role-specific competency matrices, Gemini-powered gap analysis, and weekly observation logs that adjust scores and mentorship plans. Recharts growth curves plus Firebase Auth and Firestore for team history.",
    icon: BrainCircuit,
    category: "Enterprise",
    tech: ["React", "Firebase", "Gemini", "Recharts"],
    gradient: "from-violet-400 to-indigo-500",
    shadowColor: "rgba(139, 92, 246, 0.35)",
    company: "Freelance",
    images: devevalImages,
    details: projectDetails.deveval,
  },
  {
    id: 19,
    name: "AppPulse",
    description:
      "Engineering and release command center for managers, product owners, and tech leads. Orchestrates software lifecycles across web, mobile, backend, and infrastructure — timeline-based releases, time-to-production analytics, and cross-functional team mapping in a vanilla JS SPA with Chart.js and dark/light mode.",
    icon: LayoutDashboard,
    category: "Enterprise",
    tech: ["JavaScript", "Tailwind CSS", "Chart.js"],
    gradient: "from-emerald-400 to-cyan-500",
    shadowColor: "rgba(16, 185, 129, 0.35)",
    company: "Freelance",
    images: apppulseImages,
    details: projectDetails.apppulse,
  },
  {
    id: 4,
    name: "Green Zone",
    description:
      "Android app for high-precision fingerprint acquisition on IDEMIA Morpho / ID Screen 60 devices. Slap 4-4-2 and single-finger capture via MorphoKit, Jetpack Compose UI, Room, DataStore, and Retrofit sync.",
    icon: Fingerprint,
    category: "Biometrics",
    tech: ["Kotlin", "Jetpack Compose", "MorphoKit", "Room"],
    gradient: "from-green-400 to-emerald-500",
    shadowColor: "rgba(34, 197, 94, 0.3)",
    company: "Arana Security",
    images: greenzoneImages,
    details: projectDetails.greenzone,
  },
  {
    id: 14,
    name: "Alnoor Transport",
    description:
      "Suite for Alnoor University College: student bus booking and balance, tablet validators, POS card withdrawal with printed receipts, and ATM/top-up hardware flows.",
    icon: Bus,
    category: "Enterprise",
    tech: ["Flutter", "NFC", "POS", "Maps"],
    gradient: "from-amber-400 to-yellow-500",
    shadowColor: "rgba(245, 158, 11, 0.3)",
    company: "Arana Security",
    images: alnoorImages,
    details: projectDetails.alnoor,
  },
  {
    id: 15,
    name: "Al Reem Pay",
    description:
      "Flutter finance app: bilingual Arabic/English, phone or fingerprint login, multiple cards, transfers, notifications, and transaction history.",
    icon: Wallet,
    category: "Enterprise",
    tech: ["Flutter", "Redux", "Fingerprint", "i18n"],
    gradient: "from-indigo-400 to-violet-500",
    shadowColor: "rgba(99, 102, 241, 0.3)",
    company: "Arana Security",
    images: alreemImages,
    details: projectDetails.alreem,
  },
  {
    id: 16,
    name: "Arana Identity",
    description:
      "Barcode-scanning identity app for lawyer records — scan, display bilingual profile data, and keep registration and expiry details aligned with backend releases.",
    icon: IdCard,
    category: "Identity",
    tech: ["Flutter", "Bloc", "Barcode", "i18n"],
    gradient: "from-slate-400 to-cyan-500",
    shadowColor: "rgba(100, 116, 139, 0.3)",
    company: "Arana Security",
    images: aranaIdentityImages,
    details: projectDetails.identity,
  },
  {
    id: 17,
    name: "ForAll",
    description:
      "Four production apps (ForAll, Vendor, Sales, Driver) for shopping, ticketing, and healthcare. Dynamic UI from backend APIs, maps, tracking, and live chat over WebSocket (text, images, files, voice).",
    icon: ShoppingBag,
    category: "Enterprise",
    tech: ["Flutter", "WebSocket", "Firebase", "Maps"],
    gradient: "from-pink-400 to-rose-500",
    shadowColor: "rgba(244, 63, 94, 0.3)",
    company: "ForAll.FA",
    images: forallImages,
    details: projectDetails.forall,
    links: {
      playStore:
        "https://play.google.com/store/apps/dev?id=7695761114305611998",
      appStore: "https://apps.apple.com/us/app/forall-vendor/id1602962621",
    },
  },
  {
    id: 5,
    name: "RapidID",
    description:
      "Field identification for officers: FBI PIV and FAP 30 fingerprint matching plus Lite RapidID OCR for passports and national IDs — MRZ recognition, image pre-processing, and automated data entry. Rugged portable capture with secure parsing for cross-platform integration.",
    icon: ScanLine,
    category: "Biometrics",
    tech: ["Android", "Kotlin", "FBI PIV", "OCR", "ONNX"],
    gradient: "from-sky-400 to-blue-500",
    shadowColor: "rgba(14, 165, 233, 0.3)",
    company: "Arana Security",
    images: rapididImages,
    details: projectDetails.rapidid,
  },
];

export const categories = ['All', 'Biometrics', 'Hardware', 'Identity', 'Enterprise']

export const stats = [
  { label: 'Apps Delivered', value: '15+' },
  { label: 'Years Experience', value: '6+' },
  { label: 'Technologies', value: '25+' },
  { label: 'Clients Served', value: '10+' },
]

export const skills = [
  { name: 'Flutter & Dart', level: 96 },
  { name: 'Android (Kotlin / Java / Compose)', level: 90 },
  { name: 'BLE & NFC (MIFARE / DESFire)', level: 92 },
  { name: 'Face Recognition, OCR & eKYC', level: 90 },
  { name: 'Clean Architecture (MVVM)', level: 95 },
  { name: 'State Management (Bloc / GetX / Provider)', level: 93 },
  { name: 'Firebase, Dio & WebSocket', level: 90 },
  { name: 'CI/CD, Shorebird & Mason', level: 86 },
  { name: 'IDEMIA / Morpho Device SDKs', level: 92 },
  { name: 'Team Leadership & Agile', level: 90 },
]

export const experience = [
  {
    company: 'Arana Security',
    role: 'Mobile Developer & Technical Lead',
    period: 'Sep 2023 – Present',
    location: 'Egypt',
    current: true,
    highlights: [
      'Led secure access and identity systems on BLE, NFC (MIFARE/DESFire), biometric tablets, POS, and attendance hardware',
      'Built eKYC with NFC document reading, face-matching, liveness, and OCR on AI-trained datasets',
      'Shipped native Kotlin and Flutter apps for IDEMIA ID Screen and Morpho devices using custom SDKs',
      'Coordinated firmware integration and SDK validation with hardware vendors',
    ],
  },
  {
    company: 'ForAll.FA',
    role: 'Mobile Developer',
    period: 'May 2021 – Jan 2022',
    location: 'Egypt',
    current: false,
    highlights: [
      'Architected 4 production apps (ForAll, Vendor, Sales, Driver) for shopping, ticketing, and healthcare',
      'Implemented dynamic UI modules configured from backend APIs',
      'Integrated maps, tracking, and live chat via WebSocket (text, images, files, voice)',
      'Built reusable packages: api_helper and multi_selection',
    ],
  },
  {
    company: 'Erad United',
    role: 'Mobile Developer',
    period: 'Oct 2020 – Apr 2021',
    location: 'Egypt',
    current: false,
    highlights: [
      'Developed and launched Maa Allah, Ma3een, Sanai3i, The Business Square, and Harvest',
      'Integrated Firebase, Google Maps, and Provider for production performance',
    ],
  },
  {
    company: 'Freelancing',
    role: 'Mobile Developer',
    period: 'Sep 2018 – Present',
    location: 'Remote',
    current: true,
    highlights: [
      'Built DevEval AI, a Gemini-powered engineering matrix that turns skill ratings and weekly logs into scores, gap analysis, and mentorship plans',
      'Built AppPulse, an engineering release command center: lifecycle analytics, stage tracking, and cross-functional resource mapping',
    ],
  },
]
