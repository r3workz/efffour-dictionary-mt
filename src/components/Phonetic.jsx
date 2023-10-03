const Phonetic = ({ text, audio }) => {
	return (
		<div className="phonetic">
			<p className="text">{text}</p>
			<audio controls>
				<source src={audio} type="audio/mpeg" />
			</audio>
		</div>
	)
}

export default Phonetic
