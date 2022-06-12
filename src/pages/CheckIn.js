import { useState } from "react"
import { NavLink } from "react-router-dom"
import '../css/CheckIn.css'
import Questions from "../questions.json"
import Question from "../components/Question"
import Bar from "../components/Bar"

const CheckIn = () => {
	const [count, setCount] = useState(0)
	const [finish, setFinish] = useState(false)

	function handleClick(e) {
		const val = parseInt(e.target.value)
		if(count === 0 && val === -1) { console.log(count)
			return
		} else if(count >= (Questions.length - 1)) { console.log(count)
			setFinish(true)
			console.log("finished")
		} else { console.log(count)
			setCount(oldCount => (oldCount + val))
		}
	}

	if(finish) {
		return (
			<main className="finished">
				<h2>You completed the check-in and earned <strong>20</strong> points!</h2>
				<div className="progress">
					<Bar fill={160/200} />
					<div className="desc">
						<strong>160 / 200 Points Unlocked!</strong>
					</div>
					<button><NavLink to="/">Return to Dashboard</NavLink></button>
				</div>
			</main>
		)
	}
	return (
		<main className="checkIn">
			<div className="progress-bar">
				{`Question ${count + 1} / ${Questions.length}`}
				<Bar fill={(count)/Questions.length} />
			</div>
			{count < Questions.length ? <Question id={Questions[count].id} question={Questions[count].question} choice={Questions[count].choice} /> : <div>no</div>}
			<div className="question-nav">
				<button className="back" value={-1} onClick={handleClick}>Back</button>
				<button className="next special" value={1} onClick={handleClick}>Next</button>
			</div>
		</main>
	)
}

export default CheckIn