/* eslint-disable */
export default {
	target: 'static',
	head: {
		title: 'Shubham Nimbalkar',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Software Engineer Portfolio' },
			{
				hid: 'keywords',
				name: 'keywords',
				content: 'shubham, nimbalkar, shubhamnimbalkar, snimbalkar, shubhamn21,  portfolio, software, engineer, developer, machine learning'
			},
			{ hid: 'og:title', property: 'og:title', content: 'Shubham Nimbalkar' },
			{ hid: 'og:description', property: 'og:description', content: 'Software Engineer Portfolio' },
			{ hid: 'og:image', property: 'og:image', content: 'www.shubhamnimbalkar.com' },
			{ hid: 'og:site_name', property: 'og:site_name', content: 'Shubham Nimbalkar' },
			{ hid: 'article:author', property: 'article:author', content: 'https://shubhamnimbalkar.com/' },
			{ hid: 'article:publisher', property: 'article:publisher', content: 'https://shubhamnimbalkar.com/' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'msapplication', content: '#da532c' },
			{ name: 'theme-color', content: '#ffffff' }
		],
		link: [
			{ rel: 'apple-touch-icon', size: '180x180', href: '/icons/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', size: '32x32', href: '/icons/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', size: '16x16', href: '/icons/favicon-16x16.png' },
			{ rel: 'manifest', href: '/icons/site.webmanifest' },
			{ rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', content: '#5bbad5' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap' },
			{ rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css' }
		]
	},
	css: [
		'assets/scss/main.scss'
	],
	plugins: [],
	components: true,
	buildModules: [
		'@nuxt/typescript-build'
	],
	modules: [
		'nuxt-buefy',
		'@nuxtjs/google-gtag',
		'@nuxtjs/style-resources'
	],
	'google-gtag': {
		id: 'G-DV6R9X8V7F',
		config: {
			anonymize_ip: true,
			send_page_view: false,
			linker: {
				domains: ['shubhamnimbalkar.com']
			}
		}
	},
	build: {},
	server: {
		port: 8080
	}
};
