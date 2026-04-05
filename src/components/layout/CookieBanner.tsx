"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[var(--color-fleet-dark)] border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-300 leading-relaxed flex-1">
          Weboldalunk sütiket (cookie-kat) használ a jobb felhasználói élmény
          érdekében. Az oldal böngészésével vagy az „Elfogadom" gomb
          megnyomásával hozzájárul a sütik használatához. Részletekért olvassa
          el{" "}
          <Link
            href="/adatvedelmi-tajekoztato"
            className="text-[var(--color-fleet-orange)] underline hover:no-underline"
          >
            adatvédelmi tájékoztatónkat
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2"
          >
            Elutasítom
          </button>
          <button
            onClick={accept}
            className="text-sm font-semibold rounded-xl px-5 py-2.5 bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white transition-colors"
          >
            Elfogadom
          </button>
          <button
            onClick={decline}
            aria-label="Bezárás"
            className="text-gray-500 hover:text-white transition-colors ml-1"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
