export function slugify(str: string): string {
  str = str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/g, '');
  str = str.replace(/ +/g, '-');
  return str;
}
