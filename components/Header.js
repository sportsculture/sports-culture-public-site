import Link from 'next/link';
import Image from 'next/image'
import profilePic from '/assets/images/Sports_Culture_PNG.png'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
        <Image src={profilePic} className="w-12 h-12 block mx-auto mb-4" width={100} height={90}/>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
