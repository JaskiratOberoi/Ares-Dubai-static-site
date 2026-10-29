export const categories = [
  { id: 'immunoassay', label: 'Immunoassay' },
  { id: 'chemistry', label: 'Clinical chemistry' },
  { id: 'hematology', label: 'Hematology' },
  { id: 'hplc', label: 'HPLC HbA1c' },
]

export const products = [
  {
    id: 'magicl-6000i',
    title: 'MAGICL 6000i',
    subtitle: 'Chemiluminescence immunoassay analyzer',
    category: 'immunoassay',
    image: '/assets/images/MAGICL-6000i.jpg',
    imageWidth: 800,
    imageHeight: 800,
    imageScale: 1.55,
    measure: { value: '200', unit: 'tests an hour' },
    summary:
      'Compact benchtop chemiluminescence analyzer with throughput up to 200 tests an hour and a dual-tray consumable design for continuous operation.',
    description:
      'The MAGICL 6000i brings high-throughput immunoassay to the benchtop. A 10-minute first result and continuous dual-tray consumable loading keep emergency and routine workloads moving without interruption, while RFID reagent identification removes manual bookkeeping from the workflow.',
    specs: [
      { label: 'Throughput', value: 'Up to 200 tests/hour' },
      { label: 'First result', value: '10 minutes' },
      { label: 'Reagent positions', value: '24, RFID-identified' },
      { label: 'Reaction cups', value: '2 × 140, dual tray' },
      { label: 'Sample types', value: 'Serum, plasma, urine, fingertip blood' },
    ],
    features: [
      'Continuous consumable loading for uninterrupted runs',
      'Compact benchtop footprint',
      'Suited to laboratories, clinics, emergency, ICU and ward settings',
    ],
  },
  {
    id: 'chemistry',
    title: 'Dry Chemistry Systems',
    subtitle: 'Dry-slide clinical chemistry analyzers',
    category: 'chemistry',
    image: '/assets/images/Dry-Chemistry-HC6000.jpg',
    imageWidth: 624,
    imageHeight: 588,
    measure: null,
    summary:
      'Dry chemistry analyzers and reagent strips designed for rapid, accurate results in compact and high-throughput settings.',
    description:
      'ARES Labs dry chemistry systems use dry-slide technology to deliver precise clinical chemistry results with minimal sample volume. Engineered for efficiency, they offer fast turnaround and reliable performance across a comprehensive test menu.',
    specs: [],
    features: [
      'Dry-slide technology, no liquid reagent handling',
      'Minimal sample volume per test',
      'Fast turnaround across a comprehensive menu',
      'Scales from compact clinics to high-throughput laboratories',
    ],
  },
  {
    id: 'hematology',
    title: 'Hematology Analyzers',
    subtitle: 'CBC platforms for demanding panels',
    category: 'hematology',
    image: '/assets/images/EDAND.png',
    imageWidth: 832,
    imageHeight: 1184,
    imageScale: 1.5,
    measure: null,
    summary:
      'Regulatory-cleared IVD tests that deliver confident results across the most demanding haematology panels.',
    description:
      'Our haematology portfolio helps teams monitor disease progression and therapy effectiveness with clarity. From anaemia to leukaemia and sepsis, the platform provides rapid, reliable insight for every stage of patient management.',
    specs: [],
    features: [
      'Regulatory-cleared IVD assays',
      'Coverage from anaemia to leukaemia and sepsis monitoring',
      'Rapid results for every stage of patient management',
    ],
  },
  {
    id: 'hplc',
    title: 'ZEUS D20',
    subtitle: 'HPLC HbA1c system',
    category: 'hplc',
    image: '/assets/images/HPLC-ZEUS-D20.png',
    imageWidth: 896,
    imageHeight: 1200,
    imageScale: 1,
    measure: null,
    summary:
      'High-performance liquid chromatography that eliminates common HbA1c variant interferences.',
    description:
      'Our automated HbA1c systems use the highly specific HPLC method to deliver fast, interference-free results. Diabetes programmes get dependable analytics that stay resilient to common haemoglobin variants.',
    specs: [],
    features: [
      'Gold-standard HPLC methodology',
      'Resilient to common haemoglobin variants',
      'Automated workflow for diabetes programmes',
    ],
  },
]

export const categoryLabel = (id) =>
  categories.find((c) => c.id === id)?.label ?? id
