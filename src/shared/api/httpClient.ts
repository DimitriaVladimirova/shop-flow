export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

export async function getJson<T>(path: string): Promise<T> {
  const url = new URL(path, window.location.origin);
  const res = await fetch(url);
  if (!res.ok) {
    throw new HttpError(res.status, `Request to ${path} failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}
