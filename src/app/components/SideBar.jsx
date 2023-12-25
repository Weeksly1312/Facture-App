import Link from "next/link";
import Image from "next/image";

const logoSrc = "/CapTechBg.png";
const plusIcon = "/plus.png";

const links = [
  { href: "/clients", label: "Clients" },
  { href: "/societes", label: "Sociétés" },
  { href: "/devis", label: "Devis" },
  { href: "/avoirs", label: "Avoirs" },
  { href: "/facturesAcompte", label: "Factures d'acompte" },
];

const Sidebar = () => {
  return (
    <div className="text-white p-4 rounded-lg">
      {/* Logo */}
      <div className="flex items-center justify-center mb-4">
        <Image
          src={logoSrc}
          alt="Logo"
          width={220}
          height={120}
          className="rounded-full"
        />
      </div>

      {/* Links */}
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href} className="flex items-center justify-between">
            <Link href={link.href}>{link.label}</Link>

            {/* Small image */}
            <Image
              src={plusIcon}
              alt="Plus Icon"
              width={20}
              height={20}
              className="mr-2 transition-transform transform hover:scale-150"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
