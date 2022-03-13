export const INVENTORY_DATA = [
  {
    imageurl: 'https://i.insider.com/5f11c471f0f419303616a1fe?width=1136&format=jpeg',
    name: 'Potato Chips',
    shelfQuantity: 56,
    stockQuantity: 95,
    uuid: 1
  },
  {
    imageurl: 'https://m.media-amazon.com/images/I/71+wTW7U0YL._SX522_PIbundle-3,TopRight,0,0_AA522SH20_.jpg',
    name: 'Cadbury Chocolates',
    shelfQuantity: 30,
    stockQuantity: 84,
    uuid: 2
  },
  {
    imageurl: 'https://www.bigbasket.com/media/uploads/p/xxl/266160_17-maggi-masala-instant-noodles-vegetarian.jpg',
    name: 'Maggie Noodles',
    shelfQuantity: 62,
    stockQuantity: 88,
    uuid: 3
  },
  {
    imageurl: 'https://5.imimg.com/data5/SELLER/Default/2020/10/FP/GL/OA/521830/soft-drinks-500x500.jpg',
    name: 'Cold drinks',
    shelfQuantity: 22,
    stockQuantity: 86,
    uuid: 4
  },
  {
    imageurl: 'https://5.imimg.com/data5/SELLER/Default/2020/9/EK/SI/MI/111137174/dry-fruits-500x500.jpg',
    name: 'Dry fruits',
    shelfQuantity: 36,
    stockQuantity: 73,
    uuid: 5
  }
];

export const SHELF_ANALYSIS_DATA = [
  {
    id: 0,
    name: `Shelf number: 1`,
    cover: 'https://firebasestorage.googleapis.com/v0/b/loc-4-dc332.appspot.com/o/WhatsApp%20Image%202022-03-13%20at%209.44.03%20AM.jpeg?alt=media&token=da34508d-ea62-4fff-9272-46a3aff93c80',
    items: ['kurkure: 1 packet || 33%', 'lays: 2 packets || 66%', 'Total: 3 packets']
  },
  {
    id: 1,
    name: `Shelf number: 2`,
    cover:
      'https://firebasestorage.googleapis.com/v0/b/loc-4-dc332.appspot.com/o/WhatsApp%20Image%202022-03-13%20at%209.44.02%20AM.jpeg?alt=media&token=ef477ccf-5dc9-4ebd-84f7-0b56ee8ae5bd',
    items: ['dairy milk: 2 || 40%', 'oreo: 2 packets || 40%', 'gems: 1 packet || 20%', 'total: 5']
  },
  {
    id: 2,
    name: `Shelf number: 3`,
    cover: 'https://firebasestorage.googleapis.com/v0/b/loc-4-dc332.appspot.com/o/WhatsApp%20Image%202022-03-13%20at%209.44.01%20AM.jpeg?alt=media&token=81cec08b-35b4-4f2f-b81c-005888c5f446',
    items: ['kurkure: 3 packets || 43%', 'lays: 4 packets || 57%', 'total: 7']
  },
  {
    id: 3,
    name: `Shelf number: 4`,
    cover: 'https://firebasestorage.googleapis.com/v0/b/loc-4-dc332.appspot.com/o/WhatsApp%20Image%202022-03-13%20at%209.44.01%20AM%20(1).jpeg?alt=media&token=7bd537ec-3ded-4fa6-a15d-cbdef7d56c65',
    items: ['maggie: 4 packets || 100%', 'total: 4']
  }
];
export const PURCHASED_DATA = [
  {
    imgUrl: 'https://www.bigbasket.com/media/uploads/p/xxl/266160_17-maggi-masala-instant-noodles-vegetarian.jpg',
    name: 'Maggie Noodles',
    quantity: 54,
    paid: true,
    trackOrder: 5623,
    invoice: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    uuid: 1
  },
  {
    imgUrl: 'https://m.media-amazon.com/images/I/71+wTW7U0YL._SX522_PIbundle-3,TopRight,0,0_AA522SH20_.jpg',
    name: 'Cadbury chocolates',
    quantity: 30,
    paid: false,
    trackOrder: 5645,
    invoice: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    uuid: 2
  },
  {
    imgUrl: 'https://5.imimg.com/data5/SELLER/Default/2020/10/FP/GL/OA/521830/soft-drinks-500x500.jpg',
    name: 'Cold Drinks',
    quantity: 65,
    paid: false,
    trackOrder: 6564,
    invoice: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    uuid: 3
  },
  {
    imgUrl: 'https://i.insider.com/5f11c471f0f419303616a1fe?width=1136&format=jpeg',
    name: 'Potato Chips',
    quantity: 81,
    paid: true,
    trackOrder: 5212,
    invoice: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    uuid: 4
  }
];

