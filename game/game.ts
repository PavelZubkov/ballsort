namespace $ {

	export class $hype_ballsort_game extends $mol_object {

		color_count() { return 4 }

		tube_size() { return 4 }

		tube_empty_count() { return 2 }

		tube_count() { return this.color_count() + this.tube_empty_count() }

		ball_count() { return this.tube_size() * this.color_count() }

		@$mol_mem_key
		Ball( index: number ) {
			return new $hype_ballsort_ball
		}

		ball_color( index: number ) {
			return index % this.tube_size()
		}

		@$mol_mem_key
		Tube( index: number ) {
			const obj = new $hype_ballsort_tube
			obj.size = () => this.tube_size()
			return obj
		}

		@$mol_mem
		balls() {
			return Array.from( { length: this.ball_count() } ).map( ( _, index ) => {
				const obj = this.Ball( index )
				obj.color( index % this.tube_size() )
				return obj
			} )
		}

		@$mol_mem
		tubes() {
			const balls = $mol_array_shuffle( this.balls() )
			const size = this.tube_size()

			return Array.from( { length: this.tube_count() } ).map( ( _, index ) => {
				const obj = this.Tube( index )
				obj.balls( index < this.color_count() ? balls.slice( index * size, index * size + size ) : [] )
				return obj
			} )
		}

		@$mol_mem
		moves( next?: number ) {
			return next ?? 0
		}

		@$mol_mem
		finished() {
			return this.tubes().every( tube => tube.complete() || tube.balls().length === 0 )
		}

		@$mol_mem
		tube_active( next?: $hype_ballsort_tube | null ) {
			if (next?.balls().length === 0) return null
			if (next?.complete()) return null
			return next ?? null
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
