import EmptyState from "./EmptyState";
import { useState } from "react";

export default function Show() {
  const [isInputEmpty, setEmptyState] = useState(true);
  return (
    <main>
      <div className="container" >
        <div className="hasil-pencarian" >
          <h2>hasil pencarian : </h2>
          <div className="row my-3 hasil">
            <EmptyState isInputEmpty="isInputEmpty" setEmptyState="setEmptyState" ></EmptyState>
          </div>
        </div>
      </div>
    </main>
  )
}