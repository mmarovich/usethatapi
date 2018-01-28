const giphy = {
    name: "Giphy",
    description: `Natively embed all the best features of the world's largest and most powerful GIF library into your app.`,
    website: "https://developers.giphy.com",
    documentation: "https://developers.giphy.com/docs/",
    apiKey: true,
    paths: [
        {
            host: "api.giphy.com",
            path: "/v1/gifs/search",
            method: "GET",
            description: `Search all GIPHY GIFs for a word or phrase. 
                Punctuation will be stripped and ignored. Use a plus or url encode for phrases. 
                Example paul+rudd, ryan+gosling or american+psycho.`,
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "q",
                    type: "string",
                    description: "Search query term or phrase.",
                    required: true,
                    example: "cheeseburgers",
                },
                {
                    key: "limit",
                    type: "integer",
                    description: "The maximum number of records to return. Default: 25",
                    required: false,
                    example: 20,
                },
                {
                    key: "offset",
                    type: "integer",
                    description: "An optional results offset. Defaults to 0.",
                    required: false,
                    example: 5,
                },
                {
                    key: "rating",
                    type: "string",
                    description: "Filters results by specified rating.",
                    required: false,
                    example: "g",
                },
                {
                    key: "lang",
                    type: "string",
                    description: "Specify default language for regional content; use a 2-letter ISO 639-1 language code.",
                    required: false,
                    example: "en",
                },
                {
                    key: "fmt",
                    type: "string",
                    description: "Used to indicate the expected response format. Default is Json.",
                    required: false,
                    example: "json",
                }
            ]
        },
        {
            host: "api.giphy.com",
            path: "/v1/gifs/trending",
            method: "GET",
            description: `Fetch GIFs currently trending online. 
                Hand curated by the GIPHY editorial team. 
                The data returned mirrors the GIFs showcased on the GIPHY homepage. 
                Returns 25 results by default.`,
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "limit",
                    type: "integer",
                    description: "The maximum number of records to return. Default: 25",
                    required: false,
                    example: 20,
                },
                {
                    key: "offset",
                    type: "integer",
                    description: "An optional results offset. Defaults to 0.",
                    required: false,
                    example: 5,
                },
                {
                    key: "rating",
                    type: "string",
                    description: "Filters results by specified rating.",
                    required: false,
                    example: "g",
                }
            ]
        },
        {
            host: "api.giphy.com",
            path: "/v1/gifs/translate",
            method: "GET",
            description: `The translate API draws on search, 
                but uses the GIPHY special sauce to handle translating from one vocabulary to another. 
                In this case, words and phrases to GIFs.`,
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "s",
                    type: "string",
                    description: "Search term.",
                    required: true,
                    example: "ryan gosling",
                }
            ]
        },
        {
            host: "api.giphy.com",
            path: "/v1/gifs/random",
            method: "GET",
            description: `Returns a random GIF, limited by tag. 
                Excluding the tag parameter will return a random GIF from the GIPHY catalog.`,
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "tag",
                    type: "string",
                    description: "Filters results by specified tag.",
                    required: false,
                    example: "burrito",
                },
                {
                    key: "rating",
                    type: "string",
                    description: "Filters results by specified rating.",
                    required: false,
                    example: "g",
                },
                {
                    key: "fmt",
                    type: "string",
                    description: "Used to indicate the expected response format. Default is Json.",
                    required: false,
                    example: "json",
                }
            ]
        },
        {
            host: "api.giphy.com",
            path: "/v1/gifs/{gif_id}",
            method: "GET",
            description: "Returns a GIF given that GIF's unique ID.",
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "gif_id",
                    type: "string",
                    description: "Filters results by specified GIF ID.",
                    required: true,
                    example: "xT4uQulxzV39haRFjG",
                },
            ]
        },
        {
            host: "api.giphy.com",
            path: "/v1/gifs",
            method: "GET",
            description: "A multiget version of the get GIF by ID endpoint.",
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "ids",
                    type: "string",
                    description: "Filters results by specified GIF IDs, separated by commas.",
                    required: true,
                    example: "xT4uQulxzV39haRFjG,3og0IPxMM0erATueVW",
                }
            ]
        },
        {
            host: "api.giphy.com",
            path: "/v1/stickers/search",
            method: "GET",
            description: `Replicates the functionality and requirements of the classic GIPHY search, 
                but returns animated stickers rather than GIFs.`,
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "q",
                    type: "string",
                    description: "Search query term or phrase.",
                    required: true,
                    example: "cheeseburgers",
                },
                {
                    key: "limit",
                    type: "integer",
                    description: "The maximum number of records to return. Default: 25",
                    required: false,
                    example: 20,
                },
                {
                    key: "offset",
                    type: "integer",
                    description: "An optional results offset. Defaults to 0.",
                    required: false,
                    example: 5,
                },
                {
                    key: "rating",
                    type: "string",
                    description: "Filters results by specified rating.",
                    required: false,
                    example: "g",
                },
                {
                    key: "lang",
                    type: "string",
                    description: "Specify default language for regional content; use a 2-letter ISO 639-1 language code.",
                    required: false,
                    example: "en",
                },
                {
                    key: "fmt",
                    type: "string",
                    description: "Used to indicate the expected response format. Default is Json.",
                    required: false,
                    example: "json",
                }
            ]
        },
        {
            host: "api.giphy.com",
            path: "/v1/stickers/trending",
            method: "GET",
            description: `Fetch Stickers currently trending online. 
                Hand curated by the GIPHY editorial team. Returns 25 results by default.`,
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "limit",
                    type: "integer",
                    description: "The maximum number of records to return. Default: 25",
                    required: false,
                    example: 20,
                },
                {
                    key: "rating",
                    type: "string",
                    description: "Filters results by specified rating.",
                    required: false,
                    example: "g",
                },
                {
                    key: "fmt",
                    type: "string",
                    description: "Used to indicate the expected response format. Default is Json.",
                    required: false,
                    example: "json",
                }
            ]
        },
        {
            host: "api.giphy.com",
            path: "/v1/stickers/translate",
            method: "GET",
            description: `The translate API draws on search, 
                but uses the GIPHY special sauce to handle translating from one vocabulary to another. 
                In this case, words and phrases to GIFs.`,
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "s",
                    type: "string",
                    description: "Search term.",
                    required: true,
                    example: "ryan gosling",
                }
            ]
        },
        {
            host: "api.giphy.com",
            path: "/v1/stickers/random",
            method: "GET",
            description: `Returns a random Sticker, limited by tag. 
                Excluding the tag parameter will return a random Sticker from the GIPHY catalog.`,
            params: [
                {
                    key: "api_key",
                    type: "string",
                    description: "Giphy API Key",
                    required: true,
                    example: "YOUR_API_KEY",
                },
                {
                    key: "tag",
                    type: "string",
                    description: "Filters results by specified tag.",
                    required: false,
                    example: "burrito",
                },
                {
                    key: "rating",
                    type: "string",
                    description: "Filters results by specified rating.",
                    required: false,
                    example: "g",
                },
                {
                    key: "fmt",
                    type: "string",
                    description: "Used to indicate the expected response format. Default is Json.",
                    required: false,
                    example: "json",
                }
            ]
        }            
    ]
}

export default giphy;