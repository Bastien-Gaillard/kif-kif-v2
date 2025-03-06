// vite.config.js
export default {
  optimizeDeps: {
    exclude: ['.angular/cache', 
      'ion-alert.entry.js',
      'ion-item.entry.js',
      'ion-tab-bar.entry.js',
      'ion-button.entry.js',
      'ion-card.entry.js',
    ],
  },
};
