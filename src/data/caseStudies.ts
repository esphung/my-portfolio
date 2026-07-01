import type { CaseStudy } from '../types/portfolio';

export const caseStudies: CaseStudy[] = [
  {
    id: 'pubsub-deep-link-authentication',
    title: 'Pub/Sub Deep Link Authentication',
    problem:
      "Users authenticated external providers like Gmail and Outlook in a web view, but when the OAuth flow redirected back into the app there was no reliable way to notify whichever screen had initiated the authentication. Passing callbacks through navigation wasn't scalable, and multiple screens could eventually initiate provider registration.",

    solution:
      'I created a lightweight publish/subscribe event bus that listened for incoming deep links at the application level. After parsing the OAuth callback, the event bus published a provider-authenticated event that any interested screen could subscribe to.',

    howIBuiltIt: [
      'Created a singleton PubSub service.',
      'Registered a global React Native Linking listener during app initialization.',
      'Parsed incoming deep links to determine the provider and authentication result.',
      'Published typed events such as providerAuthenticated and providerAuthenticationFailed.',
      'Subscribed from registration screens to update UI without relying on navigation callbacks.',
      'Automatically unsubscribed listeners when screens unmounted to prevent memory leaks.',
    ],

    whatIMade: [
      'Reusable PubSub class.',
      'Global deep link handler.',
      'Typed authentication events.',
      'Provider registration flow for Gmail, Outlook, and future providers.',
    ],

    challenges: [
      'Deep links could arrive while different screens were active, making direct callbacks unreliable.',
      'Needed a solution that worked regardless of where the OAuth flow was initiated.',
      'Prevented duplicate event handling by ensuring subscribers were cleaned up correctly.',
    ],

    outcome:
      'The authentication flow became decoupled from individual screens, making it easier to add new providers and simplifying future OAuth integrations. New providers only needed to publish the same events without changing the UI flow.',

    stack: [
      'React Native',
      'TypeScript',
      'Linking API',
      'OAuth',
      'Pub/Sub Pattern',
    ],

    images: [
      {
        sectionId: 'whatIMade',
        id: 'pubsub-example',
        imageUrl: 'https://i.postimg.cc/8zc42GHj/Pub-Sub.png',
        aspectRatio: 670 / 800,
        caption: 'Example of singleton PubSub service.',
      },
      {
        sectionId: 'whatIMade',
        id: 'pubsub-usage',
        imageUrl: 'https://i.postimg.cc/qvgfj96G/Pub-Sub-Usage.png',
        aspectRatio: 1280 / 1137,
        caption: 'Example of PubSub service usage.',
      },
    ],
  },

  {
    id: 'persisting-user-session-between-react-native-and-webview',
    title: 'Persisting User Session Between React Native and WebView',
    problem:
      'The React Native app opened an embedded web experience, but the user was not automatically logged in inside the WebView. This created a broken experience where users had already authenticated in the native app but were asked to log in again inside the web app.',

    solution:
      "I reused the authenticated session from the React Native app by injecting the current session token into the WebView before the web app loaded. The token was written into the browser's local storage so the embedded web app could initialize with the same authenticated user.",

    howIBuiltIt: [
      'Retrieved the active session token from the React Native authentication layer.',
      'Created injected JavaScript for the WebView to write the token into local storage.',
      'Ensured the script ran before the web app attempted to read authentication state.',
      'Added guard logic so the WebView only loaded after a valid token was available.',
      'Handled token refresh and logout behavior so the native app and WebView stayed in sync.',
    ],

    whatIMade: [
      'Authenticated WebView launch flow.',
      'Session token injection script.',
      'Shared login experience between native and web.',
      'Logout synchronization between React Native and the embedded web app.',
    ],

    challenges: [
      'The web app expected its session token to already exist in browser local storage.',
      'The WebView could load before authentication data was injected, causing inconsistent login behavior.',
      'Needed to avoid exposing or logging sensitive token data during debugging.',
    ],

    outcome:
      'Users could open the embedded web app from React Native and remain logged in as the same user without re-authenticating. This reduced friction, created a smoother handoff between native and web experiences, and made the WebView feel like a natural extension of the mobile app.',

    stack: [
      'React Native',
      'TypeScript',
      'React Native WebView',
      'JavaScript Injection',
      'Local Storage',
      'Session Authentication',
    ],

    images: [
      {
        imageUrl: 'https://i.postimg.cc/J4VcTJyp/Webview-Injection.png',
        aspectRatio: 670 / 800,
        sectionId: 'whatIMade',
        id: 'webview-injection',
        caption: 'Example of WebView injection for session token management.',
      },
    ],
  },
  // Repo Architecture
  {
    id: 'offline-first-repository-architecture',
    title: 'Offline-First Repository Architecture',
    problem:
      'The application needed to remain fully functional in environments with unreliable network connectivity. Relying solely on remote APIs introduced delays, prevented users from completing critical workflows, and caused large file uploads to block other interactions.',

    solution:
      'I implemented an offline-first repository architecture with separate local and remote repositories. The application always read from and wrote to a local data source first, then synchronized changes with the backend once network conditions were suitable.',

    howIBuiltIt: [
      'Defined repository interfaces to abstract data access from the rest of the application.',
      'Implemented local repositories backed by RealmDB for persistent offline storage.',
      'Implemented remote repositories backed by an Axios API client.',
      'Used dependency injection to provide the appropriate data source to each repository.',
      'Applied optimistic updates by writing changes locally before synchronizing with the backend.',
      'Moved network-intensive operations, such as file uploads, into background synchronization to prevent blocking the user experience.',
    ],

    whatIMade: [
      'Offline-first data layer.',
      'Repository abstraction for local and remote data sources.',
      'Dependency injection for storage and networking.',
      'Background synchronization pipeline.',
      'Optimistic state management.',
      'Use cases that encapsulate specific business logic and interact with the repository layer.',
    ],

    challenges: [
      'Maintaining a responsive experience while connectivity fluctuated.',
      'Keeping local and remote data synchronized without disrupting users.',
      'Ensuring long-running operations, like uploads, did not block other application workflows.',
    ],

    outcome:
      'The application remained responsive regardless of network quality. Users could continue working offline while changes were stored locally and synchronized automatically in the background. The repository pattern also improved maintainability by separating business logic from storage and networking implementations.',

    stack: [
      'React Native',
      'TypeScript',
      'RealmDB',
      'Axios',
      'Repository Pattern',
      'Dependency Injection',
      'Offline-First Architecture',
    ],

    images: [
      {
        imageUrl: 'https://i.postimg.cc/43DmJvRP/Use-Case-Example(1).png',
        aspectRatio: 506 / 800,
        sectionId: 'whatIMade',
        id: 'use-case-example',
        caption:
          'Example of a use case demonstrating the offline-first repository architecture.',
      },
    ],
  },
];
