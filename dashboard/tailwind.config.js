// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            outline: {
                blue: '1px solid #000033',
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        // ...
    ],
}