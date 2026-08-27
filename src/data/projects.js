import {
  Activity,
  Box,
  Leaf,
  ShieldCheck,
  KeyRound,
  Bus,
  CreditCard,
  Eye,
  ScanFace,
  Fuel,
  Flame,
  ShoppingBag,
} from 'lucide-react'

export const projects = [
  {
    id: 1,
    name: 'Arana eKYC',
    description:
      'AI-powered electronic Know Your Customer verification system with face-matching, OCR using trained datasets, and Morpho device SDK integration for instant identity validation and fraud detection.',
    icon: ShieldCheck,
    category: 'Biometrics',
    tech: ['Flutter', 'Dart', 'ML/AI', 'Morpho SDK', 'OCR'],
    gradient: 'from-violet-400 to-purple-500',
    shadowColor: 'rgba(139, 92, 246, 0.3)',
    company: 'Arana Security',
    links: {
      playStore:
        'https://play.google.com/store/apps/developer?id=Arana+Security',
      appStore:
        'https://apps.apple.com/us/developer/aranasecurity/id1574371832?see-all=i-phonei-pad-apps',
    },
  },
  {
    id: 2,
    name: 'Face Matching',
    description:
      'Real-time facial recognition and matching engine with AI-trained datasets, anti-spoofing capabilities, and integration with ID Screen & Morpho biometric devices.',
    icon: ScanFace,
    category: 'Biometrics',
    tech: ['Flutter', 'Dart', 'TensorFlow', 'Custom SDKs'],
    gradient: 'from-blue-400 to-violet-500',
    shadowColor: 'rgba(99, 102, 241, 0.3)',
    company: 'Arana Security',
  },
  {
    id: 3,
    name: 'Liveness Check',
    description:
      'Advanced biometric liveness detection preventing spoofing attacks via 3D depth analysis, motion detection, and on-premise authentication for high-security environments.',
    icon: Eye,
    category: 'Biometrics',
    tech: ['Flutter', 'Dart', 'CameraX', 'AI Models'],
    gradient: 'from-teal-400 to-cyan-500',
    shadowColor: 'rgba(20, 184, 166, 0.3)',
    company: 'Arana Security',
  },
  {
    id: 4,
    name: 'BioWave',
    description:
      'Biometric authentication platform leveraging wave-pattern recognition for seamless and secure user verification across enterprise and government deployments.',
    icon: Activity,
    category: 'Biometrics',
    tech: ['Flutter', 'Dart', 'Biometric API', 'BLE'],
    gradient: 'from-cyan-400 to-blue-500',
    shadowColor: 'rgba(6, 182, 212, 0.3)',
    company: 'Arana Security',
  },
  {
    id: 5,
    name: 'BioBox',
    description:
      'Secure biometric data management and encrypted storage solution with fingerprint tablet integration, real-time sync, and military-grade security protocols.',
    icon: Box,
    category: 'Biometrics',
    tech: ['Flutter', 'Dart', 'Encryption', 'Fingerprint SDK'],
    gradient: 'from-emerald-400 to-teal-500',
    shadowColor: 'rgba(16, 185, 129, 0.3)',
    company: 'Arana Security',
  },
  {
    id: 6,
    name: 'BluAccess',
    description:
      'Smart facility access control system with BLE and NFC (MIFARE/DESFire) integration, biometric tablet authentication, and real-time attendance tracking.',
    icon: KeyRound,
    category: 'Hardware',
    tech: ['Flutter', 'Dart', 'BLE', 'NFC', 'MIFARE'],
    gradient: 'from-blue-400 to-indigo-500',
    shadowColor: 'rgba(59, 130, 246, 0.3)',
    company: 'Arana Security',
  },
  {
    id: 7,
    name: 'Disfire',
    description:
      'DESFire NFC card management and secure authentication suite for contactless access, identity verification, and encrypted data exchange with DESFire EV1/EV2 cards.',
    icon: Flame,
    category: 'Hardware',
    tech: ['Flutter', 'Dart', 'NFC', 'DESFire', 'Encryption'],
    gradient: 'from-orange-400 to-red-500',
    shadowColor: 'rgba(249, 115, 22, 0.3)',
    company: 'Arana Security',
  },
  {
    id: 8,
    name: 'POS App',
    description:
      'Enterprise point-of-sale solution with hardware POS device integration, multi-payment gateway support, inventory management, and sales analytics.',
    icon: CreditCard,
    category: 'Hardware',
    tech: ['Flutter', 'Dart', 'POS SDK', 'Payment API'],
    gradient: 'from-fuchsia-400 to-pink-500',
    shadowColor: 'rgba(217, 70, 239, 0.3)',
    company: 'Arana Security',
  },
  {
    id: 9,
    name: 'ADNOC',
    description:
      'Enterprise mobile solution for Abu Dhabi National Oil Company — streamlining field operations, safety compliance, and workforce management at scale.',
    icon: Fuel,
    category: 'Enterprise',
    tech: ['Flutter', 'Dart', 'REST API', 'Firebase'],
    gradient: 'from-red-400 to-orange-500',
    shadowColor: 'rgba(239, 68, 68, 0.3)',
  },
  {
    id: 10,
    name: 'GreenZone',
    description:
      'Environmental monitoring and sustainability tracking application with real-time data visualization, geolocation services, and impact analytics dashboards.',
    icon: Leaf,
    category: 'Enterprise',
    tech: ['Flutter', 'Dart', 'Google Maps', 'Charts'],
    gradient: 'from-green-400 to-emerald-500',
    shadowColor: 'rgba(34, 197, 94, 0.3)',
  },
  {
    id: 11,
    name: 'Bus Elnoor',
    description:
      'Intelligent transportation and bus fleet management platform with real-time GPS tracking, route optimization, polylines, and passenger analytics.',
    icon: Bus,
    category: 'Enterprise',
    tech: ['Flutter', 'Dart', 'Google Maps', 'Tracking'],
    gradient: 'from-amber-400 to-orange-500',
    shadowColor: 'rgba(245, 158, 11, 0.3)',
  },
  {
    id: 12,
    name: 'ForAll',
    description:
      'Suite of 4 production apps (ForAll, Vendor, Sales, Driver) for shopping, ticketing, and healthcare — featuring dynamic UI rendering, live chat via WebSocket, and maps integration.',
    icon: ShoppingBag,
    category: 'Enterprise',
    tech: ['Flutter', 'Dart', 'WebSocket', 'Firebase'],
    gradient: 'from-pink-400 to-rose-500',
    shadowColor: 'rgba(244, 63, 94, 0.3)',
    company: 'ForAll.FA',
    links: {
      playStore:
        'https://play.google.com/store/apps/dev?id=7695761114305611998',
      appStore:
        'https://apps.apple.com/us/app/forall-vendor/id1602962621',
    },
  },
]

