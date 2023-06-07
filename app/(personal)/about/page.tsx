import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  getEducationData,
  getProjectData,
  getSkillData,
} from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { Project, Skill } from '@/types';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Card from '@/components/card';

export const metadata: Metadata = {
  title: 'About',
  description:
    'CSE undergraduate at IIT Ropar. Passionate about AI, ML and web3',
};

export default async function Page() {
  const [educationData, projects, skills] = await Promise.all([
    getEducationData(),
    getProjectData(),
    getSkillData(),
  ]);

  return (
    <div>
      <div className='text-4xl font-extrabold'>Karanraj Mehta</div>
      <div className='flex flex-wrap justify-end gap-6 py-10'>
        <Link href='/' className='text-gray-500 underline'>
          Home
        </Link>
        <Link href='/about'>About</Link>
        <Link href='/blog' className='text-gray-500 underline'>
          Blog
        </Link>
        <Link href='/contact' className='text-gray-500 underline'>
          Contact
        </Link>
      </div>
      {/* Education Starts */}
      <p className='mb-10 text-2xl font-bold'>Education</p>
      <div className='mb-20 grid place-items-center gap-10 p-5 sm:grid-cols-2'>
        <Image
          src={urlForImage(educationData.image).url()}
          alt='...'
          width={96}
          height={96}
        />
        <div className='grid place-items-center gap-10'>
          <div className='text-center text-2xl font-medium'>
            {educationData.title}
          </div>
          <div className='text-center'>{educationData.description}</div>
        </div>
      </div>
      {/* Education Ends */}
      {/* Projects Start */}
      <p className='my-10 text-2xl font-bold'>Projects</p>
      {projects.map((project: Project, index: number) => (
        <Card
          key={project.slug}
          imgSrc={urlForImage(project.image).url()}
          title={project.title}
          url={project.slug}
          desc={project.metadescription}
          className={index === projects.length - 1 ? 'mb-20' : ''}
        />
      ))}
      {/* Projects End */}
      {/* Skills Start */}
      <p className='my-10 text-2xl font-bold'>Skills</p>
      <div className='mx-auto my-20 grid max-w-md grid-cols-[repeat(auto-fit,_40px)] place-items-center justify-center gap-20'>
        {skills.map((skill: Skill, index: number) => (
          <a href={skill.href} target='_blank' key={index}>
            <Avatar className='grayscale transition-all hover:grayscale-0'>
              <AvatarImage src={urlForImage(skill.image).url()} />
              <AvatarFallback>{skill.alt}</AvatarFallback>
            </Avatar>
          </a>
        ))}
      </div>
      {/* Skills Start */}
    </div>
  );
}