export const COMPANY_DATA = {
  'bmw-group': {
    TheSMCCode: 'bmw-group',
    companyName: 'BMW Group',
    publicIdentifier: 'ETR:BMW',
    industry: 'Automobiles',
    country: 'Germany',
    score: 6,
    risk: 'Medium',
    'e-component-score': 7,
    's-component-score': 5,
    'g-component-score': 5,
    'e-component-risk': 'Medium',
    's-component-risk': 'Medium',
    'g-component-risk': 'Medium',
    'resource-use-axis': 8,
    'emissions-axis': 5,
    'environment-transformation-axis': 8,
    'human-rights-axis': 6,
    'community-welfare-axis': 5,
    'reposible-product-axis': 4,
    'managment-score-axis': 3,
    'shareholder-rights-axis': 5,
    'CSR-strategy-axis': 5,
    'auditor-tenure': 5,
    'country-avg': 6,
    'country-risk': 'Medium',
    'industry-avg': 5,
    'industry-risk': 'Medium',
    companyDocuments: [
      {
        ETag: '"c3e8b40e30b9fddf88c54ca2f7d64740"',
        Bucket: 'shourya-TheSMC-backend-sto-uploadsbucketc4b27cc7-15y904f66f2g8',
        key: 'Sat Jan 29 2022 02:20:17 GMT+0530 (India Standard Time)_Grade 9 second formative schedule and portion_edited.pdf',
        Key: 'Sat Jan 29 2022 02:20:17 GMT+0530 (India Standard Time)_Grade 9 second formative schedule and portion_edited.pdf',
        Location:
          'https://shourya-TheSMC-backend-sto-uploadsbucketc4b27cc7-15y904f66f2g8.s3.eu-central-1.amazonaws.com/Sat%20Jan%2029%202022%2002%3A20%3A17%20GMT%2B0530%20%28India%20Standard%20Time%29_Grade%209%20second%20formative%20schedule%20and%20portion_edited.pdf'
      },
      {
        ETag: '"0f21591557079ddde75ee1b9597c7b5b"',
        Bucket: 'shourya-TheSMC-backend-sto-uploadsbucketc4b27cc7-15y904f66f2g8',
        key: 'Sat Jan 29 2022 02:20:18 GMT+0530 (India Standard Time)_Worksheet_Understanding Child Development.pdf',
        Key: 'Sat Jan 29 2022 02:20:18 GMT+0530 (India Standard Time)_Worksheet_Understanding Child Development.pdf',
        Location:
          'https://shourya-TheSMC-backend-sto-uploadsbucketc4b27cc7-15y904f66f2g8.s3.eu-central-1.amazonaws.com/Sat%20Jan%2029%202022%2002%3A20%3A18%20GMT%2B0530%20%28India%20Standard%20Time%29_Worksheet_Understanding%20Child%20Development.pdf'
      }
    ]
  },
  'daimler-ag': {
    TheSMCCode: 'daimler-ag',
    companyName: 'Daimler AG',
    publicIdentifier: 'ETR:DAI',
    industry: 'Automobiles',
    country: 'Germany',
    score: 6,
    risk: 'Medium',
    'e-component-score': 7,
    's-component-score': 5,
    'g-component-score': 8,
    'e-component-risk': 'Medium',
    's-component-risk': 'Medium',
    'g-component-risk': 'Low',
    'resource-use-axis': 6,
    'emissions-axis': 8,
    'environment-transformation-axis': 6,
    'human-rights-axis': 3,
    'community-welfare-axis': 10,
    'reposible-product-axis': 1,
    'managment-score-axis': 8,
    'shareholder-rights-axis': 7,
    'CSR-strategy-axis': 7,
    'auditor-tenure': 9,
    'country-avg': 6,
    'country-risk': 'Medium',
    'industry-avg': 5,
    'industry-risk': 'Medium'
  },
  'volkswagen-ag': {
    TheSMCCode: 'volkswagen-ag',
    companyName: 'Volkswagen AG',
    publicIdentifier: 'ETR:VOW3',
    industry: 'Automobiles',
    country: 'Germany',
    score: 4,
    risk: 'Medium',
    'e-component-score': 6,
    's-component-score': 3,
    'g-component-score': 5,
    'e-component-risk': 'Medium',
    's-component-risk': 'High',
    'g-component-risk': 'Medium',
    'resource-use-axis': 7,
    'emissions-axis': 4,
    'environment-transformation-axis': 6,
    'human-rights-axis': 3,
    'community-welfare-axis': 6,
    'reposible-product-axis': -1,
    'managment-score-axis': 6,
    'shareholder-rights-axis': 5,
    'CSR-strategy-axis': 4,
    'auditor-tenure': 4,
    'country-avg': 6,
    'country-risk': 'Medium',
    'industry-avg': 5,
    'industry-risk': 'Medium',
    companyDocuments: [
      {
        ETag: '"c3e8b40e30b9fddf88c54ca2f7d64740"',
        Bucket: 'shourya-TheSMC-backend-sto-uploadsbucketc4b27cc7-15y904f66f2g8',
        key: 'Sat Jan 29 2022 02:20:17 GMT+0530 (India Standard Time)_Grade 9 second formative schedule and portion_edited.pdf',
        Key: 'Sat Jan 29 2022 02:20:17 GMT+0530 (India Standard Time)_Grade 9 second formative schedule and portion_edited.pdf',
        Location:
          'https://shourya-TheSMC-backend-sto-uploadsbucketc4b27cc7-15y904f66f2g8.s3.eu-central-1.amazonaws.com/Sat%20Jan%2029%202022%2002%3A20%3A17%20GMT%2B0530%20%28India%20Standard%20Time%29_Grade%209%20second%20formative%20schedule%20and%20portion_edited.pdf'
      },
      {
        ETag: '"0f21591557079ddde75ee1b9597c7b5b"',
        Bucket: 'shourya-TheSMC-backend-sto-uploadsbucketc4b27cc7-15y904f66f2g8',
        key: 'Sat Jan 29 2022 02:20:18 GMT+0530 (India Standard Time)_Worksheet_Understanding Child Development.pdf',
        Key: 'Sat Jan 29 2022 02:20:18 GMT+0530 (India Standard Time)_Worksheet_Understanding Child Development.pdf',
        Location:
          'https://shourya-TheSMC-backend-sto-uploadsbucketc4b27cc7-15y904f66f2g8.s3.eu-central-1.amazonaws.com/Sat%20Jan%2029%202022%2002%3A20%3A18%20GMT%2B0530%20%28India%20Standard%20Time%29_Worksheet_Understanding%20Child%20Development.pdf'
      }
    ]
  },
  'aston-martin-lagonda-global-holdings-plc': {
    TheSMCCode: 'aston-martin-lagonda-global-holdings-plc',
    companyName: 'Aston Martin Lagonda Global Holdings Plc',
    publicIdentifier: 'LON:AML',
    industry: 'Automobiles',
    country: 'United Kingdom',
    score: 5,
    risk: 'Medium',
    'e-component-score': 3,
    's-component-score': 5,
    'g-component-score': 5,
    'e-component-risk': 'High',
    's-component-risk': 'Medium',
    'g-component-risk': 'Medium',
    'resource-use-axis': 2,
    'emissions-axis': 4,
    'environment-transformation-axis': 4,
    'human-rights-axis': 6,
    'community-welfare-axis': 3,
    'reposible-product-axis': 6,
    'managment-score-axis': 5,
    'shareholder-rights-axis': 4,
    'CSR-strategy-axis': 5,
    'auditor-tenure': 6,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 5,
    'industry-risk': 'Medium'
  },
  'bp-p-l-c': {
    TheSMCCode: 'bp-p-l-c',
    companyName: 'BP p.l.c.',
    publicIdentifier: 'LON:BP',
    industry: 'Oil & Gas Producers',
    country: 'United Kingdom',
    score: 4,
    risk: 'Medium',
    'e-component-score': 5,
    's-component-score': 3,
    'g-component-score': 2,
    'e-component-risk': 'Medium',
    's-component-risk': 'High',
    'g-component-risk': 'High',
    'resource-use-axis': 5,
    'emissions-axis': 6,
    'environment-transformation-axis': 4,
    'human-rights-axis': 3,
    'community-welfare-axis': 4,
    'reposible-product-axis': 2,
    'managment-score-axis': 2,
    'shareholder-rights-axis': 3,
    'CSR-strategy-axis': 3,
    'auditor-tenure': 2,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 3,
    'industry-risk': 'High'
  },
  'cairn-energy-plc': {
    TheSMCCode: 'cairn-energy-plc',
    companyName: 'Cairn Energy PLC',
    publicIdentifier: 'LON:CNE',
    industry: 'Oil & Gas Producers',
    country: 'United Kingdom',
    score: 4,
    risk: 'Medium',
    'e-component-score': 5,
    's-component-score': 2,
    'g-component-score': 4,
    'e-component-risk': 'Medium',
    's-component-risk': 'High',
    'g-component-risk': 'Medium',
    'resource-use-axis': 5,
    'emissions-axis': 4,
    'environment-transformation-axis': 6,
    'human-rights-axis': 3,
    'community-welfare-axis': 4,
    'reposible-product-axis': 0,
    'managment-score-axis': 4,
    'shareholder-rights-axis': 4,
    'CSR-strategy-axis': 3,
    'auditor-tenure': 5,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 3,
    'industry-risk': 'High'
  },
  'energean-plc': {
    TheSMCCode: 'energean-plc',
    companyName: 'Energean Plc',
    publicIdentifier: 'LON:ENOG',
    industry: 'Oil & Gas Producers',
    country: 'United Kingdom',
    score: 4,
    risk: 'Medium',
    'e-component-score': 5,
    's-component-score': 3,
    'g-component-score': 5,
    'e-component-risk': 'Medium',
    's-component-risk': 'High',
    'g-component-risk': 'Medium',
    'resource-use-axis': 6,
    'emissions-axis': 4,
    'environment-transformation-axis': 5,
    'human-rights-axis': 2,
    'community-welfare-axis': 5,
    'reposible-product-axis': 1,
    'managment-score-axis': 6,
    'shareholder-rights-axis': 5,
    'CSR-strategy-axis': 5,
    'auditor-tenure': 6,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 3,
    'industry-risk': 'High'
  },
  'royal-dutch-shell-plc': {
    TheSMCCode: 'royal-dutch-shell-plc',
    companyName: 'Royal Dutch Shell PLC',
    publicIdentifier: 'LON:RDSA',
    industry: 'Oil & Gas Producers',
    country: 'Netherlands',
    score: 4,
    risk: 'Medium',
    'e-component-score': 5,
    's-component-score': 3,
    'g-component-score': 3,
    'e-component-risk': 'Medium',
    's-component-risk': 'High',
    'g-component-risk': 'High',
    'resource-use-axis': 4,
    'emissions-axis': 6,
    'environment-transformation-axis': 4,
    'human-rights-axis': 2,
    'community-welfare-axis': 5,
    'reposible-product-axis': 2,
    'managment-score-axis': 3,
    'shareholder-rights-axis': 2,
    'CSR-strategy-axis': 3,
    'auditor-tenure': 3,
    'country-avg': 6,
    'country-risk': 'Medium',
    'industry-avg': 3,
    'industry-risk': 'High'
  },
  'apple-inc': {
    TheSMCCode: 'apple-inc',
    companyName: 'Apple Inc',
    publicIdentifier: 'NAS:AAPL',
    industry: 'Technology Hardware',
    country: 'United States',
    score: 7,
    risk: 'Medium',
    'e-component-score': 8,
    's-component-score': 6,
    'g-component-score': 8,
    'e-component-risk': 'Low',
    's-component-risk': 'Medium',
    'g-component-risk': 'Low',
    'resource-use-axis': 7,
    'emissions-axis': 8,
    'environment-transformation-axis': 7,
    'human-rights-axis': 5,
    'community-welfare-axis': 10,
    'reposible-product-axis': 4,
    'managment-score-axis': 9,
    'shareholder-rights-axis': 8,
    'CSR-strategy-axis': 8,
    'auditor-tenure': 8,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 6,
    'industry-risk': 'Medium'
  },
  'cisco-systems-inc': {
    TheSMCCode: 'cisco-systems-inc',
    companyName: 'Cisco Systems Inc',
    publicIdentifier: 'NAS:CSCO',
    industry: 'Technology Hardware',
    country: 'United States',
    score: 8,
    risk: 'Low',
    'e-component-score': 7,
    's-component-score': 8,
    'g-component-score': 9,
    'e-component-risk': 'Medium',
    's-component-risk': 'Low',
    'g-component-risk': 'Low',
    'resource-use-axis': 8,
    'emissions-axis': 6,
    'environment-transformation-axis': 7,
    'human-rights-axis': 9,
    'community-welfare-axis': 7,
    'reposible-product-axis': 9,
    'managment-score-axis': 9,
    'shareholder-rights-axis': 8,
    'CSR-strategy-axis': 9,
    'auditor-tenure': 9,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 6,
    'industry-risk': 'Medium'
  },
  'netapp-inc': {
    TheSMCCode: 'netapp-inc',
    companyName: 'NetApp, Inc.',
    publicIdentifier: 'NAS:NTAP',
    industry: 'Technology Hardware',
    country: 'United States',
    score: 7,
    risk: 'Medium',
    'e-component-score': 9,
    's-component-score': 6,
    'g-component-score': 6,
    'e-component-risk': 'Low',
    's-component-risk': 'Medium',
    'g-component-risk': 'Medium',
    'resource-use-axis': 9,
    'emissions-axis': 8,
    'environment-transformation-axis': 9,
    'human-rights-axis': 6,
    'community-welfare-axis': 9,
    'reposible-product-axis': 4,
    'managment-score-axis': 6,
    'shareholder-rights-axis': 4,
    'CSR-strategy-axis': 4,
    'auditor-tenure': 8,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 6,
    'industry-risk': 'Medium'
  },
  'zebra-technologies-corp': {
    TheSMCCode: 'zebra-technologies-corp',
    companyName: 'Zebra Technologies Corp.',
    publicIdentifier: 'NAS:ZBRA',
    industry: 'Technology Hardware',
    country: 'United States',
    score: 8,
    risk: 'Low',
    'e-component-score': 8,
    's-component-score': 8,
    'g-component-score': 8,
    'e-component-risk': 'Low',
    's-component-risk': 'Low',
    'g-component-risk': 'Low',
    'resource-use-axis': 8,
    'emissions-axis': 7,
    'environment-transformation-axis': 8,
    'human-rights-axis': 7,
    'community-welfare-axis': 7,
    'reposible-product-axis': 8,
    'managment-score-axis': 8,
    'shareholder-rights-axis': 7,
    'CSR-strategy-axis': 7,
    'auditor-tenure': 9,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 6,
    'industry-risk': 'Medium'
  },
  'chevron-corporation': {
    TheSMCCode: 'chevron-corporation',
    companyName: 'Chevron Corporation',
    publicIdentifier: 'NYS:CVX',
    industry: 'Oil & Gas Producers',
    country: 'United States',
    score: 2,
    risk: 'High',
    'e-component-score': 2,
    's-component-score': 2,
    'g-component-score': 2,
    'e-component-risk': 'High',
    's-component-risk': 'High',
    'g-component-risk': 'High',
    'resource-use-axis': 2,
    'emissions-axis': 3,
    'environment-transformation-axis': 2,
    'human-rights-axis': 2,
    'community-welfare-axis': 3,
    'reposible-product-axis': 1,
    'managment-score-axis': 2,
    'shareholder-rights-axis': 1,
    'CSR-strategy-axis': 2,
    'auditor-tenure': 2,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 3,
    'industry-risk': 'High'
  },
  'conoco-phillips': {
    TheSMCCode: 'conoco-phillips',
    companyName: 'Conoco Phillips',
    publicIdentifier: 'NYS:COP',
    industry: 'Oil & Gas Producers',
    country: 'United States',
    score: 3,
    risk: 'High',
    'e-component-score': 2,
    's-component-score': 4,
    'g-component-score': 3,
    'e-component-risk': 'High',
    's-component-risk': 'Medium',
    'g-component-risk': 'High',
    'resource-use-axis': 1,
    'emissions-axis': 2,
    'environment-transformation-axis': 2,
    'human-rights-axis': 5,
    'community-welfare-axis': 1,
    'reposible-product-axis': 5,
    'managment-score-axis': 3,
    'shareholder-rights-axis': 4,
    'CSR-strategy-axis': 4,
    'auditor-tenure': 3,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 3,
    'industry-risk': 'High'
  },
  'dell-technologies-inc': {
    TheSMCCode: 'dell-technologies-inc',
    companyName: 'Dell Technologies, Inc.',
    publicIdentifier: 'NYS:DELL',
    industry: 'Technology Hardware',
    country: 'United States',
    score: 8,
    risk: 'Low',
    'e-component-score': 7,
    's-component-score': 9,
    'g-component-score': 7,
    'e-component-risk': 'Medium',
    's-component-risk': 'Low',
    'g-component-risk': 'Medium',
    'resource-use-axis': 6,
    'emissions-axis': 8,
    'environment-transformation-axis': 6,
    'human-rights-axis': 8,
    'community-welfare-axis': 7,
    'reposible-product-axis': 11,
    'managment-score-axis': 8,
    'shareholder-rights-axis': 7,
    'CSR-strategy-axis': 6,
    'auditor-tenure': 7,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 6,
    'industry-risk': 'Medium'
  },
  'exxon-mobil-corp': {
    TheSMCCode: 'exxon-mobil-corp',
    companyName: 'Exxon Mobil Corp.',
    publicIdentifier: 'NYS:XOM',
    industry: 'Oil & Gas Producers',
    country: 'United States',
    score: 3,
    risk: 'High',
    'e-component-score': 4,
    's-component-score': 3,
    'g-component-score': 3,
    'e-component-risk': 'Medium',
    's-component-risk': 'High',
    'g-component-risk': 'High',
    'resource-use-axis': 3,
    'emissions-axis': 5,
    'environment-transformation-axis': 3,
    'human-rights-axis': 2,
    'community-welfare-axis': 5,
    'reposible-product-axis': 2,
    'managment-score-axis': 2,
    'shareholder-rights-axis': 4,
    'CSR-strategy-axis': 3,
    'auditor-tenure': 3,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 3,
    'industry-risk': 'High'
  },
  'ford-motor-co': {
    TheSMCCode: 'ford-motor-co',
    companyName: 'Ford Motor Co',
    publicIdentifier: 'NYS:F',
    industry: 'Automobiles',
    country: 'United States',
    score: 5,
    risk: 'Medium',
    'e-component-score': 6,
    's-component-score': 3,
    'g-component-score': 5,
    'e-component-risk': 'Medium',
    's-component-risk': 'High',
    'g-component-risk': 'Medium',
    'resource-use-axis': 6,
    'emissions-axis': 4,
    'environment-transformation-axis': 8,
    'human-rights-axis': 2,
    'community-welfare-axis': 7,
    'reposible-product-axis': 1,
    'managment-score-axis': 4,
    'shareholder-rights-axis': 6,
    'CSR-strategy-axis': 5,
    'auditor-tenure': 4,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 5,
    'industry-risk': 'Medium'
  },
  'general-motors-company': {
    TheSMCCode: 'general-motors-company',
    companyName: 'General Motors Company',
    publicIdentifier: 'NYS:GM',
    industry: 'Automobiles',
    country: 'United States',
    score: 4,
    risk: 'Medium',
    'e-component-score': 5,
    's-component-score': 4,
    'g-component-score': 5,
    'e-component-risk': 'Medium',
    's-component-risk': 'Medium',
    'g-component-risk': 'Medium',
    'resource-use-axis': 4,
    'emissions-axis': 6,
    'environment-transformation-axis': 4,
    'human-rights-axis': 5,
    'community-welfare-axis': 5,
    'reposible-product-axis': 2,
    'managment-score-axis': 3,
    'shareholder-rights-axis': 6,
    'CSR-strategy-axis': 5,
    'auditor-tenure': 4,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 5,
    'industry-risk': 'Medium'
  },
  'hewlett-packard-enterprise-co': {
    TheSMCCode: 'hewlett-packard-enterprise-co',
    companyName: 'Hewlett-Packard Enterprise Co.',
    publicIdentifier: 'NYS:HPE',
    industry: 'Technology Hardware',
    country: 'United States',
    score: 8,
    risk: 'Low',
    'e-component-score': 7,
    's-component-score': 8,
    'g-component-score': 9,
    'e-component-risk': 'Medium',
    's-component-risk': 'Low',
    'g-component-risk': 'Low',
    'resource-use-axis': 7,
    'emissions-axis': 8,
    'environment-transformation-axis': 7,
    'human-rights-axis': 8,
    'community-welfare-axis': 8,
    'reposible-product-axis': 10,
    'managment-score-axis': 9,
    'shareholder-rights-axis': 8,
    'CSR-strategy-axis': 8,
    'auditor-tenure': 9,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 6,
    'industry-risk': 'Medium'
  },
  'xerox-holdings-corp': {
    TheSMCCode: 'xerox-holdings-corp',
    companyName: 'Xerox Holdings Corp.',
    publicIdentifier: 'NYS:XRX',
    industry: 'Technology Hardware',
    country: 'United States',
    score: 7,
    risk: 'Medium',
    'e-component-score': 6,
    's-component-score': 7,
    'g-component-score': 8,
    'e-component-risk': 'Medium',
    's-component-risk': 'Medium',
    'g-component-risk': 'Low',
    'resource-use-axis': 5,
    'emissions-axis': 8,
    'environment-transformation-axis': 6,
    'human-rights-axis': 7,
    'community-welfare-axis': 10,
    'reposible-product-axis': 6,
    'managment-score-axis': 8,
    'shareholder-rights-axis': 9,
    'CSR-strategy-axis': 9,
    'auditor-tenure': 7,
    'country-avg': 5,
    'country-risk': 'Medium',
    'industry-avg': 6,
    'industry-risk': 'Medium'
  }
};

