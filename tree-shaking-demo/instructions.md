# Steps to reproduce

1. Run `npm install` to install dependencies
2. Run `npm run build` to build the project
3. Check `dist/bundle.js` to see that there are numbers being squared and cubed in the code
4. Now comment out any code relating to the cube function (keep the import) in `src/main.js` like so:

```js
// const result2 = cube(5);
// console.log(result2);
```

5. Run `npm run build` again
6. Check `dist/bundle.js` to see that the cube function is not being included in the code
