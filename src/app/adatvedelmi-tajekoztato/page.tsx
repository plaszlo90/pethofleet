import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description: `${SITE.name} adatvédelmi tájékoztatója a GDPR és az Info tv. alapján.`,
};

export default function AdatvedelmiPage() {
  return (
    <main className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-fleet-dark)] mb-2">
          Adatvédelmi tájékoztató
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-10">
          Hatályos: 2025. január 1-től — GDPR és az Info tv. alapján
        </p>

        <div className="prose prose-sm max-w-none text-[var(--color-text-secondary)] [&_h2]:text-[var(--color-fleet-dark)] [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3">

          <h2>1. Az adatkezelő</h2>
          <p>
            Adatkezelő: <strong>{SITE.name}</strong><br />
            Székhely: {SITE.address}<br />
            E-mail: {SITE.email}<br />
            Weboldal: {SITE.url}
          </p>

          <h2>2. Kezelt adatok és célok</h2>
          <p>Az ajánlatkérő űrlapon keresztül az alábbi adatokat kezeljük:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Név</strong> — az ajánlat személyre szabásához</li>
            <li><strong>E-mail cím</strong> — kapcsolattartáshoz, visszaigazoláshoz</li>
            <li><strong>Telefonszám</strong> — visszahíváshoz (opcionális)</li>
            <li><strong>Cég neve</strong> — B2B ajánlat elkészítéséhez (opcionális)</li>
            <li><strong>Üzenet tartalma</strong> — az igény felméréshez</li>
          </ul>
          <p>
            Az adatkezelés jogalapja: az érintett hozzájárulása (GDPR 6. cikk
            (1) a) pont), illetve szerződés előkészítése (GDPR 6. cikk (1) b)
            pont).
          </p>

          <h2>3. Sütik (cookie-k)</h2>
          <p>
            Weboldalunk sütiket használ a jobb felhasználói élmény érdekében.
            A sütik kis adatfájlok, amelyeket a böngésző tárol el a
            felhasználó eszközén.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Szükséges sütik:</strong> a weboldal alapvető
              működéséhez elengedhetetlenek (pl. munkamenet-kezelés).
            </li>
            <li>
              <strong>Hozzájárulás cookie:</strong> tárolja, hogy a látogató
              elfogadta-e a cookie-k használatát.
            </li>
          </ul>
          <p>
            A sütik letilthatók a böngésző beállításaiban, ez azonban
            korlátozhatja egyes funkciók működését.
          </p>

          <h2>4. Adatmegőrzési idő</h2>
          <p>
            Az ajánlatkéréssel kapcsolatos adatokat a kapcsolatfelvételtől
            számított 1 évig őrizzük meg, kivéve ha szerződés jön létre —
            ebben az esetben a jogszabályi előírásoknak megfelelően (általában
            5–8 év).
          </p>

          <h2>5. Adattovábbítás</h2>
          <p>
            Az ajánlatkérő üzenetek feldolgozásához a{" "}
            <strong>Resend</strong> e-mail szolgáltatást vesszük igénybe
            (adatfeldolgozó). Harmadik félnek személyes adatot nem adunk át,
            kivéve ha arra jogszabály kötelez.
          </p>
          <p>
            A weboldalon Google Maps beágyazás található; ennek
            betöltésekor a Google Inc. adatokat gyűjthet. A Google
            adatvédelmi tájékoztatója elérhető a{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-fleet-orange)] underline hover:no-underline"
            >
              policies.google.com
            </a>{" "}
            oldalon.
          </p>

          <h2>6. Az érintett jogai</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Hozzáférés joga</strong> — kérheti, milyen adatait kezeljük</li>
            <li><strong>Helyesbítés joga</strong> — kérheti hibás adatai javítását</li>
            <li><strong>Törlés joga</strong> — kérheti adatai törlését (feltéve, hogy jogi kötelezettség nem gátolja)</li>
            <li><strong>Adathordozhatóság joga</strong> — kérheti adatait géppel olvasható formátumban</li>
            <li><strong>Tiltakozás joga</strong> — tiltakozhat adatai kezelése ellen</li>
          </ul>
          <p>
            Jogait a {SITE.email} e-mail címen gyakorolhatja. Panasszal a
            Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH,{" "}
            <a
              href="https://naih.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-fleet-orange)] underline hover:no-underline"
            >
              naih.hu
            </a>
            ) fordulhat.
          </p>

          <h2>7. Kapcsolat</h2>
          <p>
            Adatvédelemmel kapcsolatos kérdéseivel forduljon hozzánk:
            <br />
            E-mail: <a href={`mailto:${SITE.email}`} className="text-[var(--color-fleet-orange)]">{SITE.email}</a>
          </p>
        </div>
      </div>
    </main>
  );
}
