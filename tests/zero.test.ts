'use strict';

import { describe, expect, test } from '@jest/globals';
import { CmdGroup, ShopbotPrinter, ZeroA, ZeroB } from '../src/index';

describe('Shopbot Zero Commands', () => {

  test('Assert ZeroB Command', async () => {

    const group = new CmdGroup('Test');
    group.push(new ZeroB());

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nZB\n');
  });

  test('Assert ZeroA Command', async () => {

    const group = new CmdGroup('Test');
    group.push(new ZeroA());

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nZA\n');
  });
});