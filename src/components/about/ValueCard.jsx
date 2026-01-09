export function ValueCard({ title, description, icon: Icon, gradient = "from-blue-600 to-purple-600" }) {
    return (
        <div className="relative group h-full">
            {/* Background Card */}
            <div className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
