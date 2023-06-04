namespace $ {

	export class $hype_ballsort_tube extends $mol_object {

		constructor(public balls_default: $hype_ballsort_ball[] = []) {
			super()
		}

		@ $mol_mem
		balls( next?: $hype_ballsort_ball[] ) {
			return next ?? this.balls_default
		}

		active() { return false }

		@ $mol_mem
		complete(next?: boolean) {
			return next ?? false
		}

		take() {
			const next = this.balls()
			const ball = next.pop()
			this.balls( [ ...next ] )
			return ball
		}

		put( obj: $hype_ballsort_ball ) {
			this.balls( [ ...this.balls(), obj ] )
		}

	}

}
