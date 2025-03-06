import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'kifkif',
  webDir: 'www',
  server: {
    allowNavigation: ["*"],
    cleartext: true,
    androidScheme: "http"
  }
};

export default config;
