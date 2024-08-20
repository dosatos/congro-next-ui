export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-8">
          Welcome to My Site
        </h1>

        <p className="text-xl text-center mb-8">
          This is a sample main page for your Next.js application with Daisy UI.
        </p>

        <div className="flex justify-center">
          <button className="btn btn-primary mr-4">Learn More</button>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </main>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2024 - All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}