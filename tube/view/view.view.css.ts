namespace $.$$ {

	$mol_style_define( $hype_ballsort_tube_view, {

		width: '3rem',

		Roof: {
			height: '3rem',
			alignItems: 'center',
			justifyContent: 'center',
			border: {
				bottom: {
					width: '4px',
					style: 'solid',
					color: 'lightgray',
				},
			},
		},

		Balls: {
			flex: {
				direction: 'column-reverse',
			},
			justifyContent: 'flex-start',
			alignItems: 'center',

			height: '10rem',

			border: {
				width: '2px',
				style: 'solid',
				color: 'lightgray',
			},

			padding: {
				bottom: '0.4rem',
				top: '0.4rem',
			},

			borderRadius: '0 0 2.4rem 2.4rem',

			'@': {
				'data-complete': {
					true: {
						backgroundColor: 'lightgray',
					},
				},
			},
		},

	} )

}