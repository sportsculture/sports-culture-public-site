import Link from 'next/link';
import Image from 'next/image'
import logoImage from '/assets/images/Sports_Culture_PNG.png'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
        <div className="w-36 h-24 relative block mx-auto mb-4">
            <Link href="/">
              <Image 
                src={logoImage} 
                alt="Sports Culture Logo"
                fill="true"
                className="object-contain"
                sizes="(max-width: 768px) 144px, 144px"
                priority
              />
            </Link>
        </div>
      <p className="text-2xl dark:text-white text-center mb-6">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
      <nav className="flex justify-center space-x-8">
        <Link href="/">
          <a className="text-lg dark:text-white hover:opacity-70 transition-opacity">
            Blog
          </a>
        </Link>
        <Link href="/careers">
          <a className="text-lg dark:text-white hover:opacity-70 transition-opacity">
            Careers
          </a>
        </Link>
      </nav>
    </header>
  );
}
