// Passthrough formatter for pre-wrapped HTML content rendered via `set:html`.
// The layout files alias this as `f` and feed it HTML strings built from
// topic sections/faqs (e.g. `<p>...</p>`), so it returns the input unchanged.
export function formatDate(input: string): string {
  return input;
}
