namespace $.$$ {
	$mol_test({
		
		"Screan changing"() {
			const app = new $hype_ballsort_app

			// По умолчанию должен показываться стартовый экран
			$mol_assert_like(app.sub(), [app.Start_page()])

			// Кликаем по кнопке старта и проверяем что теперь отображается экран игры
			app.start()
			$mol_assert_like(app.sub(), [app.Game_page()])

			// Выиграем игру, просто установим всем шарам один цвет и проверим экран
			app.game().balls().forEach(obj => obj.color(0))
			$mol_assert_like(app.sub(), [app.Finish_page()])
		},
		
	})
}
