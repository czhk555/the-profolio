/* eslint-disable react/prop-types */
import { FaGithub, FaArrowRight} from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';

function LandingPage(props) {
  const {toggleTheme,theme} = props
  const navigate = useNavigate();
  const authRedirect = () => {
      navigate('/login')
  };

  return (
    <div className="font-inter h-fit bg-background dark:bg-backgroundDark bg-hero bg-auto bg-no-repeat bg-center ">
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <main className='h-screen px-6 md:px-16 flex flex-col items-center'>
        <h1 className='text-3xl pt-24 select-none text-textPrimary sm:text-4xl w-full xl:w-4/5 lg:text-6xl font-bold text-center dark:text-textPrimaryDark '>Craft a Captivating Portfolio to Showcase <span className='text-primary'>Your Skills.</span></h1>
        <p className='text-xs pt-10 text-textSecondary sm:text-base w-full xl:w-3/5  text-center dark:text-textSecondaryDark'>Connect. Collaborate. Create: Find User Projects to Elevate Your Portfolio&apos;s Impact. Engage with a vibrant community of creators, discover exciting projects that align with your interests, and amplify the impact of your portfolio by joining forces with like-minded individuals.</p>
        <div className='flex  flex-col gap-8 py-12 sm:flex-row sm:gap-12'>
            <button className='font-bold bg-primary rounded px-6 py-3  text-textPrimaryDark dark:text-textPrimary flex items-center gap-2' onClick={authRedirect} > Sign in<FaArrowRight className='inline'/></button>
            <button className='font-bold bg-slate-400/30 rounded px-6 py-3 text-textPrimary dark:text-textPrimaryDark flex items-center gap-2'><FaGithub className='inline'/> <div>GitHub</div></button>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