export const PORTFOLIO_DATA = {
  'fund-1': {
    portfolioName: 'Fund 1',
    TheSMCCode: 'fund-1',
    companyCount: 2,
    description: 'First fund of two companies - Equal Weighted',
    portfolio: [
      { companyCode: 'cisco-systems-inc', weight: 10 },
      { companyCode: 'chevron-corporation', weight: 10 }
    ]
  },
  'fund-2': {
    portfolioName: 'Fund 2',
    TheSMCCode: 'fund-2',
    companyCount: 2,
    description: 'Second fund of two companies - Higher Cisco',
    portfolio: [
      { companyCode: 'cisco-systems-inc', weight: 16 },
      { companyCode: 'chevron-corporation', weight: 4 }
    ]
  },
  'fund-3': {
    portfolioName: 'Fund 3',
    TheSMCCode: 'fund-3',
    companyCount: 2,
    description: 'Third fund of two companies - Higher Chevron',
    portfolio: [
      { companyCode: 'cisco-systems-inc', weight: 3 },
      { companyCode: 'chevron-corporation', weight: 17 }
    ]
  },
  'green-fund-1': {
    portfolioName: 'Green Fund 1',
    TheSMCCode: 'green-fund-1',
    companyCount: 5,
    description: 'Green investment focused fund',
    portfolio: [
      { companyCode: 'cisco-systems-inc', weight: 10 },
      { companyCode: 'dell-technologies-inc', weight: 15 },
      { companyCode: 'hewlett-packard-enterprise-co', weight: 20 },
      { companyCode: 'netapp-inc', weight: 5 },
      { companyCode: 'apple-inc', weight: 25 }
    ]
  }
};

