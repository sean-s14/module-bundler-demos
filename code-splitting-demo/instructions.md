# Steps To Reproduce

1. Run `npm install`
2. Run `npx webpack`
3. Open `index.html` in a browser. You should see "Module A" and "Module B" in the console.

Now let's add code splitting:

1. Open `src/main.js` and comment out everything under 'Without Code Splitting' and uncomment everything under 'With Code Splitting'
2. Run `npx webpack`
3. Open `index.html` in a browser. You should see "Module A" in the console. Click the "Load Module B" button and you should see "Module B" in the console.
