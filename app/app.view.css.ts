namespace $.$$ {

	$mol_style_define( $hype_ballsort_app, {

		fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
		color: '#e1e1e1',
		lineHeight: 'normal',

		padding: {
			top: '1rem',
		},

		justifyContent: 'center',

		background: {
			color: '#101526',
		},

		Title: {
			font: {
				size: '3rem',
				weight: 300,
			},
		},

		Title_begin: {
			textDecoration: 'underline',
		},

		Links: {
			padding: {
				top: '1rem',
			},
			justifyContent: 'center',
			flex: {
				wrap: 'wrap',
			},
		},

		Start_page: {
			alignItems: 'center',
		},

		Moves: {
			padding: ['0.6rem', '0.4rem'],
			fontSize: '1.3rem',
		},

		Tubes: {
			justifyContent: 'center',
		},

		Control: {
			justifyContent: 'center',
		},

		Tube: {
			margin: '1rem',
		},

		Finish: {
			position: 'fixed',
			bottom: 0,
			top: 0,
			left: 0,
			right: 0,
			background: {
				color: $mol_style_func.rgba(255, 255, 255, 0.6),
			},
			backdropFilter: 'blur(6px)',
			alignItems: 'center',
			paddingTop: '5rem',
		},

		Finish_title: {
			color: 'black',
			textShadow: '0 0 2px white',
		},

		Finish_moves: {
			color: 'black',
			textShadow: '0 0 2px white',
			margin: {
				top: '1rem',
			},
		},

		Finish_home: {
			margin: {
				top: '1rem',
			},
		},

	} )

}
