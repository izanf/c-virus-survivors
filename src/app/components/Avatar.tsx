import Image from 'next/image';

import profile from '../images/profile-fallback.png';

interface IAvatarProps {
  src?: string
}

const Avatar = ({ src }: IAvatarProps) => (
  <figure className="rounded-full overflow-hidden border-2 border-gray">
    <Image className="h-8 w-auto" src={src ?? profile} alt="John Doe" width={35} height={35} />
  </figure>
)

export default Avatar
