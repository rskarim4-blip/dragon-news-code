import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";

export default function NewsCard({ news }) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md border hover:shadow-lg transition">
            {/* Header */}
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={news.author.img}
                        alt={news.author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">{news.author.name}</h3>
                        <p className="text-xs text-gray-500">
                            {new Date(news.author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 text-gray-500">
                    <FaShareAlt className="cursor-pointer hover:text-red-500" />
                    <FaBookmark className="cursor-pointer hover:text-red-500" />
                </div>
            </div>

            {/* Title */}
            <h2 className="px-4 font-bold text-lg text-gray-900 leading-snug">
                {news.title}
            </h2>

            {/* Thumbnail */}
            <div className="px-4 mt-3">
                <img
                    src={news.thumbnail_url}
                    alt={news.title}
                    className="w-full rounded-xl"
                />
            </div>

            {/* Details */}
            <div className="p-4 text-sm text-gray-600 leading-relaxed">
                {news.details.length > 200
                    ? news.details.slice(0, 200) + "..."
                    : news.details}
                {news.details.length > 200 && (
                    <button className="text-red-500 ml-1 font-medium hover:underline">
                        Read More
                    </button>
                )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t px-4 py-3 text-sm">
                <div className="flex items-center gap-2 text-orange-500">
                    <FaStar className="w-4 h-4" />
                    <span>{news.rating.number}</span>
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                        {news.rating.badge}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye className="w-4 h-4" />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
}
