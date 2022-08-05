import EmptyState from "./EmptyState";

export default function Show() {
  return (
    <main>
      <div className="container" >
        <div className="hasil-pencarian" >
          <h2>hasil pencarian : </h2>
          <div className="row my-3 hasil">
            <EmptyState></EmptyState>
          </div>
        </div>
      </div>
    </main>
  )
}