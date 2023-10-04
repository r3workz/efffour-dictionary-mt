import Phonetic from "./Phonetic"
import Meaning from "./Meaning"
const ShowDef = ({ wordData }) => {
	return (
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
			{wordData.synonyms && (
				<p>
					<span>Synonyms: </span>${wordData.synonyms.join(", ")}
				</p>
			)}
			{wordData.antonyms && (
				<p>
					<span>Antonymns: </span>${wordData.antonyms.join(", ")}
				</p>
			)}
		</div>
	)
}

export default ShowDef
