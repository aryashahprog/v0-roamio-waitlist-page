import { WaitlistForm } from "./waitlist-form"
import { HowItWorks } from "./how-it-works"
import { CoreFeatures } from "./core-features"
import { RedditPosts } from "./reddit-posts"
import { Footer } from "./footer"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-2">
            <span
              className="text-roamio-blue text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              roamio
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Campus Life. Simplified.
            </h1>
            <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
              Get personalized event alerts, skip the flyers, and make every moment count.
            </p>
            <WaitlistForm />
          </div>
        </section>

        {/* How It Works */}
        <section className="container px-4 py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">How It Works</h2>
            <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
              Three simple steps to never miss out on campus events again
            </p>
            <HowItWorks />
          </div>
        </section>

        {/* Core Features */}
        <section className="container px-4 py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Core Features</h2>
            <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
              Everything you need to make the most of your campus experience
            </p>
            <CoreFeatures />
          </div>
        </section>

        {/* Reddit Posts Section */}
        <section className="container px-4 py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-8">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Real Student Problems</h2>
            <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
              See what students are saying about campus navigation challenges
            </p>
          </div>
          <RedditPosts />
        </section>
      </main>

      <Footer />
    </div>
  )
}