export const TEMPLATE_DATA = {
  'esg-balanced-1': {
    templateName: 'ESG Balanced Model 1',
    TheSMCCode: 'esg-balanced-1',
    description: 'Equal weighted ESG scoring model',
    template: [
      { axisCode: 'e-component-score', weight: 15 },
      { axisCode: 's-component-score', weight: 15 },
      { axisCode: 'g-component-score', weight: 15 }
    ]
  },
  'e-focused-1': {
    templateName: 'Environment Model 1',
    TheSMCCode: 'e-focused-1',
    description: 'Environment focused scoring model',
    template: [
      { axisCode: 'e-component-score', weight: 15 },
      { axisCode: 's-component-score', weight: 5 },
      { axisCode: 'g-component-score', weight: 5 }
    ]
  },
  's-focused-1': {
    templateName: 'Social Model 1',
    TheSMCCode: 's-focused-1',
    description: 'Social focused scoring model',
    template: [
      { axisCode: 'e-component-score', weight: 5 },
      { axisCode: 's-component-score', weight: 15 },
      { axisCode: 'g-component-score', weight: 5 }
    ]
  },
  'g-focused-1': {
    templateName: 'Governence Model 1',
    TheSMCCode: 'g-focused-1',
    description: 'Governence focused scoring model',
    template: [
      { axisCode: 'e-component-score', weight: 5 },
      { axisCode: 's-component-score', weight: 5 },
      { axisCode: 'g-component-score', weight: 15 }
    ]
  }
};

// export const BASE_API_URL = 'ec2-3-133-153-216.us-east-2.compute.amazonaws.com';
// export const BASE_API_URL = 'ec2-18-117-254-122.us-east-2.compute.amazonaws.com';
export const BASE_API_URL = 'ec2-3-145-96-86.us-east-2.compute.amazonaws.com';

