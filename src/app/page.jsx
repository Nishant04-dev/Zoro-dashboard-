"use client";
import React from "react";

function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container px-4 mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center gap-2">
                <i className="fas fa-robot text-2xl text-primary"></i>
                <span className="font-bold text-xl">DiscordBot</span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
                <a
                  href="#integration"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Integration
                </a>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="#login"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                Login
              </a>
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-9 w-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a
                href="#features"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#integration"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Integration
              </a>
              <a
                href="#pricing"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#docs"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <a
                  href="#login"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  Login
                </a>
                <a
                  href="#signup"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <section className="py-24 space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              The Ultimate Discord Bot for
              <span className="text-primary"> Modern Servers</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[42rem] mx-auto">
              Harness the power of AI to automate moderation, engage users, and
              unlock new possibilities for your Discord community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#integration"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Add to Discord
                <i className="fas fa-bolt ml-2"></i>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                View Features
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Powerful Features
            </h2>
            <p className="text-muted-foreground">
              Everything you need to manage your Discord server effectively.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-2">
              <i className="fas fa-shield-alt text-2xl text-primary"></i>
              <h3 className="font-semibold">Advanced Moderation</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered content filtering and raid protection
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-2">
              <i className="fas fa-robot text-2xl text-primary"></i>
              <h3 className="font-semibold">Custom Commands</h3>
              <p className="text-sm text-muted-foreground">
                Create and customize commands with our builder
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-2">
              <i className="fas fa-chart-line text-2xl text-primary"></i>
              <h3 className="font-semibold">Analytics Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Track server activity and engagement metrics
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-2">
              <i className="fas fa-code text-2xl text-primary"></i>
              <h3 className="font-semibold">Developer API</h3>
              <p className="text-sm text-muted-foreground">
                Full API access for custom integrations
              </p>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section id="integration" className="py-24">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Quick Integration
            </h2>
            <p className="text-muted-foreground">
              Get started in minutes with three simple steps.
            </p>
          </div>
          <div className="max-w-2xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <p>Authorize the bot for your server</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <p>Configure permissions and settings</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <p>Start using commands!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              What Users Say
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <blockquote className="space-y-4">
                <p className="text-muted-foreground">
                  "This bot has completely transformed how we manage our gaming
                  community. The moderation features are incredible."
                </p>
                <footer>
                  <div className="font-semibold">David Kim</div>
                  <div className="text-sm text-muted-foreground">
                    Server Owner, Gaming Legion
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <blockquote className="space-y-4">
                <p className="text-muted-foreground">
                  "The developer API is fantastic. We've built several custom
                  plugins that integrate perfectly with our workflow."
                </p>
                <footer>
                  <div className="font-semibold">Emily Chen</div>
                  <div className="text-sm text-muted-foreground">
                    Lead Developer, TechCord
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Common Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about the bot.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  Is the bot free to use?
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Yes! The core features are free. We offer a premium tier for
                  advanced features and higher usage limits.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  What permissions does the bot need?
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  The bot requires standard moderation permissions. You can
                  customize these during setup.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  Can I host the bot myself?
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  We offer both cloud-hosted and self-hosted options for
                  enterprise users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#enterprise"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Developers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#docs"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#api"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#status"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#support"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#community"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="#discord"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <i className="fab fa-discord text-xl"></i>
                </a>
                <a
                  href="#github"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="#twitter"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>© 2025 Discord Multipurpose Bot. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainComponent;