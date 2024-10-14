// Aqui estamos garantindo que o React irá renderizar o componente App
const domNode = document.getElementById('root')
const root = ReactDOM.createRoot(domNode)
root.render(<App />)

function App() {
	return (
		<>
			<box>
				<main>
					<div class='titleMain'>
						<h2>Login</h2>
						<span>Enter your account details</span>
					</div>
					<div class='inputField'>
						<input type='text' name='Username' id='' placeholder='Username' />
						<input
							type='password'
							name='Password'
							id=''
							placeholder='Password'
						/>
						<span>Forgot Password?</span>
					</div>
					<button class='loginNow' type='submit'>
						Login Now
					</button>
					<div class='footerMain'>
						<span>Don't have an account?</span>
						<button class='signUp'>Sign Up</button>
					</div>
				</main>
				<div class='overBanner'>
					<h1>GAME</h1>
					<p>Unleash your imagination, game without limits!</p>
				</div>
				<div class='banner'>
					<img
						src='https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt=''
					/>
				</div>
			</box>
			<div class='background'></div>
		</>
	)
}
