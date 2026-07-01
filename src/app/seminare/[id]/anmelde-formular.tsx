"use client";

import { useFormState, useFormStatus } from "react-dom";
import { anmelden, type AnmeldeState } from "./actions";

const initial: AnmeldeState = { ok: false, message: "" };

function AbsendenButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-dark disabled:opacity-60"
    >
      {pending ? "Wird gesendet …" : "Verbindlich anmelden"}
    </button>
  );
}

const feld =
  "mt-1 w-full border border-line bg-white px-3 py-2 text-ink outline-none focus:border-ink";

export function AnmeldeFormular({ seminarId }: { seminarId: number }) {
  const [state, formAction] = useFormState(anmelden, initial);

  if (state.ok) {
    return (
      <div className="border border-line bg-paper p-6">
        <p className="font-display text-lg text-ink">{state.message}</p>
        <p className="mt-2 text-sm text-ink-soft">
          Wir haben Ihre Anmeldung erfasst und melden uns bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="seminarId" value={seminarId} />

      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name *
        </label>
        <input id="name" name="name" required className={feld} />
      </div>

      <div>
        <label htmlFor="firma" className="text-sm font-medium text-ink">
          Firma
        </label>
        <input id="firma" name="firma" className={feld} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          E-Mail *
        </label>
        <input id="email" name="email" type="email" required className={feld} />
      </div>

      {state.message && !state.ok && (
        <p className="text-sm text-accent-dark">{state.message}</p>
      )}

      <AbsendenButton />
    </form>
  );
}
