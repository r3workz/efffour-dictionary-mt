const Meaning = ({ definitions, synonyms, antonyms, meaning }) => {
	return (
		<div className="meaning">
			<h3>{meaning.partOfSpeech}</h3>
			{meaning.definitions.map((def, index) => {
				return (
					<>
						<p>{def.definition}</p>

						{def.synonyms.length > 0 && (
							<p>
								<span>Syonymns: </span>
								{def.synonyms.join(", ")}
							</p>
						)}

						{def.antonyms.length > 0 && (
							<p>
								<span>Antonymns: </span>$
								{def.antonyms.join(", ")}
							</p>
						)}
					</>
				)
			})}

			{meaning.synonyms.length > 0 && (
				<p>
					<span>Syonymns: </span>
					{meaning.synonyms.join(", ")}
				</p>
			)}

			{meaning.antonyms.length > 0 && (
				<p>
					<span>Antonymns: </span>${meaning.antonyms.join(", ")}
				</p>
			)}
		</div>
	)
}

export default Meaning
