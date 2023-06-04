namespace $.$$ {

	export class $hype_ballsort_tube_view extends $.$hype_ballsort_tube_view {

		@ $mol_mem
		roof() {
			return this.tube().active() ? this.Ball( this.tube().balls().length - 1 ) : null
		}

		@ $mol_mem
		balls() {
			const list = this.tube().active() ? this.tube().balls().slice(0, -1) : this.tube().balls()
			return list.map((_, index) => this.Ball(index))
		}

		ball(index: number) {
			return this.tube().balls()[index]
		}

	}

}
