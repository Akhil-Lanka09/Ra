import test from 'node:test';
import assert from 'node:assert';
import { getGstRate, getGstLabel, calcItemGst } from './gst.ts';

test('getGstRate returns correct rates', () => {
  assert.strictEqual(getGstRate('mng-001'), 0);
  assert.strictEqual(getGstRate('ghee-001'), 0.12);
  assert.strictEqual(getGstRate('pickle-001'), 0.12);
  assert.strictEqual(getGstRate('juice-001'), 0.12);
  assert.strictEqual(getGstRate('honey-001'), 0.05);
  assert.strictEqual(getGstRate('rice-001'), 0);
  assert.strictEqual(getGstRate('random'), 0);
});

test('getGstLabel returns correct labels', () => {
  assert.strictEqual(getGstLabel('mng-001'), 'GST Exempt');
  assert.strictEqual(getGstLabel('ghee-001'), 'GST 12%');
  assert.strictEqual(getGstLabel('pickle-001'), 'GST 12%');
  assert.strictEqual(getGstLabel('juice-001'), 'GST 12%');
  assert.strictEqual(getGstLabel('honey-001'), 'GST 5%');
  assert.strictEqual(getGstLabel('rice-001'), 'GST Exempt');
});

test('calcItemGst computes correct GST amount with rounding', () => {
  // Test cases for calcItemGst(price, qty, code)

  // 12% GST cases
  // 100 * 1 * 0.12 = 12
  assert.strictEqual(calcItemGst(100, 1, 'ghee-001'), 12);
  // 150 * 2 * 0.12 = 36
  assert.strictEqual(calcItemGst(150, 2, 'pickle-001'), 36);
  // 99 * 1 * 0.12 = 11.88 -> 12
  assert.strictEqual(calcItemGst(99, 1, 'juice-001'), 12);
  // 95 * 1 * 0.12 = 11.4 -> 11
  assert.strictEqual(calcItemGst(95, 1, 'juice-001'), 11);

  // 5% GST cases
  // 100 * 1 * 0.05 = 5
  assert.strictEqual(calcItemGst(100, 1, 'honey-001'), 5);
  // 250 * 3 * 0.05 = 37.5 -> 38
  assert.strictEqual(calcItemGst(250, 3, 'honey-001'), 38);
  // 249 * 1 * 0.05 = 12.45 -> 12
  assert.strictEqual(calcItemGst(249, 1, 'honey-001'), 12);

  // Exempt cases
  // 500 * 10 * 0 = 0
  assert.strictEqual(calcItemGst(500, 10, 'mng-001'), 0);
  assert.strictEqual(calcItemGst(1000, 1, 'rice-001'), 0);
});
