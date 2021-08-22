const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessChallenge',
    input: 'src/main.ts',
    output: 'challenge',
  },
});
