namespace $ {

	$mol_test( {

		// 'tube activation'() {

		// 	const game = new $hype_ballsort_game
		// 	const tube1 = game.tubes()[0]
		// 	const tube2 = game.tubes().at(-1)!

		// 	$mol_assert_not(game.tube_active())

		// 	game.tube_click(tube1)
		// 	$mol_assert_equal(tube1, game.tube_active())

		// 	game.tube_click(tube2)
		// 	$mol_assert_not(game.tube_active())

		// 	game.tube_click(tube2)
		// 	$mol_assert_equal(tube2, game.tube_active())

		// },

		// 'ball moving'() {

		// 	const game = new $hype_ballsort_game
		// 	const tube_filled = game.tubes()[ 0 ]
		// 	const tube_empty = game.tubes().at( -1 )!
		// 	const ball_moving = tube_filled.balls().at( -1 )!

		// 	game.tube_click( tube_filled )
		// 	game.tube_click( tube_empty )

		// 	$mol_assert_equal( tube_filled.balls().length, game.tube_size() - 1 )
		// 	$mol_assert_not( tube_filled.balls().includes( ball_moving ) )

		// 	$mol_assert_equal( tube_empty.balls().length, 1 )
		// 	$mol_assert_ok( tube_empty.balls().includes( ball_moving ) )

		// },

		// 'moves increment'() {

		// 	const game = new $hype_ballsort_game
		// 	const tube_filled = game.tubes()[ 0 ]
		// 	const tube_empty = game.tubes().at( -1 )!

		// 	game.tube_click( tube_filled )
		// 	game.tube_click( tube_empty )
		// 	$mol_assert_equal( game.moves(), 1 )

		// 	game.tube_click( tube_empty )
		// 	game.tube_click( tube_filled )
		// 	$mol_assert_equal( game.moves(), 2 )

		// },

		// 'tube completed'() {

		// 	const game = new $hype_ballsort_game
		// 	const tube = game.tubes()[0]

		// 	$mol_assert_not( game.tube_complete( tube ) )

		// 	tube.balls().forEach( ball => ball.color( 0 ) )
		// 	$mol_assert_ok( game.tube_complete( tube ) )

		// },

		'game finish'() {

			const game = new $hype_ballsort_game

			$mol_assert_not( game.finished() )

			game.balls().forEach( ball => ball.color( 0 ) )
			console.log('changed')
			$mol_assert_ok( game.finished() )

		},

	} )

}
