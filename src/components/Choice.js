const Choice = ({ name, id, text }) => {
	return (
		<div className="input-container">
			<input type="radio" name={name} id={id} value={id} />
			<label htmlFor={id}>{text}</label>
		</div>
	)
}

export default Choice