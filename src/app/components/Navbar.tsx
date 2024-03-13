import Image from 'next/image';

import profile from '../images/profile.jpg';
import logo from '../images/logo.svg';

const Navbar = () => (
  <nav className="bg-purple py-4 text-gray" aria-label="Navbar">
    <div className="flex items-center container mx-auto">
      <div className="flex items-center">
        <figure>
          <Image className="h-8 w-auto" src={logo} alt="C Virus Survivors" width={35} height={35} />
        </figure>
        <h1 className="font-medium ml-4">Survival Nexus</h1>
      </div>
      <ul className="flex grow gap-2 mx-32">
        <li><a className="font-medium block px-4 py-2" href="/">Reports</a></li>
        <li><a className="font-medium block px-4 py-2" href="/survivors">Survivors</a></li>
        <li><a className="font-medium block px-4 py-2" href="/inventory">Inventory</a></li>
      </ul>
      <figure className="rounded-full overflow-hidden border-2 border-gray">
        <Image className="h-8 w-auto" src={profile} alt="John Doe" width={35} height={35} />
      </figure>
    </div>
  </nav>
)

export default Navbar
