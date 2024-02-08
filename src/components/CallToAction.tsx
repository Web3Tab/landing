import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/bgpicture.svg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative isolate overflow-hidden bg-slate-900 bg-gradient-to-r py-32"
    >
      <svg
        className="absolute left-[calc(50%-rem)] top-10 -z-20 h-[64rem] w-[64rem] -translate-x-1/2 bg-gradient-to-r [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx={600} cy={600} r={700} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.8" />
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#80caff" />
            <stop offset={1} stopColor="#4f46e5" />
          </radialGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-10 left-[calc(90%-20rem)] -z-20 h-[64rem] w-[64rem] bg-gradient-to-r [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx={600} cy={600} r={700} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.8" />
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#80caff" />
            <stop offset={1} stopColor="#4f46e5" />
          </radialGradient>
        </defs>
      </svg>
      <Container className="mx-auto max-w-2xl">
        <div className="relative isolate overflow-hidden px-32 ring-1 ring-white/30 rounded-2xl drop-shadow-xl bg-blue-900/80 py-32 text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your legal liabilities. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get started today
          </Button>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-3/4 top-1 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={600} cy={600} r={700} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.6" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#80caff" />
                <stop offset={1} stopColor="#4f46e5" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1 top-1 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={600} cy={600} r={700} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.8" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#80caff" />
                <stop offset={1} stopColor="#4f46e5" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </section >
  )
}
