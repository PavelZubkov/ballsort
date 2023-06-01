namespace $.$$ {

	export class $hype_ballsort_app extends $.$hype_ballsort_app {

		@ $mol_mem
		page(next?: 'start' | 'game' | 'finish') {
			return next ?? super.page()
		}

		sub() {
			return [
				... this.page() === 'start' ? [this.Start_page()] : [],
				... this.page() === 'game' ? [this.Game_page()] : [],
			]
		}

	}

}
