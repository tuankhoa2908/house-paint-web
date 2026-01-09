import Image from "next/image";
import { MapPin, Calendar, Maximize2 } from "lucide-react";

export function ProjectCard({ project }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    {project.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Info Grid */}
                <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{project.address}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Maximize2 className="w-4 h-4 mr-2 text-green-600" />
                            <span>{project.area}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                            <span>{project.completedDate}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}
