namespace $ {

	export class $hype_ballsort_ball extends $mol_object {

		constructor(public color_default: number = 0) {
			super()
		}

		@ $mol_mem
		color( next?: number ) {
			return next ?? this.color_default
		}

	}

}
