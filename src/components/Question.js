import { useState } from "react"
import Choice from "./Choice"

const Question = ({ id, question, choice }) => {

	const choices = choice.map(choice => {
		return <Choice key={choice.id} name={id} id={choice.id} text={choice.text} />
	})

	function handleChange(e) {
		console.log(e.target.value)
	}

	return (
		<section className="question">
			<h2>{question}</h2>
			<div onChange={handleChange}>
				{choices}
			</div>
		</section>
	)
}

export default Question