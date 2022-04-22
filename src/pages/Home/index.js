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

export default function Home(){
    return(
        <div className='homeSection'>
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
                        percent={'50%'}
                    />
                    <SkillsProfile
                        text={'Node.js'}
                        photo={nodejsPhoto}
                        percent={'20%'}
                    />
                    <SkillsProfile
                        text={'Javascript'}
                        photo={jsPhoto}
                        percent={'70%'}
                    />
                    <SkillsProfile
                        text={'HTML5'}
                        photo={htmlPhoto}
                        percent={'70%'}
                    />
                    <SkillsProfile
                        text={'CSS3'}
                        photo={cssPhoto}
                        percent={'75%'}
                    />
                    <SkillsProfile
                        text={'Bootstrap'}
                        photo={bootstrapPhoto}
                        percent={'80%'}
                    />
                    <SkillsProfile
                        text={'MongoDB'}
                        photo={mongodbPhoto}
                        percent={'10%'}
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
                        percent={'50%'}
                    />
                </div>
            </section>
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
                <h2>See all my repositories</h2>
                <RepositoriesList />
            </section>
            <section className='sectionContact'>

            </section>
        </div>
    );
}