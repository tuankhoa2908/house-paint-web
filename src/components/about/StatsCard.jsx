export function StatsCard({ value, label, icon: Icon, gradient = "from-blue-600 to-purple-600" }) {
    return (
        <div className="relative group">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
            
            {/* Card Content */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
                
                {/* Value */}
                <div className={`text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                    {value}
                </div>
                
                {/* Label */}
                <div className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                    {label}
                </div>
            </div>
        </div>
    );
}
