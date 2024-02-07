import { BuildingStorefrontIcon, ScaleIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'AI lawyer',
        description:
            'Whatever you want to know about Web3 legal, our AI lawyer has the answer. From tax to incorporation to regulatory compliance, we have you covered.',
        href: '#',
        icon: ScaleIcon,
    },
    {
        name: 'Solve your tax issues',
        description:
            'Be aware of all your current obligations and get advice on how to structure your taxes in the most efficient way.',
        href: '#',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Simple incorporation guidance',
        description:
            'From setting up a company to managing your corporate structure, we have the knowledge to help you get it done.',
        href: '#',
        icon: BuildingStorefrontIcon,
    },
]

export default function Features() {
    return (
        <div className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-xl font-bold leading-7 text-blue-600">Be compliant</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need to know about the latest Web3 regulation
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Stay on top of the latest regulations and compliance requirements with our Web3 legal AI bot.
                        We will help you structure your tax, incorporation and compliance needs so you can enjoy the benefits of Web3 without the pain.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <feature.icon className="h-10 w-10 flex-none text-white bg-indigo-400 p-2 rounded-md" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