// export const ENVIRONMENT_DATA = [
//   {
//     name: 'Environment Component',
//     status: 'In progress',
//     color: 'info',
//     id: 'e-component',
//     children: [
//       {
//         name: 'Emissions Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 'e1',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 'e11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 'e12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 'e13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 'e14' }
//         ]
//       },
//       {
//         name: 'Resource Use Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 'e2',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 'e11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 'e12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 'e13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 'e14' }
//         ]
//       },
//       {
//         name: 'Sustainable Product Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 'e3',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 'e11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 'e12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 'e13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 'e14' }
//         ]
//       }
//     ]
//   }
// ];

// export const SOCIAL_DATA = [
//   {
//     name: 'Social Component',
//     status: 'In progress',
//     color: 'info',
//     id: 's-component',
//     children: [
//       {
//         name: 'Human Rights Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 's1',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 's11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 's12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 's13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 's14' }
//         ]
//       },
//       {
//         name: 'Community Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 's2',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 'e11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 'e12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 'e13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 'e14' }
//         ]
//       },
//       {
//         name: 'Product Responsibility Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 's3',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 'e11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 'e12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 'e13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 'e14' }
//         ]
//       }
//     ]
//   }
// ];

// export const GOVERNENCE_DATA = [
//   {
//     name: 'Governence Component',
//     status: 'In progress',
//     color: 'info',
//     id: 'g-component',
//     children: [
//       {
//         name: 'Management Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 'g1',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 'e11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 'e12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 'e13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 'e14' }
//         ]
//       },
//       {
//         name: 'Shareholders Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 'g2',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 'e11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 'e12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 'e13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 'e14' }
//         ]
//       },
//       {
//         name: 'Corporate Social Responsibility Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 'g3',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 'e11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 'e12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 'e13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 'e14' }
//         ]
//       },
//       {
//         name: 'Auditors Tenure Axis',
//         staus: 'In progress',
//         color: 'info',
//         id: 'g3',
//         children: [
//           { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 'e11' },
//           { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 'e12' },
//           { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 'e13' },
//           { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 'e14' }
//         ]
//       }
//     ]
//   }
// ];

export const ENVIRONMENT_DATA = [
  {
    name: 'Environment',
    status: 'In progress',
    color: 'info',
    id: 'e-component',
    children: [
      {
        name: 'Biodiversity',
        staus: 'In progress',
        color: 'info',
        id: 'e1',
        children: [
          { name: 'Biodiversity and ecosystem preservation practices', staus: 'Live', color: 'success', id: 'e11' },
          { name: 'Deforestation', staus: 'Live', color: 'success', id: 'e12' },
          { name: 'Natural species and protected areas', staus: 'Live', color: 'success', id: 'e13' }
        ]
      },
      {
        name: 'Climate Change & Carbon emission',
        staus: 'In progress',
        color: 'info',
        id: 'e2',
        children: [
          { name: 'Carbon Footprint', staus: 'Live', color: 'success', id: 'e21' },
          { name: 'Climate Change strategy', staus: 'Live', color: 'success', id: 'e22' },
          { name: 'Climate Risk Management', staus: 'Live', color: 'success', id: 'e23' },
          { name: 'Greenhouse gas Policies', staus: 'Live', color: 'success', id: 'e24' },
          { name: 'Carbon emission reduction initiatives', staus: 'Live', color: 'success', id: 'e25' }
        ]
      },
      {
        name: 'Energy Management',
        staus: 'In progress',
        color: 'info',
        id: 'e3',
        children: [
          { name: 'Energy consumption intensity', staus: 'Live', color: 'success', id: 'e31' },
          { name: 'Green Buildings', staus: 'Live', color: 'success', id: 'e32' },
          { name: 'Renewable energy consumption', staus: 'Live', color: 'success', id: 'e33' },
          { name: 'Fossil Fuel dependency', staus: 'Live', color: 'success', id: 'e34' }
        ]
      },
      {
        name: 'Environment Management',
        staus: 'In progress',
        color: 'info',
        id: 'e4',
        children: [
          { name: 'Environment Management System', staus: 'Live', color: 'success', id: 'e41' },
          { name: 'Environmental Policy', staus: 'Live', color: 'success', id: 'e42' },
          { name: 'Polution prevention and control', staus: 'Live', color: 'success', id: 'e43' }
        ]
      },
      {
        name: 'Waste Management',
        staus: 'In progress',
        color: 'info',
        id: 'e5',
        children: [
          { name: 'Packaging', staus: 'Live', color: 'success', id: 'e51' },
          { name: 'Recycling', staus: 'Live', color: 'success', id: 'e52' },
          { name: 'Resource Efficiency', staus: 'Live', color: 'success', id: 'e53' }
        ]
      },
      {
        name: 'Water Management',
        staus: 'In progress',
        color: 'info',
        id: 'e6',
        children: [
          { name: 'Exposure to areas of high water stress', staus: 'Live', color: 'success', id: 'e61' },
          { name: 'Untreated discharged waste water', staus: 'Live', color: 'success', id: 'e62' },
          { name: 'Water emissions ', staus: 'Live', color: 'success', id: 'e63' }
        ]
      }
    ]
  }
];

export const SOCIAL_DATA = [
  {
    name: 'Social',
    status: 'In progress',
    color: 'info',
    id: 's-component',
    children: [
      {
        name: 'Community and Society',
        staus: 'In progress',
        color: 'info',
        id: 's1',
        children: [
          { name: 'Total Carbon Emission - Live', staus: 'Live', color: 'success', id: 's11' },
          { name: 'Scope1 Carbon Emission', staus: 'Live', color: 'success', id: 's12' },
          { name: 'Scope2 Carbon Emission', staus: 'Live', color: 'success', id: 's13' },
          { name: 'Scope3 Carbon Emission', staus: 'Live', color: 'success', id: 's14' }
        ]
      },
      {
        name: 'Diversity',
        staus: 'In progress',
        color: 'info',
        id: 's2',
        children: [
          { name: 'Gender pay gap', staus: 'Live', color: 'success', id: 's21' },
          { name: 'Gender diversity', staus: 'Live', color: 'success', id: 's22' },
          { name: 'Discrimination', staus: 'Live', color: 'success', id: 's23' }
        ]
      },
      {
        name: 'Health and Safety & Wellbeing',
        staus: 'In progress',
        color: 'info',
        id: 's3',
        children: [
          { name: 'Access to Basic Services', staus: 'Live', color: 'success', id: 's31' },
          { name: 'Access to Healthcare', staus: 'Live', color: 'success', id: 's32' }
        ]
      },
      {
        name: 'Sector',
        staus: 'In progress',
        color: 'info',
        id: 's4',
        children: [
          { name: 'High Impact Climate sector', staus: 'Live', color: 'success', id: 's41' },
          { name: 'Bio diversity sensitive areas', staus: 'Live', color: 'success', id: 's42' },
          { name: 'SControversial weapons', staus: 'Live', color: 'success', id: 's43' }
        ]
      },
      {
        name: 'Social and employee matters',
        staus: 'In progress',
        color: 'info',
        id: 's5',
        children: [
          { name: 'Employee Development', staus: 'Live', color: 'success', id: 'e51' },
          { name: 'Grievance/complaints handling mechanism', staus: 'Live', color: 'success', id: 'e52' },
          { name: 'Labor Practices', staus: 'Live', color: 'success', id: 'e53' },
          { name: 'Data protection & Privacy', staus: 'Live', color: 'success', id: 'e54' }
        ]
      }
    ]
  }
];

