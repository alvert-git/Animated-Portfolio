export function cn(...classes) {
  return classes
    .filter(Boolean)
    .map(cls => {
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object') {
        return Object.keys(cls).filter(key => cls[key]).join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}