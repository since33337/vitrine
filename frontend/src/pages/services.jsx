import React from 'react'
import { Globe, Smartphone, Search, TrendingUp, Palette, Wrench } from 'lucide-react'

const Services = () => {
    const services = [
        { 
            icon: Globe,
            title: "Développement Web",
            description: "Création de sites web modernes et réactifs avec les dernières technologies.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Smartphone,
            title: "Applications Mobiles",
            description: "Développement d'applications mobiles natives pour iOS et Android.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: Search,
            title: "SEO",
            description: "Optimisation pour les moteurs de recherche afin d'améliorer la visibilité en ligne.",
            color: "from-green-500 to-green-600"
        },
        {
            icon: TrendingUp,
            title: "Marketing Digital",
            description: "Stratégies de marketing en ligne pour augmenter votre audience et conversions.",
            color: "from-orange-500 to-orange-600"
        },
        {
            icon: Palette,
            title: "Design UI/UX",
            description: "Conception d'interfaces utilisateur attrayantes et expériences utilisateur optimales.",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: Wrench,
            title: "Maintenance et Support",
            description: "Services de maintenance continue et support technique professionnel 24/7.",
            color: "from-teal-500 to-teal-600"
        },
    ]
 
    return (
        <section className='py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-5xl font-bold text-gray-800 mb-4'>
                        Nos <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>Services</span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                        Découvrez nos solutions digitales sur mesure pour propulser votre entreprise vers le succès
                    </p>
                    <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full'></div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <div 
                                key={index} 
                                className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden'
                            >
                                {/* Effet de fond animé */}
                                <div className='absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-blue-500 to-purple-500'></div>
                                
                                {/* Icône avec gradient */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <IconComponent className='w-8 h-8 text-white' />
                                </div>
                                
                                {/* Contenu */}
                                <h3 className='text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
                                    {service.title}
                                </h3>
                                <p className='text-gray-600 leading-relaxed mb-6'>
                                    {service.description}
                                </p>
                                
                                {/* Bouton d'action */}
                                <div className='flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300'>
                                    <span className='text-sm'>En savoir plus</span>
                                    <svg className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                    </svg>
                                </div>
                                
                                {/* Effet de bordure animée */}
                                <div className='absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500'></div>
                            </div>
                        )
                    })}
                </div>
                
                {/* Section CTA */}
                <div className='text-center mt-16'>
                    <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto text-white shadow-2xl'>
                        <h3 className='text-3xl font-bold mb-4'>
                            Prêt à démarrer votre projet ?
                        </h3>
                        <p className='text-blue-100 mb-8 text-lg'>
                            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
                        </p>
                        <button className='bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg'>
                            Commencer maintenant
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services