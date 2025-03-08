import { Github } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Main hero section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            100+ Free Editable Website Templates
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Browse and use high-quality, customizable website templates for free!
            Designed with Next.js, Tailwind CSS, and modern UI practices to help you build websites effortlessly.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Explore Templates
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              <Github />
              Contribute on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}