export const GOVERNENCE_DATA = [
  {
    name: 'Governence',
    status: 'In progress',
    color: 'info',
    id: 'g-component',
    children: [
      {
        name: 'Board',
        staus: 'In progress',
        color: 'info',
        id: 'g1',
        children: [
          { name: 'Board Diversity', staus: 'Live', color: 'success', id: 'g11' },
          { name: 'Board Independence', staus: 'Live', color: 'success', id: 'g12' },
          { name: 'Chairperson–CEO Separation', staus: 'Live', color: 'success', id: 'g13' }
        ]
      },
      {
        name: 'Business Ethics',
        staus: 'In progress',
        color: 'info',
        id: 'g2',
        children: [
          { name: 'Anti-competitive Practices', staus: 'Live', color: 'success', id: 'g21' },
          { name: 'Anti-corruption and anti-bribery policies', staus: 'Live', color: 'success', id: 'g22' },
          { name: 'Taxes', staus: 'Live', color: 'success', id: 'g23' },
          { name: 'Remuneration Policy', staus: 'Live', color: 'success', id: 'g24' },
          { name: 'Whistleblower Policy', staus: 'Live', color: 'success', id: 'g25' },
          { name: 'Lobbying & Political contributions', staus: 'Live', color: 'success', id: 'g26' },
          { name: 'Commitments (PRI signatory / Other)', staus: 'Live', color: 'success', id: 'g27' },
          { name: 'Compliance with UNGCP & OECD Guideline', staus: 'Live', color: 'success', id: 'g28' }
        ]
      },
      {
        name: 'Corporate Governance',
        staus: 'In progress',
        color: 'info',
        id: 'g3',
        children: [
          { name: 'Audit', staus: 'Live', color: 'success', id: 'g31' },
          { name: 'Customer Relationship', staus: 'Live', color: 'success', id: 'g32' },
          { name: 'Product Strategy', staus: 'Live', color: 'success', id: 'g33' },
          { name: 'Supply Chain Management', staus: 'Live', color: 'success', id: 'g34' }
        ]
      },
      {
        name: 'Risk Management',
        staus: 'In progress',
        color: 'info',
        id: 'g4',
        children: [
          { name: 'Product Safety', staus: 'Live', color: 'success', id: 'g41' },
          { name: 'Risk Management Policy', staus: 'Live', color: 'success', id: 'g42' }
        ]
      }
    ]
  }
];

export const DASHBOARD_DATA = {
  dashboard: {
    'headline-numbers': {
      'template-count': 5,
      'portfolio-count': 10,
      'company-count': 25,
      'simulation-count': 100
    },
    'universe-scores': {
      current: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      'previous-quarter': [0, 1, 2, 0, 1, 2, 0, 1, 2, 3, 4],
      '2-previous-quarter': [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 6]
    },
    'maps-data': [
      { country: 'USA', 'country-code': 'us', count: 2, 'avg-esgscore': 6 },
      { country: 'UK', 'country-code': 'uk', count: 3, 'avg-esgscore': 5 },
      { country: 'Germany', 'country-code': 'de', count: 5, 'avg-esgscore': 7 }
    ],
    'sector-data': [
      { sector: 'Financial', 'sector-code': 'fin', count: 5, 'avg-esgscore': 1 },
      { sector: 'Real Estate', 'sector-code': 're', count: 4, 'avg-esgscore': 5 },
      { sector: 'Automotive', 'sector-code': 'aut', count: 8, 'avg-esgscore': 9 },
      { sector: 'Banking', 'sector-code': 'ba', count: 10, 'avg-esgscore': 7 },
      { sector: 'Technology', 'sector-code': 'tech', count: 5, 'avg-esgscore': 6 },
      { sector: 'Consumer Goods', 'sector-code': 'cons', count: 14, 'avg-esgscore': 2 }
    ]
  }
};

export const DASHBOARD_PORTFOLIO_DATA = {
  'portfolio-uuid': '98ed8be0-8873-11ec-a8a3-0242ac120002',
  'portfolio-name': 'European Green Fund',
  'portfolio-code': 'EGF.EU',
  'portfolio-description': 'Xyz',
  'esg-score': {
    score: 9,
    children: [
      {
        'environment-score': {
          score: 2,
          children: [
            {
              'biodiversity-score': {
                score: 6,
                children: [
                  {
                    'biodiversity-and-ecosystem-preservation-practices-score': {
                      score: 9
                    },
                    'deforestation-score': {
                      score: 3
                    },
                    'natural-species-and-protected-areas-score': {
                      score: 7
                    }
                  }
                ]
              },
              'climate-change-and-carbon-emission-score': {
                score: 6,
                children: [
                  {
                    'carbon-and-ghg-emission-score': {
                      score: 7
                    },
                    'climate-change-strategy-score': {
                      score: 7
                    },
                    'climate-risk-and-impact-score': {
                      score: 7
                    },
                    'polution-prevention-and-control-score': {
                      score: 7
                    }
                  }
                ]
              },
              'energy management-score': {
                score: 6,
                children: [
                  {
                    'energy-consumption-intensity-score': {
                      score: 7
                    },
                    'renewable-energy-consumption-score': {
                      score: 7
                    }
                  }
                ]
              },
              'resources-and-waste-management-score': {
                score: 6,
                children: [
                  {
                    'hazadorous-and-non-hazadorous-waste-treatment-score': {
                      score: 7
                    },
                    'packaging-score': {
                      score: 7
                    },
                    'recycling-score': {
                      score: 7
                    },
                    'resource-supply-management-score': {
                      score: 7
                    },
                    'resource-usage-and-efficiency-score': {
                      score: 7
                    }
                  }
                ]
              },
              'water management-score': {
                score: 6,
                children: [
                  {
                    'consumption-score': {
                      score: 7
                    },
                    'waste-water-treatment-score': {
                      score: 7
                    },
                    'water-emissions-score': {
                      score: 7
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        'governance-score': {
          score: 2,
          children: [
            {
              'board-score': {
                score: 6,
                children: [
                  {
                    'board-diversity-score': {
                      score: 7
                    },
                    'board-independence-score': {
                      score: 7
                    },
                    'chairperson-ceo-separation-score': {
                      score: 7
                    }
                  }
                ]
              },
              'business-ethics-score': {
                score: 6,
                children: [
                  {
                    'anti-competitive-practices-score': {
                      score: 7
                    },
                    'anti-corruption-and-anti-bribery-policies-score': {
                      score: 7
                    },
                    'lobbying-and-political-contributions-score': {
                      score: 7
                    },
                    'remuneration-policy-score': {
                      score: 7
                    },
                    'taxation-score': {
                      score: 7
                    },
                    'whistleblower-policy-score': {
                      score: 7
                    }
                  }
                ]
              },
              'corporate-governance-score': {
                score: 8,
                children: [
                  {
                    'audit-score': {
                      score: 8
                    },
                    'commitments-pri-signatory-other-score': {
                      score: 7
                    },
                    'compliance-with-ungcp-and-oecd-guideline-score': {
                      score: 7
                    },
                    'customer-relationship-score': {
                      score: 7
                    },
                    'product-strategy-score': {
                      score: 7
                    }
                  }
                ]
              },
              'risk-management-score': {
                score: 6,
                children: [
                  {
                    'product-safety-score': {
                      score: 7
                    },
                    'risk-management-policy-score': {
                      score: 7
                    }
                  }
                ]
              },
              'supply-chain-management-score': {
                score: 8,
                children: [
                  {
                    'supply-chain-management-score': {
                      score: 7
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        'social-score': {
          score: 5,
          children: [
            {
              'community-and-society-score': {
                score: 6,
                children: [
                  {
                    'child-labor-score': {
                      score: 9
                    },
                    'circular-economy-score': {
                      score: 7
                    },
                    'enagagement-score': {
                      score: 7
                    },
                    'human-rights-score': {
                      score: 7
                    },
                    'philanthropy-score': {
                      score: 7
                    }
                  }
                ]
              },
              'diversity-score': {
                score: 6,
                children: [
                  {
                    'discrimination-score': {
                      score: 7
                    },
                    'gender-diversity-score': {
                      score: 7
                    },
                    'gender-pay-gap-score': {
                      score: 7
                    }
                  }
                ]
              },
              'health-and-safety-and-wellbeing-score': {
                score: 6,
                children: [
                  {
                    'access-to-basic-services-score': {
                      score: 7
                    },
                    'access-to-healthcare-score': {
                      score: 7
                    }
                  }
                ]
              },
              'sector-score': {
                score: 6,
                children: [
                  {
                    'bio-diversity-sensitive-areas-score': {
                      score: 8
                    },
                    'controversial-weapons-score': {
                      score: 7
                    },
                    'countries-subject-to-social-violations-score': {
                      score: 7
                    },
                    'high-impact-climate-sector-score': {
                      score: 7
                    }
                  }
                ]
              },
              'social-and-employee matters-score': {
                score: 9,
                children: [
                  {
                    'data-protection-and-privacy-score': {
                      score: 7
                    },
                    'employee-development-score': {
                      score: 7
                    },
                    'grievance-complaints-handling-mechanism-score': {
                      score: 7
                    },
                    'labor-practices-score': {
                      score: 7
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  'country-data': [
    { country: 'USA', 'country-code': 'us', count: 2, 'avg-esgscore': 6 },
    { country: 'UK', 'country-code': 'uk', count: 3, 'avg-esgscore': 5 },
    { country: 'Germany', 'country-code': 'de', count: 5, 'avg-esgscore': 7 }
  ],
  'sector-data': [
    { sector: 'Financial', 'sector-code': 'fin', count: 5, 'avg-esgscore': 1 },
    { sector: 'Real Estate', 'sector-code': 're', count: 4, 'avg-esgscore': 2 }
  ],
  'histogram-data': [0, 0, 0, 1, 1, 2, 1, 0, 3, 0, 0],
  'company-portfolio-score': [0, 4, 5, 1, 3, 2, 1, 8, 3, 6, 0],
  'portfolio-company': {
    active: [
      { name: 'abcde', uuid: '122', symbol: 'a', code: 'a', 'esg-score': 9, 'portfolio-esg-score': 5, weight: 10 },
      { name: 'bcdef', uuid: '123', symbol: 'b', code: 'b', 'esg-score': 6, 'portfolio-esg-score': 2, weight: 10 },
      { name: 'c', uuid: '124', symbol: 'c', code: 'c', 'esg-score': 2, 'portfolio-esg-score': 8, weight: 10 }
    ],
    'under-review': [
      { name: 'd', uuid: '125', symbol: 'd', code: 'd', 'esg-score': 'NA', 'portfolio-esg-score': 'NA', weight: 10 }
    ]
  },
  'historical-data': [
    { time: 342123451, score: 6 },
    { time: 546123454, score: 8 },
    { time: 564123452, score: 5 },
    { time: 871234532, score: 7 }
  ],
  // 'historical-data': {
  //   123456: 6,
  //   123451: 6,
  //   123452: 6,
  //   123453: 6,
  //   123454: 6
  // },
  'template-date': {
    'template-name': 'Esg balanced',
    'template-code': 'esg-balanced',
    'template-uuid': '98ed8be0-8873-11ec-a8a3-0242ac120002',
    weights: {
      environment: 10,
      governance: 10,
      social: 10
    }
  }
};

export const DASHBOARD_TEMPLATE_DATA = {
  'template-uuid': '98ed8be0-8873-11ec-a8a3-0242ac120002',
  'template-name': 'TheSMC Standard',
  'template-code': 'EZS',
  'template-description': 'XYZ',
  'esg-weights': {
    'children-weight-type': 'default',
    children: [
      {
        'environment-score': {
          weight: 45,
          'children-weight-type': 'default',
          children: [
            {
              'biodiversity-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'biodiversity-and-ecosystem-preservation-practices-score': {
                      weight: 10
                    },
                    'deforestation-score': {
                      weight: 10
                    },
                    'natural-species-and-protected-areas-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'climate-change-and-carbon-emission-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'carbon-and-ghg-emission-score': {
                      weight: 10
                    },
                    'climate-change-strategy-score': {
                      weight: 10
                    },
                    'climate-risk-and-impact-score': {
                      weight: 10
                    },
                    'polution-prevention-and-control-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'energy management-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'energy-consumption-intensity-score': {
                      weight: 10
                    },
                    'renewable-energy-consumption-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'resources-and-waste-management-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'hazadorous-and-non-hazadorous-waste-treatment-score': {
                      weight: 10
                    },
                    'packaging-score': {
                      weight: 10
                    },
                    'recycling-score': {
                      weight: 10
                    },
                    'resource-supply-management-score': {
                      weight: 10
                    },
                    'resource-usage-and-efficiency-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'water management-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'consumption-score': {
                      weight: 10
                    },
                    'waste-water-treatment-score': {
                      weight: 10
                    },
                    'water-emissions-score': {
                      weight: 10
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        'governance-score': {
          weight: 15,
          'children-weight-type': 'default',
          children: [
            {
              'board-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'board-diversity-score': {
                      weight: 10
                    },
                    'board-independence-score': {
                      weight: 10
                    },
                    'chairperson-ceo-separation-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'business-ethics-score': {
                weight: 20,
                'children-weight-type': 'custom',
                children: [
                  {
                    'anti-competitive-practices-score': {
                      weight: 10
                    },
                    'anti-corruption-and-anti-bribery-policies-score': {
                      weight: 10
                    },
                    'lobbying-and-political-contributions-score': {
                      weight: 10
                    },
                    'remuneration-policy-score': {
                      weight: 10
                    },
                    'taxation-score': {
                      weight: 10
                    },
                    'whistleblower-policy-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'corporate-governance-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'audit-score': {
                      weight: 10
                    },
                    'commitments-pri-signatory-other-score': {
                      weight: 10
                    },
                    'compliance-with-ungcp-and-oecd-guideline-score': {
                      weight: 10
                    },
                    'customer-relationship-score': {
                      weight: 10
                    },
                    'product-strategy-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'risk-management-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'product-safety-score': {
                      weight: 10
                    },
                    'risk-management-policy-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'supply-chain-management-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'supply-chain-management-score': {
                      weight: 10
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        'social-score': {
          weight: 30,
          'children-weight-type': 'default',
          children: [
            {
              'community-and-society-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'child-labor-score': {
                      weight: 10
                    },
                    'circular-economy-score': {
                      weight: 10
                    },
                    'enagagement-score': {
                      weight: 10
                    },
                    'human-rights-score': {
                      weight: 10
                    },
                    'philanthropy-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'diversity-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'discrimination-score': {
                      weight: 10
                    },
                    'gender-diversity-score': {
                      weight: 10
                    },
                    'gender-pay-gap-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'health-and-safety-and-wellbeing-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'access-to-basic-services-score': {
                      weight: 10
                    },
                    'access-to-healthcare-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'sector-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'bio-diversity-sensitive-areas-score': {
                      weight: 10
                    },
                    'controversial-weapons-score': {
                      weight: 10
                    },
                    'countries-subject-to-social-violations-score': {
                      weight: 10
                    },
                    'high-impact-climate-sector-score': {
                      weight: 10
                    }
                  }
                ]
              },
              'social-and-employee matters-score': {
                weight: 20,
                'children-weight-type': 'default',
                children: [
                  {
                    'data-protection-and-privacy-score': {
                      weight: 10
                    },
                    'employee-development-score': {
                      weight: 10
                    },
                    'grievance-complaints-handling-mechanism-score': {
                      weight: 10
                    },
                    'labor-practices-score': {
                      weight: 10
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
};

export const DASHBOARD_COMPANY_DATA = {
  'company-uuid': '98ed8be0-8873-11ec-a8a3-0242ac120002',
  'company-timestamp': 1235454532,
  'company-name': 'Adidas',
  'company-symbol': 'ADS.EU',
  'company-code': 'adidas',
  'company-status': 'Active/Under Review',
  'esg-score': {
    score: 6,
    children: [
      {
        'environment-score': {
          score: 5,
          children: [
            {
              'biodiversity-score': {
                score: 6,
                children: [
                  {
                    'biodiversity-and-ecosystem-preservation-practices-score': {
                      score: 7
                    },
                    'deforestation-score': {
                      score: 7
                    },
                    'natural-species-and-protected-areas-score': {
                      score: 7
                    }
                  }
                ]
              },
              'climate-change-and-carbon-emission-score': {
                score: 6,
                children: [
                  {
                    'carbon-and-ghg-emission-score': {
                      score: 7
                    },
                    'climate-change-strategy-score': {
                      score: 7
                    },
                    'climate-risk-and-impact-score': {
                      score: 7
                    },
                    'polution-prevention-and-control-score': {
                      score: 7
                    }
                  }
                ]
              },
              'energy management-score': {
                score: 6,
                children: [
                  {
                    'energy-consumption-intensity-score': {
                      score: 7
                    },
                    'renewable-energy-consumption-score': {
                      score: 7
                    }
                  }
                ]
              },
              'resources-and-waste-management-score': {
                score: 6,
                children: [
                  {
                    'hazadorous-and-non-hazadorous-waste-treatment-score': {
                      score: 7
                    },
                    'packaging-score': {
                      score: 7
                    },
                    'recycling-score': {
                      score: 7
                    },
                    'resource-supply-management-score': {
                      score: 7
                    },
                    'resource-usage-and-efficiency-score': {
                      score: 7
                    }
                  }
                ]
              },
              'water management-score': {
                score: 6,
                children: [
                  {
                    'consumption-score': {
                      score: 7
                    },
                    'waste-water-treatment-score': {
                      score: 7
                    },
                    'water-emissions-score': {
                      score: 7
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        'governance-score': {
          score: 5,
          children: [
            {
              'board-score': {
                score: 6,
                children: [
                  {
                    'board-diversity-score': {
                      score: 7
                    },
                    'board-independence-score': {
                      score: 7
                    },
                    'chairperson-ceo-separation-score': {
                      score: 7
                    }
                  }
                ]
              },
              'business-ethics-score': {
                score: 6,
                children: [
                  {
                    'anti-competitive-practices-score': {
                      score: 7
                    },
                    'anti-corruption-and-anti-bribery-policies-score': {
                      score: 7
                    },
                    'lobbying-and-political-contributions-score': {
                      score: 7
                    },
                    'remuneration-policy-score': {
                      score: 7
                    },
                    'taxation-score': {
                      score: 7
                    },
                    'whistleblower-policy-score': {
                      score: 7
                    }
                  }
                ]
              },
              'corporate-governance-score': {
                score: 6,
                children: [
                  {
                    'audit-score': {
                      score: 7
                    },
                    'commitments-pri-signatory-other-score': {
                      score: 7
                    },
                    'compliance-with-ungcp-and-oecd-guideline-score': {
                      score: 7
                    },
                    'customer-relationship-score': {
                      score: 7
                    },
                    'product-strategy-score': {
                      score: 7
                    }
                  }
                ]
              },
              'risk-management-score': {
                score: 6,
                children: [
                  {
                    'product-safety-score': {
                      score: 7
                    },
                    'risk-management-policy-score': {
                      score: 7
                    }
                  }
                ]
              },
              'supply-chain-management-score': {
                score: 6,
                children: [
                  {
                    'supply-chain-management-score': {
                      score: 7
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        'social-score': {
          score: 5,
          children: [
            {
              'community-and-society-score': {
                score: 6,
                children: [
                  {
                    'child-labor-score': {
                      score: 7
                    },
                    'circular-economy-score': {
                      score: 7
                    },
                    'enagagement-score': {
                      score: 7
                    },
                    'human-rights-score': {
                      score: 7
                    },
                    'philanthropy-score': {
                      score: 7
                    }
                  }
                ]
              },
              'diversity-score': {
                score: 6,
                children: [
                  {
                    'discrimination-score': {
                      score: 7
                    },
                    'gender-diversity-score': {
                      score: 7
                    },
                    'gender-pay-gap-score': {
                      score: 7
                    }
                  }
                ]
              },
              'health-and-safety-and-wellbeing-score': {
                score: 6,
                children: [
                  {
                    'access-to-basic-services-score': {
                      score: 7
                    },
                    'access-to-healthcare-score': {
                      score: 7
                    }
                  }
                ]
              },
              'sector-score': {
                score: 6,
                children: [
                  {
                    'bio-diversity-sensitive-areas-score': {
                      score: 7
                    },
                    'controversial-weapons-score': {
                      score: 7
                    },
                    'countries-subject-to-social-violations-score': {
                      score: 7
                    },
                    'high-impact-climate-sector-score': {
                      score: 7
                    }
                  }
                ]
              },
              'social-and-employee matters-score': {
                score: 6,
                children: [
                  {
                    'data-protection-and-privacy-score': {
                      score: 7
                    },
                    'employee-development-score': {
                      score: 7
                    },
                    'grievance-complaints-handling-mechanism-score': {
                      score: 7
                    },
                    'labor-practices-score': {
                      score: 7
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  'country-data': [{ country: 'USA', 'country-code': 'us', count: 2, 'avg-esgscore': 6 }],
  'sector-data': [
    {
      sector: 'Financial',
      'sector-code': 'fin',
      count: 5,
      'avg-esgscore': 1
    }
  ],
  'historical-data': [
    { time: 342123451, score: 6 },
    { time: 564123452, score: 6 },
    { time: 871234532, score: 6 },
    { time: 546123454, score: 6 }
  ],
  'template-date': {
    'template-name': 'Esg balanced',
    'template-code': 'esg-balanced',
    'template-uuid': '98ed8be0-8873-11ec-a8a3-0242ac120002',
    weights: {
      environment: 10,
      governance: 10,
      social: 10
    }
  }
};

export const COMPANY_LIST = {
  companyData: [
    {
      'company-uuid': '12324121',
      TheSMCCode: 'bmw-group',
      companyName: 'BMW Group',
      publicIdentifier: 'ETR:BMW',
      industry: 'Automobiles',
      country: 'Germany',
      score: 9,
      risk: 'Medium'
    },
    {
      'company-uuid': '12324122',
      TheSMCCode: 'bmw-group',
      companyName: 'BMW Group',
      publicIdentifier: 'ETR:BMW',
      industry: 'Automobiles',
      country: 'Germany',
      score: 6,
      risk: 'Medium'
    },
    {
      'company-uuid': '12324123',
      TheSMCCode: 'bmw-group',
      companyName: 'BMW Group',
      publicIdentifier: 'ETR:BMW',
      industry: 'Automobiles',
      country: 'Germany',
      score: 2,
      risk: 'Medium'
    }
  ]
};

export const PORTFOLIO_LIST = {
  portfolioData: [
    {
      'portfolio-uuid': '112324121',
      portfolioName: 'Fund 1',
      TheSMCCode: 'fund-1',
      companyCount: 2,
      description: 'First fund of two companies - Equal Weighted'
    },
    {
      'portfolio-uuid': '112324122',
      portfolioName: 'Fund 1',
      TheSMCCode: 'fund-1',
      companyCount: 2,
      description: 'First fund of two companies - Equal Weighted'
    },
    {
      'portfolio-uuid': '112324123',
      portfolioName: 'Fund 1',
      TheSMCCode: 'fund-1',
      companyCount: 2,
      description: 'First fund of two companies - Equal Weighted'
    }
  ]
};
