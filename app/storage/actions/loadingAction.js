export const LOADING = 'LOADING';

export function startStopLoading(payload) {
  return { type: LOADING, payload };
}