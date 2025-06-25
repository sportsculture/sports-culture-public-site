import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Careers({ globalData }) {
  return (
    <Layout>
      <SEO 
        title={`Careers - ${globalData.name}`} 
        description="Join our team building the future of sports technology. Open positions in software development, product design, and sports analytics." 
      />
      <Header name={globalData.name} />
      <main className="w-full max-w-4xl mx-auto px-6">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          Join Our Team
        </h1>
        
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-center mb-8 opacity-80">
            We&rsquo;re building technology that makes sports more engaging, accessible, and fun for everyone.
          </p>
          
          <div className="bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 backdrop-blur-lg rounded-lg p-8 border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">About Sports Culture</h2>
            <p className="mb-4">
              At Sports Culture, we&rsquo;re passionate about creating technology that enhances the sports experience. 
              From our SpinCulture fitness playlist builder to league management tools, we&rsquo;re building platforms 
              that connect athletes, teams, and sports enthusiasts worldwide.
            </p>
            <p>
              As a growing startup, we offer the opportunity to make a real impact while working with cutting-edge 
              technologies and AI-powered development workflows.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10">
              <h3 className="text-xl font-semibold mb-3">Full-Stack Developer</h3>
              <p className="mb-3 opacity-80">
                Build and scale our sports technology platforms using Next.js, React, Node.js, and modern development tools.
              </p>
              <ul className="list-disc list-inside mb-4 opacity-80">
                <li>Experience with React, Next.js, and TypeScript</li>
                <li>Backend development with Node.js and databases</li>
                <li>API integrations (Spotify, sports data providers)</li>
                <li>Cloud deployment and DevOps experience preferred</li>
              </ul>
              <div className="flex gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Remote</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Full-time</span>
              </div>
            </div>

            <div className="bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10">
              <h3 className="text-xl font-semibold mb-3">Product Designer</h3>
              <p className="mb-3 opacity-80">
                Design intuitive user experiences for athletes and sports teams using our platforms.
              </p>
              <ul className="list-disc list-inside mb-4 opacity-80">
                <li>UI/UX design experience with modern web applications</li>
                <li>Proficiency in Figma, Sketch, or similar design tools</li>
                <li>Understanding of sports and fitness user journeys</li>
                <li>Experience with design systems and component libraries</li>
              </ul>
              <div className="flex gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Remote</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Full-time</span>
              </div>
            </div>

            <div className="bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10">
              <h3 className="text-xl font-semibold mb-3">Sports Data Analyst</h3>
              <p className="mb-3 opacity-80">
                Work with sports data, analytics, and machine learning to enhance our platform features.
              </p>
              <ul className="list-disc list-inside mb-4 opacity-80">
                <li>Experience with data analysis and visualization</li>
                <li>Knowledge of sports statistics and metrics</li>
                <li>Python, R, or similar data science tools</li>
                <li>Interest in music/BPM analysis for fitness applications</li>
              </ul>
              <div className="flex gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Remote</span>
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Part-time</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 backdrop-blur-lg rounded-lg p-8 border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Join Sports Culture?</h2>
            <ul className="list-disc list-inside space-y-2 opacity-80">
              <li><strong>Remote-first culture</strong> - Work from anywhere while building amazing products</li>
              <li><strong>AI-powered development</strong> - Use cutting-edge tools like Claude Code to accelerate your work</li>
              <li><strong>Sports passion</strong> - Combine your love of sports with technology</li>
              <li><strong>Startup energy</strong> - Make a real impact in a growing company</li>
              <li><strong>Competitive compensation</strong> - Equity participation and competitive salaries</li>
              <li><strong>Learning opportunities</strong> - Work with modern tech stack and best practices</li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
            <p className="mb-6 opacity-80">
              Send us your resume, portfolio, and a note about why you&rsquo;re excited about sports technology.
            </p>
            <a 
              href="mailto:careers@sportsculture.io?subject=Job Application" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Apply Now
            </a>
            <p className="mt-4 text-sm opacity-60">
              Or email us directly at careers@sportsculture.io
            </p>
          </div>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}