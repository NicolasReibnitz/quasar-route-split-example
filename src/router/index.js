export default async function () {
	if (process.env.TARGET === 'calvin') {
		return import('./calvin/index-calvin.js').then(router => router.default());
	} else if (process.env.TARGET === 'hobbes') {
		return import('./hobbes/index-hobbes.js').then(router => router.default());
	} else {
		return import('./calvin-and-hobbes/index-calvin-and-hobbes.js').then(router => router.default());
	}
}
