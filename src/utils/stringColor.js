import hash from 'string-hash'

export default function (str) {
  const num = hash(str) % 5;
  switch (num) {
    case 0: return 'var(--blue)';
    case 1: return 'var(--secondary)';
    case 2: return 'var(--success)';
    case 3: return 'var(--info)';
    case 4: return 'var(--warning)';
    default: return 'var(--primary)';
  }
}