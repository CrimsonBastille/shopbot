'use strict';

import { expect, test } from '@jest/globals';
import {
  CmdGroup,
  Move2, Move3, Move5, MoveB,
  MoveX, MoveY, MoveZ,
  ShopbotPrinter
} from '../src/index';

describe('Shopbot Move Commands', () => {

  test('Assert Move2 Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new Move2(3.4, 5.2));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nM2, 3.4000,5.2000\n');
  });

  test('Assert Move3 Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new Move3(3.4, 5.2, 2.331));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nM3, 3.4000,5.2000,2.3310\n');
  });

  test('Assert Move5 Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new Move5(3.4, 5.2, 2.331, 1.01, 2.3));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nM5, 3.4000,5.2000,2.3310,1.0100,2.3000\n');
  });

  test('Assert MoveB Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new MoveB(3.4));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nMB, 3.4000\n');
  });

  test('Assert MoveX Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new MoveX(3.4));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nMX, 3.4000\n');
  });

  test('Assert MoveY Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new MoveY(3.4));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nMY, 3.4000\n');
  });

  test('Assert MoveZ Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new MoveZ(3.4));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nMZ, 3.4000\n');
  });
});