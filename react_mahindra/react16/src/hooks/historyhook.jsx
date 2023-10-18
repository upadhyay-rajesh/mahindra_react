import { useHistory } from "react-router-dom";

 
function HistoryHook(props) {
  const history = useHistory();
 
  const handleGoBack = () => {
    //history.goBack();
    props.history.go(-1);
  };
  return (
    <>
      <button onClick={handleGoBack}>Go Back</button>
    </>
  );
}
 
export default HistoryHook;