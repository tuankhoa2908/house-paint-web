export default function FeatureCard({ icon, iconBgColor, iconColor, title, description }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg dark:border-gray-800">
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${iconBgColor}`}>
        <svg className={`h-6 w-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
