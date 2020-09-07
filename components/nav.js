import Link from 'next/link';

const links = [
  { href: 'https://github.com/firmanjabar', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-between items-center py-6 px-1 sm:px-2 lg:xy-8 xl:px-40 bg-gray-900'>
        <li>
          <Link href='/'>
            <a className='text-teal-500 font-bold no-underline'>IVVIIXXII - 👨‍💻</a>
          </Link>
        </li>
        <ul className='flex justify-between items-center space-x-4'>
          <li>
            <Link href='/projects'>
              <a className='text-teal-500 font-bold no-underline'>Projects</a>
            </Link>
          </li>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className='btn-blue no-underline' rel='norefferer' target='_blank'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
