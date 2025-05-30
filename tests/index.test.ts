'use strict';

import { describe, expect, test } from '@jest/globals';
import { CmdGroup, MoveZ, myObject, ShopbotPrinter } from '../src/index';

describe('Basic Operations for Shopbot', () => {

  test('Assert object values', async () => {

    expect(myObject.name).toBe('Shopbot');
    expect(myObject.version).toBe('0.0.1');
  });

  test('Assert CmdGroup Formatting', async () => {

    const group = new CmdGroup('Test');
    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\n');

  });

  test('Assert Number Formatting with NaN Vaues', async () => {

    const group = new CmdGroup('Test');
    group.push(new MoveZ(Number.NaN));

    const output = ShopbotPrinter.print(group);
    expect(output).toContain('Test\nMZ,');

  });

  test('Assert Number Formatting with Precision Vaues', async () => {

    const group = new CmdGroup('Test');
    group.push(new MoveZ(0.332425334));

    const output = ShopbotPrinter.print(group);
    expect(output).toBe('\n\' Test\nMZ, 0.3324\n');

  });

});