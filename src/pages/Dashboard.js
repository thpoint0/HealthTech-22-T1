import '../css/Dashboard.css'
import MoodLog from '../images/Mood Log.png'

const Dashboard = () => {
	return (
		<main className="dashboard">
			<section id="welcome">
				<div className="card">
					<h1>Welcome, Gina M.</h1>
					<p>
						This is your personal patient portal. You can answer check-in questions, check your rewards, and track your mood activity.
					</p>
				</div>
			</section>
			<section>
				<h2>Answer questions to earn points</h2>
				<div className="card">
					<p>
						Get points for answering check-in questions! Once you earn enough, redeem your points for a reward.
					</p>
				</div>
				<button className='special'>get started</button>
			</section>
			<section>
				<h2>Rewards</h2>
				<div className="card">
					<p>
						Check your points and redeem them for rewards.
					</p>
				</div>
				<button className='special'>check points</button>
			</section>
			<section>
				<h2>Mood Log</h2>
				<div className="card img-container">
					<img src={MoodLog} alt="" />
				</div>
				<button className='special'>see log</button>
			</section>

		</main>
	)
}

export default Dashboard