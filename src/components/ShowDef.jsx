import Phonetic from "./Phonetic"
import Meaning from "./Meaning"
const ShowDef = ({ wordData }) => {
	return (
		console.log(wordData.meanings),
		(
			<div className="definitionList">
				<h2>{wordData.word}</h2>
				{wordData.phonetics.map((phonetic, index) => {
					return (
						<Phonetic
							key={index}
							text={phonetic.text}
							audio={phonetic.audio}
						/>
					)
				})}
				{wordData.meanings.map((meaning, index) => {
					return <Meaning key={index} meaning={meaning} />
				})}
				<p>
					{wordData.synonyms &&
						`Synonyms: ${wordData.synonyms.join[", "]}`}
				</p>
				<p>
					{wordData.synonyms &&
						`Antonyms: ${wordData.synonyms.join[", "]}`}
				</p>
			</div>
		)
	)
}

export default ShowDef
