export function generateRandomId(): string {
  return Math.random().toString(35).slice(2);
}
