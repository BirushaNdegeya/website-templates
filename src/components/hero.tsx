import { Button } from './ui/button';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Main hero section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Move faster with intuitive React UI tools
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            MUI offers a comprehensive suite of UI tools to help you ship new features faster.
            Start with Material UI, our fully-loaded component library, or bring your own
            design system to our production-ready components.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Get started
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              Learn more →
            </Button>
          </div>
        </div>

        {/* Stats section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {[
              { stat: '2,000+', description: 'Open source contributors' },
              { stat: '3M+', description: 'Weekly downloads' },
              { stat: '15k+', description: 'GitHub stars' },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <dt className="text-base leading-7 text-muted-foreground">
                  {item.description}
                </dt>
                <dd className="mt-2 text-3xl font-bold leading-9 tracking-tight text-foreground">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}