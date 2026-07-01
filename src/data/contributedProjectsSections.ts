import { type ContributedProject } from '../types/portfolio';

export const contributedProjects: ContributedProject[] = [
  {
    id: 'thryvpay',
    title: 'ThryvPay',
    description:
      'Getting paid faster has never been easier. ThryvPay lets you accept payments anywhere, anytime, with just a few clicks. ThryvPay mobile app is free to download with no hidden fees or set-up costs. Offer safe and secure contactless payments while providing convenience to your customers with the ThryvPay Mobile Card reader which offers on the go tap, insert and swiped credit card payment options, QR code payments and instant payment requests right from your mobile phone. \n \nAccept all major credit cards with competitive processing rates, next-day funding, and charge optional flat convenience fees or surcharge fees to minimize processing costs. \n \nAccept Automated Bank Transfers and save even more on fees. Set the max you will accept for credit card transactions. \n \nAccept in-demand digital payment options from Wallet Pay, giving your customers convenience at check-out. Wallet Pay incurs the same processing fees as credit card payments, reduces paper usage with electronic receipts, and provide accessibility and encryption for extra security. \n \nGive your customers more purchasing power with affordable ThryvPay Financing options now available for select industries (U.S. only). \n \nCreate and save your customized services for easy management and organization. ThryvPay allows you to create instant payment requests for your saved paid services. Offer your customers flexibility by setting up automatic one-time payments or recurring payments to build customer loyalty. Allow optional tipping to increase profits for you and your staff. \n \nGet real-time payment activity and details for all your transactions in one place. View and manage your payments, fees, and deposits. Track pending, paid and overdue payments, so your accounting is always up to date. \n \nSubject to ThryvPay terms of use and privacy policy.  \n\nTerms and Conditions: \nhttps://thryv.com/thryvpay-terms/',
    thumbnailUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e9/40/79/e9407913-9d8c-1b9c-768a-8589e3093403/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg',
    appStoreUrl: 'https://apps.apple.com/us/app/thryvpay/id1554576474',
    playStoreUrl: 'https://play.google.com/store/search?q=ThryvPay&c=apps',
    detailsSections: [
      {
        id: 'contributions',
        title: 'Contributions',
        items: [
          "Handled all App Store submissions, updates, and metadata management, ensuring compliance with Apple's guidelines and smooth release processes.",
          'Architected state management using Zustand; combined stores and slices to create a centralized state management.',
          'Built bridge for native Stripe iOS and Android SDKs to enable Tap to Pay and card reader functionality.',
          'Developed backend services with Express, Node.js and MySQL for recording transactions, managing payment flows, and sending invoices to customers via SMS and email.',
          'Added push notifcations using OneSignal, Apple Push Notification Service (APNs) and Firebase for alerting users about important updates and payments.',
          'Built onboarding flow for new user registration that required tokenized PCI-compliant payment information and coordinated with the web team to synchronize application data and user experiences across platforms.',
          "Implemented Plaid for linking users' bank accounts allowing users to withdraw funds directly to their bank accounts.",
          'Created automated deployment process using Fastlane, App Store Connect API and GitHub Actions, streamlining the release workflow for both iOS and Android platforms.',
          'Implemented Sentry and Datadog for real-time error tracking, performance monitoring and visibility into application health.',
          'Implemented Maestro for end-to-end (E2E) testing',
          'Implemented CodePush for delivery of instant updates over the air without requiring app store submissions.',
          'Implemented SSO (Single Sign-On) using Auth0, enabling users to authenticate seamlessly across different platforms and services within the Thryv ecosystem.',
          'Mentored junior developers on the mobile app team.',
          'Created themed UI components and design systems in Storybook, ensuring consistency and reusability across the application.',
          'Collaborated with cross-functional teams including design, backend, and web teams to ensure cohesive user experiences and alignment on project goals.',
        ],
      },
      {
        id: 'technologies',
        title: 'Technologies Used',
        items: [
          'React Native',
          'TypeScript',
          'Stripe iOS and Android SDKs',
          'Plaid',
          'Auth0',
          'Fastlane',
          'GitHub Actions',
          'Maestro',
          'Sentry',
          'Datadog',
          'CodePush',
          'React Navigation',
          'Zustand',
          'OneSignal',
          'Firebase',
          'Apple Push Notification Service (APNs)',
          'AWS',
          'Google Play Services',
          'App Store Connect',
          'MySQL',
          'Express',
          'Node.js',
          'Swift',
          'Objective-C',
          'Kotlin',
          'Java',
          'Gradle',
          'Storybook',
        ],
      },
    ],
  },
  {
    id: 'thryv-command-center',
    title: 'Thryv Command Center',
    description:
      "An easier way to communicate starts here. Thryv Command Center lets you connect your messages across email, social media, phone and WebChat in one centralized inbox for free. You won't have to jump between platforms or deal with complicated workflows ever again, instead handle your team and customer chats in one spot no matter where you are.\n- Inbox: access all your favorite channels within one single conversation for every customer. With Inbox, all your client messages from email, social media, phone, video and even WebChat are unified into one easy to follow thread so you can get back to running your business.\n- Calls: make voice and video calls easily on to go from the Thryv Command Center app with a dedicated phone line solely for your business so you can better manage your time.\nReady to get started? Download Thryv Command Center for free now and never miss another message from your team or customers, no matter the channel - email, phone, video, social or WebChat.",
    thumbnailUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/5e/64/965e6494-00eb-33a1-7e04-247c5f1b67f5/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg',
    appStoreUrl:
      'https://apps.apple.com/us/app/thryv-command-center/id1672665968',
    playStoreUrl:
      'https://play.google.com/store/search?q=Thryv%20Command%20Center&c=apps',

    detailsSections: [
      // {
      //   id: 'features',
      //   title: 'Features',
      //   items: [
      //     'Centralized inbox for messages across email, social media, phone and WebChat.',
      //     'Voice and video calls with a dedicated phone line for your business.',
      //     'Manage team and customer chats in one spot no matter where you are.',
      //   ],
      // },
      {
        id: 'contributions',
        title: 'Contributions',
        items: [
          'Created themed UI components using Storybook for consistent design and development across the mobile and web app.',
          'Implemented state management using Zustand for predictable and centralized state management across the mobile app.',
          'Implemented deep linking for connecting communications providers and other external services directly within the mobile app.',
          'Implemented Pub/Sub event handling for real-time updates and notifications within the mobile app.',
          'Implemented push notifications with Firebase and Apple Push Notification Service (APNs) for timely updates and engagement within the mobile app.',
          'Created local data storage solutions using RealmDB for offline access and improved performance within the mobile app, storing messages, channels, and contacts locally on the device.',
          'Mentored junior developers and conducted code reviews to ensure code quality and adherence to best practices within the mobile app development team.',
          'Added authentication features for secure user access within the mobile app, including login, registration, and password management functionalities.',
          'Handled App Store review process and updates for the mobile app, ensuring compliance with App Store guidelines and timely release of new features and bug fixes.',
          'Automated deployment processes for the mobile app using GitHub Actions, ensuring efficient and reliable delivery of new features and updates to users.',
          'Implemented repository architecture for data management within the mobile app, ensuring a clean separation of concerns and maintainable code structure.',
        ],
      },
      {
        id: 'technologies',
        title: 'Technologies Used',
        items: [
          'React Native',
          'TypeScript',
          'AWS',
          'Zustand',
          'GraphQL',
          'Push Notifications',
          'RealmDB',
          'Repository Architecture',
          'GitHub Actions',
          'Deep Linking',
          'Google Play Services',
          'App Store',
          'Firebase',
          'Apple Push Notification Service (APNs)',
          'App Store Connect',
          'OneSignal',
          'Fastlane',
          'Apollo Client',
          'Storybook',
        ],
      },
    ],
  },
  {
    id: 'carrier-360',
    title: 'Carrier 360',
    description:
      "Whether you are an owner-operator or manage an entire fleet, Carrier 360 can help you run your business every step of the way. Carrier 360 is J.B. Hunt's free trucking app where approved carriers can find available truckloads and manage their contracted power-only and drayage freight. With Carrier 360 you can:\n\n- Access J.B. Hunt's load board\n- Save your frequently made load searches as Favorites\n- Book loads instantly or negotiate offers in-app\n- Post your available trucks\n- Gain access to thousands of facility reviews and ratings\n- Assign drivers to loads and manage your fleet\n- Initiate load tracking\n- Manage detention automatically without making phone calls (requires location services)\n- Upload documents using your smartphone camera or files\n- Create electronic invoices effortlessly by clicking a few buttons\n- Get paid in 2 days or less with free Quick Pay*\n- Enjoy fuel discounts with the J.B. Hunt 360 Fuel Card, starting at 12 cents/mile**\n\nAt J.B. Hunt, we strive to provide technology that helps carriers save money, find more time to drive, and experience a better way of doing business. Need assistance? Contact us at 360CarrierSupport@jbhunt.com or 1-844-252-1793.\n\n\n* For details on free Quick Pay, visit info.jbhunt.com/360pay\n** Learn more about fuel Perks at jbhunt.com/perks",
    thumbnailUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5f/d1/99/5fd19917-7653-6bd3-e01a-ae8417d02d76/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg',
    appStoreUrl:
      'https://apps.apple.com/us/app/carrier-360-by-j-b-hunt/id1097181984',
    playStoreUrl:
      'https://play.google.com/store/search?q=Carrier%20360%20J.B.%20Hunt&c=apps',
    detailsSections: [
      {
        id: 'contributions',
        title: 'Contributions',
        items: [
          'Implemented custom routing for stop locations',
          'Implemented Google Places API for location search',
          'Integrated Google Navigation SDK for in-app navigation',
          'Introduced TypeScript for type safety and improved code maintainability',
          'Built custom map components for visualizing stop locations along the route',
        ],
      },
      {
        id: 'technologies-used',
        title: 'Technologies Used',
        items: [
          'React Native',
          'Redux',
          'TypeScript',
          'JavaScript',
          'Google Navigation SDK',
          'Firebase',
          'Google Maps SDK',
          'Google Places API',
        ],
      },
    ],
  },
  {
    id: 'financely',
    title: 'Financely',
    description:
      'Financely is a new mobile app for organizing and managing your personal expenses.  Achieve financial peace of mind and do it beautifully. With a simple interface and minimalistic one-page design, logging your day-to-day transactions has never been more fluid.\n\nFeatures:\n- Beautiful and easy-to-use interface\n- Add or remove daily transactions such as expenses and income\n- Back up and restore your data\n- Sign in for updates, improvements and features to come\n- Keep track of personal spending with custom categories\n- Create, edit and remove categories to fit your spending habits\n- View metrics about your spending\n- Ad-free experience!',
    thumbnailUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/71/3e/77/713e778e-1523-b6a1-2e25-9905ab35d555/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/100x100bb.jpg',
    appStoreUrl: 'https://apps.apple.com/us/app/financely/id1491309602',
    playStoreUrl: '',
    detailsSections: [
      {
        id: 'contributions',
        title: 'Contributions',
        items: [
          'Designed the database schema for tracking personal expenses and income',
          'Implemented functionality for adding and removing transactions',
          'Implemented functionality for editing transactions',
          'Added tables and views for tracking personal expenses and income',
          'Implemented functionality for categorizing transactions into custom categories',
          'Implemented custom amount input for transactions',
          'Created backend integration for syncing transactions using AWS Amplify',
          'Implemented authentication using AWS Cognito',
          'Implemented navigation using React Navigation',
          'Designed and implemented the user interface for managing personal expenses',
          'Provided vision and direction for the overall user experience and design of the app',
          'Conducted user testing and gathered feedback to inform design decisions',
          'Handled release processes for the app, including submission to the stores and managing updates',
          'Maintained documentation for the app, including user guides and technical documentation',
          'Handled decision-making for feature prioritization and roadmap planning',
        ],
      },
      {
        id: 'technologies',
        title: 'Technologies Used',
        items: [
          'Expo',
          'JavaScript',
          'React Native',
          'AWS Amplify',
          'AWS Cognito',
          'React Navigation',
          'GraphQL',
          'App Store',
          'Google Play Store',
          'AWS S3',
          'App Store Connect API',
        ],
      },
    ],
  },
  {
    id: 'booktix-scanner',
    title: 'BookTix Scanner',
    description:
      'The new BookTix Scanner app is used with the new BookTix Platform.  If you are currently using our legacy platform, continue to use the current app for scanning.',
    thumbnailUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fe/f3/a4/fef3a453-64d1-7bf8-dfa2-51994be4971e/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/100x100bb.jpg',
    appStoreUrl: 'https://apps.apple.com/us/app/booktix-scanner/id6448060612',
    playStoreUrl:
      'https://play.google.com/store/search?q=BookTix%20Scanner&c=apps',
    detailsSections: [
      {
        id: 'contributions',
        title: 'Contributions',
        items: [
          'Addressed release approval process issues and ensured smooth deployment of the BookTix Scanner app.',
          'Cleaned up and optimized the codebase for better performance and maintainability.',
          'Collaborated with the product owner to release new features and updates in alignment with the BookTix Platform roadmap.',
          'Addressed issues with card reader integration.',
        ],
      },
      {
        id: 'technologies',
        title: 'Technologies',
        items: [
          'React Native',
          'TypeScript',
          'Google Play Services',
          'Node.js',
          'Stripe',
        ],
      },
    ],
  },
  {
    id: 'va-health-and-benefits',
    title: 'VA: Health and Benefits',
    description:
      "With the official VA: Health & Benefits app, you can manage your VA health care, benefits, and payments from your mobile phone or tablet. \n\nFeatures include:\n\nBiometric sign-in\n- Use your phone's built-in security features-like fingerprint and face recognition-to securely access your information.\n\nHealth care tools\n- Refill and track your VA prescriptions.\n- Send and receive secure messages from your VA health care team.\n- Review appointments and add them to your calendar.\n- Get your records for VA vaccines, such as COVID-19.\n\nBenefits tools\n- Check your disability rating.\n- Review your claim or appeal status.\n- Submit evidence for your claim or appeal.\n- Download common VA letters.\n\nPayments tools\n- Review payments we've sent you.\n- Update your direct deposit information.\n\nFacility locator\n- Find VA facilities and services near you.\n\nVeterans Crisis Line\n- Get quick access to the VA Crisis Line.\n\nProof of Veteran status\n- Show proof of your Veteran status.\n\nNeed help with this app? Call us at 800-698-2411 (TTY: 711). We're here 24/7.",
    thumbnailUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/19/83/11/19831172-b1da-4dba-0779-a9deae69b437/AppIcon-0-0-1x_U007epad-0-9-0-85-220.png/100x100bb.jpg',
    appStoreUrl:
      'https://apps.apple.com/us/app/va-health-and-benefits/id1559609596',
    playStoreUrl:
      'https://play.google.com/store/search?q=VA%20Health%20and%20Benefits&c=apps',
    detailsSections: [
      {
        id: 'contributions',
        title: 'Contributions',
        items: [
          'Participated in the development and maintenance of the VA: Health and Benefits app.',
          'Implemented new features and enhancements based on user feedback and VA requirements.',
          'Collaborated with the product team to ensure alignment with the VA digital strategy.',
        ],
      },
      {
        id: 'technologies',
        title: 'Technologies',
        items: [
          'React Native',
          'TypeScript',
          'Node.js',
          'Google Play Services',
        ],
      },
    ],
  },
];
