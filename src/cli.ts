import selector2Regexp from './index';
import yargs from 'yargs';
import { version } from '../package.json';

const argv = yargs
  .usage(
    `
Usage:
  $0 [CSS Selector]
`
  )
  .example('$0 ".example"', 'Basic usage')
  .demandCommand(1)
  .help('h')
  .alias('h', 'help')
  .version(version)
  .alias('v', 'version').argv;

const input = argv._;

console.log(argv);

if (input.length > 1) {
  process.exit(1);
}

console.log(selector2Regexp(input[0]));