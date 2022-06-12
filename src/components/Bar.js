const Bar = ({ fill }) => {
	const newFill = `${fill * 100}%`
	
	return (
		<div className="bar">
			<div style={{width: newFill}}></div>
		</div>
	)
}

export default Bar