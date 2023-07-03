export default function camelToDash(str) {
  return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
