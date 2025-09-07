import SignIn from "@/components/buttons/sign-in";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <section className="px-6 min-h-[calc(100vh-66px-80px)] flex items-center">
        <div className="max-w-4xl mx-auto py-10 text-center space-y-4">
          <h1 className="headline1">Én e-mail, og du er klar</h1>
          <p className="max-w-xl mx-auto text-balance">
            Uanset om du er ny eller allerede bruger PixiPay, skal du bare
            skrive din e-mail. Vi sender dig et login-link med det samme.
          </p>

          <SignIn />

          <div className="mt-10">
            <Link href="/club/login" className="link">
              Er du klubleder? Log ind her
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
