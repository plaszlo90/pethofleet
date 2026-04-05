"use client";

import { useState } from "react";
import { inquirySchema, type InquiryData } from "@/types/inquiry";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryData, string>>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string || undefined,
      type: formData.get("type") as "b2b" | "b2c",
      message: formData.get("message") as string,
    };

    const result = inquirySchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof InquiryData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof InquiryData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setState("idle");
      return;
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) throw new Error("Szerver hiba");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <p className="text-2xl font-bold text-green-800 mb-2">Köszönjük!</p>
        <p className="text-green-700">
          Megkaptuk az üzenetét. 24 órán belül felvesszük Önnel a kapcsolatot.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Típus választó */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-fleet-dark)] mb-2">
          Érdeklődés típusa *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: "b2b", label: "Céges (B2B)" },
            { value: "b2c", label: "Magánszemély (B2C)" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 rounded-xl border-2 border-[var(--color-fleet-border)] p-4 cursor-pointer has-[:checked]:border-[var(--color-fleet-orange)] has-[:checked]:bg-[var(--color-fleet-orange-light)] transition-colors"
            >
              <input
                type="radio"
                name="type"
                value={opt.value}
                defaultChecked={opt.value === "b2b"}
                className="accent-[var(--color-fleet-orange)]"
              />
              <span className="text-sm font-medium text-[var(--color-fleet-dark)]">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
        {errors.type && (
          <p className="text-xs text-red-600 mt-1">{errors.type}</p>
        )}
      </div>

      {/* Név + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Neve *" name="name" placeholder="Kovács János" error={errors.name} />
        <Field label="E-mail *" name="email" type="email" placeholder="kovacs@pelda.hu" error={errors.email} />
      </div>

      {/* Telefon + Cég */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Telefonszám *" name="phone" type="tel" placeholder="+36 30 123 4567" error={errors.phone} />
        <Field label="Cég neve" name="company" placeholder="Példa Kft. (opcionális)" error={errors.company} />
      </div>

      {/* Üzenet */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-fleet-dark)] mb-2">
          Üzenet *
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Kérjük írja le, mire lenne szüksége: járművek száma, bérlési időtartam, egyéb igények..."
          className={cn(
            "w-full rounded-xl border px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-fleet-orange)] transition-colors",
            errors.message
              ? "border-red-400"
              : "border-[var(--color-fleet-border)]"
          )}
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message}</p>
        )}
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Hiba történt a küldés során. Kérjük próbálja újra, vagy hívjon minket.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-8 py-4 text-base bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Küldés..." : "Ajánlatkérés elküldése"}
      </button>

      <p className="text-xs text-[var(--color-text-secondary)] text-center">
        Az adatai kezelésével kapcsolatban olvassa el az{" "}
        <a href="/adatvedelmi-tajekoztato" className="underline hover:text-[var(--color-fleet-dark)]">
          adatvédelmi tájékoztatónkat
        </a>
        .
      </p>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

function Field({ label, name, type = "text", placeholder, error }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--color-fleet-dark)] mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-fleet-orange)] transition-colors",
          error ? "border-red-400" : "border-[var(--color-fleet-border)]"
        )}
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
