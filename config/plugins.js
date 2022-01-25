module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {
                    folder: env('CLOUDINARY_FOLDER'),
                },
            },
        },
    },
    graphql: {
        config: {
            endpoint: '/graphql',
            // shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 100,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },
});
