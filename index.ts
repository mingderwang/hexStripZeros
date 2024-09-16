// if hex string is 0x return 0x

export function hexStripZeros(hex: string): string {
  if (hex == '0x') {
     return '0x'
  } 
  if (!hex.startsWith('0x') || hex.length <= 2) {
    throw new Error('Invalid hexadecimal string');
  }
  const stripped = hex.slice(2).replace(/^0+/, '');
  return stripped.length === 0 ? '0x' : `0x${stripped}`;
}

