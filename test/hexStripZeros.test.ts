// hexStripZeros.test.ts
import { describe, it, expect } from 'bun:test';
import { hexStripZeros } from '../index.ts';

describe('hexStripZeros', () => {
  it('should remove leading zeros from a hex string', () => {
    expect(hexStripZeros('0x00001234')).toBe('0x1234');
    expect(hexStripZeros('0x0000')).toBe('0x');
    expect(hexStripZeros('0x0000000000000000000000000000000000000000')).toBe('0x');
    expect(hexStripZeros('0x1234')).toBe('0x1234');
  });

  it('should handle 0x hex values', () => {
    expect(hexStripZeros('0x')).toBe('0x');
  });

  it('should handle single-digit hex values', () => {
    expect(hexStripZeros('0x0')).toBe('0x');
    expect(hexStripZeros('0x1')).toBe('0x1');
  });

  it('should throw an error for invalid hex strings', () => {
    expect(() => hexStripZeros('1234')).toThrow('Invalid hexadecimal string');
    expect(() => hexStripZeros('0')).toThrow('Invalid hexadecimal string');
  });
});
