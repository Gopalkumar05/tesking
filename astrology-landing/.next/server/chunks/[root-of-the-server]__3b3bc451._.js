module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/pages/api/hero.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
function handler(req, res) {
    const heroData = {
        title: "Unlock Your Cosmic Destiny",
        subtitle: "Book sessions with expert astrologers and discover your true path.",
        ctaText: "Book Now",
        ctaLink: "/book",
        imageUrl: "/images/astrologer.png",
        badges: [
            {
                label: "10k+ Sessions",
                icon: "Star"
            },
            {
                label: "Rated 4.9/5",
                icon: "ThumbsUp"
            },
            {
                label: "Verified Expert",
                icon: "ShieldCheck"
            }
        ]
    };
    res.status(200).json(heroData);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b3bc451._.js.map