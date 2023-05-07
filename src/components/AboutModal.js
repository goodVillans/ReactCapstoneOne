import { useEffect } from "react"
// component generates how the game of hangman works: accepts props define in app.js
function AboutModal(props) {
   useEffect(() => {
      function handleClick(e) {
         if(e.target.classList.contains("modal-overlay")) {
            props.onClose();
         }
      }
      document.addEventListener("click", handleClick);
      return () => {
         document.removeEventListener("click", handleClick);
      }
   }, [props]);

  return (
    <div className="Modal">
      <div className="Modal-overlay"></div>
         <div className="Modal-container">
            <div className="Modal-header">{props.header}</div>
            <div className="Modal-body">{props.body}</div>
            <div className="Modal-footer">{props.footer}</div>
            <button className="Modal-close" onClick={props.onClose}>
               Close
            </button>
         </div>
    </div>
  )
}

export default AboutModal
