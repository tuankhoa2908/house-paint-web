export function SectionHeader({ title, subtitle, alignment = "center" }) {
    const alignClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }[alignment];

    return (
        <div className={`mb-12 ${alignClass}`}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
