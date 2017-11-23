// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBAnB0zlbqf90u_aNBnL_yUXr0ShmdzIw0',
    authDomain: 'zelda-1-randomizer-tracker.firebaseapp.com',
    databaseURL: 'https://zelda-1-randomizer-tracker.firebaseio.com',
    projectId: 'zelda-1-randomizer-tracker',
    storageBucket: '',
    messagingSenderId: '209230779495'
  }
};
