import Tags  from "./Tags"

const tags = ['All','Mixes','Javascript','Reactjs','Java','tech','Movies','Songs','Hip-Hop','Bollywood','Mollywood','Tollywood']

const ButtonList = () => {

  return (
    <div className="flex flex-row gap-2 items-center mt-4">
      {tags.map((tag,index)=>(
        <Tags key={index} tag={tag}/>
      ))}
      
    </div>
  )
}

export default ButtonList