export const categories = ['All', 'Biometrics', 'Hardware', 'Enterprise']

export const stats = [
  { label: 'Apps Delivered', value: '15+' },
  { label: 'Years Experience', value: '6+' },
  { label: 'Technologies', value: '25+' },
  { label: 'Clients Served', value: '10+' },
]

export const skills = [
  { name: 'Flutter & Dart', level: 96 },
  { name: 'Android (Kotlin / Java)', level: 88 },
  { name: 'BLE & NFC (MIFARE/DESFire)', level: 92 },
  { name: 'Face Recognition & OCR', level: 90 },
  { name: 'Clean Architecture (MVVM)', level: 95 },
  { name: 'State Management (Bloc/GetX)', level: 93 },
  { name: 'Firebase & Cloud Services', level: 88 },
  { name: 'CI/CD & DevOps', level: 85 },
  { name: 'REST APIs & WebSocket', level: 92 },
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
      'Led development of secure access and identity systems integrated with BLE, NFC, biometric tablets, POS, and attendance hardware',
      'Built eKYC modules with face-matching and OCR using AI-trained datasets',
      'Delivered solutions for ID Screen & Morpho devices using custom SDKs',
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
      'Implemented dynamic UI rendering modules configured from backend APIs',
      'Integrated maps, tracking, and live chat via WebSocket',
      'Built reusable packages: api_helper, multi_selection',
    ],
  },
  {
    company: 'Erad United',
    role: 'Mobile Developer',
    period: 'Oct 2020 – Apr 2021',
    location: 'Egypt',
    current: false,
    highlights: [
      'Developed and launched Maa Allah, Ma3een, Sanai3i, The Business Square, and Harvest apps',
      'Integrated Firebase, Google Maps, and Provider state management',
    ],
  },
  {
    company: 'Freelancing',
    role: 'Mobile Developer',
    period: 'Sep 2018 – Present',
    location: 'Remote',
    current: true,
    highlights: [
      'Architected Smart Breeder app for livestock management with barns, feeds, medical tracking',
      'Delivered smooth UX with beautiful animations and clean architecture',
    ],
  },
]
