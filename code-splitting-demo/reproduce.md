# Steps To Reproduce

1. In `package.json` ensure the `main` field points to `src/main-old.js`
2. In `webpack.config.js` ensure the `entry` field points to `src/main-old.js`
3. Run `npm install`
4. Run `npx webpack`
5. Open `index.html` in a browser. You should see "Module A" and "Module B" in the developer tools console

Now let's add code splitting:

1. In `package.json` ensure the `main` field points to `src/main.js`
2. In `webpack.config.js` ensure the `entry` field points to `src/main.js`
3. Run `npx webpack`
4. Open `index.html` in a browser. You should see "Module A" in the console. Click the "Load Module B" button and you should see "Module B" in the console.
