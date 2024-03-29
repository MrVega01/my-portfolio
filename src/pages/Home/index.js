import './styles.css';
import SkillsProfile from '../../components/SkillsProfile';
import InfoBar from '../../components/InfoBar';
import RepositoriesList from '../../components/RepositoriesList';
//IMPORTING PHOTOS
import reactPhoto from '../../img/react.svg';
import nodejsPhoto from '../../img/nodejs.svg';
import jsPhoto from '../../img/javascript.svg';
import htmlPhoto from '../../img/html.png';
import cssPhoto from '../../img/css3.svg';
import bootstrapPhoto from '../../img/bootstrap.svg';
import mongodbPhoto from '../../img/mongodb.svg';
import mysqlPhoto from '../../img/mysql.svg';
import phpPhoto from '../../img/php.svg';
import gitPhoto from '../../img/git.svg';
import expressPhoto from '../../img/expressjs.png';

export default function Home(){
    return(
    <>
        <div className='sectionHome1'>
            <section className='sectionPresentation'>
                <sub>Hello, my name is</sub>
                <h1>José Ignacio Vega</h1>
                <h1>FullStack Javascript Web Developer</h1>
            </section>

            <section className='sectionAboutMe'>
                <h1>About me</h1>
                <p>I am a FullStack Javascript Web Developer with professional experience creating Web 
experiences. Now improving my backend skills.
                </p>
            </section>

            <section className='sectionSkills'>
                <h1>Technical skills</h1>
                <div className='divSkills'>
                    <SkillsProfile
                        text={'React'}
                        photo={reactPhoto}
                        percent={'60%'}
                    />
                    <SkillsProfile
                        text={'Node.js'}
                        photo={nodejsPhoto}
                        percent={'50%'}
                    />
                    <SkillsProfile
                        text={'Express.js'}
                        photo={expressPhoto}
                        percent={'50%'}
                    />
                    <SkillsProfile
                        text={'Javascript'}
                        photo={jsPhoto}
                        percent={'75%'}
                    />
                    <SkillsProfile
                        text={'MongoDB'}
                        photo={mongodbPhoto}
                        percent={'45%'}
                    />
                    <SkillsProfile
                        text={'HTML5'}
                        photo={htmlPhoto}
                        percent={'70%'}
                    />
                    <SkillsProfile
                        text={'CSS3'}
                        photo={cssPhoto}
                        percent={'80%'}
                    />
                    <SkillsProfile
                        text={'Bootstrap'}
                        photo={bootstrapPhoto}
                        percent={'60%'}
                    />
                    <SkillsProfile
                        text={'MySQL'}
                        photo={mysqlPhoto}
                        percent={'30%'}
                    />
                    <SkillsProfile
                        text={'PHP'}
                        photo={phpPhoto}
                        percent={'20%'}
                    />
                    <SkillsProfile
                        text={'Git'}
                        photo={gitPhoto}
                        percent={'80%'}
                    />
                </div>
            </section>
        </div>
        <div className='sectionHome2'>
            <section className='sectionExperience'>
                <h1>Where I've work?</h1>
                <InfoBar
                    data={[
                        {
                            company: 'Assett+',
                            occupation: 'FullStack Javascript Developer',
                            time: 'March 2022 - Now',
                            description: `My first work, the knowledge acquired was huge, creating websites with 
                            ReactJS, adding personalized functionalities to sites with Javascript and Git, 
                            much Git.`
                        }
                    ]}
                />
            </section>
            <section className='sectionProjects'>
                <h1>My projects!</h1>
                <a className='repositoriesLink' target="_blank" rel="noopener noreferrer" href='https://github.com/MrVega01?tab=repositories'>See all my repositories</a>
                <RepositoriesList />
            </section>
            <section className='sectionContact'>
                <h1>Contact me!</h1>
                <sub>Send me a message in LinkedIn, I am very active there. You can see too my GitHub profile and know me better 👾</sub>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/jos%C3%A9-vega-89135421a/'>
                        <svg className='svgLinkedin' xmlns="http://www.w3.org/2000/svg" width="1024px" height="1024px" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/MrVega01'>
                        <svg className='svgGithub' width="1024px" height="1024px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/></svg>
                    </a>
                </div>
            </section>
        </div>
    </>
    );
}