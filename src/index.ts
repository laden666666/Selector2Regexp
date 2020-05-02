import getSelectorNodes from './lib/convertToNodes';
import generateRegexString from './lib/generateRegexString';
import { CSSSelectorString } from '../types';

export default function selector2Regex(data: CSSSelectorString) {
  if (!data) {
    throw new Error('1 argument required, but only 0 present.');
  }
  const selectorNodes = getSelectorNodes(data);

  return selectorNodes && selectorNodes.map((node) => generateRegexString(node!));
}
