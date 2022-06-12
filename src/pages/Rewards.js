import '../css/Rewards.css'
import Bar from '../components/Bar'
import Starbucks from '../images/Starbucks.png'
import Amazon from '../images/Amazon.png'
import AMC from '../images/AMC.png'
import RedCross from '../images/Red Cross.png'

const Rewards = () => {
	return (
		<main className="rewards">
			<h1>Rewards</h1>
			<p>
				Check your total points earned and redeem them for points when you unlock all the points. Browse the rewards you can win.
			</p>
			<div className="progress">
				<Bar fill={160/200} />
				<div className="desc">
					<strong>160 / 200 Points Unlocked!</strong>
				</div>
				<button className='disabled'>Redeem Reward</button>
			</div>
			<div className="panels">
				<section className="activity card">
					<h2>Past Activity</h2>
					<div className="item">
						<small className="date">06/10/2022</small>
						<div className="desc">Earned <strong>40</strong> points</div>
					</div>
					<div className="item">
						<small className="date">05/27/2022</small>
						<div className="desc">Earned <strong>30</strong> points</div>
					</div>
					<div className="item">
						<small className="date">05/13/2022</small>
						<div className="desc">Earned <strong>35</strong> points</div>
					</div>
				</section>
				<section className="reward-items card">
					<h2>Optional Rewards</h2>
					<div>
						<div className="reward">
							<div className="desc">$5 Coupon</div>
							<div className='img-container'>
								<img src={Starbucks} alt="" />
							</div>
						</div>
						<div className="reward">
							<div className="desc">$5 Coupon</div>
							<div className='img-container'>
								<img src={Amazon} alt="" />
							</div>
						</div>
						<div className="reward">
							<div className="desc">$5 Coupon</div>
							<div className='img-container'>
								<img src={AMC} alt="" />
							</div>
						</div>
						<div className="reward">
							<div className="desc">$5 Donation</div>
							<div className='img-container'>
								<img src={RedCross} alt="" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Rewards