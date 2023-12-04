import Link from 'next/link';
import Image from 'next/image'
import logoImage from '/assets/images/Sports_Culture_PNG.png'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
        <div className="w-36 h-24 block mx-auto mb-4">
            <Link href="/" ><Image src={logoImage} fill/></Link>
        </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
