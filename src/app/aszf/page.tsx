import { SITE, BANKSZAMLAK } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek",
  description: `${SITE.name} általános szerződési feltételei.`,
};

export default function AszfPage() {
  return (
    <main className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-fleet-dark)] mb-2">
          Általános Szerződési Feltételek
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-10">
          Hatályos: 2025. január 1-től
        </p>

        <div className="prose prose-sm max-w-none text-[var(--color-text-secondary)] [&_h2]:text-[var(--color-fleet-dark)] [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3">

          <h2>1. Az ÁSZF tárgya és hatálya</h2>
          <p>
            Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF)
            tartalmazzák a <strong>{SITE.name}</strong> (székhelye: {SITE.address};
            e-mail: {SITE.email}) által nyújtott flottakezelési és
            járműbérlési szolgáltatások igénybevételének feltételeit.
          </p>
          <p>
            Az ÁSZF hatálya kiterjed minden olyan szerződéses jogviszonyra,
            amelyet a Szolgáltató természetes személyekkel (B2C) vagy jogi
            személyekkel, gazdasági társaságokkal (B2B) köt.
          </p>

          <h2>2. A Szolgáltató adatai</h2>
          <p>
            Cégnév: {SITE.name}<br />
            Székhely: {SITE.address}<br />
            Cégjegyzékszám: {SITE.cegJegyzekSzam}<br />
            Adószám: {SITE.adoSzam}<br />
            EU adószám: {SITE.euAdoSzam}<br />
            E-mail: {SITE.email}<br />
            Weboldal: {SITE.url}
          </p>
          <p className="font-semibold mt-4 mb-2">Bankszámlaszámok:</p>
          <p>
            {BANKSZAMLAK.map((b) => (
              <span key={b.bank}>
                {b.bank}: <span className="font-mono">{b.szam}</span><br />
              </span>
            ))}
          </p>

          <h2>3. A szolgáltatások leírása</h2>
          <p>
            A Szolgáltató az alábbi főbb szolgáltatásokat nyújtja:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vállalati flottakezelés (B2B)</li>
            <li>Prémium személygépkocsi-bérlés (B2C és B2B)</li>
            <li>Egyedi flottacsomagok és hosszútávú szerződések</li>
          </ul>
          <p>
            A szolgáltatások részletes leírása a weboldalon, illetve az egyedi
            ajánlatban kerül rögzítésre.
          </p>

          <h2>4. Szerződéskötés menete</h2>
          <p>
            A szerződés az ajánlatkérő űrlap kitöltésével és elküldésével
            indul. A Szolgáltató 24 munkaidős órán belül egyedi ajánlatot küld.
            A szerződés az ajánlat Ügyfél általi írásbeli (e-mailes)
            elfogadásával jön létre.
          </p>

          <h2>5. Díjak és fizetési feltételek</h2>
          <p>
            A szolgáltatások díjait az egyedi ajánlat tartalmazza. Az árak
            általában forintban (HUF) értendők, és az ÁFA-t nem tartalmazzák,
            kivéve ha az ajánlat másképp rendelkezik.
          </p>
          <p>
            Fizetési határidő: az ajánlatban meghatározott időpont, de
            legkésőbb a teljesítés előtt 3 munkanappal, kivéve ha a felek
            eltérően állapodnak meg.
          </p>

          <h2>6. A Szolgáltató kötelezettségei</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              A megrendelt szolgáltatást a szerződésben rögzített feltételek
              szerint teljesíti.
            </li>
            <li>
              Biztosítja a bérleti időszakra vonatkozó érvényes gépjármű-
              felelősségbiztosítást.
            </li>
            <li>
              A járművet megfelelő műszaki állapotban, tisztán adja át.
            </li>
          </ul>

          <h2>7. Az Ügyfél kötelezettségei</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>A díjakat határidőre megfizeti.</li>
            <li>
              A járművet rendeltetésszerűen, a közlekedési szabályok
              betartásával használja.
            </li>
            <li>
              A járműben keletkezett kárt haladéktalanul jelenti a
              Szolgáltatónak.
            </li>
            <li>
              A járművet a bérleti idő lejártával az átvételi helyen, eredeti
              állapotban adja vissza.
            </li>
          </ul>

          <h2>8. Felelősség</h2>
          <p>
            A Szolgáltató nem vállal felelősséget a vis maior eseményekből
            eredő károkért, késedelmekért. Az Ügyfél által okozott károkért az
            Ügyfél teljes körű felelősséggel tartozik. A Szolgáltató
            felelőssége egyébként legfeljebb a bérleti díj összegéig terjed.
          </p>

          <h2>9. Felmondás és elállás</h2>
          <p>
            Az Ügyfél a szerződéstől a teljesítés megkezdése előtt legalább
            48 órával írásban elállhat. Késői lemondás esetén a Szolgáltató
            bánatpénzt számíthat fel, amelynek mértéke az egyedi ajánlatban
            kerül rögzítésre.
          </p>

          <h2>10. Adatvédelem</h2>
          <p>
            A személyes adatok kezelésére vonatkozó részletes tájékoztatót az{" "}
            <a
              href="/adatvedelmi-tajekoztato"
              className="text-[var(--color-fleet-orange)] underline hover:no-underline"
            >
              Adatvédelmi tájékoztató
            </a>{" "}
            tartalmazza.
          </p>

          <h2>11. Vitarendezés</h2>
          <p>
            A felek vitás kérdéseiket elsősorban tárgyalás útján rendezik. Ha
            ez nem vezet eredményre, a jogvita elbírálására a Szolgáltató
            székhelye szerinti illetékes bíróság kizárólagosan illetékes. Az
            irányadó jog: magyar jog.
          </p>

          <h2>12. Az ÁSZF módosítása</h2>
          <p>
            A Szolgáltató jogosult az ÁSZF-et egyoldalúan módosítani. A
            módosításokról az ügyfeleket legalább 15 nappal korábban
            értesíti e-mailben vagy a weboldalon közzétett tájékoztatóban.
          </p>
        </div>
      </div>
    </main>
  );
}
