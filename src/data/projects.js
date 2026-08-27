import {
  Activity,
  Box,
  ShieldCheck,
  KeyRound,
  Bus,
  CreditCard,
  Eye,
  ClipboardCheck,
  ShoppingBag,
  Fingerprint,
  ScanLine,
  FileText,
  Nfc,
  Wallet,
  IdCard,
  Files,
  Users,
  PawPrint,
} from 'lucide-react'

export const cvPath = `${import.meta.env.BASE_URL}cv.pdf`

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
  },
  {
    id: 10,
    name: "BlueAccess",
    description:
      "BLE facility access control: user app for nearby gates plus an admin app to manage doors, rules, and time zones. Built with Flutter and flutter_blue_plus for real-time board communication.",
    icon: KeyRound,
    category: "Hardware",
    tech: ["Flutter", "BLE", "Bloc", "Dio"],
    gradient: "from-blue-400 to-indigo-500",
    shadowColor: "rgba(59, 130, 246, 0.3)",
    company: "Arana Security",
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
    links: aranaStores,
  },
  {
    id: 5,
    name: "RapidID",
    description:
      "On-the-spot fingerprint identification for field officers. FBI PIV and FAP 30 certified sensor with advanced TFT scanning so identities can be verified in seconds in rugged, portable deployments.",
    icon: ScanLine,
    category: "Biometrics",
    tech: ["Android", "Kotlin", "FBI PIV", "FAP 30"],
    gradient: "from-sky-400 to-blue-500",
    shadowColor: "rgba(14, 165, 233, 0.3)",
    company: "Arana Security",
  },
  {
    id: 6,
    name: "Lite RapidID",
    description:
      "High-speed OCR for identity documents: MRZ recognition, passports and national IDs, image pre-processing, and automated data entry with secure parsing for cross-platform integration.",
    icon: FileText,
    category: "Identity",
    tech: ["OCR", "MRZ", "ONNX", "Android"],
    gradient: "from-lime-400 to-emerald-500",
    shadowColor: "rgba(132, 204, 22, 0.3)",
    company: "Arana Security",
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
  },
  {
    id: 9,
    name: "SmartEncode",
    description:
      "Card issuance tool that reads NFC ID cards, verifies fingerprints stored on chip, and encodes MIFARE data synced from SQL, MySQL, or Oracle — without writing custom SDK glue for each customer.",
    icon: CreditCard,
    category: "Hardware",
    tech: ["Android", "NFC", "MIFARE", "SQL"],
    gradient: "from-amber-400 to-orange-500",
    shadowColor: "rgba(245, 158, 11, 0.3)",
    company: "Arana Security",
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
  },

  {
    id: 12,
    name: "Dynamic Card Builder",
    description:
      "Configurable card-issuance platform: dynamic data-entry forms, file/database verification, multi-step authorization, audit trail, and secure printing across contact, contactless, and dual-interface cards.",
    icon: Files,
    category: "Identity",
    tech: ["Flutter", "Bloc", "PDF", "REST API"],
    gradient: "from-fuchsia-400 to-pink-500",
    shadowColor: "rgba(217, 70, 239, 0.3)",
    company: "Arana Security",
  },
  {
    id: 13,
    name: "Iraq Enroll",
    description:
      "Jetpack Compose enrollment client for slap fingerprint capture (thumbs and index fingers), local user records, and dashboard workflows on Arana biometric tablets.",
    icon: Users,
    category: "Biometrics",
    tech: ["Kotlin", "Jetpack Compose", "Morpho", "Room"],
    gradient: "from-rose-400 to-pink-500",
    shadowColor: "rgba(244, 63, 94, 0.3)",
    company: "Arana Security",
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
    links: {
      playStore:
        "https://play.google.com/store/apps/dev?id=7695761114305611998",
      appStore: "https://apps.apple.com/us/app/forall-vendor/id1602962621",
    },
  },
  {
    id: 18,
    name: "Smart Breeder",
    description:
      "Livestock management app covering barns, feeds, medical tracking, and statistics — clean architecture with a polished, animated UX for farm operators.",
    icon: PawPrint,
    category: "Enterprise",
    tech: ["Flutter", "Dart", "Clean Architecture"],
    gradient: "from-green-400 to-lime-500",
    shadowColor: "rgba(74, 222, 128, 0.3)",
    company: "Freelance",
  },
];

export const categories = ['All', 'Biometrics', 'Hardware', 'Identity', 'Enterprise']

export const stats = [
  { label: 'Apps Delivered', value: '18+' },
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
      'Architected Smart Breeder for livestock management: barns, feeds, medical tracking, and statistics',
      'Delivered smooth UX with animations and clean architecture',
    ],
  },
]
