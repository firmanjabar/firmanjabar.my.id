export default function ProjectsComp() {
  const links = [
    {
      icon: '🍟',
      href: 'https://nongkis.netlify.app',
      name: "Nongki's",
      description: 'Reastaurant finder apps, dicoding.',
    },
    {
      icon: '⚽',
      href: 'https://ruangbola.netlify.app',
      name: 'Ruang Bola',
      description: 'League football club apps, dicoding.',
    },
  ];

  return (
    <div className='m-3 py-10 px-1 sm:px-2 lg:xy-8 xl:px-64'>
      <h3 className='text-lg text-gray-800'>List Project's :</h3>
      <ul className='w-full rounded-lg mt-2 mb-3 text-gray-100'>
        {links.map(({ icon, href, name, description }) => (
          <li className='mb-1'>
            <a
              href={href}
              className='w-fill flex p-3 pl-3 bg-gray-800 hover:bg-gray-900 rounded-lg'
              rel='norefferer'
              target='_blank'>
              <span>{icon}</span>
              <span
                className='ml-2 truncate'
                title='Test with a very really long name (resize the browser to see it truncate)'>
                {name} - ({description})
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
