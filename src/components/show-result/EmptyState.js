import Empty from './Empty';
import Searching from './Searching';
export default function EmptyState({ isInputEmpty }) {
  return (
    <div className="empty-state text-center">
      <h3 className="error-message">{isInputEmpty ? "kamu tidak mengisikan apapun" : "kata tidak ditemukan"}</h3>{isInputEmpty ? (<p>berikan sedikit petunjuk untuk dapat menemukan kata yang kamu cari</p>) : (<p>beritahu jika kata tersebut benar-benar ada beritahu <><a href='https://forms.gle/3ykaxYQXUcac3uM27' target='_blank' rel='noopener noreferer'>disini</a></></p>)}
      {isInputEmpty ? <Searching /> : <Empty />}
    </div >
  )
}