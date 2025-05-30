'use strict';

import { describe, expect, test } from 'vitest';
import {
  CmdGroup,
  Jog2, Jog3, Jog4,
  JogB,
  JogX, JogY, JogZ,
  ShopbotPrinter
} from '../src/index';

describe('Shopbot Jog Commands', () => {

  test('Assert Jog2 Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new Jog2(3.4, 5.2));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nJ2, 3.4000,5.2000\n');
  });

  test('Assert Jog3 Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new Jog3(3.4, 5.2, 2.331));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nJ3, 3.4000,5.2000,2.3310\n');
  });

  test('Assert Jog4 Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new Jog4(3.4, 5.2, 2.331, 1.01));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nJ4, 3.4000,5.2000,2.3310,1.0100\n');
  });

  test('Assert JogB Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new JogB(3.4));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nJB, 3.4000\n');
  });

  test('Assert JogX Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new JogX(3.4));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nJX, 3.4000\n');
  });

  test('Assert JogY Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new JogY(3.4));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nJY, 3.4000\n');
  });

  test('Assert JogZ Command', async () => {
    const group = new CmdGroup('Test');
    group.push(new JogZ(3.4));

    const output = ShopbotPrinter.print(group);

    expect(output).toBe('\n\' Test\nJZ, 3.4000\n');
  });
});