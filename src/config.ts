export const config = {
    endpoints: {
        comments: {
            port: +(process.env.COMMENTS_PORT || 5003),
            hostname: process.env.COMMENTS_HOST || 'localhost',
        },
        reactions: {
            port: +(process.env.COMMENTS_PORT || 5002),
            hostname: process.env.COMMENTS_HOST || 'localhost',
        },
        videos: {
            port: +(process.env.COMMENTS_PORT || 5001),
            hostname: process.env.COMMENTS_HOST || 'localhost',
        },
    },
    server: {
        port: +(process.env.SERVER_PORT || 3000),
        hostname: process.env.SERVER_HOST || 'localhost',
    },
};
