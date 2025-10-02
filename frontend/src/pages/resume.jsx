import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Resume = () => {
    const resumeData = {
        personalInfo: {
            name: 'AWONO AWONO GHISLAIN ARMEL',
            email: 'armelsince@gmail.com',
            phone: '+237 123 456 789',
            linkedin: 'linkedin.com/in/armelsince',
            github: 'github.com/armelsince',
            location: 'Yaoundé, Cameroun',
        },
        summary:
            "Développeur logiciel motivé et attentif aux détails, passionné par la création d'applications web efficaces et conviviales. Maîtrise des technologies front-end modernes avec une solide base en principes d'informatique.",
        experience: [
            {
                id: 1,
                title: 'Développeur Frontend',
                company: 'Tech Solutions Inc.',
                period: 'Jan 2021 - Présent',
                responsibilities: [
                    'Développé et maintenu des interfaces utilisateur réactives avec React et TypeScript.',
                    'Collaboré avec les designers et développeurs backend pour implémenter de nouvelles fonctionnalités.',
                    "Optimisation des performances des applications via la gestion d'état et composants efficaces.",
                    "Rédaction de tests unitaires et d'intégration avec Jest et React Testing Library.",
                ],
            },
            {
                id: 2,
                title: 'Développeur Web Junior',
                company: 'Innovate Web Co.',
                period: 'Juin 2019 - Déc 2020',
                responsibilities: [
                    "Création de sites web avec HTML, CSS et JavaScript.",
                    "Participation aux revues de code et aux processus de développement agile.",
                    "Correction de bugs et amélioration des fonctionnalités existantes.",
                ],
            },
        ],
        education: [
            {
                id: 1,
                institution: "Université d'Exemple",
                degree: "Licence en Informatique",
                period: '2015 - 2019',
            },
        ],
        skills: {
            languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/Sass'],
            frameworks: ['React', 'Node.js', 'Express.js'],
            tools: ['Git', 'Webpack', 'Docker', 'Jira'],
            databases: ['MongoDB', 'PostgreSQL'],
        },
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-sans p-6 sm:p-12 max-w-5xl mx-auto my-10 shadow-xl rounded-2xl">
            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-3">{resumeData.personalInfo.name}</h1>
                <p className="text-gray-600 text-lg">{resumeData.summary}</p>

                {/* Contact Info */}
                <div className="flex flex-wrap justify-center items-center gap-4 mt-4 text-gray-600">
                    <span className="flex items-center gap-1"><FaEnvelope className="text-blue-500"/> {resumeData.personalInfo.email}</span>
                    <span className="flex items-center gap-1"><FaPhoneAlt className="text-green-500"/> {resumeData.personalInfo.phone}</span>
                    <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-red-500"/> {resumeData.personalInfo.location}</span>
                    <a href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline"><FaLinkedin/> LinkedIn</a>
                    <a href={`https://${resumeData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-900 hover:text-black"><FaGithub/> GitHub</a>
                </div>
            </header>

            {/* Main Content */}
            <main className="space-y-12">
                {/* Experience Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-6">Expérience</h2>
                    <div className="space-y-6">
                        {resumeData.experience.map((job) => (
                            <div key={job.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                                    <span className="text-sm text-gray-500">{job.period}</span>
                                </div>
                                <p className="text-gray-600 font-semibold mb-2">{job.company}</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    {job.responsibilities.map((task, index) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-6">Formation</h2>
                    <div className="space-y-6">
                        {resumeData.education.map((edu) => (
                            <div key={edu.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                                <p className="text-gray-600 font-semibold">{edu.institution}</p>
                                <span className="text-sm text-gray-500">{edu.period}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-6">Compétences</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h4 className="font-semibold text-gray-800 mb-2">Langages</h4>
                            <p className="text-gray-700">{resumeData.skills.languages.join(', ')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h4 className="font-semibold text-gray-800 mb-2">Frameworks/Bibliothèques</h4>
                            <p className="text-gray-700">{resumeData.skills.frameworks.join(', ')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h4 className="font-semibold text-gray-800 mb-2">Bases de données</h4>
                            <p className="text-gray-700">{resumeData.skills.databases.join(', ')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h4 className="font-semibold text-gray-800 mb-2">Outils</h4>
                            <p className="text-gray-700">{resumeData.skills.tools.join(', ')}</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Resume;
