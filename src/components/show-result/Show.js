import EmptyState from "./EmptyState";
import Card from "./Card";

export default function Show({ isInputEmpty, result }) {
  return (
    <main>
      <div className="container" >
        <div className="hasil-pencarian" >
          <h2>hasil pencarian : </h2>
          <div className="row my-3 hasil">
            {isInputEmpty ?
              <EmptyState isInputEmpty={isInputEmpty} />
              :
              result.some(Boolean) == true ?
                result.map((kata) => (<Card key={kata} kata={kata}></Card>))
                :
                <EmptyState isInputEmpty={isInputEmpty} />}
          </div>
        </div>
      </div>
    </main>
  )
}