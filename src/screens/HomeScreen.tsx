import React from 'react';
import { Alert, StyleSheet, Text } from 'react-native';

import ExampleList, { ExampleListItem } from '../components/ExampleList';
import SafeAreaInsetsView from '../components/SafeAreaInsetsView';

const exampleItems: ExampleListItem[] = [
  {
    id: 'profile',
    title: 'Profile',
    description: 'Introduce who you are and what you like building.',
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'Highlight featured work with links, images, and outcomes.',
    children: [
      {
        id: 'financely',
        title: 'Financely',
        description:
          'Financely is a new mobile app for organizing and managing your personal expenses.  Achieve financial peace of mind and do it beautifully. With a simple interface and minimalistic one-page design, logging your day-to-day transactions has never been more fluid.\n\nFeatures:\n- Beautiful and easy-to-use interface\n- Add or remove daily transactions such as expenses and income\n- Back up and restore your data\n- Sign in for updates, improvements and features to come\n- Keep track of personal spending with custom categories\n- Create, edit and remove categories to fit your spending habits\n- View metrics about your spending\n- Ad-free experience!',
        thumbnailUrl:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/71/3e/77/713e778e-1523-b6a1-2e25-9905ab35d555/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/100x100bb.jpg',
        url: 'https://apps.apple.com/us/app/financely/id1491309602',
      },
      {
        id: 'debtly',
        title: 'Debtly',
        description:
          "Ever lend money to a friend and forget how much? Or realize you missed a bill payment because it slipped through the cracks? Debtly is the personal debt tracker that keeps every IOU, loan, bill, and receivable organized in one clean, private place - so nothing gets lost.\n\nWhether you're tracking money you lent to friends, managing loans between family members, or keeping tabs on business receivables, Debtly gives you a crystal-clear picture of who owes you, who you owe, and exactly how each balance changes over time.\n\nWHY DEBTLY?\nMost finance apps are built for budgeting or debt payoff planning. Debtly is different - it's designed specifically for tracking personal debts, IOUs, and money owed between people. No complicated setup. No bank connections required. Just simple, powerful debt tracking that works.\n\nCORE FEATURES:\n\nINSTANT DEBT RECORDING\nAdd a new debt or IOU in seconds. Record who borrowed money, how much, when it's due, and attach notes for context. Supports multiple currencies so you can track debts across borders.\n\nPERSON-BY-PERSON OVERVIEW\nSee every balance broken down by person. Know at a glance: who owes you the most, who you need to pay back first, and what the total picture looks like. No more guessing or mental math.\n\nSMART DUE DATE REMINDERS\nNever miss a repayment deadline. Set custom reminders for upcoming due dates and get notified before payments are late. Stay ahead of every obligation - both what you owe and what's owed to you.\n\nBUILT-IN ANALYTICS & INSIGHTS\nUnderstand your debt patterns with visual analytics. See trends over time, identify which debts to prioritize for collection, and use smart payoff plans to decide what to settle first.\n\nMULTI-CURRENCY SUPPORT\nTrack debts in different currencies without mixing them up. Perfect for international friendships, travel debts, or cross-border business dealings.\n\nATTACH NOTES & HISTORY\nAdd context to every entry with notes. Review the full payment history for each debt - see what was paid, when, and what remains. Export data when you need records.\n\n100% PRIVATE & AD-FREE\nYour financial data is yours alone. Debtly works without ads, without tracking, and without a forced account. No third-party access. No data mining. Just your debts, your way.\n\nICLOUD SYNC (OPTIONAL)\nKeep your records synchronized across iPhone and iPad with optional iCloud sync. Your data stays updated on all your devices when you want it - and stays private when you don't.\n\nPERFECT FOR:\n- Friends splitting dinner bills, rent, or vacation costs\n- Family members tracking shared expenses or personal loans\n- Freelancers managing client payments and receivables\n- Small business owners tracking who owes what\n- Anyone who lends or borrows money regularly\n\nPRIVACY FIRST:\nDebtly is built with privacy at its core. We believe your financial information should stay with you. That's why Debtly requires no account registration, has no ads or tracking, stores data locally on your device, and offers optional - never forced - cloud sync.\n\nDownload Debtly today. Track every IOU, every loan, every bill. Never lose track of money again.\n\n---\nTerms of Use: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\nPrivacy Policy: https://www.sefacemturan.com/privacy/debtly",
        thumbnailUrl:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a2/76/f1/a276f137-9a77-a44e-456c-9ed0d521f018/AppIcon-0-0-1x_U007ephone-0-1-85-220.jpeg/100x100bb.jpg',
        url: 'https://apps.apple.com/us/app/debtly-personal-debt-tracker/id6760789443',
      },
      {
        id: 'thryvpay',
        title: 'ThryvPay',
        description:
          'Getting paid faster has never been easier. ThryvPay lets you accept payments anywhere, anytime, with just a few clicks. ThryvPay mobile app is free to download with no hidden fees or set-up costs. Offer safe and secure contactless payments while providing convenience to your customers with the ThryvPay Mobile Card reader which offers on the go tap, insert and swiped credit card payment options, QR code payments and instant payment requests right from your mobile phone. \n \nAccept all major credit cards with competitive processing rates, next-day funding, and charge optional flat convenience fees or surcharge fees to minimize processing costs. \n \nAccept Automated Bank Transfers and save even more on fees. Set the max you will accept for credit card transactions. \n \nAccept in-demand digital payment options from Wallet Pay, giving your customers convenience at check-out. Wallet Pay incurs the same processing fees as credit card payments, reduces paper usage with electronic receipts, and provide accessibility and encryption for extra security. \n \nGive your customers more purchasing power with affordable ThryvPay Financing options now available for select industries (U.S. only). \n \nCreate and save your customized services for easy management and organization. ThryvPay allows you to create instant payment requests for your saved paid services. Offer your customers flexibility by setting up automatic one-time payments or recurring payments to build customer loyalty. Allow optional tipping to increase profits for you and your staff. \n \nGet real-time payment activity and details for all your transactions in one place. View and manage your payments, fees, and deposits. Track pending, paid and overdue payments, so your accounting is always up to date. \n \nSubject to ThryvPay terms of use and privacy policy.  \n\nTerms and Conditions: \nhttps://thryv.com/thryvpay-terms/',
        thumbnailUrl:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e9/40/79/e9407913-9d8c-1b9c-768a-8589e3093403/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg',
        url: 'https://apps.apple.com/us/app/thryvpay/id1554576474',
      },
      {
        id: 'thryv-command-center',
        title: 'Thryv Command Center',
        description:
          "An easier way to communicate starts here. Thryv Command Center lets you connect your messages across email, social media, phone and WebChat in one centralized inbox for free. You won't have to jump between platforms or deal with complicated workflows ever again, instead handle your team and customer chats in one spot no matter where you are.\n- Inbox: access all your favorite channels within one single conversation for every customer. With Inbox, all your client messages from email, social media, phone, video and even WebChat are unified into one easy to follow thread so you can get back to running your business.\n- Calls: make voice and video calls easily on to go from the Thryv Command Center app with a dedicated phone line solely for your business so you can better manage your time.\nReady to get started? Download Thryv Command Center for free now and never miss another message from your team or customers, no matter the channel - email, phone, video, social or WebChat.",
        thumbnailUrl:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/5e/64/965e6494-00eb-33a1-7e04-247c5f1b67f5/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg',
        url: 'https://apps.apple.com/us/app/thryv-command-center/id1672665968',
      },
      {
        id: 'carrier-360',
        title: 'Carrier 360',
        description:
          "Whether you are an owner-operator or manage an entire fleet, Carrier 360 can help you run your business every step of the way. Carrier 360 is J.B. Hunt's free trucking app where approved carriers can find available truckloads and manage their contracted power-only and drayage freight. With Carrier 360 you can:\n\n- Access J.B. Hunt's load board\n- Save your frequently made load searches as Favorites\n- Book loads instantly or negotiate offers in-app\n- Post your available trucks\n- Gain access to thousands of facility reviews and ratings\n- Assign drivers to loads and manage your fleet\n- Initiate load tracking\n- Manage detention automatically without making phone calls (requires location services)\n- Upload documents using your smartphone camera or files\n- Create electronic invoices effortlessly by clicking a few buttons\n- Get paid in 2 days or less with free Quick Pay*\n- Enjoy fuel discounts with the J.B. Hunt 360 Fuel Card, starting at 12 cents/mile**\n\nAt J.B. Hunt, we strive to provide technology that helps carriers save money, find more time to drive, and experience a better way of doing business. Need assistance? Contact us at 360CarrierSupport@jbhunt.com or 1-844-252-1793.\n\n\n* For details on free Quick Pay, visit info.jbhunt.com/360pay\n** Learn more about fuel Perks at jbhunt.com/perks",
        thumbnailUrl:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5f/d1/99/5fd19917-7653-6bd3-e01a-ae8417d02d76/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100bb.jpg',
        url: 'https://apps.apple.com/us/app/carrier-360-by-j-b-hunt/id1097181984',
      },
      {
        id: 'booktix-scanner',
        title: 'BookTix Scanner',
        description:
          'The new BookTix Scanner app is used with the new BookTix Platform.  If you are currently using our legacy platform, continue to use the current app for scanning.',
        thumbnailUrl:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fe/f3/a4/fef3a453-64d1-7bf8-dfa2-51994be4971e/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/100x100bb.jpg',
        url: 'https://apps.apple.com/us/app/booktix-scanner/id6448060612',
      },
    ],
  },
  {
    id: 'examples',
    title: 'Examples',
    description: 'Showcase small builds, code snippets, experiments, and ideas in progress.',
    children: [
      {
        id: 'singleton-class',
        title: 'Singleton Class',
        description:
          'A TypeScript example showing one shared instance for app-wide settings or services.',
      },
      {
        id: 'repository-architecture',
        title: 'Repository Architecture',
        description:
          'Example repository architecture for handling data synchronization between local storage and remote servers.',
      },
      {
        id: 'pubsub',
        title: 'PubSub',
        description:
          'A publish-subscribe example for decoupling events between independent parts of an app.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Give visitors a clear way to reach you.',
  },
];

const HomeScreen = () => {
  const handleItemPress = (item: ExampleListItem) => {
    console.log('Item pressed:', item);
    Alert.alert(`You pressed: ${item.title}`);
  };

  return (
    <SafeAreaInsetsView style={styles.container}>
      <Text style={styles.heading}>My Portfolio</Text>
      <ExampleList
        items={exampleItems}
        onItemPress={handleItemPress}
        style={styles.list}
      />
    </SafeAreaInsetsView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  heading: {
    paddingHorizontal: 20,
    paddingTop: 24,
    color: '#111827',
    fontSize: 28,
    fontWeight: '800',
  },
  list: {
    paddingTop: 20,
  },
});

export default HomeScreen;
