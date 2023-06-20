<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

				<q-toolbar-title>{{ pageMode }}</q-toolbar-title>

				<div>Quasar v{{ $q.version }}</div>
			</q-toolbar>
		</q-header>

		<q-drawer v-model="leftDrawerOpen" show-if-above bordered>
			<q-list>
				<q-item-label header> Page Links </q-item-label>

				<EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
	import { defineComponent, ref } from 'vue';
	import EssentialLink from 'components/EssentialLink.vue';

	let linksList;
	const pageMode = process.env.TARGET;

	if (process.env.TARGET === 'calvin') {
		linksList = [
			{
				title: 'Home',
				caption: '',
				icon: 'home',
				link: '/#/'
			},
			{
				title: 'The Calvin Page',
				caption: 'About a boy',
				icon: 'boy',
				link: '/#/calvin'
			}
		];
	} else if (process.env.TARGET === 'hobbes') {
		linksList = [
			{
				title: 'Home',
				caption: '',
				icon: 'home',
				link: '/#/'
			},
			{
				title: 'The Hobbes Page',
				caption: 'About a tiger',
				icon: 'pets',
				link: '/#/hobbes'
			}
		];
	} else {
		linksList = [
			{
				title: 'Home',
				caption: '',
				icon: 'home',
				link: '/#/'
			},
			{
				title: 'The Calvin Page',
				caption: 'About a boy',
				icon: 'boy',
				link: '/#/calvin'
			},
			{
				title: 'The Hobbes Page',
				caption: 'About a tiger',
				icon: 'pets',
				link: '/#/hobbes'
			}
		];
	}

	export default defineComponent({
		name: 'MainLayout',

		components: {
			EssentialLink
		},

		setup() {
			const leftDrawerOpen = ref(false);

			return {
				essentialLinks: linksList,
				leftDrawerOpen,
				toggleLeftDrawer() {
					leftDrawerOpen.value = !leftDrawerOpen.value;
				},
				pageMode
			};
		}
	});
</script>
