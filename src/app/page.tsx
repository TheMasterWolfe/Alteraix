export const metadata = {
  title: 'Alteraix - Your Cognitive AI Twin',
  description: 'Experience the future of AI with Alteraix - Your personal cognitive AI twin',
};

const features = [
  {
    name: 'Personalized Learning',
    description: 'Adapts to your unique patterns, preferences, and behaviors to provide truly personalized assistance.',
    icon: '📚',
  },
  {
    name: '24/7 Availability',
    description: 'Your AI twin is always available, ready to help whenever you need it, day or night.',
    icon: '⏰',
  },
  {
    name: 'Privacy First',
    description: 'Your data stays yours. We use advanced encryption to ensure your information is always secure.',
    icon: '🔒',
  },
  {
    name: 'Seamless Integration',
    description: 'Works across all your devices and platforms for a consistent experience everywhere.',
    icon: '🔄',
  },
  {
    name: 'Continuous Improvement',
    description: 'Gets smarter over time as it learns from interactions and feedback.',
    icon: '📈',
  },
  {
    name: 'Natural Interaction',
    description: 'Communicates in a natural, human-like manner that feels intuitive and comfortable.',
    icon: '💬',
  },
];

const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    description: 'Sign up for early access and create your Alteraix account in minutes.'
  },
  {
    number: '02',
    title: 'Train Your AI Twin',
    description: 'Interact naturally and let your AI twin learn from your patterns and preferences.'
  },
  {
    number: '03',
    title: 'Experience the Future',
    description: 'Enjoy a truly personalized AI experience that evolves with you over time.'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col justify-between">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">Alteraix</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">How It Works</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Contact</a>
              <a href="#get-started" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Get Early Access</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Your Cognitive</span>
            <span className="block text-indigo-600">AI Twin</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Alteraix is an advanced AI platform that learns, adapts, and evolves with you, creating a personalized digital twin that understands you better than ever before.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#get-started" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get Early Access
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#how-it-works" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Experience the next generation of AI interaction with Alteraix
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Get started with Alteraix in just a few simple steps
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className={`pt-8 ${index < 2 ? 'lg:border-r lg:border-gray-200' : ''}`}>
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <span className="text-xl font-bold text-white">{step.number}</span>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to experience the future?</span>
                  <span className="block">Join our waitlist today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                  Be among the first to access Alteraix when we launch. Limited spots available for early adopters.
                </p>
                <a
                  href="#"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Get Early Access
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <div className="bg-indigo-600 bg-opacity-20 w-full h-full rounded-lg">
                  <div className="p-6 text-white">
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="bg-black bg-opacity-30 p-4 rounded">
                        <p className="text-sm font-mono">$ alteraix --help</p>
                        <p className="text-sm font-mono text-green-300 mt-2">&gt; Hello! I'm your Alteraix AI Twin.</p>
                        <p className="text-sm font-mono text-green-300">&gt; How can I assist you today?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">About</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">Blog</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">Careers</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">Contact</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">Terms</a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Alteraix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
