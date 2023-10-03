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
			{/* {definitions.map((def, index) => {
					// console.log(def)
					return (
						<div key={index}>
							<h3>{def.partOfSpeech}</h3>
							<p>{def.definitions[0].definition}</p>
							<p>{def.synonyms && def.synonyms.join[", "]}</p>
							<p>{def.antonyms && def.antonyms.join[", "]}</p>
							<p>{def.antonyms && def.antonyms.join[", "]}</p>
							<p>{def.example}</p>
						</div>
					)
				})} */}
		</div>
	)
}

export default Meaning
