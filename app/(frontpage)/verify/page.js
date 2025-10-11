import Link from "next/link";

export default function VerifyRequest() {
  return (
    <main className="reading-max space-y-4 min-h-[calc(100vh-66px)] flex items-center px-6">
      <div>
        <h1 className="headline1">Et step mere...</h1>
        <p>
          Tjek din indbakke – vi har sendt dig et magic link. Klik på det, så er
          du inde hurtigere, end du kan sige ‘toast og saftevand’.
        </p>

        <p className="mt-6 text-md text-gray-600">
          Har du ikke modtaget mailen? Tjek spam/uønsket, eller prøv igen om et
          øjeblik.
        </p>

        <Link href="/login" className="btn btn-primary mt-6 w-full">
          Tilbage til login
        </Link>
      </div>
    </main>
  );
}
