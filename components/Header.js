import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* LEFT  */}
        <div className="relative hidden lg:inline-grid h-24 w-24">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0">
          <Image
            src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* MIDDLE  */}
        {/* RIGHT  */}
      </div>
    </div>
  );
};

export default Header;
