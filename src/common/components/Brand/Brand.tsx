import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <div className="max-w-[120px] md:max-w-[140px]">
      <Link href={"/"}>
        <Image
          src={''}
          alt="logo"
          width={120}
          height={60}
          className="cursor-pointer "
        />
      </Link>
    </div>
  );
};

export default Brand;
