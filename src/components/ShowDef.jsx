import Phonetic from "./Phonetic"
import Meaning from "./Meaning"
const ShowDef = ({ wordData }) => {
	return (
		console.log(wordData.meanings),
		(
			<div
				style={{
					margin: "2rem 5%",
				}}
				className="definationList"
			>
				<h3>{wordData.word}</h3>
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

				{/* <Meaning
					definitions={wordData.meanings}
					synonyms={wordData.synonyms}
					antonyms={wordData.antonyms}
				/> */}
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
