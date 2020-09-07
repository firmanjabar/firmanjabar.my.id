import Nav from '../components/nav';
import ProjectsComp from '../components/projects';

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className='py-10'>
        <h1 className='text-5xl text-center text-accent-1'>Web Under Construction!</h1>
        <h1 className='text-2xl text-center text-accent-1'>- Coming Soon -</h1>
      </div>
      <ProjectsComp />
    </div>
  );
}
