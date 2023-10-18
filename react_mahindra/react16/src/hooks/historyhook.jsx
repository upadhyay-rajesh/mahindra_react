import { useHistory } from "react-router-dom";

 
function HistoryHook() {
  const history = useHistory();
 
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <>
      <button onClick={handleGoBack}>Go Back</button>
    </>
  );
}
 
export default HistoryHook;