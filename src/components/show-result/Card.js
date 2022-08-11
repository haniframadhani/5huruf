export default function Card({ kata }) {
  return (
    <div className="col-md-3 col-6 my-2 text-center">
      <div className="card">
        <div className="card-body kata">
          <p className="m-0">{kata}</p>
        </div>
      </div>
    </div>
  )
}