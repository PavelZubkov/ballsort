namespace $ {

	export class $hype_ballsort_game extends $mol_object {

		tube_size() { return 4 }

		color_count() { return 4 }

		tube_empty_count() { return 2 }

		ball_count() { return this.tube_size() * this.color_count() }

		@$mol_mem
		balls() {
			const balls = $mol_range2( index => new $hype_ballsort_ball( index % this.tube_size() ), () => this.ball_count() )
			return [ ...balls ]
		}

		@$mol_mem
		tubes() {
			const balls = $mol_array_shuffle( this.balls() )
			const size = this.tube_size()

			const tubes = $mol_range2( index => new $hype_ballsort_tube( balls.slice( index * size, index * size + size ) ), () => this.color_count() )
			const empty = $mol_range2( () => new $hype_ballsort_tube, () => this.tube_empty_count() )

			return [ ...tubes, ...empty ]
		}

		@$mol_mem
		moves( next?: number ) {
			return next ?? 0
		}

		@ $mol_mem_key
		tube_complete( obj: $hype_ballsort_tube ) {
			if( obj.balls().length !== this.tube_size() ) return false

			const [ ball, ...balls ] = obj.balls()
			return balls.every( item => item.color() === ball.color() )
		}

		@ $mol_mem
		tube_active( next?: $hype_ballsort_tube | null ) {
			return next ?? null
		}

		@$mol_mem
		finished() {
			return this.tubes().every( tube => this.tube_complete( tube ) )
		}

		ball_move( to: $hype_ballsort_tube ) {
			const from = this.tube_active()
			if( !from || from.balls()?.length === 0 ) return

			const ball = from.take()!
			to.put( ball )
			this.moves( this.moves() + 1 )
			this.tube_active( null )
		}

		tube_click( tube: $hype_ballsort_tube ) {
			const tube_active = this.tube_active()

			tube_active === null ? this.tube_active( tube ) : this.ball_move( tube )
		}

	}

}
