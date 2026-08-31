import React from 'react';

/**
 * Renders a schema.org graph as JSON-LD. A server component by design — the
 * markup has to be in the HTML the crawler receives, not injected on hydration.
 *
 * `dangerouslySetInnerHTML` is the documented way to emit a script body in
 * React; the input is our own serialised object, never user input. The `<`
 * escape guards the one case that could still break out of the script element
 * if site copy ever contained it.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
