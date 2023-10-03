const Meaning = ({ definitions, synonyms, antonyms, meaning }) => {
	return (
		<div className="meaning">
			<h3>{meaning.partOfSpeech}</h3>
			{meaning.definitions.map((def, index) => {
				return (
					<>
						<p>{def.definition}</p>
						<p>
							{def.synonyms.length > 0 &&
								`Syonymns: ${def.synonyms.join(", ")}`}
						</p>
						<p>
							{def.antonyms.length > 0 &&
								`Antonymns: ${def.antonyms.join(", ")}`}
						</p>
					</>
				)
			})}
			<p>
				{meaning.synonyms.length > 0 &&
					`Syonymns: ${meaning.synonyms.join(", ")}`}
			</p>
			<p>
				{meaning.antonyms.length > 0 &&
					`Antonymns: ${meaning.antonyms.join(", ")}`}
			</p>
		</div>
	)
}

export default Meaning
