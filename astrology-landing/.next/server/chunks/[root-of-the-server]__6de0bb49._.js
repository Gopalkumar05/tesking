module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/pages/api/testimonials.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
function handler(req, res) {
    const testimonials = [
        {
            name: "Sophia Lee",
            feedback: "The session was life-changing! I got so much clarity about my career path.",
            imageUrl: "/images/client1.jpg"
        },
        {
            name: "David Kim",
            feedback: "Accurate predictions and very professional. Highly recommended.",
            imageUrl: "/images/client2.jpg"
        },
        {
            name: "Emma Watson",
            feedback: "I feel more confident about my future now. Amazing experience!",
            imageUrl: "/images/client3.jpg"
        }
    ];
    res.status(200).json(testimonials);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6de0bb49._.js.map