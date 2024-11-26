export function correctTail(body: string, tail: string): boolean {
  if (typeof body !== "string" || typeof tail !== "string") {
    return false;
  }
  let sub: string = body.substring(body.length - tail.length);
  return sub === tail;
}
